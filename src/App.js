import React, { useState } from 'react';
import { addressInput } from './actions';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import AddTodo from './todoApp/AddTodo'
import TodoList from './todoApp/TodoList'
import Dropdown from './Dropdown';


function App() {
  const options = [
    { value: 'green', label: "Green"},
    { value: 'red', label: "Red"},
    { value: 'yellow', label: "Yellow"},
    { value: 'blue', label: "Blue"},
  ]

  const data = useSelector(store => store.address)
  const dispatch = useDispatch()

  const [address, setAddress] = useState('')

  const handleChange = (e) => {
    setAddress(e.target.value)
  }

  const handleClick = () => {
    dispatch(addressInput(address))
    setAddress('')
  }

  return (
    <div className="App">
      <section className='input'>
        <h1>Hello {data}</h1>
        <input className='input-form'
        placeholder='Nhap dia chi'
        onChange={handleChange}
        value={address}
        />
        <button onClick={handleClick}>Submit</button>
      </section>
      <section className='todo-app'>
        <h1 className='app-title'>My Tasks</h1>
        <AddTodo />
        <TodoList />
      </section>
      <section className='dropdown-app'>
        <Dropdown options={options} placeHolder='Select ...' />
      </section>
    </div>
  );
}

export default App;
