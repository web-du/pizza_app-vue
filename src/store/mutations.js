//更改属性的状态
// export const setMenuItems = (state,data) =>{
//     state.menuItems = data;
// }
//将匹配到的对象删除
// export const removeMenuItems = (state,data) =>{
//     state.menuItems.forEach((item,index) =>{
//         if(item == data){
//             state.menuItems.splice(index,1);
//         }
//     })
// }
//新增
// export const pushTomenuItems = (state,data) => {
//     state.menuItems.push(data);
// }
//更改用户的状态信息
// export const userStatus = (state,user) =>{
//     if(user != null){
//         state.currentUser = user;
//         state.isLogin = true;
//     }else{
//         state.currentUser = null;
//         state.isLogin = false;
//     }
// }