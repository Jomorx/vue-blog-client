import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Config } from 'src/model/configModel';
import { success } from 'src/utils/R';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Config) private readonly configModel: typeof Config,
  ) {}
  async getConfigList(pageDto) {
    let res: { rows?: Config[]; count?: number } = {};
    if (pageDto.searchText !== '') {
      res = await this.configModel.findAndCountAll({
        limit: pageDto.pageSize,
        offset: (pageDto.currentPage - 1) * pageDto.pageSize,
        where: { configName: { [Op.like]: `%${pageDto.searchText}%` } },
        /**
         *  where:{
          *name:{
           [Op.like]:'%'+req.query.name+'%'     
    } 
}
         */
      });
    } else {
      res = await this.configModel.findAndCountAll({
        limit: pageDto.pageSize,
        offset: (pageDto.currentPage - 1) * pageDto.pageSize,
      });
    }
    return success(res);
  }

  //   async deleteTagList(categoryList: number[]) {
  //     for (const item of categoryList) {
  //       const count = await this.articleModel.count({
  //         where: { categoryId: item },
  //       });
  //       if (count !== 0) {
  //         throw new AppException(400, '删除失败,该分类存在文章');
  //       }
  //     }
  //     for (const item of categoryList) {
  //       await this.categoryModel.destroy({ where: { categoryId: item } });
  //     }
  //     return success(null);
  //   }

  async insertConfig(configModel: Config) {
    const res = await this.configModel.create(configModel);
    return success(res);
  }
  async editConfig(configModel: Config) {
    const res = await this.configModel.update(configModel, {
      where: { configId: configModel.configId },
    });
    return success(res);
  }
}
