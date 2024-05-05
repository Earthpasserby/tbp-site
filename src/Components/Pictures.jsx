import React from "react";

import Pin from "./Pin";

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    backgroundColor: "black",
    postion: "absolute",
    left: "50%",
    transform: "translateY(-4%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 290px)",
    gridAutoRows: "10px",

    justifyContent: "center",
  },
};

function Pictures() {
  return (
    <>
      {/* <div style={styles.pin_container}>
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
      </div> */}

      <div className="Kontainer">
        <div className="box">
          <img src="/./f1.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f2.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f3.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f4.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f1.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f6.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f7.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f6.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f7.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f10.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f10.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f1.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f6.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./f10.png" alt="nice pictu" />
        </div>
      </div>
    </>
  );
}
export default Pictures;
