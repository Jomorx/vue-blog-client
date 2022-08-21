import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PageDto } from 'src/dto/pageDto';
import { ConfigService } from 'src/service/config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}
  @Get('getConfigList')
  async getConfigList(@Query() pageDto: PageDto) {
    return await this.configService.getConfigList(pageDto);
  }
  //   @Post('deleteConfigList')
  //   async deleteTagList(@Body('categoryList') tagList) {
  //     return await this.configService.deleteTagList(tagList);
  //   }
  @Post('insertConfig')
  async insertConfig(@Body() Category) {
    return await this.configService.insertConfig(Category);
  }
  @Post('editConfig')
  async editConfig(@Body() Category) {
    return await this.configService.editConfig(Category);
  }
}
