import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "category-widget",
  styleUrl: "category-widget.css"
})
export class CategoryWidget {
  @Prop({ mutable: true })
  categories: any;
  @State() selectedCategories: Array<any> = [];
  @Prop() maximum: number;

  @Event() categorySelected: EventEmitter;

  render() {
    return (
      <div class="carto-card">
        <h1 class="carto-card-header">Category Widget</h1>
        <h2>All selected</h2>

        <div class="categories">{this.renderCategories()}</div>
      </div>
    );
  }

  componentWillLoad() {
    this.categories = JSON.parse(this.categories).sort((catA, catB) => {
      return catA.value < catB.value;
    });
  }

  renderCategories() {
    const categories = this.categories.map(category => {
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
      return;
    }

    this.selectedCategories = this.selectCategory(category);
  }

  selectCategory(category) {
    return [...this.selectedCategories, category];
  }

  removeCategory(categoryToRemove) {
    const allCategories = [...this.selectedCategories];

    return allCategories.filter(category => category !== categoryToRemove);
  }

  clearSelectedCategories() {
    this.selectedCategories = [];
  }
}
