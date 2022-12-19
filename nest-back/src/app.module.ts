import { OSSModule } from '@nest-public/nest-oss';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { jwtKey } from './auth/config';
import { auth } from './middleware/auth';
import { config } from './config/oss';
import {
  Article,
  ArticleTag,
  Category,
  Config,
  FriendChain,
  Log,
  Manager,
  Project,
  Tag,
} from './model';
import {
  ArticleService,
  CategoryService,
  ConfigService,
  FriendChainService,
  LogService,
  LoginService,
  ProjectService,
  TagService,
} from './service';
import {
  ArticleController,
  CategoryController,
  ConfigController,
  FriendChainController,
  LogController,
  LoginController,
  ProjectController,
  TagController,
  UploadController,
} from './controller';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '101.43.180.21',
      port: 3306,
      username: 'root',
      password: 'hch295556',
      database: 'my_blog',
      models: [
        Manager,
        Article,
        Tag,
        ArticleTag,
        Category,
        FriendChain,
        Project,
        Config,
        Log,
      ],
      logging: console.log,
      define: {
        timestamps: true,
        freezeTableName: true,
      },
    }),
    JwtModule.register({
      //生成token的key
      secret: jwtKey.secret,
      // signOption可以在JwtModule设定
      // 或是在createToken时候设定
      signOptions: {
        //token的有效时长
        expiresIn: '1h',
      },
    }),
    SequelizeModule.forFeature([
      Article,
      Tag,
      ArticleTag,
      Category,
      FriendChain,
      Project,
      Manager,
      Config,
      Log,
    ]),
    OSSModule.forRoot(config),
  ],
  controllers: [
    LoginController,
    ArticleController,
    TagController,
    CategoryController,
    UploadController,
    FriendChainController,
    ProjectController,
    ConfigController,
    LogController,
  ],
  providers: [
    LoginService,
    ArticleService,
    TagService,
    CategoryService,
    FriendChainService,
    ProjectService,
    ConfigService,
    LogService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(auth).exclude('/article/getArticleList').forRoutes('*');
  }
}
