import React, { useEffect, useState } from "react";
import PageHeader from "@/component/PageHeader";
import { Pagination, Table } from "antd";
import ButtonHeader from "@/component/ButtonHeader";
import ModalForm from "@/component/ModalForm";
import { ModalInfoType } from "@/component/ModalForm/types";
import {
  deleteCategoryListApi,
} from "@/api/CategoryApi";
import { getLogListApi, insertLogApi } from "@/api/log";
import useColumns from './table.config'
import { useTable } from "@/hooks";
import { ILog } from "@/api/log";
function index() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { flushTable, tableInfo, setTableInfo } = useTable<ILog>(getLogListApi);
  const onSelectChange = (newSelectedRowKeys:React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [modalInfo, setModalInfo] = useState<ModalInfoType>({
    title: "编辑标签",
    onCreate: () => {},
    onCancel: () => {},
    formItem: [],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = useColumns(setModalInfo,setVisible,flushTable)

  const batchDelete = async () => {
    const res = await deleteCategoryListApi(selectedRowKeys as number[]);
    flushTable();
  };
  const newAdd = () => {
    setModalInfo({
      title: "新增标签",
      onCreate: async (value) => {
        await insertLogApi(value);
        flushTable();
        setVisible(false);
      },
      onCancel: () => {
        setVisible(false);
      },
      formItem: [
        {
          name: "logContent",
          label: "日志内容",
          type: "input",
          rules: [
            {
              required: true,
              message: "请输入分类名",
            },
          ],
        },
      ],
    });
    setVisible(true);
  };
  const onSearch = (value: string, event: any) => {
    setTableInfo({ ...tableInfo, ...{ searchText: value, currentPage: 1 } });
  };
  return (
    <>
      <PageHeader title="分类管理" />
      <ButtonHeader
        batchDelete={batchDelete}
        newAdd={newAdd}
        placeHolder="请输入分类名"
        onSearch={onSearch}
      ></ButtonHeader>
      <Table
        bordered
        rowKey="categoryId"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableInfo.data}
        pagination={false}
      ></Table>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Pagination
          style={{ marginTop: "10px" }}
          total={tableInfo.count}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={(page, pageSize) => {
            console.log(page);
            setTableInfo((e) => {
              return { ...e, pageSize, currentPage: page };
            });
          }}
          current={tableInfo.currentPage}
        />
      </div>
      <ModalForm visible={visible} ModalInfo={modalInfo!}></ModalForm>
    </>
  );
}

export default index;
