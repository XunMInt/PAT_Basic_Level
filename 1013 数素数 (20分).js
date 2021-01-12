var rl = require('readline').createInterface(process.stdin, process.stdout);
rl.on('line', function (line) {
    var m = line.split(" ")[0] - 0;
    var n = line.split(" ")[1] - 0;
    var num = 0, num_i = 0;
    for (let i = 2; num < n; i++)  //循环判断m-n之间的素数
        if (isPrime(i)) {
            num++;
            if (num > m - 1) { //判断是否到第M个，是的话开始输出
                num_i++;
                if (num_i % 10 == 0) { //每十行换行
                    process.stdout.write(i.toString());
                    process.stdout.write("\n");
                } else
                    if (num == n) //最后一个数不打印空格
                        process.stdout.write(i.toString());
                    else
                        process.stdout.write(i.toString() + ' ');
            }
        }
})
function isPrime(n) { //判断素数函数
    for (let j = 2; j <= parseInt(Math.sqrt(n)); j++)
        if (n % j == 0)
            return false;
    return true;
}

/**
 * 本题很简单，但是有一个注意点：判断素数时不要直接循环到n，不然会超时，必须循环到“根号n”
 * -------------------------------------------------------------------------------------
 * 作者：JS杂技选手 
 * 联系邮箱：hao@xmint.cn
 */