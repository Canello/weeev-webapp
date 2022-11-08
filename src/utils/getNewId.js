let lastId = 0;

export const getNewId = () => {
    lastId++;
    return `${lastId}`;
}