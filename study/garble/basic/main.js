// async基础语法
async function fun0() {
    console.log(1);
    return 1;
}
// fun0().then(val => {
//     console.log(val + "a") // 1,1
// })

async function fun1() {
    console.log('Promise');
    return new Promise(function (resolve, reject) {
        resolve('Promise' + "b")
    })
}
// fun1().then(val => {
//     console.log(val); // Promise Promise
// })

async function main() {
    val = await fun0()
    console.log(val + "a");
    val = await fun1()
    console.log('Promise' + "b");
}

main()
console.log(5)