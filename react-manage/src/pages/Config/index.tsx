import  { useEffect, useState } from "react";
import { Button, Input } from "antd";
import MdEditor from "md-editor-rt";
import PageHeader from "@/component/PageHeader";
import style from "./index.module.less";
import { useParams } from "react-router-dom";
import { getConfigByIdApi, IConfig } from "@/api/config";
function index() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const param = useParams();
  const publishAbout = () => {
  };


  const init = async () => {
    if(JSON.stringify(param) !== '{}'){
      const res = await getConfigByIdApi(Number(param.id));
      setTitle(res.data.configName)
      setText(res.data.configContent)
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <PageHeader title="发布文章"></PageHeader>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={style.title}
      >
        <span style={{ width: "60px" }}>标题:</span>
        <Input
          showCount
          maxLength={20}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Button size="large" danger className={style.button}>
          保存草稿
        </Button>
        <Button
          size="large"
          type="primary"
          danger
          className={style.button}
          onClick={() => {
            // publishArticle();
          }}
        >
          发布文章
        </Button>
      </div>
      <MdEditor modelValue={text} onChange={setText} />
    </>
  );
}

export default index;
