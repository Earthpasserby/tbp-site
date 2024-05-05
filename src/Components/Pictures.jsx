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
          <img src="/./lap.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./boc1.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./cadd.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./cadd.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./bag1.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./boc5.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./cadg.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./cadn.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./booc.png" alt="nice pictu" />
        </div>
        <div className="box">
          <img src="/./cadh.png" alt="nice pictu" />
        </div>
      </div>
    </>
  );
}
export default Pictures;
