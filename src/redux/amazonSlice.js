import { createSlice } from '@reduxjs/toolkit';

const initialState={
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const items=state.products.find((item)=>item.id===action.payload.id);
                if(items){
                    items.quantity += action.payload.quantity;
                }else{
                    state.products.push(action.payload);
                }
            
        }
    }
})

export const{ addToCart }=amazonSlice.actions;

export default amazonSlice.reducer;