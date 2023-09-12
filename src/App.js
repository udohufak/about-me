import ufak from './ufak.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Getting to know Ufak</h1>
      <div className='main-div'>
      <div className='about-con'>
        <div className='Image-con'>
          <img src={ufak} className='Ufak-image' alt="" />
        </div>
      </div>
      
        
        <p>Hi my name is Ufak</p>
      </div>
    </div>
  );
}

export default App;
