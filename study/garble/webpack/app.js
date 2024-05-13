const fs = require('fs')
var code = fs.readFileSync('./input.js', 'utf-8')

// var code = `
// let x = '1' + 1
// console.log('x', x)
// `

const options = {
    compact: false,  // 代码压缩配置(默认)
    // identifierNamesGenerator: 'hexadecimal' // hexadecimal:16进制(默认)  mangled: 普通的简写字符，如 a、b、c 等
    unicodeEscapeSequence: true, // 对数组中字符串混淆(默认false)
}

const a = module.paths
const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
    return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

output_code = obfuscate(code, options)
console.log(output_code)
fs.writeFileSync('./output.js', output_code, "utf-8")