import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const billStore = createSlice({
    name: "billStore",
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(action, payload){
            action.billList = payload.action
        }
    }
})

const { setBillList } = billStore.actions

function getBillList() {
    return async (dispacth) => {
        const res = await axios.get("http://localhost:3004/ka");
        dispacth(setBillList(res.data));
    }
}

const reducer = billStore.reducer

export {getBillList}
export default reducer