import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './slice';
import { useState } from 'react';

function App() {
  const money = useSelector(function(state){
    return state.money.money;
  });
  const [depo,setDepo] = useState();
  const [wd,setWd] = useState();
  const dispatch = useDispatch();
  function intoDeposit(){
    dispatch(deposit(
      depo
    ));
  }
  function intoWithdraw(){
    dispatch(withdraw(
      wd
    ));
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-2xl'>Balance :</h1>
      <p className='text-xl'>${money}</p>
      <br></br>
      <h1 className='text-2xl'>Deposit</h1>
      <input onChange={function(e){
        setDepo(e.target.value);
      }} placeholder='input deposit here...' className='m-3' type="number"></input>
      <button onClick={intoDeposit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Deposit</button>
      <br></br>
      <h1 className='text-2xl'>Withdraw</h1>
      <input onChange={function(e){
        setWd(e.target.value);
      }} placeholder='input withdraw here...' className='m-3' type="number"></input>
      <button onClick={intoWithdraw} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Withdraw</button>
    </div>
  );
}

export default App;
