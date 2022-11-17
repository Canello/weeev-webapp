export const hasReachedEndOfPage = () => {
    const totalHeight = document.body.clientHeight;
    const screenHeight = window.innerHeight;
    const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    return Math.ceil(yOffset + screenHeight) >= totalHeight - 0.05*screenHeight;
}