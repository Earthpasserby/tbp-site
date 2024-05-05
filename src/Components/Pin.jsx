import React from "react";

const styles = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    backgroundImage: "url('./lap.png')",
    borderRadius: "16px",
  },
  small: { gridRowEnd: "span 22" },
  medium: { gridRowEnd: "span 29" },
  large: { gridRowEnd: "span 35" },
};
const tyles = {
  pin: {
    margin: "15px 10px",
    padding: 0,
    backgroundImage: "url('./lp.png')",
    borderRadius: "16px",
  },
  small: { gridRowEnd: "span 26" },
  medium: { gridRowEnd: "span 33" },
  large: { gridRowEnd: "span 45" },
};

function Pin(props) {
  return (
    <>
      <div style={{ ...styles.pin, ...styles[props.size] }}></div>
      <div style={{ ...tyles.pin, ...tyles[props.size] }}></div>
    </>
  );

}
export default Pin;
