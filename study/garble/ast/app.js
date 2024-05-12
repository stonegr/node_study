// ast_demo.js
const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default
const fs = require('fs')
const types = require('@babel/types');
const { log } = require('console');

// js_code = `var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054"`
js_code = fs.readFileSync('baidu.js', { encoding: 'utf-8' })

// 转语法树
let ast = parse.parse(js_code);

// 加载解密函数
let top3_code = ''
let null_ast = parse.parse('')
for (let i = 0; i < 3; i++) {
    top3_code += generator(ast.program.body[i]).code
    ast.program.body[i] = null_ast
}
// console.log(top3_code)
eval(top3_code)
console.log(_0x4857('0x2a7'))

// 编写插件 进行ast语法树结构修改 替换还原代码
// 处理编码
vistor1 = {
    // Identifier(p) {
    //     if (p.node.name == 'a') {
    //         p.node.name = 'ab'
    //     }
    // },
    StringLiteral(path) {
        if (path.node.value.includes('0x')) {
            path.node.extra.raw = path.node.rawValue;
        }

    },

    // ------------------------
    // BinaryExpression(path) {
    //     let { left, operator, right } = path.node;
    //     if (types.isNumericLiteral(left) && operator == "+" && types.isNumericLiteral(right)) {
    //         value = left.value + right.value
    //         console.log(value);
    //         path.replaceWith(types.valueToNode(value))   // 进行方法替换
    //     }
    //     // 处理字符串拼接  var b = "he" + "llo"
    //     if (types.isStringLiteral(left) && types.isStringLiteral(right) && operator == '+') {
    //         console.log(path.toString())
    //         let value = left.value + right.value
    //         path.replaceWith(types.valueToNode(value))
    //     }
    // }
    // ------------------------
    // CallExpression(path) {
    //     let { callee, arguments } = path.node
    //     let object = callee.object.value;
    //     let property = callee.property.value;
    //     let argument = arguments[0].value;
    //     array = object[property](argument)
    //     path.replaceWithMultiple(types.valueToNode(array))
    // }
    // ------------------------
    CallExpression(path) {
        if (path.node.callee.name = "_0x4857") {
            try {
                r = eval(path.toString())
                path.replaceInline(types.valueToNode(r))
            } catch (error) {

            }
        }
    }
}

traverse(ast, vistor1)

const { code } = generator(ast, opts = { "comments": false }, js_code);
fs.writeFile('output.js', code, (err) => { });