import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch
} from "@stencil/core";

@Component({
  tag: "category-widget",
  styleUrl: "category-widget.css"
})
export class CategoryWidget {
  @Prop() cardTitle: string = "Title";
  @Prop() cardSubtitle: string = "Subtitle";

  @Prop() categories: any;
  @Prop() maximum: number;

  @State() allCategories: Array<any> = [];
  @State() selectedCategories: Array<any> = [];
  @State() isFiltered: boolean = false;

  @Event() categorySelected: EventEmitter;
  @Event() applyFilters: EventEmitter;
  @Event() clearFilters: EventEmitter;

  @Watch("categories")
  refreshCategories(newCategories) {
    if (!newCategories) return;

    this.allCategories = newCategories.sort((catA, catB) => {
      return catA.value < catB.value;
    });
  }


  render() {
    return (
      <carto-card>
        <h4 slot="title">{this.cardTitle}</h4>
        <span slot="description">{this.cardSubtitle}</span>
        <div slot="content" class="categories">
          <button onClick={() => this.isFiltered ? this.emitClearFilters() : this.emitApplyFilters()}>
            { this.isFiltered ? 'Clear filters' : 'Apply filters' }
          </button>
          {this.renderCategories()}
        </div>
      </carto-card>
    );
  }

  componentWillLoad() {
    this.refreshCategories(this.categories);
  }

  renderCategories() {
    const categories = this.allCategories.map(category => {
      const categoryPercentage = category.value * 100.0 / this.maximum;
      const selected = this.isCategorySelected(category);

      return (
        <li
          class={'category' + (category.group ? ' disabled' : '')}
          onClick={() => this.categoryClick(category)}>
          <label>
            <span>{category.name}</span>
            <div class="category-value">{category.value}</div>
          </label>

          <div class="category-bar">
            { !category.group ?
              <div
                class={'category-progress' + (selected ? ' category-progress--selected' : '')}
                style={{ width: `${categoryPercentage}%` }}
              /> : '' }
          </div>
        </li>
      );
    });

    return <ul class="categories">{categories}</ul>;
  }

  emitApplyFilters() {
    this.isFiltered = true;
    this.applyFilters.emit({ selected: this.selectedCategories });
  }

  emitClearFilters() {
    this.isFiltered = false;
    this.clearFilters.emit();
  }

  isCategorySelected(category) {
    return this.selectedCategories.indexOf(category) > -1;
  }

  categoryClick(category) {
    if (this.isCategorySelected(category)) {
      this.selectedCategories = this.removeCategory(category);
    } else {
      this.selectedCategories = this.selectCategory(category);
    }

    this.categorySelected.emit({
      selected: this.selectedCategories,
      all: this.allCategories
    });
  }

  selectCategory(category) {
    category.selected = true;

    return [...this.selectedCategories, category];
  }

  removeCategory(categoryToRemove) {
    categoryToRemove.selected = false;
    const allCategories = [...this.selectedCategories];

    return allCategories.filter(category => category !== categoryToRemove);
  }

  clearSelectedCategories() {
    this.selectedCategories = [];
  }
}
