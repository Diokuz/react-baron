## 3.0 breaking changes

`react-baron` → `react-baron/dist/es5`

Default import is `es6` module with css-modules. If you dont have babel and css-modules in your project, import `es5` version with no css from `react-baron/dist/es5`.

## 2.0 breaking changes

All baron specified parameters now passed to `baron` _as is_ with `props.params` (see API below).