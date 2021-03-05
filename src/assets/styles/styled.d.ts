// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      l: string;
      m: string;
      s: string;
    };

    colors: {
      white: string;
      darkGray: string;
      lightGrey: string;
      grey: string;
      black: string;
      success: string;
      error: string;
      warning: string;
    };
  }
}
