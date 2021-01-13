var rl = require('readline').createInterface(process.stdin, process.stdout);
let eye = [], hand = [], mouth = [], max = -1, hang, h1 = [];
rl.on('line', function (line) {
    max++;
    if (max == 0) getMeme(line, hand)
    if (max == 1) getMeme(line, eye);
    if (max == 2) getMeme(line, mouth);
    if (max == 3) hang = line;
    if (max > 3) {
        hang--;
        if (hang == 0) {
            h1.push(line.split(' '))
            for (let i = 0; i < h1.length; i++) {
                    var dataArr = h1[i];
                    var str = ''
                    if (dataArr[0] < hand.length && dataArr[0] - 0 > 0) str += hand[dataArr[0] - 1]; else return console.log('Are you kidding me? @\\/@');
                    str += '(';
                    if (dataArr[1] < eye.length && dataArr[1] - 0 > 0) str += eye[dataArr[1] - 1]; else return console.log('Are you kidding me? @\\/@');
                    if (dataArr[2] < mouth.length && dataArr[2] - 0 > 0) str += mouth[dataArr[2] - 1]; else return console.log('Are you kidding me? @\\/@');
                    if (dataArr[3] < eye.length && dataArr[3] - 0 > 0) str += eye[dataArr[3] - 1]; else return console.log('Are you kidding me? @\\/@');
                    str += ')';
                    if (dataArr[4] < hand.length && dataArr[4] - 0 > 0) str += hand[dataArr[4] - 1]; else return console.log('Are you kidding me? @\\/@');
                    console.log(str);
            }
            rl.close();
        } else {
            h1.push(line.split(' '));
        }
    }
})
function getMeme(line, meme) {
    var i1 = line.indexOf('['), i2 = line.indexOf(']');
    while (i1 != -1) {
        if (i1 != -1 && i2 != -1)
            meme.push(line.substring(line.indexOf('[', i1) + 1, line.indexOf(']', i2)));
        i1 = line.indexOf('[', i1 + 1), i2 = line.indexOf(']', i2 + 1);
    }
}