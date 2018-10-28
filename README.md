# test

> ThoughtWorks test project

## Build Setup

``` bash
# install dependencies
npm install or cnpm install

# serve with hot reload at localhost:8080
1.npm run dev
2.cd mock-server and npm run start

tip:
在添加resource标签后，会检测溢出情况，如有溢出，会截断，并显示展开按钮

头像的菜单，添加resource的弹出窗口，以及上述展开按钮的弹出框，均由utils/create实现

最后，本次demo除了utils下的Clamp.js（文本溢出省略库），其余均独立开发，部分如utils/crete，使用场景有限，可能存在未考虑到的地方，请谅解

