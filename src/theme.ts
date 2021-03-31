export type Theme = {
  red: string;
  black: string;
  grey: string;
  lightGrey: string;
  backgroundDark: string;
  background: string;
  white: string;
  boxShadow: string;
  breakPointSm: number;
  breakPointMd: number;
  breakPointLg: number;
  breakPointXl: number;
};

const theme: Theme = {
  red: "#f44336",
  black: "#000",
  grey: "#777",
  lightGrey: "#aaa",
  backgroundDark: "#dfe2e8",
  background: "#f5f7fa",
  white: "#fff",
  boxShadow: "2px 2px 15px 0px rgba(0, 0, 0, 0.25)",
  breakPointSm: 576,
  breakPointMd: 768,
  breakPointLg: 992,
  breakPointXl: 1200,
};

export default theme;
