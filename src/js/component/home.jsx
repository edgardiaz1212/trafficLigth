import React, { useState } from "react";

const Semaforo = () => {
  const [selectColor, setSelectColor] = useState("red");
  return (
    <>
      <div className="thin bg-dark ">1</div>

      <div className="trafficLight d-inline-block bg-dark p-2 rounded">
        <div
          className={`light red rounded-circle bg-danger m-1 ${
            selectColor === "red" ? "glow" : ""
          }`}
          onClick={() => setSelectColor("red")}
        >
          
        </div>
        <div
          className={`light yellow rounded-circle bg-warning m-1 ${
            selectColor === "yellow" ? "glow" : ""
          }`}
          onClick={() => setSelectColor("yellow")}
        >
          
        </div>
        <div
          className={`light green rounded-circle bg-success m-1 ${
            selectColor === "green" ? "glow" : ""
          }`}
          onClick={() => setSelectColor("green")}
        >
          
        </div>
      </div>
    </>
  );
};
export default Semaforo;
