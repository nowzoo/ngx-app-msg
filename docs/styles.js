(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/ngx-app-msg.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/ngx-app-msg.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-app-msg-backdrop {\n  z-index: 1071;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #FFF;\n  opacity: 0;\n  transition: all .2s;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%); }\n  .ngx-app-msg-backdrop.visible {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 0.2; }\n  .ngx-app-msg-container {\n  z-index: 1072;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n  .ngx-app-msg-container.visible {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  .ngx-app-msg-container .ngx-app-msg {\n    padding: 0.5rem 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .ngx-app-msg-container .ngx-app-msg .ngx-app-msg-text {\n      padding-left: 1rem; }\n  .ngx-app-msg-container .ngx-app-msg.ngx-app-msg-success {\n      background-color: #28a745;\n      color: #FFF; }\n  .ngx-app-msg-container .ngx-app-msg.ngx-app-msg-wait {\n      background-color: #17a2b8;\n      color: #FFF; }\n  .ngx-app-msg-container .ngx-app-msg.ngx-app-msg-warning {\n      background-color: #ffc107;\n      color: #000; }\n  .ngx-app-msg-container .ngx-app-msg.ngx-app-msg-error {\n      background-color: #dc3545;\n      color: #FFF; }\n  .ngx-app-msg-container .ngx-app-msg > .ngx-app-msg-inner {\n      display: flex;\n      padding-right: 1rem;\n      align-items: center; }\n  .ngx-app-msg-container .ngx-app-msg-icon {\n    width: 1.5em;\n    height: 1.5em;\n    background-size: 1.5em;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .ngx-app-msg-container .ngx-app-msg-dismiss {\n    width: 1em;\n    height: 1em;\n    background-size: 1em;\n    background-position: center;\n    background-repeat: no-repeat; }\n  @-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  .ngx-app-msg-container .ngx-app-msg-wait .ngx-app-msg-icon {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c3Bpbm5lcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMC4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE3NC4zNzUsMTQuMzc1IEMxNzQuMzc1LDE5LjU1MjczNDQgMTcwLjE3NzczNCwyMy43NSAxNjUsMjMuNzUgQzE1OS44MjIyNjYsMjMuNzUgMTU1LjYyNSwxOS41NTI3MzQ0IDE1NS42MjUsMTQuMzc1IEMxNTUuNjI1LDkuMTk3MjY1NjIgMTU5LjgyMjI2Niw1IDE2NSw1IEMxNzAuMTc3NzM0LDUgMTc0LjM3NSw5LjE5NzI2NTYyIDE3NC4zNzUsMTQuMzc1IFogTTE2NSw4Ni4yNSBDMTU5LjgyMjI2Niw4Ni4yNSAxNTUuNjI1LDkwLjQ0NzI2NTYgMTU1LjYyNSw5NS42MjUgQzE1NS42MjUsMTAwLjgwMjczNCAxNTkuODIyMjY2LDEwNSAxNjUsMTA1IEMxNzAuMTc3NzM0LDEwNSAxNzQuMzc1LDEwMC44MDI3MzQgMTc0LjM3NSw5NS42MjUgQzE3NC4zNzUsOTAuNDQ3MjY1NiAxNzAuMTc3NzM0LDg2LjI1IDE2NSw4Ni4yNSBaIE0yMDUuNjI1LDQ1LjYyNSBDMjAwLjQ0NzI2Niw0NS42MjUgMTk2LjI1LDQ5LjgyMjI2NTYgMTk2LjI1LDU1IEMxOTYuMjUsNjAuMTc3NzM0NCAyMDAuNDQ3MjY2LDY0LjM3NSAyMDUuNjI1LDY0LjM3NSBDMjEwLjgwMjczNCw2NC4zNzUgMjE1LDYwLjE3NzczNDQgMjE1LDU1IEMyMTUsNDkuODIyMjY1NiAyMTAuODAyNzM0LDQ1LjYyNSAyMDUuNjI1LDQ1LjYyNSBaIE0xMzMuNzUsNTUgQzEzMy43NSw0OS44MjIyNjU2IDEyOS41NTI3MzQsNDUuNjI1IDEyNC4zNzUsNDUuNjI1IEMxMTkuMTk3MjY2LDQ1LjYyNSAxMTUsNDkuODIyMjY1NiAxMTUsNTUgQzExNSw2MC4xNzc3MzQ0IDExOS4xOTcyNjYsNjQuMzc1IDEyNC4zNzUsNjQuMzc1IEMxMjkuNTUyNzM0LDY0LjM3NSAxMzMuNzUsNjAuMTc3NzM0NCAxMzMuNzUsNTUgWiBNMTM2LjI3MzgyOCw3NC4zNTExNzE5IEMxMzEuMDk2MDk0LDc0LjM1MTE3MTkgMTI2Ljg5ODgyOCw3OC41NDg0Mzc1IDEyNi44OTg4MjgsODMuNzI2MTcxOSBDMTI2Ljg5ODgyOCw4OC45MDM5MDYyIDEzMS4wOTYwOTQsOTMuMTAxMTcxOSAxMzYuMjczODI4LDkzLjEwMTE3MTkgQzE0MS40NTE1NjIsOTMuMTAxMTcxOSAxNDUuNjQ4ODI4LDg4LjkwMzkwNjIgMTQ1LjY0ODgyOCw4My43MjYxNzE5IEMxNDUuNjQ4ODI4LDc4LjU0ODYzMjggMTQxLjQ1MTM2Nyw3NC4zNTExNzE5IDEzNi4yNzM4MjgsNzQuMzUxMTcxOSBaIE0xOTMuNzI2MTcyLDc0LjM1MTE3MTkgQzE4OC41NDg0MzcsNzQuMzUxMTcxOSAxODQuMzUxMTcyLDc4LjU0ODQzNzUgMTg0LjM1MTE3Miw4My43MjYxNzE5IEMxODQuMzUxMTcyLDg4LjkwMzkwNjIgMTg4LjU0ODQzNyw5My4xMDExNzE5IDE5My43MjYxNzIsOTMuMTAxMTcxOSBDMTk4LjkwMzkwNiw5My4xMDExNzE5IDIwMy4xMDExNzIsODguOTAzOTA2MiAyMDMuMTAxMTcyLDgzLjcyNjE3MTkgQzIwMy4xMDExNzIsNzguNTQ4NjMyOCAxOTguOTAzOTA2LDc0LjM1MTE3MTkgMTkzLjcyNjE3Miw3NC4zNTExNzE5IFogTTEzNi4yNzM4MjgsMTYuODk4ODI4MSBDMTMxLjA5NjA5NCwxNi44OTg4MjgxIDEyNi44OTg4MjgsMjEuMDk2MDkzOCAxMjYuODk4ODI4LDI2LjI3MzgyODEgQzEyNi44OTg4MjgsMzEuNDUxNTYyNSAxMzEuMDk2MDk0LDM1LjY0ODgyODEgMTM2LjI3MzgyOCwzNS42NDg4MjgxIEMxNDEuNDUxNTYyLDM1LjY0ODgyODEgMTQ1LjY0ODgyOCwzMS40NTE1NjI1IDE0NS42NDg4MjgsMjYuMjczODI4MSBDMTQ1LjY0ODgyOCwyMS4wOTYwOTM4IDE0MS40NTEzNjcsMTYuODk4ODI4MSAxMzYuMjczODI4LDE2Ljg5ODgyODEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\");\n    -webkit-animation: spin 2s infinite linear;\n            animation: spin 2s infinite linear; }\n  .ngx-app-msg-container .ngx-app-msg-error .ngx-app-msg-icon {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2Fybi13aGl0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMC4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTMyMy44NzQ1MDEsODcuMzkxMTI1IEMzMjcuMDc5MDE0LDkyLjk0NTYzNzMgMzIzLjA1NjYxOSw5OS44ODg4NjQ1IDMxNi42NTYyNzQsOTkuODg4ODY0NSBMMjMzLjM0Mjc1Niw5OS44ODg4NjQ1IEMyMjYuOTMwMDg0LDk5Ljg4ODg2NDUgMjIyLjkyNjI2Niw5Mi45MzQ4NzM0IDIyNi4xMjQ1MjksODcuMzkxMTI1IEwyNjcuNzgxODA4LDE1LjE2NDA2MjIgQzI3MC45ODc4ODQsOS42MDY5NDU3IDI3OS4wMTc5MTYsOS42MTcwMTUxNCAyODIuMjE4MjYzLDE1LjE2NDA2MjIgTDMyMy44NzQ1MDEsODcuMzkxMTI1IFogTTI3NS4wMDAwMzYsNzIuNDU4MzE2NyBDMjcwLjU4OTQ0Nyw3Mi40NTgzMTY3IDI2Ny4wMTM5MjcsNzYuMDMzODM2NiAyNjcuMDEzOTI3LDgwLjQ0NDQyNTYgQzI2Ny4wMTM5MjcsODQuODU1MDE0NiAyNzAuNTg5NDQ3LDg4LjQzMDUzNDQgMjc1LjAwMDAzNiw4OC40MzA1MzQ0IEMyNzkuNDEwNjI1LDg4LjQzMDUzNDQgMjgyLjk4NjE0NCw4NC44NTUwMTQ2IDI4Mi45ODYxNDQsODAuNDQ0NDI1NiBDMjgyLjk4NjE0NCw3Ni4wMzM4MzY2IDI3OS40MTA2MjUsNzIuNDU4MzE2NyAyNzUuMDAwMDM2LDcyLjQ1ODMxNjcgWiBNMjY3LjQxNzkyLDQzLjc1MjQyMjEgTDI2OC43MDU3NjcsNjcuMzYzNTI2NSBDMjY4Ljc2NjAxLDY4LjQ2ODM4NzMgMjY5LjY3OTU1MSw2OS4zMzMzMTc2IDI3MC43ODU5NzQsNjkuMzMzMzE3NiBMMjc5LjIxNDA5Nyw2OS4zMzMzMTc2IEMyODAuMzIwNTIsNjkuMzMzMzE3NiAyODEuMjM0MDYyLDY4LjQ2ODM4NzMgMjgxLjI5NDMwNSw2Ny4zNjM1MjY1IEwyODIuNTgyMTUxLDQzLjc1MjQyMjEgQzI4Mi42NDcyNTYsNDIuNTU5MDE5NyAyODEuNjk3MDgyLDQxLjU1NTU0NzcgMjgwLjUwMTk0NCw0MS41NTU1NDc3IEwyNjkuNDk3OTU0LDQxLjU1NTU0NzcgQzI2OC4zMDI4MTUsNDEuNTU1NTQ3NyAyNjcuMzUyODE2LDQyLjU1OTAxOTcgMjY3LjQxNzkyLDQzLjc1MjQyMjEgTDI2Ny40MTc5Miw0My43NTI0MjIxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\"); }\n  .ngx-app-msg-container .ngx-app-msg-warning .ngx-app-msg-icon {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2Fybi13aGl0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMC4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTMyMy44NzQ1MDEsODcuMzkxMTI1IEMzMjcuMDc5MDE0LDkyLjk0NTYzNzMgMzIzLjA1NjYxOSw5OS44ODg4NjQ1IDMxNi42NTYyNzQsOTkuODg4ODY0NSBMMjMzLjM0Mjc1Niw5OS44ODg4NjQ1IEMyMjYuOTMwMDg0LDk5Ljg4ODg2NDUgMjIyLjkyNjI2Niw5Mi45MzQ4NzM0IDIyNi4xMjQ1MjksODcuMzkxMTI1IEwyNjcuNzgxODA4LDE1LjE2NDA2MjIgQzI3MC45ODc4ODQsOS42MDY5NDU3IDI3OS4wMTc5MTYsOS42MTcwMTUxNCAyODIuMjE4MjYzLDE1LjE2NDA2MjIgTDMyMy44NzQ1MDEsODcuMzkxMTI1IFogTTI3NS4wMDAwMzYsNzIuNDU4MzE2NyBDMjcwLjU4OTQ0Nyw3Mi40NTgzMTY3IDI2Ny4wMTM5MjcsNzYuMDMzODM2NiAyNjcuMDEzOTI3LDgwLjQ0NDQyNTYgQzI2Ny4wMTM5MjcsODQuODU1MDE0NiAyNzAuNTg5NDQ3LDg4LjQzMDUzNDQgMjc1LjAwMDAzNiw4OC40MzA1MzQ0IEMyNzkuNDEwNjI1LDg4LjQzMDUzNDQgMjgyLjk4NjE0NCw4NC44NTUwMTQ2IDI4Mi45ODYxNDQsODAuNDQ0NDI1NiBDMjgyLjk4NjE0NCw3Ni4wMzM4MzY2IDI3OS40MTA2MjUsNzIuNDU4MzE2NyAyNzUuMDAwMDM2LDcyLjQ1ODMxNjcgWiBNMjY3LjQxNzkyLDQzLjc1MjQyMjEgTDI2OC43MDU3NjcsNjcuMzYzNTI2NSBDMjY4Ljc2NjAxLDY4LjQ2ODM4NzMgMjY5LjY3OTU1MSw2OS4zMzMzMTc2IDI3MC43ODU5NzQsNjkuMzMzMzE3NiBMMjc5LjIxNDA5Nyw2OS4zMzMzMTc2IEMyODAuMzIwNTIsNjkuMzMzMzE3NiAyODEuMjM0MDYyLDY4LjQ2ODM4NzMgMjgxLjI5NDMwNSw2Ny4zNjM1MjY1IEwyODIuNTgyMTUxLDQzLjc1MjQyMjEgQzI4Mi42NDcyNTYsNDIuNTU5MDE5NyAyODEuNjk3MDgyLDQxLjU1NTU0NzcgMjgwLjUwMTk0NCw0MS41NTU1NDc3IEwyNjkuNDk3OTU0LDQxLjU1NTU0NzcgQzI2OC4zMDI4MTUsNDEuNTU1NTQ3NyAyNjcuMzUyODE2LDQyLjU1OTAxOTcgMjY3LjQxNzkyLDQzLjc1MjQyMjEgTDI2Ny40MTc5Miw0My43NTI0MjIxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\");\n    -webkit-filter: invert(75%);\n            filter: invert(75%); }\n  .ngx-app-msg-container .ngx-app-msg-success .ngx-app-msg-icon {\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTEwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y2hlY2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC45NjQ0Mzc1LDkxLjEwNjY2MzIgTDYuNDY0NDA1NzMsNTguNjA2NjMxNSBDNC41MTE4NjQ3Niw1Ni42NTQwOTA1IDQuNTExODY0NzYsNTMuNDg4MjY3MSA2LjQ2NDQwNTczLDUxLjUzNTUzMDggTDEzLjUzNTMxMTEsNDQuNDY0NDMwMSBDMTUuNDg3ODUyLDQyLjUxMTY5MzkgMTguNjUzODcwOCw0Mi41MTE2OTM5IDIwLjYwNjQxMTcsNDQuNDY0NDMwMSBMNDIuNDk5OTg3OCw2Ni4zNTc4MTA5IEw4OS4zOTM1ODgzLDE5LjQ2NDQwNTcgQzkxLjM0NjEyOTIsMTcuNTExODY0OCA5NC41MTIxNDgsMTcuNTExODY0OCA5Ni40NjQ2ODg5LDE5LjQ2NDQwNTcgTDEwMy41MzU1OTQsMjYuNTM1NTA2NCBDMTA1LjQ4ODEzNSwyOC40ODgwNDc0IDEwNS40ODgxMzUsMzEuNjUzODcwOCAxMDMuNTM1NTk0LDMzLjYwNjYwNyBMNDYuMDM1NTM4MSw5MS4xMDY4NTg1IEM0NC4wODI4MDE4LDkzLjA1OTM5OTUgNDAuOTE2OTc4NCw5My4wNTkzOTk1IDM4Ljk2NDQzNzUsOTEuMTA2NjYzMiBMMzguOTY0NDM3NSw5MS4xMDY2NjMyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+\"); }\n  .ngx-app-msg-container .ngx-app-msg-dismiss {\n    background-image: url(\"data:image/png;base64,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\");\n    cursor: pointer; }\n  .ngx-app-msg-container .ngx-app-msg-dismiss:hover {\n      -webkit-filter: invert(15%);\n              filter: invert(15%); }\n  .ngx-app-msg-container .ngx-app-msg-warning .ngx-app-msg-dismiss {\n    -webkit-filter: invert(75%);\n            filter: invert(75%); }\n  .ngx-app-msg-container .ngx-app-msg-warning .ngx-app-msg-dismiss:hover {\n      -webkit-filter: invert(60%);\n              filter: invert(60%); }\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/ngx-app-msg.scss":
/*!******************************!*\
  !*** ./src/ngx-app-msg.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./ngx-app-msg.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/ngx-app-msg.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** multi ./src/styles.scss ./src/ngx-app-msg.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/chris/dev/my_angular_libs/ngx-app-msg/src/styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! /Users/chris/dev/my_angular_libs/ngx-app-msg/src/ngx-app-msg.scss */"./src/ngx-app-msg.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map