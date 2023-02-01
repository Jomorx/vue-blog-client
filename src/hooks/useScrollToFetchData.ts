export const useScrollToFetchData = (fetchDataAction: Function) => {
	let timer: NodeJS.Timer | null = null;
	const scrollToFetchData = () => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			const st =
				window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			// 浏览器窗口（文档）的可视高度(windowHeight)：（就是你肉眼可见的那部分全屏高度）
			const windowHeight =
				window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight;
			// 文档的真实高度(scrollHeight)：
			const scrollHeight =
				document.documentElement.scrollHeight || document.body.scrollHeight;
			/*当 windowHeight + st >= scrollHeight  时就表示滚到底了。 */
			if (st + windowHeight >= scrollHeight - 10) {
				fetchDataAction();
			}
		}, 200);
	};
	return { scrollToFetchData };
};
