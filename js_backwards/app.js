aaa = {};

(aaa[e] = a[e]), 0;

aaaa = "{";
for (let x of Object.keys(aaa)) {
  aaaa = aaaa + '"' + x + '"' + ":" + aaa[x] + ",";
}
aaaa = aaaa + "}";

// 参数处理
const args = process.argv.slice(2);

let k2 = args[0] ?? "cs";

// 环境模拟
var window = global;
var location = {};
function createMockDocument() {
  return {
    createElement: function (tagName) {
      return {
        tagName: tagName.toUpperCase(),
        appendChild: function (child) {
          this.children = this.children || [];
          this.children.push(child);
        },
        setAttribute: function (name, value) {
          this.attributes = this.attributes || {};
          this.attributes[name] = value;
        },
        // 添加其他需要的方法
      };
    },
    createTextNode: function (text) {
      return { nodeType: 3, textContent: text };
    },
    body: {
      appendChild: function (child) {
        this.children = this.children || [];
        this.children.push(child);
      },
    },
    // 添加其他需要的 document 属性和方法
  };
}

const document = createMockDocument();

const { JSDOM } = require("jsdom");

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;
const window = dom.window;

// webpack示例
window = global;
!(function (e) {
  var t = {};

  // 加载器  所有的模块都是从这个函数加载 执行
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }

  window.r = n; //将模块加载器函数 n 挂载到全局对象 window 上，使其成为全局对象的一个属性
})({});
