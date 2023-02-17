import moment from "moment";
export * from "./markdownUtils";
export const navigateTo = (url: string) => {
	window.open(url);
};
export const getRandomInt = (min = 0, max = 255) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const formatTime = (time: string) => {
	if (!time) return "";
	return moment(time).format("YYYY-MM-DD");
};
