### 配置vue
eslint-plugin-vue需要配合vue-eslint-parser一起使用，否则无法解析template标签  

### eslint + prettier
eslint-config-prettier需要配合eslint-plugin-prettier一起使用，用于关闭eslint中和prettier冲突的规则，
同时将prettier的错误输出重定向到eslint，也就是让eslint输入prettier的错误信息
* 需要注意的是，使用webstorm的时候，最好手动指定eslint配置文件，否则可能导致prettier配置不生效的问题
