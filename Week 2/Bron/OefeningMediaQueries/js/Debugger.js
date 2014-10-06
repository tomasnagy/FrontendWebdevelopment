var Debug = function () { };
Debug.Write = function (message) {
    try {
        console.log(message);
    } catch (exception) {
        return;
    }
}