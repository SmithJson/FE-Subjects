# Webpack 介绍 {ignore=true}

[toc]

## hash、chunkhash、contenthash

- hash：只要有一个文件内容被修改，所有文件的 hash 值都发生改变
- chunkhash：只改变内容被修改的文件 hash 值
- contenthash：当一个文件内容被修改时，里面引入的css、less等文件的 hash 值不会发生变化。如果没有这个

## glob

查找文件的路径

## rimraf

删除文件(夹)

