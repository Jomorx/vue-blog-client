import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
export type articleState ={
    articleList:any[]
}
const initialState: articleState = {
    articleList:[]
};
interface payloadType {
}
export const getArticleList = createAsyncThunk<void,{id:number},{state:RootState}>("",({id},{dispatch,getState})=>{
  dispatch(changeArticleList(id))
  
})



const menuSlice = createSlice({
  name: "menuStore",
  initialState,
  reducers: {
      changeArticleList(state,{payload}){
        console.log(payload);
        state.articleList=[payload  ]
        // state.articleList=payload
      }
  },
});


export default menuSlice.reducer;
export const {changeArticleList } = menuSlice.actions;
