
import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [value , setValue] = useState('');

  const Handler = (e)=>{
    setValue(value + e.target.value);
  }

  const calc = () => {
    try {
      setValue(String(evaluate(value)));
    } catch (error) {
      alert('Invalid expression');
    }
  }

  return (
  <div className='container'>
    <div className='calculater'>
      <form action=''>
        <div className='display'>
        <input type='text' value={value} readOnly />
        </div>
        <div>
          <input type='button' value='AC' onClick={e => setValue('')}></input>
          <input type='button' value='DE' onClick={e => setValue(value.slice(0,-1))}></input>
          <input type='button' value='.'  onClick={Handler}></input>
          <input type='button' value='/'  onClick={Handler}></input>
        </div>

        <div>
          <input type='button' value='7' onClick={Handler}></input>
          <input type='button' value='8' onClick={Handler}></input>
          <input type='button' value='9' onClick={Handler}></input>
          <input type='button' value='*' onClick={Handler}></input>
        </div>

        <div>
          <input type='button' value='4' onClick={Handler}></input>
          <input type='button' value='5' onClick={Handler}></input>
          <input type='button' value='6' onClick={Handler}></input>
          <input type='button' value='+' onClick={Handler}></input>
        </div>

        <div>
          <input type='button' value='1' onClick={Handler}></input>
          <input type='button' value='2' onClick={Handler}></input>
          <input type='button' value='3' onClick={Handler}></input>
          <input type='button' value='-' onClick={Handler}></input>
        </div>

        <div>
          <input type='button' value='00'onClick={Handler}></input>
          <input type='button' value='0' onClick={Handler}></input>
          <input type='button' value='=' className='equal' onClick={calc}></input>
        </div>

      </form>
    </div>
  </div>
  );
}

export default App;
