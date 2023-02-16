var procCompiler=function(){"use strict";function e(){}e.prototype={process:function(e,t){return t.fileInfo&&!/\.s[a|c]ss/i.test(t.fileInfo.filename)?e:[e].concat([{pattern:/^@each\s+(\$[\w-_]+)(,\s*\$[\w-_]+)?\s+in\s+(\$[\w-_]+)\s*\{([^]*)\n\}/gm,replacement:function(e,t,r,n,i,s,o){var c=" ".repeat(4);return".loop(@i) when (@i > 0) {\n"+c+(r?"@item: extract(@"+n+", @i);\n"+c+t+": extract(@item, 1);\n"+c+"@"+(r=r.split("$").pop())+": extract(@item, 2);\n"+c:"@"+t+": extract(@"+n+", @i);\n"+c)+i+"\n\n"+c+".loop("+n+" - 1)\n}\n\n.loop(length("+n+"))"},order:0},{pattern:/@extend\s\.([a-zA-Z-_]*)/gi,replacement:"&:extend(.$1)",order:2},{pattern:/@for\s([\w$]+)\sfrom\s([\w$]+)\s(through|to)\s(.*)\s\{((?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*)\}/gi,replacement:function(e,t,r,n,i,s){return`.for(${t}: ${r}) when (${t} ${"through"===n?"<=":"<"} ${i}) {`+s.replace(new RegExp("(?:#{)?"+t+"}?","gi"),"@{"+t+"}")+`  .for((${t} + 1));
}
.for();`},order:0},{pattern:/(@function\s)|(@return)/gi,replacement:function(e,t,r){return t?".function-":"return:"},order:1},{pattern:/@if\s([()\w\s$=><!-]+)/gi,replacement:function(e,t){return"& when ("+t.replace("==","=").trim()+") "},order:.1},{pattern:/@if\s([()\w\s$=><!-]+)([^]+?)([ \t]*)@else/gi,replacement:function(e,t,r,n){t=t.replace("==","=").trim(),n=`
${n}& when not (${t})`;return`& when (${t}) `+r.trim()+n},order:0},{pattern:/@import\s?['|"]([\w-_]+|[\w-_/]+\/|\.\.?\/)([^./]*?)['|"];/gi,replacement:function(e,t,r){return r?'@import (optional) "'+t+r+'.scss";\n@import (optional) "'+t+"_"+r+'.scss";':'@import (optional) "'+t+'.scss";\n@import (optional) "_'+t+'.scss";'},order:2},{pattern:/@include\s([\w\-]+)/gi,replacement:".$1",order:2},{pattern:/@mixin\s([\w\-]*)(\(.*\))?\s?{/gi,replacement:".$1$2 {",order:2},{pattern:/\n@while\s([()\w\s=><!-]*(\$\w+)[()\w\s=><!-]*)\s*\{([^]*)\n\}/gi,replacement:function(e,t,r,n){return console.log(arguments),n=n.replace(new RegExp("\\"+r+"\\s*:\\s*([^;\\n]+?)[;\\n]"),(e,t)=>".while("+t+")"),"\n.while ("+r+") when ("+t.trim()+") {"+n+"\n}\n\n.mixin("+r+")"},order:0},{pattern:/adjust-hue\((.+),(.+)\)/gi,replacement:"spin($1,$2)",order:3},{pattern:/calc\(([^;]+)\)/gi,replacement:function(e,t){return/\#{(?!\$)([^}]+)\}/gi.test(t)?"calc("+(t=t.replace(/[-+*\/][^#]+?}|([-+*\/])/gi,function(e,t){return t?'~"'+t+'"':e}).replace(/\#\{([^}]+)}/gi,"$1").replace(/\$/gi,"@"))+")":'calc(~"'+t+'")'},order:0},{pattern:/\s?\!default/gi,replacement:"",order:3},{pattern:/\$([\w\d_-]+?)\s*\:\s*(\(\s*[\d\w\"\'"]+\s*\:[^]+?\));?$/gm,replacement:function(e,t,r){return"@"+t+": "+(r=r.slice(1,-1).trim().replace(/\:\s*/g," "))},order:0},{pattern:/\((.*)!important\)/gi,replacement:function(e,t){return"("+t.trim()+") !important"},order:3},{pattern:/\#{([^}]+)\}/gi,replacement:function(e,t){return/\#{(?!\$)([^}]+)\}/gi.test(e)?e.replace(/\+\s?"/gi,'~"').replace(/\#\{([^}]+)}/gi,"$1").replace(/\$/gi,"@"):"@{"+t.replace(/\$/gi,"")+"}"},order:0},{pattern:/nth\(/gi,replacement:"extract(",order:1},{pattern:/rgba\(((?:#|\$)[^,$]+),\s?([^,)]+)\)/gi,replacement:"fade($1, ($2*100))",order:0},{pattern:/unquote\("(.*)"\)/gi,replacement:'~"$1"',order:3},{pattern:/\$/gi,replacement:"@",order:1}].sort((e,t)=>e.order-t.order)).reduce(function(e,t){return e.replace(t.pattern,t.replacement)})}};var r=e;function t(){}t.prototype.convert=function(e){return this.file=e,this.convertInterpolatedVariables().convertVariables().convertTildaStrings().convertMixinsWhen().convertMixins().includeMixins().convertExtend().convertColourHelpers().convertFileExtensions().convertFunctionUnit(),this.file},t.prototype.includeMixins=function(){return this.file=this.file.replace(/^(\s*)\.([a-zA-Z][\w\-]*\(?[^;{}]*\)?;{1}$)/gm,"$1@include $2"),this},t.prototype.convertMixins=function(){this.file=this.file.replace(/^(\s*?)\.([\w\-]*?)\s*\(([\s\S][^\;]+?)?\)\s*\{$/gm,"$1@mixin $2($3) {");return this.file=this.file.replace(/^(\s*?)\.([\w\-]*?)\s*\(([\s\S][^\,]+?)?\)\s*\{$/gm,function(e,t,r,n){return t+"@mixin "+r+"("+n.replace(/;/g,",")+") {"}),this},t.prototype.convertMixinsWhen=function(){let c={};return this.file=this.file.replace(/^([ \t]*?)\.([\w\-]*?)\s*\(([^\)]+?)?\)\s*when \(((?:\s*default\(\s*\)\s*)|(?:[^\)]+))\)\s*\{([\s\S]*?)[\n\r]}/gm,function(e,t,r,n,i,s){const o=" ".repeat(4);r=n.trim()?r+"("+n+")":"%"+r;n=(i=i.replace(/[^\>\<](=)[^\>\<]\b/g,"==")).trim().startsWith("default(")?"@else":c[r]?"@else if "+i.replace(/=/g,"=="):"@if "+i,i=t+o+n+" {"+s.split("\n").map(e=>o+e).join("\n")+"\n"+t+o+"}\n";return c[r]=(c[r]||"")+i,c[r]==i?"convertMixinsWhen__"+r:""}),Object.entries(c).forEach(([e,t])=>{this.file=this.file.replace("convertMixinsWhen__"+e,"@mixin "+e+"{\n"+t+"}\n")}),this.file=this.file.replace(/\n\n+/g,"\n\n"),this.file=this.file.replace(/^([ \t]*?)\&[ ]*when[ ]*\(([^\)]+)\)/gm,"$1if $2"),this},t.prototype.convertFunctionUnit=function(){this.file=this.file.replace(/unit\((\S+),(\S+)\)/g,"0$2 + $1");return this.file=this.file.replace(/unit\(([^,]+)\)/g,"unit-less($1)"),this},t.prototype.convertExtend=function(){return this.file=this.file.replace(/&:extend\((.[\w]*)\);/g,"@extend $1;"),this},t.prototype.convertColourHelpers=function(){return this.file=this.file.replace(/spin\(/g,"adjust-hue("),this},t.prototype.convertTildaStrings=function(){return this.file=this.file.replace(/~("|')/g,"$1"),this},t.prototype.convertInterpolatedVariables=function(){return this.file=this.file.replace(/@\{(?!(\s|\())/g,"#{$"),this},t.prototype.convertVariables=function(){return this.file=this.file.replace(/@(?!(media|import|mixin|font-face|keyframes)(\s|\())/g,"$"),this},t.prototype.convertFileExtensions=function(){return this.file=this.file.replace(/\.less/g,".scss"),this};var n=new t;return{compileToSass(e){return n.convert(e)||""},compileToLess(e,t){return(0,(new r).process)(e,t||{})||""}}}();