let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], max = -1, flag = true;
rl.on('line', function (line) {
    scanf(line);
    if (max == 0) {
        for (let i = 0; i < dataArr.length; i++) {
            let tmp = dataArr[i].split('');
            let sum = 0;
            let isNa = false;
            let weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let check = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            for (let j = 0; j < tmp.length - 1; j++) {
                let num = tmp[j] - 0;
                if (isNaN(num)) {
                    isNa = true;
                    break;
                }
                sum += (num * weight[j]);
            }
            if (check[sum % 11] != tmp[17] || isNa) {
                flag = false;
                console.log(dataArr[i]);
            }
        }
        if (flag) {
            console.log('All passed');
        }
    }
})
function scanf(line) {
    if (max == -1) {
        max = line;
    } else {
        max--;
        dataArr.push(line);
    }
}

/**
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */
