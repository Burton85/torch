(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c90a91f"],{"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,a=n("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==r(t)?s(t):o(i(t))}},"083a":function(t,e,n){"use strict";var r=n("0d51"),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),s=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===s||r(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?s:e}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),a=n("d784"),c=n("44e7"),s=n("825a"),u=n("1d80"),f=n("4840"),h=n("8aa5"),d=n("50c4"),l=n("577e"),v=n("dc4a"),g=n("4dae"),p=n("14c3"),b=n("9263"),x=n("9f7f"),m=n("d039"),y=x.UNSUPPORTED_Y,w=4294967295,S=Math.min,E=[].push,I=o(/./.exec),R=o(E),k=o("".slice),M=!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=l(u(this)),a=void 0===n?w:n>>>0;if(0===a)return[];if(void 0===t)return[o];if(!c(t))return i(e,o,t,a);var s,f,h,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,x=new RegExp(t.source,v+"g");while(s=i(b,x,o)){if(f=x.lastIndex,f>p&&(R(d,k(o,p,s.index)),s.length>1&&s.index<o.length&&r(E,d,g(s,1)),h=s[0].length,p=f,d.length>=a))break;x.lastIndex===s.index&&x.lastIndex++}return p===o.length?!h&&I(x,"")||R(d,""):R(d,k(o,p)),d.length>a?g(d,0,a):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e,[function(e,n){var r=u(this),a=void 0==e?void 0:v(e,t);return a?i(a,e,r,n):i(o,l(r),e,n)},function(t,r){var i=s(this),a=l(t),c=n(o,i,a,r,o!==e);if(c.done)return c.value;var u=f(i,RegExp),v=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(y?"g":"y"),b=new u(y?"^(?:"+i.source+")":i,g),x=void 0===r?w:r>>>0;if(0===x)return[];if(0===a.length)return null===p(b,a)?[a]:[];var m=0,E=0,I=[];while(E<a.length){b.lastIndex=y?0:E;var M,A=p(b,y?k(a,E):a);if(null===A||(M=S(d(b.lastIndex+(y?E:0)),a.length))===m)E=h(a,E,v);else{if(R(I,k(a,m,E)),I.length===x)return I;for(var T=1;T<=A.length-1;T++)if(R(I,A[T]),I.length===x)return I;E=m=M}}return R(I,k(a,m)),I}]}),!M,y)},"14c3":function(t,e,n){var r=n("c65b"),i=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),s=TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var u=r(n,t,e);return null!==u&&i(u),u}if("RegExp"===a(t))return r(c,t,e);throw s("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),a=n("17c2"),c=n("9112"),s=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in i)i[u]&&s(r[u]&&r[u].prototype);s(o)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3511:function(t,e){var n=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw n("Maximum allowed index exceeded");return t}},"3d87":function(t,e,n){var r=n("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4dae":function(t,e,n){var r=n("23cb"),i=n("07fa"),o=n("8418"),a=Array,c=Math.max;t.exports=function(t,e,n){for(var s=i(t),u=r(e,s),f=r(void 0===n?s:n,s),h=a(c(f-u,0)),d=0;u<f;u++,d++)o(h,d,t[u]);return h.length=d,h}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("59ed"),a=n("7b0b"),c=n("07fa"),s=n("083a"),u=n("577e"),f=n("d039"),h=n("addb"),d=n("a640"),l=n("04d1"),v=n("d998"),g=n("2d00"),p=n("512c"),b=[],x=i(b.sort),m=i(b.push),y=f((function(){b.sort(void 0)})),w=f((function(){b.sort(null)})),S=d("sort"),E=!f((function(){if(g)return g<70;if(!(l&&l>3)){if(v)return!0;if(p)return p<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)b.push({k:e+r,v:n})}for(b.sort((function(t,e){return e.v-t.v})),r=0;r<b.length;r++)e=b[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),I=y||!w||!S||!E,R=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:u(e)>u(n)?1:-1}};r({target:"Array",proto:!0,forced:I},{sort:function(t){void 0!==t&&o(t);var e=a(this);if(E)return void 0===t?x(e):x(e,t);var n,r,i=[],u=c(e);for(r=0;r<u;r++)r in e&&m(i,e[r]);h(i,R(t)),n=i.length,r=0;while(r<n)e[r]=i[r++];while(r<u)s(e,r++);return e}})},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},"57b9":function(t,e,n){var r=n("c65b"),i=n("d066"),o=n("b622"),a=n("cb2d");t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,c=o("toPrimitive");e&&!e[c]&&a(e,c,(function(t){return r(n,this)}),{arity:1})}},"5a47":function(t,e,n){var r=n("23e7"),i=n("4930"),o=n("d039"),a=n("7418"),c=n("7b0b"),s=!i||o((function(){a.f(1)}));r({target:"Object",stat:!0,forced:s},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(c(t)):[]}})},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),a=n("ad6d"),c=n("9f7f"),s=n("5692"),u=n("7c73"),f=n("69f3").get,h=n("fce3"),d=n("107c"),l=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,g=v,p=i("".charAt),b=i("".indexOf),x=i("".replace),m=i("".slice),y=function(){var t=/a/,e=/b*/g;return r(v,t,"a"),r(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=c.BROKEN_CARET,S=void 0!==/()??/.exec("")[1],E=y||S||w||h||d;E&&(g=function(t){var e,n,i,c,s,h,d,E=this,I=f(E),R=o(t),k=I.raw;if(k)return k.lastIndex=E.lastIndex,e=r(g,k,R),E.lastIndex=k.lastIndex,e;var M=I.groups,A=w&&E.sticky,T=r(a,E),C=E.source,O=0,_=R;if(A&&(T=x(T,"y",""),-1===b(T,"g")&&(T+="g"),_=m(R,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==p(R,E.lastIndex-1))&&(C="(?: "+C+")",_=" "+_,O++),n=new RegExp("^(?:"+C+")",T)),S&&(n=new RegExp("^"+C+"$(?!\\s)",T)),y&&(i=E.lastIndex),c=r(v,A?n:E,_),A?c?(c.input=m(c.input,O),c[0]=m(c[0],O),c.index=E.lastIndex,E.lastIndex+=c[0].length):E.lastIndex=0:y&&c&&(E.lastIndex=E.global?c.index+c[0].length:i),S&&c&&c.length>1&&r(l,c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&M)for(c.groups=h=u(null),s=0;s<M.length;s++)d=M[s],h[d[0]]=c[d[1]];return c}),t.exports=g},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),s=n("07fa"),u=n("3511"),f=n("8418"),h=n("65f0"),d=n("1dde"),l=n("b622"),v=n("2d00"),g=l("isConcatSpreadable"),p=v>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),x=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},m=!p||!b;r({target:"Array",proto:!0,arity:1,forced:m},{concat:function(t){var e,n,r,i,o,a=c(this),d=h(a,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],x(o))for(i=s(o),u(l+i),n=0;n<i;n++,l++)n in o&&f(d,l,o[n]);else u(l+1),f(d,l++,o);return d.length=l,d}})},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp,a=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=a||r((function(){return!o("a","y").sticky})),s=a||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:a}},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e,n){var r=n("4dae"),i=Math.floor,o=function(t,e){var n=t.length,s=i(n/2);return n<8?a(t,e):c(t,o(r(t,0,s),e),o(r(t,s),e),e)},a=function(t,e){var n,r,i=t.length,o=1;while(o<i){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},c=function(t,e,n,r){var i=e.length,o=n.length,a=0,c=0;while(a<i||c<o)t[a+c]=a<i&&c<o?r(e[a],n[c])<=0?e[a++]:n[c++]:a<i?e[a++]:n[c++];return t};t.exports=o},b4f8:function(t,e,n){var r=n("23e7"),i=n("d066"),o=n("1a2d"),a=n("577e"),c=n("5692"),s=n("3d87"),u=c("string-to-symbol-registry"),f=c("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=a(t);if(o(u,e))return u[e];var n=i("Symbol")(e);return u[e]=n,f[n]=e,n}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),a=n("7b0b"),c=n("07fa"),s=n("65f0"),u=i([].push),f=function(t){var e=1==t,n=2==t,i=3==t,f=4==t,h=6==t,d=7==t,l=5==t||h;return function(v,g,p,b){for(var x,m,y=a(v),w=o(y),S=r(g,p),E=c(w),I=0,R=b||s,k=e?R(v,E):n||d?R(v,0):void 0;E>I;I++)if((l||I in w)&&(x=w[I],m=S(x,I,y),t))if(e)k[I]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return I;case 2:u(k,x)}else switch(t){case 4:return!1;case 7:u(k,x)}return h?-1:i||f?f:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"home__container"},[n("canvas",{attrs:{id:"canvas"}},[t._v("TORCH")]),n("a",{staticClass:"home__start",on:{click:function(e){return t.goQuestion()}}},[t._v("START")])])])},i=[];n("ac1f"),n("1276"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n("4e82"),n("99af"),n("fb6a"),n("159b");var a=function(t){var e,n=document.getElementById("canvas"),r=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;var i=null,a=null,c=50,s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();Array.prototype.forEach=function(t){for(var e=0;e<this.length;e++)t.call("object"===o(this[e])?this[e]:window,e,this[e])},window.onmousemove=function(t){"CANVAS"==t.target.tagName?(i=t.clientX-t.target.getBoundingClientRect().left,a=t.clientY-t.target.getBoundingClientRect().top):(i=null,a=null)};var u=[],f=[],h=1,d=2,l={init:function(){this._reset(),this._initImageData(),this._execAnimate()},_reset:function(){u.length=0,f.length=0,this.ite=100,this.start=0,this.end=this.start+this.ite},_initImageData:function(){this.imgx=(n.width-e.width)/2,this.imgy=(n.height-e.height)/2,r.clearRect(0,0,n.width,n.height),r.drawImage(e,this.imgx,this.imgy,e.width,e.height);for(var t=r.getImageData(this.imgx,this.imgy,e.width,e.height),i=0;i<e.width;i+=h)for(var o=0;o<e.height;o+=d){var a=4*(o*t.width+i);if(t.data[a+3]>=125){var c,s="#e50012",f=i+20*Math.random(),l=200*-Math.random()+400,v=e.height/2-40*Math.random()+20;c=v<this.imgy+e.height/2?300*Math.random():300*-Math.random(),u.push(new g(f+this.imgx,v+this.imgy,i+this.imgx,o+this.imgy,l,c,s)),u[u.length-1].drawSelf()}}},_execAnimate:function(){var t=this;u.sort((function(t,e){return t.ex-e.ex})),this.isInit||(this.isInit=!0,v((function(e){f.length<u.length&&(t.end>u.length-1&&(t.end=u.length-1),f=f.concat(u.slice(t.start,t.end)),t.start+=t.ite,t.end+=t.ite,u.length-f.length<=1&&u.length-f.length>=0&&n.classList.add("go-top")),f.forEach((function(){this.update(e)}))})))}};function v(t){if("function"==typeof t){var e=16;r.clearRect(0,0,n.width,n.height),t(e),s((function(){v(t)}))}}function g(t,e,n,r,i,o,a){this.x=t,this.y=e,this.ex=n,this.ey=r,this.vx=i,this.vy=o,this.a=1500,this.color=a,this.width=h,this.height=d,this.stop=!1,this.static=!1,this.maxCheckTimes=10,this.checkLength=5,this.checkTimes=0}var p="";function b(t,n){e=document.createElement("canvas"),e.width=600,e.height=180;var r=e.getContext("2d");r.textAlign="center",r.textBaseline="middle",r.font="7em 'Press Start 2P'",r.fillText(t||"TORCH",e.width/2,e.height/2),l.init(n)}g.prototype={constructor:g,drawSelf:function(){p!=this.color&&(r.fillStyle=this.color,p=this.color),r.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)},move:function(t){if(this.stop)this.x=this.ex,this.y=this.ey;else{t/=1e3;var e=this.ex-this.x,n=this.ey-this.y,r=Math.atan(n/e),i=Math.abs(this.a*Math.cos(r));i=this.x>this.ex?-i:i;var o=Math.abs(this.a*Math.sin(r));o=this.y>this.ey?-o:o,this.vx+=i*t,this.vy+=o*t,this.vx*=.95,this.vy*=.95,this.x+=this.vx*t,this.y+=this.vy*t,Math.abs(this.x-this.ex)<=this.checkLength&&Math.abs(this.y-this.ey)<=this.checkLength?(this.checkTimes++,this.checkTimes>=this.maxCheckTimes&&(this.stop=!0)):this.checkTimes=0}},update:function(t){this.move(t),this.drawSelf(),this._checkMouse()},_checkMouse:function(){var t=this;if(i){var e=Math.sqrt(Math.pow(i-this.x,2)+Math.pow(a-this.y,2)),n=Math.atan((a-this.y)/(i-this.x));if(e<c){this.stop=!1,this.checkTimes=0,this.recordX||(this.recordX=this.ex,this.recordY=this.ey),this.a=2e3+1e3*(1-e/c);var r=Math.abs((c-e)*Math.cos(n)),o=Math.abs((c-e)*Math.sin(n));r=i>this.x?-r:r,o=a>this.y?-o:o,this.ex=this.x+r,this.ey=this.y+o}else s()}else s();function s(){t.recordX&&(t.stop=!1,t.checkTimes=0,t.a=1500,t.ex=t.recordX,t.ey=t.recordY,t.recordX=null,t.recordY=null)}}},window.setTimeout((function(){b("TORCH",t)}),1e3)},c={name:"Home",mounted:function(){a((function(){console.log("ok")}))},methods:{goQuestion:function(){window.location.assign(window.location.href.split("#")[0]+"#/foreword"),window.location.reload()}}},s=c,u=n("2877"),f=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=f.exports},c513:function(t,e,n){var r=n("23e7"),i=n("1a2d"),o=n("d9b5"),a=n("0d51"),c=n("5692"),s=n("3d87"),u=c("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!s},{keyFor:function(t){if(!o(t))throw TypeError(a(t)+" is not a symbol");if(i(u,t))return u[t]}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("cb2d"),o=n("9263"),a=n("d039"),c=n("b622"),s=n("9112"),u=c("species"),f=RegExp.prototype;t.exports=function(t,e,n,h){var d=c(t),l=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=l&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!l||!v||n){var g=r(/./[d]),p=e(d,""[t],(function(t,e,n,i,a){var c=r(t),s=e.exec;return s===o||s===f.exec?l&&!a?{done:!0,value:g(e,n,i)}:{done:!0,value:c(n,e,i)}:{done:!1}}));i(String.prototype,t,p[0]),i(f,d,p[1])}h&&s(f[d],"sham",!0)}},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},d9f5:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("c65b"),a=n("e330"),c=n("c430"),s=n("83ab"),u=n("4930"),f=n("d039"),h=n("1a2d"),d=n("3a9b"),l=n("825a"),v=n("fc6a"),g=n("a04b"),p=n("577e"),b=n("5c6c"),x=n("7c73"),m=n("df75"),y=n("241c"),w=n("057f"),S=n("7418"),E=n("06cf"),I=n("9bf2"),R=n("37e8"),k=n("d1e7"),M=n("cb2d"),A=n("5692"),T=n("f772"),C=n("d012"),O=n("90e3"),_=n("b622"),P=n("e538"),j=n("746f"),F=n("57b9"),N=n("d44e"),B=n("69f3"),D=n("b727").forEach,Y=T("hidden"),q="Symbol",H="prototype",X=B.set,K=B.getterFor(q),$=Object[H],L=i.Symbol,U=L&&L[H],J=i.TypeError,Q=i.QObject,W=E.f,z=I.f,G=w.f,V=k.f,Z=a([].push),tt=A("symbols"),et=A("op-symbols"),nt=A("wks"),rt=!Q||!Q[H]||!Q[H].findChild,it=s&&f((function(){return 7!=x(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W($,e);r&&delete $[e],z(t,e,n),r&&t!==$&&z($,e,r)}:z,ot=function(t,e){var n=tt[t]=x(U);return X(n,{type:q,tag:t,description:e}),s||(n.description=e),n},at=function(t,e,n){t===$&&at(et,e,n),l(t);var r=g(e);return l(n),h(tt,r)?(n.enumerable?(h(t,Y)&&t[Y][r]&&(t[Y][r]=!1),n=x(n,{enumerable:b(0,!1)})):(h(t,Y)||z(t,Y,b(1,{})),t[Y][r]=!0),it(t,r,n)):z(t,r,n)},ct=function(t,e){l(t);var n=v(e),r=m(n).concat(dt(n));return D(r,(function(e){s&&!o(ut,n,e)||at(t,e,n[e])})),t},st=function(t,e){return void 0===e?x(t):ct(x(t),e)},ut=function(t){var e=g(t),n=o(V,this,e);return!(this===$&&h(tt,e)&&!h(et,e))&&(!(n||!h(this,e)||!h(tt,e)||h(this,Y)&&this[Y][e])||n)},ft=function(t,e){var n=v(t),r=g(e);if(n!==$||!h(tt,r)||h(et,r)){var i=W(n,r);return!i||!h(tt,r)||h(n,Y)&&n[Y][r]||(i.enumerable=!0),i}},ht=function(t){var e=G(v(t)),n=[];return D(e,(function(t){h(tt,t)||h(C,t)||Z(n,t)})),n},dt=function(t){var e=t===$,n=G(e?et:v(t)),r=[];return D(n,(function(t){!h(tt,t)||e&&!h($,t)||Z(r,tt[t])})),r};u||(L=function(){if(d(U,this))throw J("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?p(arguments[0]):void 0,e=O(t),n=function(t){this===$&&o(n,et,t),h(this,Y)&&h(this[Y],e)&&(this[Y][e]=!1),it(this,e,b(1,t))};return s&&rt&&it($,e,{configurable:!0,set:n}),ot(e,t)},U=L[H],M(U,"toString",(function(){return K(this).tag})),M(L,"withoutSetter",(function(t){return ot(O(t),t)})),k.f=ut,I.f=at,R.f=ct,E.f=ft,y.f=w.f=ht,S.f=dt,P.f=function(t){return ot(_(t),t)},s&&(z(U,"description",{configurable:!0,get:function(){return K(this).description}}),c||M($,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:L}),D(m(nt),(function(t){j(t)})),r({target:q,stat:!0,forced:!u},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!s},{create:st,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht}),F(),N(L,q),C[Y]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("e330"),c=n("1a2d"),s=n("1626"),u=n("3a9b"),f=n("577e"),h=n("9bf2").f,d=n("e893"),l=o.Symbol,v=l&&l.prototype;if(i&&s(l)&&(!("description"in v)||void 0!==l().description)){var g={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(v,this)?new l(t):void 0===t?l():l(t);return""===t&&(g[e]=!0),e};d(p,l),p.prototype=v,v.constructor=p;var b="Symbol(test)"==String(l("test")),x=a(v.toString),m=a(v.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),S=a("".slice);h(v,"description",{configurable:!0,get:function(){var t=m(this),e=x(t);if(c(g,t))return"";var n=b?S(e,7,-1):w(e,y,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:p})}},e538:function(t,e,n){var r=n("b622");e.f=r},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("23cb"),s=n("07fa"),u=n("fc6a"),f=n("8418"),h=n("b622"),d=n("1dde"),l=n("f36a"),v=d("slice"),g=h("species"),p=Array,b=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var n,r,h,d=u(this),v=s(d),x=c(t,v),m=c(void 0===e?v:e,v);if(i(d)&&(n=d.constructor,o(n)&&(n===p||i(n.prototype))?n=void 0:a(n)&&(n=n[g],null===n&&(n=void 0)),n===p||void 0===n))return l(d,x,m);for(r=new(void 0===n?p:n)(b(m-x,0)),h=0;x<m;x++,h++)x in d&&f(r,h,d[x]);return r.length=h,r}})},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-2c90a91f.js.map