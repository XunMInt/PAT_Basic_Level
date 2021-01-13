var rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], obj = {}, sum = 0, str = 'PATest'.split('');
rl.on('line', function (line) {
    dataArr = line.split('');
    for (let i = 0; i < dataArr.length; i++) //统计PATest每个字母出现的次数
        if ('PATest'.indexOf(dataArr[i]) != -1)
            if (obj[dataArr[i]] == undefined)
                obj[dataArr[i]] = 1;
            else {
                obj[dataArr[i]]++;
                sum++; //记录出现了多少个字母
            }
    for (let i = 0; i <= sum; i++) //按照str数组循环输出
        for (let j = 0; j < str.length; j++)
            if (obj[str[j]] != 0 && obj[str[j]] != undefined) {
                process.stdout.write(str[j]);
                obj[str[j]]--;
            }
})

/**
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */