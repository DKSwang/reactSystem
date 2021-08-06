/*
 * @Author: xxuzhong.wang
 * @Date: 2021-07-16 15:52:09
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-08-06 09:59:21
 * @Description: 
 */
import React from "react"
import {connect} from "react-redux";
import{AddCounter,DelCounter,asyncADD}from "./index.redux"
import './App.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 


//使用装饰器改造
@connect(
    //第一个参数=>你要state的什么属性放到props里
    state=>({num:state  }),
    //第二个参数 =>你要执行什么方法
    {AddCounter,DelCounter,asyncADD}
    )

class App extends React.Component {
    constructor(props){
        super()
    }
    render(){
      return  (
       <div>
            <h1>现在的数字是{this.props.num}</h1>
        <Button onClick={this.props.AddCounter }>增加数字</Button>
        <Button onClick={this.props.DelCounter }>减法数字</Button>
        <Button onClick={this.props.asyncADD}>异步改变</Button>
       </div>
      )
    }
}

export default App;
