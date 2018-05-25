import { TestWindow } from "@stencil/core/testing";
import { CartoLayers } from "./carto-layers";

describe("carto-layers", () => {
  it("should build", () => {
    expect(new CartoLayers()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLCartoLayersElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CartoLayers],
        html: "<carto-layers numberLayers='3'></carto-layers>"
      });
    });

    it("should work without parameters", () => {
      expect(element.textContent.trim()).toEqual(
        "Hello, I'm a carto-layers control. I'll show you a box with 0 layers"
      );
    });
  });
});
