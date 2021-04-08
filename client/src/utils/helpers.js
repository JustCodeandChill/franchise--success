export const equalEmptyArray = (target) => {
    return JSON.stringify(target) === JSON.stringify([]);
}

export const equalEmptyObject = (target) => {
    return JSON.stringify(target) === JSON.stringify({});
}

