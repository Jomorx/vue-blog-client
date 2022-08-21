export const config = {
  client: {
    endpoint: 'oss-cn-beijing.aliyuncs.com', // endpoint域名
    accessKeyId: 'LTAI5tAnwuVivynTnAy7dX4i', // 账号
    accessKeySecret: 'Bm79348fMCSrO4H8WTP6qonYG36IoJ', // 密码
    bucket: 'blogsss', // 存储桶
    internal: false, // 是否使用阿里云内部网访问
    secure: true, // 使用 HTTPS
    cname: false, // 自定义endpoint
    timeout: '90s',
  },
  domain: '', // 自定义域名
};
