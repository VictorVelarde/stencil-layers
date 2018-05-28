import { Component, Prop, Method, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "category-widget",
  styleUrl: "category-widget.css"
})
export class CategoryWidget {
  @Prop({ mutable: true })
  categories: any;
  // @Prop() selectedCategories: Array<any> = [];
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
    this.categories = JSON.parse(this.categories);
  }

  renderCategories() {
    const categories = this.categories.map(category => {
      const categoryPercentage = category.value * 100.0 / this.maximum;
      return (
        <li class="category">
          <label>
            <span>{category.name}</span>
            <div class="category-value">{category.value}</div>
          </label>

          <div class="category-bar">
            <div
              class="category-progress"
              style={{ width: `${categoryPercentage}%` }}
            />
          </div>
        </li>
      );
    });

    return <ul class="categories">{categories}</ul>;
  }

  @Method()
  selectCategory() {}
}
