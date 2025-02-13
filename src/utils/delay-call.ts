export const delayCall = (setState: (value: boolean) => void, time = 1000) => {
    let delayTimer: NodeJS.Timeout;
    return function (data: boolean) {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(()=> {
            setState(data);
        }, time);
    };
}