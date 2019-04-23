import React, { Component } from 'react';
import { Panel, Button } from '@hi-ui/hiui' //引入所需组件
import "../App.css"


class Todoitem extends Component {
    constructor(props) {
        super(props)
    
    }
    componentWillMount() {
        
    }
    handleComplete() {
        console.log('点击完成按钮'+this.props.taskId)
        // this.setState({
        //     completeButton: true
        // })
        this.props.completeItem(this.props.taskId)
        
    }
    handleDelete(){
        this.props.deleteItem(this.props.taskId)
    }
    render() {
        return (
            <li>
                <Panel
                    title={
                        <div className={'itemButton'} complete={this.props.complete}>
                            <Button type="success"
                                disabled={this.props.complete}
                                onClick={this.handleComplete.bind(this)}
                            >{this.props.complete ? '已完成' : '完成'}</Button>
                            <Button type="danger"
                                onClick={this.handleDelete.bind(this)}
                            >删除</Button>
                        </div>
                    }>
                    {this.props.complete?<del>{this.props.task}</del>:<span>{this.props.task}</span>}
                </Panel>
            </li>

        );
    }
}

export default Todoitem;