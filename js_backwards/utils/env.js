// 从堆栈跟踪中提取调用者信息
function getCallerInfo(stack) {
  // 分割堆栈跟踪为各行
  const stackLines = stack.split("\n");
  // console.log(stackLines);
  // 通常第三行是调用者的信息（第一行是"Error"，第二行是当前函数）
  if (stackLines.length >= 4) {
    // 提取文件名和行号
    const callerLine = stackLines[2].trim();
    // 匹配文件名和行号
    const match = callerLine.match(/at (.+) \((.+):(\d+):(\d+)\)/);
    if (match) {
      return `${match[2]}:${match[3]}`;
    }
    // 如果是匿名函数或eval等情况
    const anonymousMatch = callerLine.match(/at (.+):(\d+):(\d+)/);
    if (anonymousMatch) {
      return `${anonymousMatch[1]}:${anonymousMatch[2]}`;
    }
  }
  return "未知位置";
}

function create_proxy(target, name = "target") {
  //   const accessedProperties = new Set();

  return new Proxy(target, {
    get(obj, prop) {
      // 记录被访问的属性
      //   if (!accessedProperties.has(prop)) {
      if (1) {
        // 获取调用栈信息
        const stack = new Error().stack;
        // 解析调用栈，获取调用者信息
        const callerInfo = getCallerInfo(stack);

        if (typeof obj[prop] == "function") {
          _r = "function";
        } else {
          _r = JSON.stringify(obj[prop]);
        }
        console.log(
          `[${name}] 访问属性: ${String(prop)}`,
          `值: ${_r}`,
          `调用位置: ${callerInfo}`
        );
        // accessedProperties.add(prop);
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      // 获取调用栈信息
      const stack = new Error().stack;
      // 解析调用栈，获取调用者信息
      const callerInfo = getCallerInfo(stack);
      if (typeof value == "function") {
        _r = "function";
      } else {
        _r = JSON.stringify(value);
      }
      console.log(
        `[${name}] 设置属性: ${String(prop)}`,
        `新值: ${_r}`,
        `调用位置: ${callerInfo}`
      );
      obj[prop] = value;
      return true;
    },
  });
}

window = {};
document = {};
location = {};
localStorage = {};
navigator = {};
history = {};
screen = {};
// 使用示例
const proxy_array = [
  "window",
  "document",
  "location",
  "navigator",
  "history",
  "screen",
];
proxy_array.forEach((k) => {
  global[k] = create_proxy(global[k], k);
});
