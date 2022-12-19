import { deleteLogListApi, editLogApi, ILog } from "@/api/log";
import OperationButton from "@/component/OperationButton";
import { formatTime } from "@/utils";
import { ColumnsType } from "antd/lib/table";

const columns = (setModalInfo?:any,setVisible?:any,flushTable?:any): ColumnsType<ILog> => [
  {
    title: "设置名",
    dataIndex: "logContent",
    render: (configName) => {
      return <span style={{ fontWeight: "600" }}>{configName}</span>;
    },
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    render: (createdAt) => {
      return <span style={{ fontWeight: "600" }}>{formatTime(createdAt)}</span>;
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
                title: "编辑日志",
                onCreate: async (value:ILog) =>
                {
                  await editLogApi({
                    ...value,
                    logId: record.logId,
                  });
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
                    initialValue: record.logContent,
                    rules: [
                      {
                        required: true,
                        message: "请输入日志内容",
                      },
                    ],
                  },
                ],
              });
              setVisible(true);
            }}
            clickDelete={async () => {
              await deleteLogListApi([record.logId as number]);
              flushTable();
            }}
          />
        </>
      );
    },
    width: "250px",
  },
]
export default columns;
