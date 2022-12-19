import { ModalInfoType } from "@/component/ModalForm/types";
import { useState } from "react";

export const useModal = (
  title: string,
  flushTable: Function,
  insertDataApi: Function,
  formItem:ModalInfoType['formItem']
) => {
  const [modalInfo, setModalInfo] = useState<ModalInfoType>({
    title: "",
    onCancel:()=>{},
    onCreate:()=>{},
    formItem:[]
  });
  const [visible, setVisible] = useState<boolean>(false);
  const addClick = () => {
    setModalInfo({
      title: `新增${title}`,
      onCreate: async (value) => {
        await insertDataApi(value);
        flushTable();
        setVisible(false);
      },
      onCancel: () => {
        setVisible(false);
      },
      formItem
    });
    setVisible(true);
  };
  return {
    addClick,
    modalInfo,
    visible,
    setModalInfo,
    setVisible,
  };
};
