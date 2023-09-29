import React from "react";

import style from "../style/leftbox.css"
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div style={{ display:"inline",margin:'auto', }}>
      {/* Add input for bill */}
      <lable>Bill</lable>
      <br></br>
      <input defaultValue={0} type="number" onInput={(e) => {
        handleBill(+e.target.value)
      }} />
      {/* Add buttons for % of tip */}
      <div>
      <lable>Select Tip</lable>
      <br></br>
      <button onClick={() => {
        handleTip(5)
      }}>5%</button>
      <button onClick={() => {
        handleTip(10)
      }}>10%</button>
      <button onClick={() => {
        handleTip(15)
      }}>15%</button>
      <button onClick={() => {
        handleTip(25)
      }}>25%</button>
      <button onClick={() => {
        handleTip(50)
      }}>50%</button>
      <button>custom</button>
      </div>

      <label htmlFor="">Num of Person</label>
      <br></br>
      <input defaultValue={1} type="number"  onInput={(e) => {
        handlePeople(+e.target.value)
      }} />
      {/* Add input for no.of peoples */}
    </div>
  );
};

export default LeftBox;
