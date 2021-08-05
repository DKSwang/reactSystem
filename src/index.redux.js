/*
 * @Author: xxuzhong.wang
 * @Date: 2021-08-04 10:25:00
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-08-04 17:29:36
 * @Description: 建议使用一个文件来管理我们的redux
 * 
 */
//定义常量
const ADD = "add"
const DEL = "del"

//reducer
export function counter(state =0,action){
    switch (action.type) {
        case "add":
            return state+1
            break;
        case "del":
            return state-1
            break;
        default:
            return 10
    }
    
}
//创建action
//同步的actions
export function AddCounter(){
    return  {type:ADD}
}
export function DelCounter(){
    return  {type:DEL}
}
//异步的actions
export function asyncADD(){
    return  dispatch =>{
        setTimeout(() =>{
            dispatch(AddCounter())
        },2000)
    }
}
