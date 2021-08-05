/*
 * @Author: xxuzhong.wang
 * @Date: 2021-07-16 15:52:09
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-08-05 09:25:11
 * @Description: 
 */
// import {createStore} from 'redux';
//新建store 
//通过reducer新建
//根据老的state和action
// function counter(state =0,action){
//     switch (action.type) {
//         case "add":
//             return state+1
//             break;
//         case "del":
//             return state-1
//             break;
//         default:
//             return 10
//     }
    
// }
//  const store = createStore(counter)
// const init = store.getState()
// console.log(init,"99")
//定义事件
// function listener(){
//     const current  = store.getState()
//     console.log(`现在的数字是${current}`)
// }
// store.subscribe(listener)

// store.dispatch({type:'add'})
// console.log(store.getState(),"add")
// store.dispatch({type:'del'})
// store.dispatch({type:'del'})
// console.log(store.getState(),"del")




import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'; //applyMiddleware用于管理中间件
import {Provider} from "react-redux"
import thunk from 'redux-thunk'
 import App from './App';
 import {counter ,AddCounter,DelCounter,asyncADD} from  "./index.redux"
 //reduxDevtools的使用
 const reduxDevtools =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(counter, 
    reduxDevtools(applyMiddleware(thunk)) 
    )

    ReactDOM.render(
        (<Provider  store = {store }>
         <App  />
        </Provider>),
        document.getElementById('root')
         );
 
 

