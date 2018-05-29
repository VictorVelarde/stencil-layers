import { Component, Prop } from "@stencil/core";
import { Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "carto-layers",
  styleUrl: "carto-layers.css",
  shadow: true
})
export class CartoLayers {
  @Prop() cardTitle: string = "Title";
  @Prop() cardSubtitle: string = "Subtitle";

  @Prop() layers: Array<any> = [];
  @Event() layerSelectionChanged: EventEmitter;

  render() {
    return (
      <carto-card>
        <h1 class="carto-card-header" slot="title">
          {this.cardTitle}
        </h1>
        <p slot="description">{this.cardSubtitle}</p>
        <div slot="content" class="carto-layers-list">
          {this.renderLayerList()}
        </div>
      </carto-card>
    );
  }

  renderLayerList() {
    const layers = this.layers.map(layer => (
      <li>
        <input
          type="checkbox"
          onClick={event => this.handleLayerSelection(event, layer)}
        />
        <label>{layer.getLayerName()}</label>
      </li>
    ));
    return <ul>{layers}</ul>;
  }

  handleLayerSelection(event, layer) {
    var selected = event.target.checked;
    this.layerSelectionChanged.emit({ layer, selected });
  }
}
