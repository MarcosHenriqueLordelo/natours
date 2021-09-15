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
      };
    };
  }
}
