import './App.css';
import ImageContainer from './components/ImageContainer';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='title'> Galleri Selsøyvold</h1>
        <span id='medialinks'>
          <SocialMediaLinks/>
        </span>
        
      </header>
      <div className="Gallery">
        <ImageContainer title='Bordpynt' url='images/bilde1.JPG' photographer='Jørgen Selsøyvold'/>
        <ImageContainer title='Nissefamilie' url='images/bilde2.JPG' photographer='Jørgen Selsøyvold'/>
        <ImageContainer title='Flukt' url='images/bilde3.jpg' photographer='Harry Selsøyvold'/>
        <ImageContainer title='Blomst' url='images/bilde4.jpg' photographer='Harry Selsøyvold'/>
        <ImageContainer title='Adios' url='images/bilde5.jpg' photographer='Harry Selsøyvold'/>
        <ImageContainer title='Statsraad' url='images/bilde6.jpg' photographer='Harry Selsøyvold'/>
      </div>
    </div>
  );
}

export default App;
