let x = 2;

async function test() {
    x += await 2;
    console.log(x);	// 输出什么？
}

test();
x = 1;
console.log(x);