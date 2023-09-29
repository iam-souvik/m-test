import "./App.css";
import BillPage from "./Components/BillPage";
import LeftBox from "./Components/LeftBox";
const App = () => {
  return (
    <div className="container">
         {/* Add title here in h1 tag */}
         <h1 style={{textAlign:"center"}}>SPLI TTER</h1>


      <div>

        

        
        {/* Add BillPage component */}
        <BillPage/>
      </div>
    </div>
  );
};

export default App;
