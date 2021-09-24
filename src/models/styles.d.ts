import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      main: {
        lightGreen: string;
        mediumGreen: string;
        darkGreen: string;
        lightOrange: string;
        darkOrange: string;
        lightBlue: string;
        darkBlue: string;
      };
      font: {
        placeholder: string;
        light: string;
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
