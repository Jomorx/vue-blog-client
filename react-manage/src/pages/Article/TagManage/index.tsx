import React, { useState } from "react";
import PageHeader from "@/component/PageHeader";
import OperationButton from "@/component/OperationButton";
import { Pagination, Table } from "antd";
import { ITag } from "@/api/tag";
import { ColumnsType } from "antd/lib/table";
import {
  deleteTagListApi,
  editTagApi,
  getTagListApi,
  insertTagApi,
} from "@/api/tag/TagApi";
import ButtonHeader from "@/component/ButtonHeader";
import ModalForm from "@/component/ModalForm";
import { ModalInfoType } from "@/component/ModalForm/types";
import { formatTime } from "@/utils";
import { useTable } from "@/hooks";

function index() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { tableInfo, setTableInfo,flushTable } = useTable<ITag>(getTagListApi);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
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
  const columns: ColumnsType<ITag> = [
    {
      title: "标签名",
      dataIndex: "tagName",
      render: (tagName) => {
        return <span style={{ fontWeight: "600" }}>{tagName}</span>;
      },
    },
    {
      title: "文章数量",
      dataIndex: "articleCount",
      render: (articleCount) => {
        return <span style={{ fontWeight: "600" }}>{articleCount}</span>;
      },
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      render: (createdAt) => {
        return (
          <span style={{ fontWeight: "600" }}>{formatTime(createdAt)}</span>
        );
      },
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (text, record, index) => {
        return (
          <>
            <OperationButton
              clickEdit={() => {
                setModalInfo({
                  title: "编辑标签",
                  onCreate: async (value) => {
                    await editTagApi(record.tagId, value);
                    setVisible(false);
                  },
                  onCancel: () => {
                    setVisible(false);
                  },
                  formItem: [
                    {
                      name: "tagName",
                      label: "标签名称",
                      type: "input",
                      rules: [
                        {
                          required: true,
                          message: "请输入标签名",
                        },
                      ],
                    },
                  ],
                });
                setVisible(true);
              }}
              clickDelete={async () => {
                await deleteTagListApi([record.tagId as number]);
                flushTable();
              }}
            />
          </>
        );
      },
      width: "250px",
    },
  ];
  columns.forEach((item) => {
    item.align = "center";
  });
  const batchDelete = async () => {
    await deleteTagListApi(selectedRowKeys as number[]);
    flushTable();
  };
  const newAdd = () => {
    setModalInfo({
      title: "新增标签",
      onCreate: async (value) => {
        await insertTagApi(value);
        setVisible(false);
      },
      onCancel: () => {
        setVisible(false);
      },
      formItem: [
        {
          name: "tagName",
          label: "标签名称",
          type: "input",
          rules: [
            {
              required: true,
              message: "请输入标签名",
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
      <PageHeader title="标签管理" />
      <ButtonHeader
        batchDelete={batchDelete}
        newAdd={newAdd}
        placeHolder="请输入标签名"
        onSearch={onSearch}
      ></ButtonHeader>
      <Table
        bordered
        rowKey="tagId"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableInfo.data}
        pagination={false}
      ></Table>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Pagination
          style={{ marginTop: "10px" }}
          total={tableInfo.count}
          current={tableInfo.currentPage}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={(page, pageSize) => {
            setTableInfo((e) => {
              return { ...e, pageSize, currentPage: page };
            });
          }}
        />
      </div>
      <ModalForm visible={visible} ModalInfo={modalInfo!}></ModalForm>
    </>
  );
}

export default index;
