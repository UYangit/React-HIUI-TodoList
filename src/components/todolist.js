import React, { Component } from 'react';
import Todoitem from './todoitem';
// import logo from './logo.svg';
// import './App.css';

class Todolist extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var taskList=this.props.data.map(listItem=>
      <Todoitem taskId={listItem.id}
                key={listItem.id}
                task={listItem.task}
                complete={listItem.complete}
                completeItem={this.props.completeItem}
                deleteItem={this.props.deleteItem}/>
    )
    return (
      <ul>
        {taskList}
      </ul>
    );
  }
}

export default Todolist;