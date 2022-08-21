export const navigateTo = (url: string) => {
    window.open(url)
}
export const getRandomInt = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };