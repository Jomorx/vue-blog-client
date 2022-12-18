import React, { useEffect, useState } from "react";
import PageHeader from "@/component/PageHeader";
import OperationButton from "@/component/OperationButton";
import { Pagination, Table } from "antd";
import { RowType, TableInfo } from "./types";
import { ColumnsType } from "antd/lib/table";
import { deleteTagListApi, editTagApi } from "@/api/tag/TagApi";
import ButtonHeader from "@/component/ButtonHeader";
import ModalForm from "@/component/ModalForm";
import { ModalInfoType } from "@/component/ModalForm/types";
import { formatTime } from "@/utils";
import {
  deleteCategoryListApi,
  editCategoryApi,
  getCategoryListApi,
  insertCategoryApi,
} from "@/api/CategoryApi";
function index() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [tableInfo, setTableInfo] = useState<TableInfo>({
    currentPage: 1,
    pageSize: 10,
    data: [],
    count: 0,
    searchText: "",
  });
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
  const columns: ColumnsType<RowType> = [
    {
      title: "分类名",
      dataIndex: "categoryName",
      render: (categoryName) => {
        return <span style={{ fontWeight: "600" }}>{categoryName}</span>;
      },
    },
    {
      title: "分类图片",
      dataIndex: "categoryCover",
      render: (categoryCover) => {
        return <span style={{ fontWeight: "600" }}><img style={{width:'50px',height:"50px"}} src={categoryCover}></img></span>;
      },
    },
    {
      title: "分类描述",
      dataIndex: "categoryDescription",
      render: (categoryDescription) => {
        return <span style={{ fontWeight: "600" }}>{categoryDescription}</span>;
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
                    await editCategoryApi({...value,categoryId:record.categoryId});
                    flushTable()
                    setVisible(false);
                  },
                  onCancel: () => {
                    setVisible(false);
                  },
                  formItem: [
                    {
                      name: "categoryName",
                      label: "分类名称",
                      type: "input",
                      initialValue:record.categoryName,
                      rules: [
                        {
                          required: true,
                          message: "请输入分类名",
                        },
                      ],
                    },
                    {
                      name: "categoryDescription",
                      label: "分类描述",
                      type: "input",
                      initialValue:record.categoryDescription,
                      rules: [
                        {
                          required: true,
                          message: "请输入分类描述",
                        },
                      ],
                    },
                    {
                      name: "categoryCover",
                      label: "分类图片",
                      type: "upload",
                      initialValue:record.categoryCover,
                      rules: [
                        {
                          required: true,
                          message: "请上传分类图片",
                        },
                      ],
                      valuePropName: "src",
                      getValueFromEvent: (e: any) => {
                        console.log("Upload event:", e.file.status);
                        if (e.file.status==='done') {
                          return e?.file.response[0].src;
                        }
                      },
                    },
                  ],
                });
                setVisible(true);
              }}
              clickDelete={async () => {
                await deleteTagListApi([record.categoryId as number]);
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

  useEffect(() => {
    flushTable();
  }, [tableInfo.pageSize, tableInfo.currentPage, tableInfo.searchText]);

  const batchDelete = async () => {
    const res = await deleteCategoryListApi(selectedRowKeys as number[]);
    flushTable();
  };
  const newAdd = () => {
    setModalInfo({
      title: "新增标签",
      onCreate: async (value) => {
        await insertCategoryApi(value);
        flushTable();
        setVisible(false);
      },
      onCancel: () => {
        setVisible(false);
      },
      formItem: [
        {
          name: "categoryName",
          label: "分类名称",
          type: "input",
          rules: [
            {
              required: true,
              message: "请输入分类名",
            },
          ],
        },
        {
          name: "categoryDescription",
          label: "分类描述",
          type: "input",
          rules: [
            {
              required: true,
              message: "请输入分类描述",
            },
          ],
        },
        {
          name: "categoryCover",
          label: "分类图片",
          type: "upload",
          rules: [
            {
              required: true,
              message: "请上传分类图片",
            },
          ],
          valuePropName: "src",
          getValueFromEvent: (e: any) => {
            console.log("Upload event:", e.file.status);
            if (e.file.status==='done') {
              return e?.file.response[0].src;
            }
          },
        },
      ],
    });
    setVisible(true);
  };
  //Todo
  const flushTable = async () => {
    const { data } = await getCategoryListApi(
      tableInfo.pageSize,
      tableInfo.currentPage,
      tableInfo.searchText
    );
    setTableInfo({ ...tableInfo, ...{ count: data.count, data: data.rows } });
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
