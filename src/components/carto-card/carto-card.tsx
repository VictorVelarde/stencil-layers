import { Component, Prop } from "@stencil/core";

@Component({
  tag: "carto-card",
  styleUrl: "carto-card.css",
  shadow: false
})
export class CartoCard {
  @Prop() title: string = "Card";
  @Prop() subtitle: string = "Card Subtitle";

  render() {
    return (
      <div class="carto-card">
        <h1 class="carto-card-header">{this.title}</h1>
        <p>{this.subtitle}</p>
        <slot>{/* Card Content */}</slot>
      </div>
    );
  }
}
