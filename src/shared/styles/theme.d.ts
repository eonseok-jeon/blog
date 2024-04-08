import '@emotion/react';

declare module '@emotion/react' {
  export interface LightTheme {
    text: string;
    background: string;
    buttonText: string;
    buttonTextHover: string;
    buttonBorder: string;
    buttonBg: string;
    buttonBgHover: string;
  }

  export interface DarkTheme {
    text: string;
    background: string;
    buttonText: string;
    buttonTextHover: string;
    buttonBorder: string;
    buttonBg: string;
    buttonBgHover: string;
  }
}
