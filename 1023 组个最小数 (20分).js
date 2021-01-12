let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], ar1 = [], min = 10, ii;
rl.on('line', function (line) {
    dataArr = line.split(' ');
    for (let i = 0; i < dataArr.length; i++) //将拥有数储存到新数组
        for (let j = 0; j < dataArr[i]; j++)
            ar1.push(i);
    ar1.sort();//数组排序
    for (let i = 0; i < ar1.length; i++) //获取除0外最小值（充当最小数的头）
        if (min >= ar1[i] && ar1[i] != 0) {
            min = ar1[i];
            ii = i; //记录坐标
        }
    ar1.splice(ii, 1);
    ar1.unshift(min);//这俩行的主要意思就是将除了0以外的最小数替换到第一位（删除并插入）
    console.log(ar1.join('').toString()); //将数组以字符串形式输出（省去遍历输出）
})

/**
 * 本题主要思路 ： 
 * 1、将拥有的数存储到数组ar1
 * 2、排序ar1
 * 3、将除了0以外最小值替换到数组第一位
 * 其他说明：由于用了很多JS自带的奇技淫巧（不然怎么叫“JS杂技选手”呢？😂）所以代码量极少，甚至比柳神的都少。
 * -----------------------------------------------------------------------------------------------
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */