onmessage = (event) => {

    if (!event.data) return;

    let string = new String(event.data);

    let result = string.split('')
        .map(c => String.fromCharCode(c.charCodeAt(0) - 3))
        .reduce((x, y) => x + y);

    postMessage(result);
};