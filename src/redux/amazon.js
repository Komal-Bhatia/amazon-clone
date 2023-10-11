import { createSlice } from '@reduxjs/toolkit';

const initialState={
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload
          },
        addToCart: (state,action) => {
            state.products = [...state.products,action.payload]
        }


    // THIS ADDTOCART wont work as its not returning state its updating
    // the state in wrong manner as state is actually 
    // immutable we cant actually directly push changes to it
    // https://redux-toolkit.js.org/tutorials/quick-start
    // and line 32 does not makes sense as its const object even if assign value to items.quantity nothing will happen


    //     addTocart:(state,action) => {
    //         console.log("🚀 ~ file: amazonSlice.js:13 ~ action:", action)
    //         console.log("🚀 ~ file: amazonSlice.js:13 ~ state:", state)
    //         const items=state.products.find((item)=>item.id===action.payload.id);
    //             if(items){
    //                 items.quantity += action.payload.quantity;
    //             }else{
    //                 state.products.push(action.payload);
    //             }
    //     },
    },
});

export const { incrementByAmount,addToCart } = amazonSlice.actions;

export default amazonSlice.reducer;