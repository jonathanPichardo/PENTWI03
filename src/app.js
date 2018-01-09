$(() => {

    let encryptWorker = new Worker('./src/encrypt.js');
    let decryptWorker = new Worker('./src/decrypt.js');

    encryptWorker.onmessage = (event) => {
        $('#resultParagraph').html(event.data);
    }   

    decryptWorker.onmessage = (event) => {
        $('#resultParagraph').html(event.data);
    }

    $('#encryptButton').click(() => encryptWorker.postMessage($('#encryptTextArea').val()));

    $('#decryptButton').click(() => decryptWorker.postMessage($('#decryptTextArea').val()));

});
