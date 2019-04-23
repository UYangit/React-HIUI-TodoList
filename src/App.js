import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Button } from '@hi-ui/hiui' //引入所需组件
import './App.css';
import Todolist from './components/todolist';
import Addtodoitem from './components/addtodoitem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "id": "1",
          "task": "做一个TodoList Demo",
          "complete": false
        }, {
          "id": "2",
          "task": "学习ES6",
          "complete": false
        }, {
          "id": "3",
          "task": "Hello React",
          "complete": true
        }, {
          "id": "4",
          "task": "找工作",
          "complete": false
        }
      ]
    }
  }
  handleAddTodoItem(task) {
    let newItem = {
      id: this.state.data.length+1,
      task,
      complete: false
    }
    let data = this.state.data
    data = data.concat([newItem])
    this.setState({data})
  }
  handleCompleteItem(taskId){
    console.log(taskId)
    let data = this.state.data;
    for (let item of data) {
      if (item.id === taskId) {
        item.complete = item.complete === true ? false : true
      }
    }
    this.setState({data})
    console.log(this.state.data)
  }
  handleDeleteItem(taskID){
    let data = this.state.data
    data = data.filter(task => task.id !== taskID)
    this.setState({data})
    console.log(this.state.data)
  }
  render() {
    return (
      <div className="App">
        <h1>ToDoList</h1>
        <Addtodoitem addNewItem={this.handleAddTodoItem.bind(this)}/>
        <Todolist data={this.state.data} completeItem={this.handleCompleteItem.bind(this)} deleteItem={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
