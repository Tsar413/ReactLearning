// 编写store

import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        //商品列表
        foodsList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        }
    }
})

const {setFoodsList} = foodsStore.actions;
const reducer = foodsStore.reducer;

//异步获取
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3004/takeaway");
        dispatch(setFoodsList(res.data));
    }
}

export {fetchFoodsList}
export default reducer