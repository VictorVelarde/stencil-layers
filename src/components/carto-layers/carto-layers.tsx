import { Component, Prop } from "@stencil/core";
import { Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "carto-layers",
  styleUrl: "carto-layers.css",
  shadow: true
})
export class CartoLayers {
  @Prop() title: string = "Title";
  @Prop() subtitle: string = "Subtitle";

  @Prop() layers: Array<any> = [];
  @Event() layerSelectionChanged: EventEmitter;

  render() {
    return (
      <carto-card title={this.title} subtitle={this.subtitle}>
        <div class="carto-layers-list">{this.renderLayerList()}</div>
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
