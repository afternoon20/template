# コーディングのテンプレートファイル
## コーディング規約
基本的なコーディングは、Googleのコーディング規約に従う。
http://re-dzine.net/2012/05/google-htmlcss-style-guide/

### Sass
#### @extendを使う時は、プレースホルダを使用する
@extendによって、意図しないグルーピングが行われてしまい可読性の低下に繋がってします。
`
//OK
%btn,.btn{
    display: block;
    margin: 0 auto;
}

.btn--alert{
    @extend %btn;
    background-color: red;
}

// NG
.btn{
    display: block;
    margin: 0 auto;
}

.btn--alert{
    @extend .btn;
    background-color: red;
}

`
## エラーの対処
### Windowsでgulpが起動しない。
`Error: Missing binding C:\Users\shimada\Documents\template\node_modules\node-sass\vendor\win32-x64-72\binding.node`

node-sassをリビルドする。

`npm rebuild node-sass`


