import { Component, Prop } from "@stencil/core";

@Component({
  tag: "carto-card",
  styleUrl: "carto-card.css",
  shadow: false
})
export class CartoCard {
  @Prop() cardTitle: string = "Card";
  @Prop() cardSubtitle: string = "Card Subtitle";

  render() {
    return (
      <div class="carto-card">
        <slot name="title" />
        <slot name="description" />
        <slot name="content">{/* Card Content */}</slot>
      </div>
    );
  }
}
