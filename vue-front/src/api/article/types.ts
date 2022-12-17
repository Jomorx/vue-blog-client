export type Article = {
  articleId: number;
  articleContent: string;
  articleCover: string;
  articleTitle: string;
  category: {
    categoryName: string;
  };
  createdAt: Date;
  isTop: number;
  tagList: { tagId: number; tagName: number }[];
  viewCount: number;
  height: number;
};

export type IArticleList = {
  days: string,
  articles: {
      articleId: number
      articleTitle: string,
      createdAt: Date
  }[],
  count: number
}
