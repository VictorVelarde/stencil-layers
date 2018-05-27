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
        html: "<carto-layers></carto-layers>"
      });
    });

    it("it should have a default title", () => {
      expect(element.textContent.trim()).toEqual("Layer selector");
    });
  });
});
