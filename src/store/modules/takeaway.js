// 编写store

import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //商品列表
        foodsList: [],
        //菜单激活下标值
        activeIndex: 0,
        //购物车列表
        cartList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        addCartList(state, action) {
            //从action.payload.id匹配cardList 匹配到了 添加过
            const item = state.cartList.find(item => item.id === action.payload.id)
            if(item){
                item.count++;
            } else {
                state.cartList.push(action.payload);
                const item1 = state.cartList.find(item => item.id === action.payload.id)
                item1.count = 1
            }
        }
    }
})

const {setFoodsList, changeActiveIndex, addCartList} = foodsStore.actions;
const reducer = foodsStore.reducer;

//异步获取
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway");
        dispatch(setFoodsList(res.data));
    }
}

export {fetchFoodsList, changeActiveIndex, addCartList}
export default reducer