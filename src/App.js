import './App.css';
import logo from "./components/imageInSrc.jpg"

function App() {
  return (
    <div className="App">
      

<div style={{border: 'solid 1px black', maxWidth: '100vw'}}>


<h1 className="title red">Your name here</h1>


<img className="pub2" src={logo}/>  


          
<img className="pub" src="/imageInPublic.jpg" /> </div>

 

     
    </div>
    
    

  );
}

export default App;
