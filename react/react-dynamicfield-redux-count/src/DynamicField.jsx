import React from 'react';
import { Input, Button, Divider } from 'antd';
function Field(props) {
    const { value, index } = props;
    return (
        <div>
            <Divider />
            <div>
                姓名: <Input value={value.name} placeholder="姓名" onChange={(e) => {
                    props.onChange(e.target.value, 'name', index)
                }} />
            </div>
            <div>
                地址: <Input value={value.address} placeholder="地址" onChange={(e) => {
                    // 获取onchange函数，在把变化的值传回父组件
                    props.onChange(e.target.value, 'address', index)
                }} />
            </div>
            {/* onclick antdapi */}
            <Button type="primary" onClick={() => {
                props.onDelete(index)
            }}>删除</Button>
        </div>
    )
}
// 子组件传值给父组件,状态保留在父级，只能保留一份，
class DynamicField extends React.Component {
    state = {
        lists: [
            {
                name: '',
                address: ''
            }
        ]
    }
    handleChange = (value, key, i) => {
        let lists = this.state.lists.slice(0);
        const obj = lists[i];
        // {
        //     name: '123',
        //     address: '456',
            // name: '789' 后面那么把前面name替换
        // }
        // 【key】 有name和address值
        const newObj = {
            ...obj,
            [key]: value
        }
        lists[i] = newObj;
        this.setState({
            lists
        })
    }
    handleDelete = (i) => {
        const lists = this.state.lists.slice(0);
        lists.splice(i, 1);
        this.setState({
            lists
        })
    }
    handleAddField = () => {
        let lists = this.state.lists.slice(0);
        lists.push({
            name: '',
            address: ''
        })
        this.setState({
            lists
        })
    }
    render() {
        const { lists } = this.state
        return (
            <div>
                {
                    lists.map((list, i) => {
                        // handlechangge接受改变
                        return <Field key={i} value={list} onChange={this.handleChange} onDelete={this.handleDelete} index={i} />
                    })
                }
                <Button type="primary" onClick={this.handleAddField}>添加</Button>
            </div>

        )
    }
}

export default DynamicField;