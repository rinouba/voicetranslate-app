import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Right from "./Right/Right";
import Footer from "./Footer/Footer"

function App() {
  return (
      <div className="big-div">
        <div class="grid-container">
            <div class="item2 position-relative">
            <Navbar/>
            </div>
            <div class="item3">
              <Main/>
            </div>  
            <div class="item4 position-relative">
              <Right/>
            </div>
            <div class="item5 position-relative">
              <Footer/>
            </div>
        </div>
      </div>
  );
}

export default App;
