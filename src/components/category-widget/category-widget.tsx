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
  @Prop() categories: any;
  @Prop() maximum: number;
  @Prop() title: string = "Categories";
  @Prop() subtitle: string = "A widget for categories";

  @State() allCategories: Array<any> = [];
  @State() selectedCategories: Array<any> = [];

  @Watch("categories")
  refreshCategories(newCategories) {
    if (!newCategories) return;

    // this.allCategories = JSON.parse(newCategories).sort((catA, catB) => {
    //   return catA.value < catB.value;
    // });
    this.allCategories = newCategories.sort((catA, catB) => {
      return catA.value < catB.value;
    });
  }

  @Event() categorySelected: EventEmitter;

  render() {
    return (
      <div class="carto-card">
        <h1 class="carto-card-header">{this.title}</h1>
        <p>{this.subtitle}</p>

        <div class="categories">{this.renderCategories()}</div>
      </div>
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
        <li class="category" onClick={() => this.categoryClick(category)}>
          <label>
            <span>{category.name}</span>
            <div class="category-value">{category.value}</div>
          </label>

          <div class="category-bar">
            {selected ? (
              <div
                class="category-progress"
                style={{ width: `${categoryPercentage}%` }}
              />
            ) : (
              ""
            )}
          </div>
        </li>
      );
    });

    return <ul class="categories">{categories}</ul>;
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
