# @toolkitx/ui

## Predependencies
* ng-zorro-antd

## Setup
Add ant design
```shell
ng add ng-zorro-antd
```
assets: 
```js
{
    "glob": "**/*",
    "input": "./node_modules/toolkitx-ui/assets/",
    "output": "/assets/toolkitx"
}
```
style.less
```less
@import "../node_modules/ng-zorro-antd/ng-zorro-antd.less";
@import "../node_modules/@toolkitx/ui/styles/toolkitx-ui.less";
```
