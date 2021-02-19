let rl = require('readline').createInterface(process.stdin, process.stdout);
let dataArr = [], max = -1;
let info = {};
rl.on('line', function (line) {
    scanf(line);

    if (max == 0) {
        //初始化对象
        for (let i = 0; i < dataArr.length; i++) {
            let shcool = dataArr[i][2].toLocaleLowerCase();//学校
            info[shcool] = { score: 0, count: 0, shcool: shcool, scort: 0 }; //初始化
        }
        //存储数据
        for (let i = 0; i < dataArr.length; i++) {
            let shcool = dataArr[i][2].toLocaleLowerCase();//学校
            let rank = dataArr[i][0].split('')[0];//级别
            let score = dataArr[i][1]; //分数
            //分数加权
            if (rank == 'B') {
                score = parseInt(score / 1.5);
            } else if (rank == 'T') {
                score = parseInt(score * 1.5);
            } else {
                score = score - 0;
            }
            info[shcool].score += score;
            info[shcool].count++;
        }
        let schoolArr = Object.keys(info);
        let schoolDataArr = [];
        for (let i = 0; i < schoolArr.length; i++) {
            schoolDataArr[i] = info[schoolArr[i]]
        }

        //排序输出
        schoolDataArr.sort(function (a, b) {
            if (a.score == b.score) {
                b.scort = 1;
                if (a.count == b.count) {
                    b.scort = 1;
                    return a.shcool.charCodeAt(0) - b.shcool.charCodeAt(0)
                } else {
                    return a.count - b.count;
                }
            } else {
                return b.score - a.score;
            }
        })
        let JP = 0;
        console.log(schoolDataArr.length);
        for (let i = 0; i < schoolDataArr.length; i++) {
            let temp = schoolDataArr[i];
            if (temp.scort == 1) {
                console.log(JP, temp.shcool, temp.score, temp.count);
            } else {
                console.log(i + 1, temp.shcool, temp.score, temp.count);
                JP = i + 1;
            }
        }
    }
})
function scanf(line) {
    if (max == -1) {
        max = line;
    } else {
        max--;
        dataArr.push(line.split(' '));
    }
}

/**
 * 作者：JS杂技选手
 * 邮箱：hao@xmint.cn
 */
