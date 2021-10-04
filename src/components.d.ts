/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface GoogleTagManager {
    /**
     * The google tag manage container ID
     */
    containerId: string;
  }
  interface HeroComponent {
    background: string;
    heading: string;
    height: string;
    imgurl: string;
    width: string;
  }
  interface ImageComponent {
    srcImg: string;
    srcImgName: string;
    srcNextGen: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color: string;
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
}
declare global {
  interface HTMLGoogleTagManagerElement extends Components.GoogleTagManager, HTMLStencilElement {}
  var HTMLGoogleTagManagerElement: {
    prototype: HTMLGoogleTagManagerElement;
    new (): HTMLGoogleTagManagerElement;
  };
  interface HTMLHeroComponentElement extends Components.HeroComponent, HTMLStencilElement {}
  var HTMLHeroComponentElement: {
    prototype: HTMLHeroComponentElement;
    new (): HTMLHeroComponentElement;
  };
  interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {}
  var HTMLImageComponentElement: {
    prototype: HTMLImageComponentElement;
    new (): HTMLImageComponentElement;
  };
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'google-tag-manager': HTMLGoogleTagManagerElement;
    'hero-component': HTMLHeroComponentElement;
    'image-component': HTMLImageComponentElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare namespace LocalJSX {
  interface GoogleTagManager {
    /**
     * The google tag manage container ID
     */
    containerId?: string;
  }
  interface HeroComponent {
    background?: string;
    heading?: string;
    height?: string;
    imgurl?: string;
    width?: string;
  }
  interface ImageComponent {
    srcImg?: string;
    srcImgName?: string;
    srcNextGen?: string;
  }
  interface MyComponent {
    /**
     * The text color
     */
    color?: string;
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }
  interface IntrinsicElements {
    'google-tag-manager': GoogleTagManager;
    'hero-component': HeroComponent;
    'image-component': ImageComponent;
    'my-component': MyComponent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'google-tag-manager': LocalJSX.GoogleTagManager & JSXBase.HTMLAttributes<HTMLGoogleTagManagerElement>;
      'hero-component': LocalJSX.HeroComponent & JSXBase.HTMLAttributes<HTMLHeroComponentElement>;
      'image-component': LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
