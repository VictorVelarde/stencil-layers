/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CartoCard {
      'cardSubtitle': string;
      'cardTitle': string;
    }
  }

  interface HTMLCartoCardElement extends StencilComponents.CartoCard, HTMLStencilElement {}

  var HTMLCartoCardElement: {
    prototype: HTMLCartoCardElement;
    new (): HTMLCartoCardElement;
  };
  interface HTMLElementTagNameMap {
    'carto-card': HTMLCartoCardElement;
  }
  interface ElementTagNameMap {
    'carto-card': HTMLCartoCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'carto-card': JSXElements.CartoCardAttributes;
    }
  }
  namespace JSXElements {
    export interface CartoCardAttributes extends HTMLAttributes {
      'cardSubtitle'?: string;
      'cardTitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CartoLayers {
      'cardSubtitle': string;
      'cardTitle': string;
      'layers': Array<any>;
    }
  }

  interface HTMLCartoLayersElement extends StencilComponents.CartoLayers, HTMLStencilElement {}

  var HTMLCartoLayersElement: {
    prototype: HTMLCartoLayersElement;
    new (): HTMLCartoLayersElement;
  };
  interface HTMLElementTagNameMap {
    'carto-layers': HTMLCartoLayersElement;
  }
  interface ElementTagNameMap {
    'carto-layers': HTMLCartoLayersElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'carto-layers': JSXElements.CartoLayersAttributes;
    }
  }
  namespace JSXElements {
    export interface CartoLayersAttributes extends HTMLAttributes {
      'cardSubtitle'?: string;
      'cardTitle'?: string;
      'layers'?: Array<any>;
      'onLayerSelectionChanged'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CategoryWidget {
      'cardSubtitle': string;
      'cardTitle': string;
      'categories': any;
      'maximum': number;
    }
  }

  interface HTMLCategoryWidgetElement extends StencilComponents.CategoryWidget, HTMLStencilElement {}

  var HTMLCategoryWidgetElement: {
    prototype: HTMLCategoryWidgetElement;
    new (): HTMLCategoryWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'category-widget': HTMLCategoryWidgetElement;
  }
  interface ElementTagNameMap {
    'category-widget': HTMLCategoryWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'category-widget': JSXElements.CategoryWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface CategoryWidgetAttributes extends HTMLAttributes {
      'cardSubtitle'?: string;
      'cardTitle'?: string;
      'categories'?: any;
      'maximum'?: number;
      'onCategorySelected'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;