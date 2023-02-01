export type IArticle = {
	articleId: number;
	articleDescription: string;
	articleCover: string;
	articleTitle: string;
	articleContent?: string;
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
	days: string;
	articles: {
		articleId: number;
		articleTitle: string;
		createdAt: Date;
	}[];
	count: number;
};
