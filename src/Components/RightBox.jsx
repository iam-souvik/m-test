import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {

const handleReset = () => {
  handleBill(0);
  handlePeople(1);
  handleTip(15)
}

  return <div style={{}}>
    {/* Add tip Amount and total here */}
    <div style={{display:"flex", gap:"20px" , }}>
      <label >Tip Amount</label>
      <h3>{tipAmount}</h3>
    
      <label >Total</label>
     <h3>{total}</h3>
    </div>


    {/* Add button to RESET */}

    <div style={{marginLeft:"190px" , marginTop:"30px"}}>
    <button onClick={handleReset}>Reset</button>
    </div>
  </div>;
};

export default RightBox;
