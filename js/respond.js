window.matchMedia=window.matchMedia||function(a,b){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=g.offsetWidth==42,d.removeChild(f),{matches:c,media:a}}}(document),function(a){function v(){s(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches;if(respond.mediaQueriesSupported)return;var b=a.document,c=b.documentElement,d=[],e=[],f=[],g={},h=30,i=b.getElementsByTagName("head")[0]||c,j=i.getElementsByTagName("link"),k=[],l=function(){var b=j,c=b.length,d=0,e,f,h,i;for(;d<c;d++)e=b[d],f=e.href,h=e.media,i=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&i&&!g[f]&&(e.styleSheet&&e.styleSheet.rawCssText?(n(e.styleSheet.rawCssText,f,h),g[f]=!0):(!/^([a-zA-Z]+?:(\/\/)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&k.push({href:f,media:h}));m()},m=function(){if(k.length){var a=k.shift();t(a.href,function(b){n(b,a.href,a.media),g[a.href]=!0,m()})}},n=function(a,b,c){var f=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),g=f&&f.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(g=1);for(;j<g;j++){k=0,i?(l=c,e.push(h(a))):(l=f[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,e.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],d.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:e.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),minh:m.match(/\(min\-height:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxh:m.match(/\(max\-height:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}s()},o,p,q=function(){var a,d=b.createElement("div"),e=b.body,f=!1;return d.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=b.createElement("body")),e.appendChild(d),c.insertBefore(e,c.firstChild),a=d.offsetWidth,f?c.removeChild(e):e.removeChild(d),a=r=parseFloat(a),a},r,s=function(a){var g="clientWidth",k=c[g],l=b.compatMode==="CSS1Compat"&&k||b.body[g]||k,m="clientHeight",k=c[m],n=b.compatMode==="CSS1Compat"&&k||b.body[m]||k,t={},u=j[j.length-1],v=(new Date).getTime();if(a&&o&&v-o<h){clearTimeout(p),p=setTimeout(s,h);return}o=v;for(var w in d){var x=d[w],y=x.minw,z=x.maxw,A=x.minh,B=x.maxh,C="em";!y||(y=parseFloat(y)*(y.indexOf(C)>-1?r||q():1)),!z||(z=parseFloat(z)*(z.indexOf(C)>-1?r||q():1)),!A||(A=parseFloat(A)*(A.indexOf(C)>-1?r||q():1)),!B||(B=parseFloat(B)*(B.indexOf(C)>-1?r||q():1)),(!y&&!z||(!y||y&&l>=y)&&(!z||z&&l<=z))&&(!A&&!B||(!A||A&&n>=A)&&(!B||B&&n<=B))&&(t[x.media]||(t[x.media]=[]),t[x.media].push(e[x.rules]))}for(var w in f)f[w]&&f[w].parentNode===i&&i.removeChild(f[w]);for(var w in t){var D=b.createElement("style"),E=t[w].join("\n");D.type="text/css",D.media=w,i.insertBefore(D,u.nextSibling),D.styleSheet?D.styleSheet.cssText=E:D.appendChild(b.createTextNode(E)),f.push(D)}},t=function(a,b){var c=u();if(!c)return;c.open("GET",a,!0),c.onreadystatechange=function(){if(c.readyState!=4||c.status!=200&&c.status!=304)return;b(c.responseText)};if(c.readyState==4)return;c.send(null)},u=function(){var a=!1;try{a=new XMLHttpRequest}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return a}}();l(),respond.update=l,a.addEventListener?a.addEventListener("resize",v,!1):a.attachEvent&&a.attachEvent("onresize",v)}(this)