import React, {useEffect} from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css'


const BASE_URL = 'https://api.exchangeratesapi.io/latest'

const App = () => {
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <>
    <h1>Currency</h1>
    <CurrencyRow/>
    <div className='equals'>=</div>
    <CurrencyRow/>
    </>
  );
}

export default App;
