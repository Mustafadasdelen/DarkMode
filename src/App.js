import logo from './logo.svg';
import './App.css';


function App() {

  const btn =(event) => {

      if(event.target.innerText == "Karanlık Mod"){
          var element = document.body;
          element.classList.toggle('dark-mode');
          event.target.innerText = "Aydınlık Mod"
      }
      else if(event.target.innerText == "Aydınlık Mod"){
          var element = document.body;
          element.classList.toggle('dark-mode');
          event.target.innerText = "Karanlık Mod"
      }
  
  }
  return (

    <div className="App">
      <button id='krnlk-mod' onClick={btn}>Karanlık Mod</button>
    </div>
  );
}


export default App;
