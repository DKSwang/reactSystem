/*
 * @Author: xxuzhong.wang
 * @Date: 2021-07-16 15:52:09
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-08-05 14:50:29
 * @Description: 
 */
import React from "react"
import {connect} from "react-redux";
import{AddCounter,DelCounter,asyncADD}from "./index.redux"
import './App.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 


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
//单纯的读取redux的数据
const mapStateToProps = (state) =>{
    console.log(state) 
    return{
      num:state  
    }
  }
  const actionCreators = {AddCounter,DelCounter,asyncADD}
App=  connect(mapStateToProps,actionCreators)(App)
export default App;
