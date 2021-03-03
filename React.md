## React 概念
React 是一个用于构建用户界面的 JavaScript 库  
- 按需引入


## 项目文件结构
- 分类原则
  - 按功能或路由组织
  - 按文件类型组织
    - api 接口
    - components 组件

- 最多3到4个层级
- 不要过度思考：先放到一起，马上开始，集中办公原则

## Hello World
```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElemtentById('root')
);
```

## JSX

- 为什么？
  React 渲染逻辑本质上与其他 UI 逻辑内在耦合：绑定处理事件、通知 UI 、在 UI 中展示准备好的数据  

  标记和逻辑放入组件，松散耦合单元，关注点分离  

  JSX 和 UI 放在一起时，会在视觉上有辅助作用  

- JSX 使用 {} 嵌入表达式
  支持任何有效的 JavaScript 表达式  
  书写建议：
  - 拆分多行
  - 包裹在扣号内
  
- JSX 本身也是表达式  
编译之后，JSX表达式会转为普通 JavaScript 对象  
支持 if 条件判断 和 for 循环的流程控制  
- 赋值给变量  
- 作为函数参数  
- 作为函数返回值   

字符串 "" 和 表达式 {} 不应同时使用  
语法更接近 JS
-  使用 小驼峰命名 camelCase  
  class -> className  
  tabindex -> tabIndex  

使用 JSX 指定子元素
假如一个标签里没有内容，可使用 `/>` 闭合标签