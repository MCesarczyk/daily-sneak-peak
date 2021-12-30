const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const lightMode = {
  color: {
      primary: "#252525",
      secondary: "#6E7E91",
      background: "#FBFBFE",
      secondaryBackground: "#FFF",
      elementText: "#FFF",
      elementColor: "#0366D6",
      elementBorder: "#D1D5DA",
      shadow: "#090A33",
      muted: '#F5F5F5',
  },
  border: "6px solid rgba(209, 213, 218, 0.3)",
  shadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  breakpoints,
};

export const darkMode = {
  color: {
      primary: "#FFF",
      secondary: "#FFF",
      background: "#252525",
      secondaryBackground: "#363636",
      elementText: "#FFF",
      elementColor: "#2188FF",
      elementBorder: "#D1D5DA",
      shadow: "#090A33",
      muted: '#F5F5F5',
  },
  border: "6px solid rgba(209, 213, 218, 0.1)",
  shadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  breakpoints,
}