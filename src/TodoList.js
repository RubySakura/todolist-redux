import React, { Component } from 'react';
import store from './store/';
import { getInputChangeAciton, getBtnClickAction, getDeleteItemAciton } from './store/actionCreators'
import TodoListUI from './TodoListUI';


class TodoList extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAciton(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getBtnClickAction();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAciton(index);
    store.dispatch(action);
  }
}

export default TodoList;