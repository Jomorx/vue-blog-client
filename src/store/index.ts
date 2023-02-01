import { createPinia } from "pinia";
// 持久化插件

import { useArticleStore } from "./articleStore/articleStore";
import { useTagStore } from "./tagStroe";
export const pinia = createPinia();

export interface IAppStore {
	articleStore: ReturnType<typeof useArticleStore>;
	tagStore: ReturnType<typeof useTagStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * @description 注册app状态库，store总入口
 */
export const registerStore = () => {
	appStore.articleStore = useArticleStore();
	appStore.tagStore = useTagStore();
};

export default appStore;
