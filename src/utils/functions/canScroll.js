export const canScroll = () => {
    const totalHeight = document.body.clientHeight;
    const screenHeight = window.innerHeight;
    return screenHeight < totalHeight;
}