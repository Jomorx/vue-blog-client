import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PageDto } from 'src/dto/pageDto';
import { UpdateArticleDto } from 'src/dto/updateArticleDto';
import { UploadArticleDto } from 'src/dto/uploadArticleDto';
import { ArticleService } from 'src/service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get('getArticleList')
  async getArticleList(@Query() pageDto: PageDto) {
    console.log(pageDto);
    return this.articleService.getArticleList(pageDto);
  }
  @Get('getArticleById/:id')
  async getArticleById(@Param('id') id) {
    return this.articleService.getArticleById(id);
  }
  @Post('uploadArticle')
  async uploadArticle(@Body() uploadArticleDto: UploadArticleDto) {
    return this.articleService.uploadArticle(uploadArticleDto);
  }
  @Post('updateArticle')
  async updateArticle(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.updateArticle(updateArticleDto);
  }
  @Post('deleteArticleList')
  async deleteArticleList(@Body('articleIdList') articleIdList: number[]) {
    return this.articleService.deleteArticleList(articleIdList);
  }
  @Post('switchIsTop')
  async switchIsTop(
    @Body('articleId') articleId: number,
    @Body('isTop') isTop: number,
  ) {
    console.log(articleId, isTop);
    return await this.articleService.switchIsTop(articleId, isTop);
  }
  @Get('getArticleTimeLine')
  async getArticleTimeLine() {
    return this.articleService.getArticleTimeLine();
  }
}
