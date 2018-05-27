import { Component, Prop } from "@stencil/core";
import { Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "carto-layers",
  styleUrl: "carto-layers.css",
  shadow: true
})
export class CartoLayers {
  @Prop() layers: Array<any> = [];
  @Prop() componentTitle: string = `Layer selector`;
  @Prop() getLayerName: string;

  @Event() layerSelectionChanged: EventEmitter;

  render() {
    return (
      <div class="carto-layers-content">
        <div class="carto-layers-header">{this.renderHeader()}</div>
        <div class="carto-layers-list">{this.renderLayerList()}</div>
      </div>
    );
  }

  renderHeader() {
    return <div>{this.componentTitle}</div>;
  }

  renderLayerList() {
    const layers = this.layers.map(layer => (
      <li>
        <input
          type="checkbox"
          onClick={event => this.handleLayerSelection(event, layer)}
        />
        <label>{layer[this.getLayerName]()}</label>
      </li>
    ));
    return <ul>{layers}</ul>;
  }

  handleLayerSelection(event, layer) {
    var selected = event.target.checked;
    this.layerSelectionChanged.emit({ layer, selected });
  }

  componentWillLoad() {
    console.log(`will load with these layers: `, this.layers);
  }

  componentDidLoad() {
    console.log("did load");
  }

  componentWillUpdate() {
    console.log("will upcdate");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentDidUnload() {
    console.log("was unloaded");
  }
}
