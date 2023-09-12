import ufak from './ufak.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Getting to know Ufak</h1>

      <div className='intro'>
        <img src={ufak} className='Ufak-image' alt="" />
        <p>I'm Ufak, a front-end web developer, based in Lagos, Nigeria. My main job role, goal and passion is to solve problems and help bring ideas to reality through the web. I enjoy helping people and love collaborating with fellow developers to work on several projects. I value teamwork, easy to use content structure and thoughtful interactions.</p>
      </div>
        
    </div>
  );
}

export default App;
