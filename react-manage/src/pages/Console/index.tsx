import style from "./index.module.less";
const index = () => {
  return (
    <>
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
