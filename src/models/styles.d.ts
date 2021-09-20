import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      lightGreen: string;
      mediumGreen: string;
      darkGreen: string;
      font: {
        main: string;
        white: string;
      };
      background: {
        about: string;
      };
    };

    fonts: {
      sizes: {
        small: string;
        medium: string;
        larger: string;
      };
    };
  }
}
