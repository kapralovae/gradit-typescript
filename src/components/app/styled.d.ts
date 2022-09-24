import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
        mini: string;
        base: string;
        upperbase: string;
        semibase:string;
        semilarge: string;
        formsHeading: string
        large: string;
        small: string;
        medium: string;
    },
    color: {
        whisper: string;
        whisper2: string;
        nero:string;
        nero2:string;
        white: string;
        black: string;
        tangerine: string;
        carrotOrange: string;
        whiteSmoke: string;
        eclipse: string;
        pinkSwan: string;
        gray: string;
        darkerGray: string;
    }
  }
}
