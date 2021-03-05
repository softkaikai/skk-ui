### 配置vue
eslint-plugin-vue需要配合vue-eslint-parser一起使用，否则无法解析template标签  

### eslint + prettier
eslint-config-prettier需要配合eslint-plugin-prettier一起使用，用于关闭eslint中和prettier冲突的规则，
同时将prettier的错误输出重定向到eslint，也就是让eslint输入prettier的错误信息
