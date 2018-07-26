var chars = ["c", "v", "b", "n", "m", "C", "V", "B", "N", "M"];

function encode() {
    var msg = $("#textInput").val();
    var out = "";
    for (var i = 0; i < msg.length; i++) {
        var num = msg.charCodeAt(i);
        if (num >= 32 && num < 127) {
            var encodeNum = num - 32;
            out += chars[Math.floor(encodeNum / 10)];
            out += chars[encodeNum % 10];
        }
    }
    addMsg(msg + " <i>encodes to</i><br>" + out);
}

function decode() {
    var msg = $("#textInput").val();
    var out = "";
    for (var i = 0; i < msg.length; i += 2) {
        var a = chars.indexOf(msg.charAt(i));
        var b = chars.indexOf(msg.charAt(i+1));
        var decodeNum = 10 * a + b + 32;
        console.log(decodeNum);
        if (decodeNum >= 32 && decodeNum < 127) {
            out += String.fromCharCode(decodeNum);
        }
    }
    addMsg(msg + " <i>decodes to</i><br>" + out);
}

function emptyHistory() {
    $("#history").empty();
}

function addMsg(text) {
    $("#history").append(text + "<br><br>");
}