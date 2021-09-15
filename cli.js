#!/usr/bin/env node
// Node CLI 应用入口文件必须要有这样的文件头

// 如果是 Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

/**
 * 脚手架的工作原理
 * 1.执行脚手架命令 nicole-cli
 * 2.通过命令行交互询问用户问题
 * 3.根据用户的答案在当前目录生成模板一样的文件
 * 4.fs.readdir读取文件信息
 * 5.ejs.renderFile 模板引擎渲染，将用户的答案渲染到模板当中并返回内容结果
 * 5.fs.writeFileSync 将模板引擎结果写入到目标文件路径
 */

console.log('cli working')