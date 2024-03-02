// 编写store

import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //商品列表
        foodsList: [],
        //菜单激活下标值
        activeIndex: 0
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        }
    }
})

const {setFoodsList, changeActiveIndex} = foodsStore.actions;
const reducer = foodsStore.reducer;

//异步获取
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway");
        dispatch(setFoodsList(res.data));
    }
}

export {fetchFoodsList, changeActiveIndex}
export default reducer