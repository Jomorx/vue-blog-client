import { createPinia } from "pinia";
import { useAboutStore } from "./aboutStore";
// 持久化插件

import { useArticleStore } from "./articleStore/articleStore";
import { useFriendChainStore } from "./friendChainStore";
import { useLogStore } from "./logStore";
import { useProjectStore } from "./projectStore";
import { useTagStore } from "./tagStore";
export const pinia = createPinia();

export interface IAppStore {
	articleStore: ReturnType<typeof useArticleStore>;
	tagStore: ReturnType<typeof useTagStore>;
	projectStore: ReturnType<typeof useProjectStore>;
	logStore: ReturnType<typeof useLogStore>;
	friendChainStore: ReturnType<typeof useFriendChainStore>;
	aboutStore: ReturnType<typeof useAboutStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * @description 注册app状态库，store总入口
 */
export const registerStore = () => {
	appStore.articleStore = useArticleStore();
	appStore.tagStore = useTagStore();
	appStore.projectStore = useProjectStore();
	appStore.logStore = useLogStore();
	appStore.friendChainStore = useFriendChainStore();
	appStore.aboutStore = useAboutStore();
};

export default appStore;
