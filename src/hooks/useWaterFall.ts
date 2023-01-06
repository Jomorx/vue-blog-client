import { nextTick, Ref, watch } from "vue";
import { getRandomInt } from "../utils";

export default (
	dom: Ref<HTMLDivElement[] | undefined>,
	dataList: any,
	searchInfo: any,
	getDataListApi: any
) => {
	const arr: number[] = [];
	let loadAll = false;

	const findIndex = (min: number, arr: number[]) => {
		for (let i = 0; i < arr.length; i++) {
			if (min === arr[i]) return i;
		}
		return 0;
	};
	const generate = (start: number, end: number) => {
		console.log(start, end);
		for (let i = start; i < end; i++) {
			const min = Math.min(...arr);
			const index = findIndex(min, arr);
			dom.value![i].style.left = `${index * 281}px`;
			dom.value![i].style.top = `${min + 20}px`;
			arr[index] = arr[index] + dom.value![i].offsetHeight + 20;
		}
	};

	const generateStart = () => {
		for (let i = 0; i < 3; i++) {
			dom.value![i].style.left = `${i * 281}px`;
			arr.push(dom.value![i].offsetHeight);
		}
		generate(3, dataList.value?.length!);
	};
	watch(
		() => searchInfo,
		() => {
			getDataListApi(
				searchInfo.value.pageSize,
				searchInfo.value.currentPage,
				searchInfo.value.searchText
			).then((data: any) => {
				data.data.rows.forEach((item: any) => {
					item.height = getRandomInt(100, 200);
				});
				dataList.value?.push(...data.data.rows);
				if (dataList.value?.length! >= data.data.count) {
					loadAll = true;
				}
				nextTick(() => {
					generate(
						(searchInfo.value.currentPage - 1) * searchInfo.value.pageSize,
						dataList.value?.length!
					);
				});
			});
		},
		{ deep: true }
	);
	//滚动防抖
	let timer: any = null;
	const scrollFn = () => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			let st =
				window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			// 浏览器窗口（文档）的可视高度(windowHeight)：（就是你肉眼可见的那部分全屏高度）
			let windowHeight =
				window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight;
			// 文档的真实高度(scrollHeight)：
			let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			/*当 windowHeight + st >= scrollHeight  时就表示滚到底了。 */
			if (st + windowHeight >= scrollHeight - 10) {
				if (!loadAll) {
					searchInfo.value.currentPage++;
				}
			}
		}, 200);
	};
	return { generateStart, scrollFn };
};
