export interface IReturnType<T> {
	code: number;
	data: T;
	message: string;
}
export interface ReturnPageType<T> {
	code: number;
	data: {
		count: number;
		rows: T[];
	};
	message: string;
}
export type IPageDto = {
	currentPage: number;
	pageSize: number;
	searchText: string;
};
