import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';

function App() {

  const [value, setValue] = useState('');
  const [lists, setLists] = useState([]);

  const addTask = () => {
        let data = {
            task: value
        }
        axios.post('http://localhost:3000/tasks', (data)) 
        .then((response) => {
            console.log(response)
          })
        .then(() => {
          getTask()
        })
        setValue('') 
          
  }
    
  const getTask = () => {
        axios.get('http://localhost:3000/tasks')
        .then((response) => {
            console.log(response)
        setLists(response.data);
      })
    }

    useEffect(() => {
       getTask()
  }, [])


  const deleteTask = (id) => {
        axios.delete('http://localhost:3000/tasks/' + id)
        .then (() => {
          getTask()
        })
  }
  
  return (
    <div className="App">
        <div className="h1">
            <h1>To Do List</h1>
        </div>
        <div className="task-input">
            <input 
              type="text" 
              id="input" 
              placeholder="Title..." 
              value={value} 
              onChange={
                (e) => {setValue(e.target.value)} }
              />
            <button 
              type="button" 
              className="addBtn" 
              onClick={() => value === '' ? alert('You must write something!') : addTask()}>
               Add
            </button>
         </div>
     <ToDoTasks lists={lists} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
