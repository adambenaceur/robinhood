import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats'



function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className='app__header'></div>
        <Header/>
      {/* Body */}
      <div className='app__body'>

        <div className='app__container'>
          <Newsfeed className='newsfeed'/>
          <Stats className='stats'/>
        </div>

      </div>
    </div>
  );
}

export default App;
