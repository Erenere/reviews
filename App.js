import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {

  return (
    <div className="App">
      <div className="hc">
        <h1 className="header">Reviews</h1>
      </div>      
      <div className="Rws">     
        <Review ></Review>
      </div>
    </div>
  );
}

export default App;
// img={current[0].image} name={current[0].name} job={current[0].job} text={current[0].text}