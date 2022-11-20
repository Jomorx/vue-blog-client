import { useAppDispatch, useAppSelector } from "@/hooks";
import { getArticleList } from "@/store/articleStore";
import { shallowEqual } from "react-redux";
import style from "./index.module.less";
const index = () => {
  const store = useAppSelector((state)=>({articleList:state.articleStore.articleList}),shallowEqual)
  const dispatch = useAppDispatch()
  return (
    <>
    <h1>{store.articleList}</h1>
    <button onClick={e=>dispatch(getArticleList({id:1}))}></button>
      <div className={style.card_container}>
        <div className={style.card}></div>
        <div className={style.card}></div>
        <div className={style.card}></div>
        <div className={style.card}></div>
      </div>
    </>
  );
};

export default index;
