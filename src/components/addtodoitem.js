import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Input, Grid, Button } from '@hi-ui/hiui' //引入所需组件


class Addtodoitem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    addNewItem() {
        let item=this.state.inputValue

        if(!item){
            alert('新增任务不能为空')
        }else{
            console.log('新增一条todo')
            console.log(item)
            this.props.addNewItem(item)
        }

    }
    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }
    render() {
        const Row = Grid.Row
        const Col = Grid.Col
        return (
            <div>
                <Row justify='center'>
                    <Col span={16} >
                        <Input
                            id="newItem"
                            type={'normal'}
                            placeholder={'请输入一条待办'}
                            style={{ width: '100%' }}
                            value={this.state.inputValue}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Col>
                    <Col span={4}>
                        <Button type='line' onClick={this.addNewItem.bind(this)}>新增待办</Button>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Addtodoitem;