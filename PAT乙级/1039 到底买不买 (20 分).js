let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], max = 2, flag = true, num = 0;
rl.on('line', function (line) {
    scanf(line);
    if (max == 0) {
        let arr_1 = dataArr[0]; //摊主的珠子
        let arr_2 = dataArr[1]; //小红想做的珠子
        for (let i = 0; i < arr_2.length; i++) {
            let position = arr_1.indexOf(arr_2[i]);
            //缺少珠子
            if (position == -1) {
                flag = false;
                num++;
            } else {
                arr_1.splice(position, 1);
            }
        }
        if (flag) {
            console.log('YES', arr_1.length);
        } else {
            console.log('NO', num);
        }

    }
})
function scanf(line) {
    if (max == -1) {
        max = line;
    } else {
        max--;
        dataArr.push(line.split(''));
    }
}
/**
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */
