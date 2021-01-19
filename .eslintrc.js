module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 2020
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  //插件继承
  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],

  // 校验规则
  rules: {
    "vue/no-multiple-template-root":0,//template模板是否允许有多个根目录
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-duplicate-case": 2,//switch中的case标签不能重复
    "no-extra-bind": 2,//禁止不必要的函数绑定
    "no-extra-boolean-cast": 2,//禁止不必要的bool转换
    "no-extra-parens": 2,//禁止非必要的括号
    "no-extra-semi": 2,//禁止多余的冒号
    "no-fallthrough": 1,//禁止switch穿透
    "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    "no-func-assign": 2,//禁止重复的函数声明
    "no-implicit-coercion": 1,//禁止隐式转换
    "no-implied-eval": 2,//禁止使用隐式eval
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "no-label-var": 2,//label名不能与var声明的变量名相同
    "no-lone-blocks": 2,//禁止不必要的嵌套块
    "no-lonely-if": 2,//禁止else语句内只有if语句
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "linebreak-style": [0, "windows"],//换行风格
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multi-str": 2,//字符串不能用\换行
    "no-multiple-empty-lines": [1, { "max": 2 }],//空行最多不能超过2行
    "no-native-reassign": 2,//不能重写native对象
    "no-new-func": 1,//禁止使用new Function
    "no-new-object": 2,//禁止使用new Object()
    "no-new-require": 2,//禁止使用new require
    "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
    "no-param-reassign": 2,//禁止给参数重新赋值
    "no-return-assign": 1,//return 语句中不能有赋值表达式
    "no-script-url": 2,//禁止使用javascript:void(0)
    "no-self-compare": 2,//不能比较自身
    "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "no-undef": 1,//不能有未定义的变量
    "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-unreachable": 2,//不能有无法执行的代码
    "no-unused-expressions": 2,//禁止无用的表达式
    "consistent-this": [2, "that"],//this别名
    "default-case": 1,//switch语句最后必须有default
    "eqeqeq": 2,//必须使用全等
    "indent": ['error', 2],//缩进风格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "new-cap": 0,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 2,//new时必须加小括号
    "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
    "prefer-const": 1,//首选const
    "prefer-spread": 1,//首选展开运算
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
  }
}
