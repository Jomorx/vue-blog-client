import { Sequelize } from 'sequelize-typescript';
export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '101.43.180.21',
  port: 3306,
  username: 'root',
  password: 'hch295556',
  database: 'my_blog',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err: any) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });
