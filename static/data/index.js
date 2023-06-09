module.exports = {
  list: [{
    "id": 1,
    "title": "闭包是什么? ",
    "items": ["闭包(closure)就是能够读取其他函数内部变量的函数（自带作用域的函数）", "普通函数", "闭包就是基本数据类型", "变量"],
    "answer": 0,
    "reason": "闭包(closure)就是能够读取其他函数内部变量的函数（自带作用域的函数）"
  }, {
    "id": 2,
    "title": "闭包的用途?",
    "items": ["作为函数", "闭包是将函数内部和函数外部连接起来的桥梁", "作为对象", "作为参数"],
    "answer": 1,
    "reason": "闭包是将函数内部和函数外部连接起来的桥梁"
  }, {
    "id": 3,
    "title": "简述事件循环原理？",
    "items": ["宏任务和微任务", "宏任务", "JS 为了执行异步任务而实现的运行机制，其中的任务分为宏任务和微任务。当主任务结束之后，就立刻执行微任务，后执行宏任务，循环往复", "微任务"],
    "answer": 2,
    "reason": "JS 为了执行异步任务而实现的运行机制，其中的任务分为宏任务和微任务。\n        宏任务可以认为是运行时提供的 API，由运行时自己实现一个异步的方法，这个异步方法通常可以看做一个单独的 JS 环境。\n        微任务是 JS 语言本身提供的 API，因此当主任务结束之后，就立刻会执行"
  }, {
    "id": 4,
    "title": "虚拟dom是什么?",
    "items": ["DOM 对象", "普通类型数据", "框架中为了代指真实 DOM 使用的对象，通过新旧虚拟 DOM 对比，生成变更应用到真实 DOM 上", "DOM 对象的别名"],
    "answer": 2,
    "reason": "虚拟 DOM：框架中为了代指真实 DOM 使用的对象\n        用途：通过新旧虚拟 DOM 对比，生成变更应用到真实 DOM 上"
  }, {
    "id": 5,
    "title": "虚拟DOM的优缺点?",
    "items": ["比真实 DOM 慢，不消耗性能", "比真实 DOM 更复杂", "优点：没有真实 DOM 复杂的引用关系，跨平台；缺点：消耗一定的性能去生成和计算", "虚拟 DOM 不跨平台"],
    "answer": 2,
    "reason": "优点：没有真实 DOM 复杂的引用关系，跨平台；缺点：消耗一定的性能去生成和计算"
  }, {
    "id": 6,
    "title": "vue 和 react 里的key的作用是什么? ",
    "items": ["普通属性，没有特殊作用", "key不是唯一的", "影响 diff 操作，会使 diff 不准确、更慢", "key 是给每一个 vnode 的唯一 id，依靠 key，diff 操作可以更准确、更快速"],
    "answer": 3,
    "reason": "key 是给每一个 vnode 的唯一 id,依靠 key，diff 操作可以更准确、更快速。\n        不加 key 会导致重复的 dom 被重新生成浪费性能"
  }, {
    "id": 7,
    "title": "用index作为key会怎样? ",
    "items": ["报错，用了会报错", "在逆序添加、逆序删除等破坏顺序的操作时会效率低；在包含输入类的 DOM 操作会产生错误 DOM 更新、数据错位", "不会有任何影响", "特殊情况下会报错，页面崩溃"],
    "answer": 1,
    "reason": "使用 index 做 key,在逆序添加、逆序删除等操作的时候,\n        因为每一个节点都找不到对应的 key,会导致部分节点不能复用,所有的新 vnode 都需要重新创建，\n        导致diff中的优化失效(降低了复用性,违背了虚拟DOM的初衷)；在包含输入类的 DOM 操作会产生错误 DOM 更新、数据错位"
  }, {
    "id": 8,
    "title": "vue 双向绑定的原理是什么?",
    "items": ["通过数据劫持 + 发布订阅模式的方式来实现的", "数据劫持", "观察者模式", "proxy代理"],
    "answer": 0,
    "reason": "通过:  数据劫持 + 发布订阅模式的方式来实现的；\n        数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；"
  }, {
    "id": 9,
    "title": "vue的template会变成什么?",
    "items": ["变成 Vnode", "template 会被编译成 AST 语法树，AST 是指抽象语法树(AST),或者语法树,是源代码的抽象语法结构的树状表现形式。 ", "字符串", "虚拟dom"],
    "answer": 1,
    "reason": "template会被编译成AST语法树,AST是指抽象语法树(AST),或者语法树,是源代码的抽象语法结构的树状表现形式。\n        代码分析 首先、定义一个简单的html DOM结构、其中包括比较常见的标签、文本以及注释,用来生成AST结构"
  }, {
    "id": 10,
    "title": "用过vue 的render吗? render和template有什么关系",
    "items": ["template => 虚拟 dom (diff 、patch)", "template => render => 虚拟 dom (diff 、patch)", "template => ast => 虚拟 dom (diff 、patch)", "compiler 过程(template => ast) -> reactivity 过程(data proxy、ast => render) -> runtime 过程(render => VNode/diff/patch)"],
    "answer": 3,
    "reason": "Vue最核心的三部分，即：compiler、reactivity、runtime。\n        compiler表示template编译成有规律的数据结构，即AST抽象语法树。\n        reactivity表示data数据可以被监控，通过proxy语法来实现。\n        runtime表示运行时相关功能，虚拟DOM(即：VNode)、diff算法、真实DOM操作等。"
  }, {
    "id": 11,
    "title": "关于生命周期钩子完整的是",
    "items": ["1.beforeCreate,2.created,3.beforeMount,4.mounted,5.beforeUpdate,6.updated,7.beforeDestroy,8.destroyed", "1.beforeCreate,2.created,3.beforeMount,4.mounted,5.beforeUpdate,6.updated,7.activated,8.deactivated,9.beforeDestroy,10.destroyed", "1.created,2.mounted,3.updated,4.destroyed", "1.beforeCreate,2.beforeMount,3.beforeUpdate,4.beforeDestroy"],
    "answer": 1,
    "reason": "　　（1）beforeCreate（）       实例创建前触发\n        　　（2）created（）                实例创建完成，\n        　　（3）beforeMount（）        模板渲染前，可以访问数据，模板编译完成，虚拟DOM已经存在\n        　　（4）mounted（）              模板渲染完成，可以拿到DOM节点和数据\n        　　（5）beforeUpdate（）      更新前\n        　　（6）updated（）               更新完成\n        　　（7）activated（）         　 激活前\n        　　（8）deactivated（）         激活后\n        　　（9）beforeDestroy（）　 销毁前\n        　　（10）destroyed（）　　  销毁后"
  }, {
    "id": 12,
    "title": "关于css加载会造成哪些阻塞，完整且正确的答案是？",
    "items": ["dom树的渲染阻塞", "dom树的解析阻塞", "1.dom树的渲染阻塞，2.js加载的阻塞", "html的阻塞"],
    "answer": 2,
    "reason": "1.css加载不会阻塞DOM树的解析\n      2.css加载会阻塞DOM树的渲染\n      3.css加载会阻塞后面js语句的执行、"
  }, {
    "id": 13,
    "title": "关于CSS加载速度的优化问题完整的是？",
    "items": ["使用CDN", "对css进行压缩", "减少http请求数，将多个css文件合并", "1.使用CDN,2.对css进行压缩，3.合理的使用缓存，4.减少http请求数，将多个css文件合并"],
    "answer": 3,
    "reason": "1.使用CDN(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)\n      2.对css进行压缩(可以用很多打包工具，比如webpack,gulp等，也可以通过开启gzip压缩)\n      3.合理的使用缓存(设置cache-control,expires,以及E-tag都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)\n      4.减少http请求数，将多个css文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)"
  }, {
    "id": 14,
    "title": "关于前端渲染十万条数据，以下说法完整的是？",
    "items": ["分页", "1.分页，2.createDocumentFragment文档碎片，3.使用requestAnimationFrame优化，按帧对网页进行重绘，4.根据视口高做懒加载", "根据视口高做懒加载", "createDocumentFragment文档碎片"],
    "answer": 1,
    "reason": "1.分页;\n      2.createDocumentFragment文档碎片;\n      3.使用requestAnimationFrame优化;\n      按帧对网页进行重绘;\n      4.根据视口高做懒加载;"
  }, {
    "id": 15,
    "title": "单位vw/vh与单位百分百的区别？",
    "items": ["100%是相对于视口的宽度和高度", "vw/vh是相对于包含它的最近的父元素的高度和宽度", "都一样，没区别", "100%是相对于包含它的最近的父元素的高度和宽度，vw/vh是相对于视口的宽度和高度"],
    "answer": 3,
    "reason": "100%是相对于包含它的最近的父元素的高度和宽度，vw/vh是相对于视口的宽度和高度"
  }, {
    "id": 16,
    "title": "let与var区别，正确且完整的是？",
    "items": ["let有变量提升，var没有", "let有局部作用域,var没有", "let存在声明覆盖、变量提升问题，var无声明覆盖、变量提升问题，有局部作用域", "var存在声明覆盖、变量提升问题，let无声明覆盖、变量提升问题，有局部作用域"],
    "answer": 3,
    "reason": "var存在声明覆盖、变量提升问题，let无声明覆盖、变量提升问题，有局部作用域"
  }, {
    "id": 17,
    "title": "关于JSON.parse(JSON.stringify())拷贝的缺陷，正确的是？",
    "items": ["不能解决循环引用的问题，不能拷贝特殊对象(undefined Function RegExp、BigInt、Date、Set、Map)", "不能解决循环引用的问题，但能拷贝特殊对象(undefined Function RegExp、BigInt、Date、Set、Map)", "能解决循环引用的问题，但不能拷贝特殊对象(undefined Function RegExp、BigInt、Date、Set、Map)", "能解决循环引用的问题，也能拷贝特殊对象(undefined Function RegExp、BigInt、Date、Set、Map)"],
    "answer": 0,
    "reason": "不能解决循环引用的问题，不能拷贝特殊对象(undefined Function RegExp、BigInt、Date、Set、Map)"
  }, {
    "id": 18,
    "title": "关于单向数据流优点和缺点，正确的是？",
    "items": ["优点：状态改变可追溯；变化可预测；易调试。缺点：可维护性差；不易理解", "优点：易调试。缺点：变化不可预测；不易调试", "优点：新数据能自动更新；代码量缩减；代码便捷。缺点：状态改变难追溯；可维护性弱，不易理解；变化不可预测；不易调试", "优点：状态改变可追溯；可维护性强；易理解；变化可预测；易调试。缺点：新数据不能自动更新；代码量上升；代码繁琐"],
    "answer": 3,
    "reason": "优点：\n      所有状态的改变可追溯；\n      可维护性强，容易理解；\n      状态变化可预测，容易调试。\n      缺点：\n      页面渲染完成后，有新数据不能自动更新\n      代码量上升，管理的严格要求，会显得代码繁琐。"
  }, {
    "id": 19,
    "title": "关于单向数据流优点和缺点，正确的是？",
    "items": ["优点：状态改变可追溯；变化可预测；易调试。缺点：可维护性差；不易理解", "优点：易调试。缺点：变化不可预测；不易调试", "优点：新数据能自动更新；代码量缩减；代码便捷。缺点：状态改变难追溯；可维护性弱，不易理解；变化不可预测；不易调试", "优点：状态改变可追溯；可维护性强；易理解；变化可预测；易调试。缺点：新数据不能自动更新；代码量上升；代码繁琐"],
    "answer": 3,
    "reason": "优点：\n        所有状态的改变可追溯；\n        可维护性强，容易理解；\n        状态变化可预测，容易调试。\n        缺点：\n        页面渲染完成后，有新数据不能自动更新\n        代码量上升，管理的严格要求，会显得代码繁琐。"
  }, ]
};