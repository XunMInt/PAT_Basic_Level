let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], max = -1, n;
rl.on('line', function (line) {
    scanf(line);
    if (max == 0) {
        dataArr.sort(sortNumber) //排序
        n = ((dataArr[0] - 0) + (dataArr[1] - 0)) / 2; 
        for (let i = 2; i < dataArr.length; i++) //核心算法
            n = (n + (dataArr[i] - 0)) / 2;
        console.log(parseInt(n));
    }
})
function scanf(line) {
    if (max == -1) {
        max = 1;
    } else {
        max--;
        dataArr = line.split(' ');
    }
}
function sortNumber(a, b) {
    return a - b;
}

/**
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */