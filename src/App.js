import logo from './logo.svg';
import './App.css';
import Add from './component/Add/Add'
import Sub from './component/Sub/Sub'

function App() {
  return (
    <div className='main-div'>
      <div className='section1'>
        <Add a='252' b='396'/>
      </div>
      <div className='section2'>
        <Sub a='2203' b='352'/>
      </div>
    </div>
  );
}

export default App;
