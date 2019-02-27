import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
                <Input
                    placeholder="Basic usage"
                    style={{ marginRight: '10px', width: '300px' }}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
            </div>
            <List
                style={{ width: '390px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;