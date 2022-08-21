import { OSSModule } from '@nest-public/nest-oss';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { jwtKey } from './auth/config';
import { ArticleController } from './controller/article.controller';
import { CategoryController } from './controller/category.controller';
import { LoginController } from './controller/login.controller';
import { TagController } from './controller/tag.controller';
import { UploadController } from './controller/upload.controller';
import { auth } from './middleware/auth';
import { Article } from './model/articleModel';
import { ArticleTag } from './model/articleTagModel';
import { Category } from './model/categoryModel';
import { Manager } from './model/managerModel';
import { Tag } from './model/tagModel';
import { ArticleService } from './service/article.service';
import { CategoryService } from './service/category.service';
import { LoginService } from './service/login.service';
import { TagService } from './service/tag.service';
import { config } from './config/oss';
import { FriendChain } from './model/friendchainModel';
import { FriendChainController } from './controller/friendchain.controller';
import { FriendChainService } from './service/friendchain.service';
import { Project } from './model/projectModel';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';
import { Config } from './model/configModel';
import { ConfigController } from './controller/config.controller';
import { ConfigService } from './service/config.service';
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
  ],
  providers: [
    LoginService,
    ArticleService,
    TagService,
    CategoryService,
    FriendChainService,
    ProjectService,
    ConfigService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(auth).exclude('/article/getArticleList').forRoutes('*');
  }
}
