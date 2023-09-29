import { useState,useEffect } from 'react';
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBill = (n) => {
    if (typeof n !== "number") return;
    setBill(n);
  }

  const handlePeople = (n) => {
    if (typeof n !== "number") return;
    setPeople(n);
  }

  const handleTip = (n) => {
    if (typeof n !== "number") return;
    setTip(n);
  }

  useEffect(() => {
    let tipAmnt = tipAmount;
    tipAmnt = (+bill * (+tip / 100));
    setTotal((+bill / +people) + (+tipAmnt / +people));
    setTipAmount(tipAmnt / +people);
  }, [people, tip, bill])

  return (
    <div className="billbox" style={{ display: "flex", gap: "4px", padding: "20px", marginTop: "30px" }} >
      {/* Add LeftBox and RightBox component here */}
      <LeftBox bill={bill} people={people} handleBill={handleBill} handleTip={handleTip} handlePeople={handlePeople} />
      <RightBox bill={bill} tip={tip} tipAmount={tipAmount} total={total} people={people} handleBill={handleBill} handleTip={handleTip} handlePeople={handlePeople} />

    </div>
  );
};

export default BillPage;
