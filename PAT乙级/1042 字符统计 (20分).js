let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], ar1 = [], obj1 = {}, str, num;
rl.on('line', function (line) {
    dataArr = line.split('');
    for (let i = 0; i < dataArr.length; i++) { //将所有英文字母以小写的方式存储到数组
        let str = dataArr[i].toLocaleLowerCase();
        if (str.charCodeAt() >= 97 && str.charCodeAt() <= 122)
            ar1.push(str);
    }
    for (let i = 0; i < ar1.length; i++) //利用对象的特性统计每个字母出现的次数
        if (obj1[ar1[i]] != undefined)
            obj1[ar1[i]]++;
        else
            obj1[ar1[i]] = 1;
    num = obj1[ar1[0]], str = ar1[0]; //初始化验证值
    for (let i = 0; i < ar1.length; i++) //遍历出现次数最多的字母
        if (num < obj1[ar1[i]])
            num = obj1[ar1[i]], str = ar1[i];
        else if (num == obj1[ar1[i]]) //如果存在相同次数的字母，将对比Unicode值
            if (str.charCodeAt() > ar1[i].charCodeAt()) 
            num = obj1[ar1[i]], str = ar1[i];
    console.log(str, num);
})
/**
 * 解题思路：将出现的字母统计到对象上，并遍历找出最大的一个
 * ---------------------------------------------------
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */