import { Component, Prop } from "@stencil/core";

@Component({
  tag: "carto-layers",
  styleUrl: "carto-layers.css",
  shadow: true
})
export class CartoLayers {
  @Prop() layers: Array<any> = [];
  @Prop() getLayerName: string;

  render() {
    return (
      <div class="layers-box">
        Hello, I'm a carto-layers control. I'll show you a box with{" "}
        {this.layers.length} layers
        {this.renderLayerList()}
      </div>
    );
  }

  renderLayerList() {
    const layers = this.layers.map(layer => (
      <li>{layer[this.getLayerName]()}</li>
    ));
    return <ul>{layers}</ul>;
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
