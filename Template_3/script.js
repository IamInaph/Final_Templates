
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-includes/js/jquery/jquery.min.js?ver=3.6.1 */
/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
jQuery.noConflict();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2 */
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.7.2 */
!function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,n){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,n)},t};this.tree=e();const n=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,i]of this.formData){const s=t.match(n);if(s)if(""===s.groups.array)this.tree.set(s.groups.name,i);else{const t=[...s.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(s.groups.name);const n=t.pop();t.reduce(((t,n)=>{if(/^[0-9]+$/.test(n)&&(n=parseInt(n)),t.get(n)instanceof Map)return t.get(n);const i=e();return t.set(n,i),i}),this.tree).set(n,i)}}}t.r(e),t.d(e,{date:function(){return f},email:function(){return r},enumeration:function(){return m},file:function(){return d},maxdate:function(){return b},maxfilesize:function(){return z},maxitems:function(){return h},maxlength:function(){return v},maxnumber:function(){return x},mindate:function(){return y},minfilesize:function(){return A},minitems:function(){return u},minlength:function(){return g},minnumber:function(){return w},number:function(){return c},required:function(){return o},requiredfile:function(){return a},tel:function(){return l},url:function(){return p}}),n.prototype.entries=function(){return this.tree.entries()},n.prototype.get=function(t){return this.tree.get(t)},n.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const n=[];if(t instanceof Map)for(const[i,s]of t)n.push(...e(s));else""!==t&&n.push(t);return n};return e(this.get(t))},n.prototype.has=function(t){return this.tree.has(t)},n.prototype.keys=function(){return this.tree.keys()},n.prototype.values=function(){return this.tree.values()};var i=n;function s({rule:t,field:e,error:n,...i}){this.rule=t,this.field=e,this.error=n,this.properties=i}const o=function(t){if(0===t.getAll(this.field).length)throw new s(this)},a=function(t){if(0===t.getAll(this.field).length)throw new s(this)},r=function(t){if(!t.getAll(this.field).every((t=>{if((t=t.trim()).length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,n]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(n))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(n))return!1;const i=n.split(".");if(i.length<2)return!1;for(const t of i){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new s(this)},p=function(t){const e=t.getAll(this.field);if(!e.every((t=>{if(""===(t=t.trim()))return!1;try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new s(this)},l=function(t){if(!t.getAll(this.field).every((t=>(t=(t=t.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(t)))))throw new s(this)},c=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)))))throw new s(this)},f=function(t){if(!t.getAll(this.field).every((t=>/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))))throw new s(this)},d=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],n=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(n){const t=n.groups.toplevel.toLowerCase(),i=n.groups.sub.toLowerCase();for(const[s,o]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===i&&o.startsWith(t+"/")||o===n[0])&&e.push(...s.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new s(this)},m=function(t){if(!t.getAll(this.field).every((t=>this.accept?.some((e=>t===String(e))))))throw new s(this)},u=function(t){if(t.getAll(this.field).length<parseInt(this.threshold))throw new s(this)},h=function(t){const e=t.getAll(this.field);if(parseInt(this.threshold)<e.length)throw new s(this)},g=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{"string"==typeof t&&(n+=t.length)})),0!==n&&n<parseInt(this.threshold))throw new s(this)},v=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{"string"==typeof t&&(n+=t.length)})),parseInt(this.threshold)<n)throw new s(this)},w=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new s(this)},x=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new s(this)},y=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold)))))throw new s(this)},b=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t)))))throw new s(this)},A=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{t instanceof File&&(n+=t.size)})),n<parseInt(this.threshold))throw new s(this)},z=function(t){const e=t.getAll(this.field);let n=0;if(e.forEach((t=>{t instanceof File&&(n+=t.size)})),parseInt(this.threshold)<n)throw new s(this)};var $;window.swv={validators:e,validate:(t,n,o={})=>{const a=(t.rules??[]).filter((({rule:t,...n})=>"function"==typeof e[t]&&("function"!=typeof e[t].matches||e[t].matches(n,o))));if(!a.length)return new Map;const r=new i(n),p=a.reduce(((t,n)=>{const{rule:i,...o}=n;if(t.get(o.field)?.error)return t;try{e[i].call({rule:i,...o},r)}catch(e){if(e instanceof s)return t.set(o.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},...null!==($=window.swv)&&void 0!==$?$:{}}}();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.7.2 */
!function(){"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const a=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);a.has(t)&&(t=a.get(t)),Array.from(a.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return r.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:o,path:c,endpoint:s,headers:i,body:l,data:d,...p}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),c=r?n+"/"+r:n),"string"==typeof c&&(-1!==t.indexOf("?")&&(c=c.replace("?","&")),c=c.replace(/^\//,""),o=t+c),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],d&&(l=JSON.stringify(d),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||c||window.location.href,{...p,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},r=[];function o(e){var a,n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{target:o,scope:l=e,...d}=r;if(void 0===(null===(a=e.wpcf7)||void 0===a?void 0:a.schema))return;const p={...e.wpcf7.schema};if(void 0!==o){if(!e.contains(o))return;if(!o.closest(".wpcf7-form-control-wrap[data-name]"))return;if(o.closest(".novalidate"))return}const u=new FormData,f=[];for(const e of l.querySelectorAll(".wpcf7-form-control-wrap"))if(!e.closest(".novalidate")&&(e.querySelectorAll(":where( input, textarea, select ):enabled").forEach((e=>{if(e.name)switch(e.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":e.checked&&u.append(e.name,e.value);break;case"select-multiple":for(const t of e.selectedOptions)u.append(e.name,t.value);break;case"file":for(const t of e.files)u.append(e.name,t);break;default:u.append(e.name,e.value)}})),e.dataset.name&&(f.push(e.dataset.name),e.setAttribute("data-under-validation","1"),e.contains(o))))break;p.rules=(null!==(n=p.rules)&&void 0!==n?n:[]).filter((e=>{let{field:t}=e;return f.includes(t)}));const m=e.getAttribute("data-status");Promise.resolve(t(e,"validating")).then((t=>{if(void 0!==swv){const t=swv.validate(p,u,r);for(const[a,{error:n,validInputs:r}]of t)s(e,a),void 0!==n&&c(e,a,n,{scope:l}),i(e,a,null!=r?r:[])}})).finally((()=>{t(e,m),e.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach((e=>{e.removeAttribute("data-under-validation")}))}))}n.use=e=>{r.unshift(e)};const c=(e,t,a,n)=>{var r;const{scope:o=e,...c}=null!=n?n:{},s=`${null===(r=e.wpcf7)||void 0===r?void 0:r.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),i=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",s),i&&i.id?t.insertAdjacentHTML("beforeend",`<a href="#${i.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),o.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((t=>{if("validating"===e.getAttribute("data-status")&&!t.dataset.underValidation)return;const n=document.createElement("span");n.classList.add("wpcf7-not-valid-tip"),n.setAttribute("aria-hidden","true"),n.insertAdjacentText("beforeend",a),t.appendChild(n),t.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),t.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",s),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{n.setAttribute("style","display: none")})),n.addEventListener("click",(e=>{n.setAttribute("style","display: none")})))}))}))},s=(e,t)=>{var a,n;const r=`${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(n=e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${r}`))||void 0===n||n.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{var t;null===(t=e.querySelector(".wpcf7-not-valid-tip"))||void 0===t||t.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},i=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{e.innerHTML="",a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.insertAdjacentText("beforeend",a),e.appendChild(n)}))}))};function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return d(e),void t(e,"submitting");const o=new FormData(e);r.submitter&&r.submitter.name&&o.append(r.submitter.name,r.submitter.value);const s={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(o,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:o};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:o,wpcf7:{endpoint:"feedback",form:e,detail:s}}).then((n=>{const r=t(e,n.status);return s.status=n.status,s.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,s):["sent","failed"].includes(r)&&a(e,`mail${r}`,s),a(e,"submit",s),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{c(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:r}=e.wpcf7;d(n),a(n,"beforesubmit",r),t(n,"submitting")}return n(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&s(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function p(e){const r=new FormData(e),o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:r};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:o}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),o.apiResponse=n,a(e,"reset",o)})).catch((e=>console.error(e)))}n.use(((e,a)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:a,detail:n}=e.wpcf7;d(a),t(a,"resetting")}return a(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},f=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function m(t){const a=new FormData(t);t.wpcf7={id:e(a.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:e(a.get("_wpcf7_container_post")),parent:t.closest(".wpcf7"),schema:void 0},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const a=(t,a)=>{const n=e(t.getAttribute("data-starting-value")),r=e(t.getAttribute("data-maximum-value")),o=e(t.getAttribute("data-minimum-value")),c=t.classList.contains("down")?n-a.value.length:a.value.length;t.setAttribute("data-current-value",c),t.innerText=c,r&&r<a.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),o&&a.value.length<o?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),o=t.querySelector(`[name="${r}"]`);o&&(o.value=o.defaultValue,a(n,o),e.init&&o.addEventListener("keyup",(e=>{a(n,o)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{wpcf7.submit(t,{submitter:e.submitter}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),n({endpoint:`contact-forms/${t.wpcf7.id}/feedback/schema`,method:"GET"}).then((e=>{t.wpcf7.schema=e})),t.addEventListener("change",(e=>{e.target.closest(".wpcf7-form-control")&&wpcf7.validate(t,{target:e.target})}))}document.addEventListener("DOMContentLoaded",(e=>{var t;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:m,submit:l,reset:p,validate:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}))):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")}))}();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/penci-shortcodes/assets/play.js?ver=5.9 */
(function ($) {
    $('body').on('click', '.start-video', function () {
        var $container = $(this).closest('.yt-video-place'),
            $url = $container.data('yturl');

        $container.append('<iframe src="' + $url + '?rel=0&showinfo=0&autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"/>');
    });
})(jQuery);

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/js-cookies.js?ver=8.6.5.1 */
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies, t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    return function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({path: "/"}, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (e) {
                    }
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="), C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (e) {
                        }
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (e) {
                    }
                }
                return c
            }
        }

        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({json: !0}, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {expires: -1}))
        }, t.withConverter = n, t
    }(function () {
    })
});

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/libs-script.min.js?ver=8.6.5.1 */
/* Jarallax */
!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(n,e,t){(function(e){var t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};n.exports=t}).call(this,t(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),a=n(3),r=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,c,u=a.window.jarallax;a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=u,this},void 0!==a.jQuery&&((s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=r.default.apply(a.window,t);return"object"!==l(o)?o:this}).constructor=r.default.constructor,c=a.jQuery.fn.jarallax,a.jQuery.fn.jarallax=s,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=c,this}),i()(function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),b=n(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,h,p=b.window.navigator,d=-1<p.userAgent.indexOf("MSIE ")||-1<p.userAgent.indexOf("Trident/")||-1<p.userAgent.indexOf("Edge/"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function f(){h=s?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),(l?l.clientHeight:0)||b.window.innerHeight||document.documentElement.clientHeight):b.window.innerHeight||document.documentElement.clientHeight}f(),b.window.addEventListener("resize",f),b.window.addEventListener("orientationchange",f),b.window.addEventListener("load",f),i()(function(){f()});var g=[];function y(){g.length&&(g.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:b.window.innerWidth,wndH:h},r=!o||o.wndW!==a.wndW||o.wndH!==a.wndH||o.width!==a.width||o.height!==a.height,l=r||!o||o.top!==a.top||o.bottom!==a.bottom;g[t].oldData=a,r&&n.onResize(),l&&n.onScroll()}),b.window.requestAnimationFrame(y))}function v(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?e instanceof HTMLElement:e&&"object"===u(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n,o=e.length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===u(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e}var x=0,w=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=this;n.instanceID=x,x+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(p.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(p.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===u(l)&&void 0!==l.length&&(l=c(l,1)[0]),l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(p.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=s,(t=[{key:"css",value:function(t,n){return"string"==typeof n?b.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:b.window.innerWidth||document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t,n,o=this,i={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},a={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};o.options.keepImg||((e=o.$item.getAttribute("style"))&&o.$item.setAttribute("data-jarallax-original-styles",e),!o.image.useImgTag||(t=o.image.$item.getAttribute("style"))&&o.image.$item.setAttribute("data-jarallax-original-styles",t)),"static"===o.css(o.$item,"position")&&o.css(o.$item,{position:"relative"}),"auto"===o.css(o.$item,"z-index")&&o.css(o.$item,{zIndex:0}),o.image.$container=document.createElement("div"),o.css(o.image.$container,i),o.css(o.image.$container,{"z-index":o.options.zIndex}),d&&o.css(o.image.$container,{opacity:.9999}),o.image.$container.setAttribute("id","jarallax-container-".concat(o.instanceID)),o.$item.appendChild(o.image.$container),o.image.useImgTag?a=o.extend({"object-fit":o.options.imgSize,"object-position":o.options.imgPosition,"font-family":"object-fit: ".concat(o.options.imgSize,"; object-position: ").concat(o.options.imgPosition,";"),"max-width":"none"},i,a):(o.image.$item=document.createElement("div"),o.image.src&&(a=o.extend({"background-position":o.options.imgPosition,"background-size":o.options.imgSize,"background-repeat":o.options.imgRepeat,"background-image":o.image.bgImage||'url("'.concat(o.image.src,'")')},i,a))),"opacity"!==o.options.type&&"scale"!==o.options.type&&"scale-opacity"!==o.options.type&&1!==o.options.speed||(o.image.position="absolute"),"fixed"===o.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(o.$item).filter(function(e){var t=b.window.getComputedStyle(e),n=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return n&&"none"!==n||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),o.image.position=n.length?"absolute":"fixed"),a.position=o.image.position,o.css(o.image.$item,a),o.image.$container.appendChild(o.image.$item),o.onResize(),o.onScroll(!0),o.options.onInit&&o.options.onInit.call(o),"none"!==o.css(o.$item,"background-image")&&o.css(o.$item,{"background-image":"none"}),o.addToParallaxList()}},{key:"addToParallaxList",value:function(){g.push({instance:this}),1===g.length&&b.window.requestAnimationFrame(y)}},{key:"removeFromParallaxList",value:function(){var n=this;g.forEach(function(e,t){e.instance.instanceID===n.instanceID&&g.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n,o,i;"fixed"===this.image.position&&(n=(t=(e=this).image.$container.getBoundingClientRect()).width,o=t.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),i="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(n,"px ").concat(o,"px 0);\n            clip: rect(0, ").concat(n,"px, ").concat(o,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,h),h<n&&(a-=o*(n-h))):a=o*(n+h),1<o?r=Math.abs(a-h):o<0?r=a/o+Math.abs(a):r+=(h-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(h-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s,c,u,p=this,d=p.$item.getBoundingClientRect(),m=d.top,f=d.height,g={},y=d;p.options.elementInViewport&&(y=p.options.elementInViewport.getBoundingClientRect()),p.isElementInViewport=0<=y.bottom&&0<=y.right&&y.top<=h&&y.left<=b.window.innerWidth,(e||p.isElementInViewport)&&(t=Math.max(0,m),n=Math.max(0,f+m),o=Math.max(0,-m),i=Math.max(0,m+f-h),a=Math.max(0,f-(m+f-h)),r=Math.max(0,-m+h-f),l=1-(h-m)/(h+f)*2,s=1,f<h?s=1-(o||i)/f:n<=h?s=n/h:a<=h&&(s=a/h),"opacity"!==p.options.type&&"scale-opacity"!==p.options.type&&"scroll-opacity"!==p.options.type||(g.transform="translate3d(0,0,0)",g.opacity=s),"scale"!==p.options.type&&"scale-opacity"!==p.options.type||(c=1,p.options.speed<0?c-=p.options.speed*s:c+=p.options.speed*(1-s),g.transform="scale(".concat(c,") translate3d(0,0,0)")),"scroll"!==p.options.type&&"scroll-opacity"!==p.options.type||(u=p.parallaxScrollDistance*l,"absolute"===p.image.position&&(u-=m),g.transform="translate3d(0,".concat(u,"px,0)")),p.css(p.image.$item,g),p.options.onScroll&&p.options.onScroll.call(p,{section:d,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:s,fromViewportCenter:l}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&r(e.prototype,t),n&&r(e,n),s}();v.constructor=w,t.default=v}]);

/*Video Worker (wrapper for Youtube, Vimeo and Local videos)*/
!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){this._done=[],this._fail=[]}function i(e,t,i){e.addEventListener(t,i)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();t.prototype={execute:function(e,t){var i=e.length;for(t=Array.prototype.slice.call(t);i--;)e[i].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var n=0,r=0,p=0,l=0,s=0,u=new t,d=new t,y=function(){function t(i,o){e(this,t);var a=this;a.url=i,a.options_default={autoplay:1,loop:1,mute:1,volume:0,controls:0,startTime:0,endTime:0},a.options=a.extend({},a.options_default,o),a.videoID=a.parseURL(i),a.videoID&&(a.ID=n++,a.loadAPI(),a.init())}return a(t,[{key:"extend",value:function(e){var t=arguments;return e=e||{},Object.keys(arguments).forEach(function(i){t[i]&&Object.keys(t[i]).forEach(function(o){e[o]=t[i][o]})}),e}},{key:"parseURL",value:function(e){function t(e){var t=/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,i=e.match(t);return!(!i||11!==i[1].length)&&i[1]}function i(e){var t=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,i=e.match(t);return!(!i||!i[3])&&i[3]}function o(e){var t=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},o=0;return t.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(i["ogv"===t[1]?"ogg":t[1]]=t[2],o=1)}),!!o&&i}var a=t(e),n=i(e),r=o(e);return a?(this.type="youtube",a):n?(this.type="vimeo",n):!!r&&(this.type="local",r)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(e,t){var i=this;this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach(function(o,a){o===t&&(i.userEventsList[e][a]=!1)}):delete this.userEventsList[e])}},{key:"fire",value:function(e){var t=this,i=[].slice.call(arguments,1);this.userEventsList&&"undefined"!=typeof this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,i)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&("undefined"!=typeof e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&("undefined"!=typeof e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&("undefined"!=typeof e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.pauseVideo&&YT.PlayerState.PLAYING===e.player.getPlayerState()&&e.player.pauseVideo(),"vimeo"===e.type&&e.player.getPaused().then(function(t){t||e.player.pause()}),"local"===e.type&&(e.player.paused||e.player.pause()))}},{key:"getImageURL",value:function(e){var t=this;if(t.videoImage)return void e(t.videoImage);if("youtube"===t.type){var i=["maxresdefault","sddefault","hqdefault","0"],o=0,a=new Image;a.onload=function(){120!==(this.naturalWidth||this.width)||o===i.length-1?(t.videoImage="https://img.youtube.com/vi/"+t.videoID+"/"+i[o]+".jpg",e(t.videoImage)):(o++,this.src="https://img.youtube.com/vi/"+t.videoID+"/"+i[o]+".jpg")},a.src="https://img.youtube.com/vi/"+t.videoID+"/"+i[o]+".jpg"}if("vimeo"===t.type){var n=new XMLHttpRequest;n.open("GET","https://vimeo.com/api/v2/video/"+t.videoID+".json",!0),n.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var i=JSON.parse(this.responseText);t.videoImage=i[0].thumbnail_large,e(t.videoImage)}},n.send(),n=null}}},{key:"getIframe",value:function(e){var t=this;return t.$iframe?void e(t.$iframe):void t.onAPIready(function(){function o(e,t,i){var o=document.createElement("source");o.src=t,o.type=i,e.appendChild(o)}var a=void 0;if(t.$iframe||(a=document.createElement("div"),a.style.display="none"),"youtube"===t.type){t.playerOptions={},t.playerOptions.videoId=t.videoID,t.playerOptions.playerVars={autohide:1,rel:0,autoplay:0},t.options.controls||(t.playerOptions.playerVars.iv_load_policy=3,t.playerOptions.playerVars.modestbranding=1,t.playerOptions.playerVars.controls=0,t.playerOptions.playerVars.showinfo=0,t.playerOptions.playerVars.disablekb=1);var n=void 0,r=void 0;t.playerOptions.events={onReady:function(e){t.options.mute?e.target.mute():t.options.volume&&e.target.setVolume(t.options.volume),t.options.autoplay&&t.play(t.options.startTime),t.fire("ready",e)},onStateChange:function(e){t.options.loop&&e.data===YT.PlayerState.ENDED&&t.play(t.options.startTime),n||e.data!==YT.PlayerState.PLAYING||(n=1,t.fire("started",e)),e.data===YT.PlayerState.PLAYING&&t.fire("play",e),e.data===YT.PlayerState.PAUSED&&t.fire("pause",e),e.data===YT.PlayerState.ENDED&&t.fire("end",e),t.options.endTime&&(e.data===YT.PlayerState.PLAYING?r=setInterval(function(){t.options.endTime&&t.player.getCurrentTime()>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())},150):clearInterval(r))}};var p=!t.$iframe;if(p){var l=document.createElement("div");l.setAttribute("id",t.playerID),a.appendChild(l),document.body.appendChild(a)}t.player=t.player||new window.YT.Player(t.playerID,t.playerOptions),p&&(t.$iframe=document.getElementById(t.playerID),t.videoWidth=parseInt(t.$iframe.getAttribute("width"),10)||1280,t.videoHeight=parseInt(t.$iframe.getAttribute("height"),10)||720)}if("vimeo"===t.type){t.playerOptions="",t.playerOptions+="player_id="+t.playerID,t.playerOptions+="&autopause=0",t.options.controls||(t.playerOptions+="&badge=0&byline=0&portrait=0&title=0"),t.playerOptions+="&autoplay="+(t.options.autoplay?"1":"0"),t.playerOptions+="&loop="+(t.options.loop?1:0),t.$iframe||(t.$iframe=document.createElement("iframe"),t.$iframe.setAttribute("id",t.playerID),t.$iframe.setAttribute("src","https://player.vimeo.com/video/"+t.videoID+"?"+t.playerOptions),t.$iframe.setAttribute("frameborder","0"),a.appendChild(t.$iframe),document.body.appendChild(a)),t.player=t.player||new Vimeo.Player(t.$iframe),t.player.getVideoWidth().then(function(e){t.videoWidth=e||1280}),t.player.getVideoHeight().then(function(e){t.videoHeight=e||720}),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.options.mute?t.player.setVolume(0):t.options.volume&&t.player.setVolume(t.options.volume);var s=void 0;t.player.on("timeupdate",function(e){s||t.fire("started",e),s=1,t.options.endTime&&t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.on("play",function(e){t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)}),t.player.on("pause",function(e){t.fire("pause",e)}),t.player.on("ended",function(e){t.fire("end",e)}),t.player.on("loaded",function(e){t.fire("ready",e)})}if("local"===t.type){t.$iframe||(t.$iframe=document.createElement("video"),t.options.mute?t.$iframe.muted=!0:t.$iframe.volume&&(t.$iframe.volume=t.options.volume/100),t.options.loop&&(t.$iframe.loop=!0),t.$iframe.setAttribute("id",t.playerID),a.appendChild(t.$iframe),document.body.appendChild(a),Object.keys(t.videoID).forEach(function(e){o(t.$iframe,t.videoID[e],"video/"+e)})),t.player=t.player||t.$iframe;var u=void 0;i(t.player,"playing",function(e){u||t.fire("started",e),u=1}),i(t.player,"timeupdate",function(){t.options.endTime&&t.options.endTime&&this.currentTime>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),i(t.player,"play",function(e){t.fire("play",e)}),i(t.player,"pause",function(e){t.fire("pause",e)}),i(t.player,"ended",function(e){t.fire("end",e)}),i(t.player,"loadedmetadata",function(){t.videoWidth=this.videoWidth||1280,t.videoHeight=this.videoHeight||720,t.fire("ready"),t.options.autoplay&&t.play(t.options.startTime)})}e(t.$iframe)})}},{key:"init",value:function(){var e=this;e.playerID="VideoWorker-"+e.ID}},{key:"loadAPI",value:function(){var e=this;if(!r||!p){var t="";if("youtube"!==e.type||r||(r=1,t="https://www.youtube.com/iframe_api"),"vimeo"!==e.type||p||(p=1,t="https://player.vimeo.com/api/player.js"),t){var i=document.createElement("script"),o=document.getElementsByTagName("head")[0];i.src=t,o.appendChild(i),o=null,i=null}}}},{key:"onAPIready",value:function(e){var t=this;if("youtube"===t.type&&("undefined"!=typeof YT&&0!==YT.loaded||l?"object"===("undefined"==typeof YT?"undefined":o(YT))&&1===YT.loaded?e():u.done(function(){e()}):(l=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,u.resolve("done"),e()})),"vimeo"===t.type)if("undefined"!=typeof Vimeo||s)"undefined"!=typeof Vimeo?e():d.done(function(){e()});else{s=1;var i=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(i),d.resolve("done"),e())},20)}"local"===t.type&&e()}}]),t}();window.VideoWorker=y,

/*Video Background Extension for Jarallax */
function(){if("undefined"!=typeof jarallax){var e=jarallax.constructor,t=e.prototype.init;e.prototype.init=function(){var e=this;t.apply(e),e.video&&e.video.getIframe(function(t){var i=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),e.$video=t,e.image.$container.appendChild(t),i.parentNode.removeChild(i)})};var o=e.prototype.coverImage;e.prototype.coverImage=function(){var e=this,t=o.apply(e),i=e.image.$item.nodeName;if(t&&e.video&&("IFRAME"===i||"VIDEO"===i)){var a=t.image.height,n=a*e.image.width/e.image.height,r=(t.container.width-n)/2,p=t.image.marginTop;t.container.width>n&&(n=t.container.width,a=n*e.image.height/e.image.width,r=0,p+=(t.image.height-a)/2),"IFRAME"===i&&(a+=400,p-=200),e.css(e.$video,{width:n+"px",marginLeft:r+"px",height:a+"px",marginTop:p+"px"})}return t};var a=e.prototype.initImg;e.prototype.initImg=function(){var e=this,t=a.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};var n=e.prototype.canInitParallax;e.prototype.canInitParallax=function(){var e=this,t=n.apply(e);if(!e.options.videoSrc)return t;var i=new y(e.options.videoSrc,{startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:e.options.videoVolume?0:1,volume:e.options.videoVolume||0});if(i.isValid())if(t){if(i.on("ready",function(){if(e.options.videoPlayOnlyVisible){var t=e.onScroll;e.onScroll=function(){t.apply(e),e.isVisible()?i.play():i.pause()}}else i.play()}),i.on("started",function(){e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.options.imgWidth=e.image.width,e.options.imgHeight=e.image.height,e.coverImage(),e.clipContainer(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")}),e.video=i,!e.defaultInitImgResult)return"local"!==i.type?(i.getImageURL(function(t){e.image.src=t,e.init()}),!1):(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0)}else e.defaultInitImgResult||i.getImageURL(function(t){var i=e.$item.getAttribute("style");i&&e.$item.setAttribute("data-jarallax-original-styles",i),e.css(e.$item,{"background-image":'url("'+t+'")',"background-position":"center","background-size":"cover"})});return t};var r=e.prototype.destroy;e.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),r.apply(e)},i(window,"DOMContentLoaded",function(){jarallax(document.querySelectorAll("[data-jarallax-video]"))})}}()}();

/* Imagesloaded */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/* Fitvids */
!function(o){"use strict";o.fn.fitVids=function(t){var e,i,r={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(e=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(i.childNodes[1])),t&&o.extend(r,t),this.each(function(){var t=['iframe[data-src*="player.vimeo.com"]','iframe[data-src*="youtube.com"]','iframe[data-src*="youtube-nocookie.com"]','iframe[data-src*="player.twitch.tv"]','iframe[data-src*="maps.google.com"]','iframe[data-src*="google.com/maps"]','iframe[data-src*="dailymotion.com"]','iframe[data-src*="twitter.com/i/videos"]','iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="player.twitch.tv"]','iframe[src*="maps.google.com"]','iframe[src*="google.com/maps"]','iframe[src*="dailymotion.com"]','iframe[src*="twitter.com/i/videos"]',"object","embed"];r.customSelector&&t.push(r.customSelector);var a=".fitvidsignore";r.ignore&&(a=a+", "+r.ignore);t=o(this).find(t.join(","));(t=(t=t.not("object object")).not(a)).each(function(){var t,e,i=o(this);0<i.parents(a).length||(void 0!==i.data("src")&&(i.attr("src",i.data("src")),i.removeAttr("data-src")),"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),t=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(e="fitvid"+o.fn.fitVids._count,i.attr("name",e),o.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),i.removeAttr("height").removeAttr("width")))})})},o.fn.fitVids._count=0}(window.jQuery||window.Zepto);

/* isotope */
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/* Inview */
!function(t){var e,i,n={},o=document,l=window,a=o.documentElement,d=t.expando;t.event.special.inview={add:function(e){n[e.guid+"-"+this[d]]={data:e,$element:t(this)}},remove:function(t){try{delete n[t.guid+"-"+this[d]]}catch(e){}}},t(l).on("scroll resize",function(){e=i=null}),!a.addEventListener&&a.attachEvent&&a.attachEvent("onfocusin",function(){i=null}),setInterval(function(){var d,f=t(),h=0;if(t.each(n,function(t,e){var i=e.data.selector,n=e.$element;f=f.add(i?n.find(i):n)}),d=f.length){var r;if(!(r=e)){var c={height:l.innerHeight,width:l.innerWidth};c.height||!(r=o.compatMode)&&t.support.boxModel||(r="CSS1Compat"===r?a:o.body,c={height:r.clientHeight,width:r.clientWidth}),r=c}for(e=r,i=i||{top:l.pageYOffset||a.scrollTop||o.body.scrollTop,left:l.pageXOffset||a.scrollLeft||o.body.scrollLeft};d>h;h++)if(t.contains(a,f[h])){r=t(f[h]);var p=r.height(),s=r.width(),g=r.offset(),c=r.data("inview");if(!i||!e)break;g.top+p>i.top&&g.top<i.top+e.height&&g.left+s>i.left&&g.left<i.left+e.width?(s=i.left>g.left?"right":i.left+e.width<g.left+s?"left":"both",p=i.top>g.top?"bottom":i.top+e.height<g.top+p?"top":"both",g=s+"-"+p,(!c||c!==g)&&r.data("inview",g).trigger("inview",[!0,s,p])):c&&r.data("inview",!1).trigger("inview",[!1])}}},250)}(jQuery);

/* Sticky */
!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},i=t(window),n=t(document),s=[],r=i.height(),o=function(){for(var e=i.scrollTop(),o=n.height(),a=o-r,c=e>a?a-e:0,p=0;p<s.length;p++){var l=s[p],d=l.stickyWrapper.offset().top,h=d-l.topSpacing-c;if(h>=e)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.trigger("sticky-end",[l]).parent().removeClass(l.className),l.currentTop=null);else{var u=o-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;0>u?u+=l.topSpacing:u=l.topSpacing,l.currentTop!=u&&(l.stickyElement.css("position","fixed").css("top",u),"undefined"!=typeof l.getWidthFrom&&l.stickyElement.css("width",t(l.getWidthFrom).width()),l.stickyElement.trigger("sticky-start",[l]).parent().addClass(l.className),l.currentTop=u)}}},a=function(){r=i.height();for(var e=0;e<s.length;e++){var n=s[e];"undefined"!=typeof n.getWidthFrom&&n.responsiveWidth===!0&&n.stickyElement.css("width",t(n.getWidthFrom).width())}},c={init:function(i){var n=t.extend({},e,i);return this.each(function(){var i=t(this),r=i.attr("id"),o=(r?r+"-"+e.wrapperClassName:e.wrapperClassName,t("<div></div>").attr("id",r+"-sticky-wrapper").addClass(n.wrapperClassName));i.wrapAll(o),n.center&&i.parent().css({width:i.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==i.css("float")&&i.css({"float":"none"}).parent().css({"float":"right"});var a=i.parent();a.css("height",i.outerHeight()),s.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:i,currentTop:null,stickyWrapper:a,className:n.className,getWidthFrom:n.getWidthFrom,responsiveWidth:n.responsiveWidth})})},update:o,unstick:function(){return this.each(function(){for(var e=t(this),i=-1,n=0;n<s.length;n++)s[n].stickyElement.get(0)==e.get(0)&&(i=n);-1!=i&&(s.splice(i,1),e.unwrap(),e.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",o,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",o),window.attachEvent("onresize",a)),t.fn.pensticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t.fn.penunstick=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments)},t(function(){setTimeout(o,0)})}(jQuery);

/* Magnific-popup */
!function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;r<l.length;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;r<c.length;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.wrap.css(t.fixedContentPos?{overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}:{top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),t.st.showCloseBtn&&(!t.st.closeBtnInside||t.currTemplate[t.currItem.type]===!0)&&t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).trigger('focus'),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(typeof a === 'function'){if(!a.call(t))return!0}else if(I.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),!i&&"loading"===e&&(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).trigger('focus')},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(typeof i === 'function')return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void d();r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()}(window.jQuery||window.Zepto);

/* theiaStickySidebar */
!function(g){g.fn.theiaStickySidebar=function(b){(b=g.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0},b)).additionalMarginTop=parseInt(b.additionalMarginTop)||0,b.additionalMarginBottom=parseInt(b.additionalMarginBottom)||0,g("head").append(g('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),this.each(function(){var i={},t="no";i.sidebar=g(this),i.options=b||{},i.container=g(i.options.containerSelector),0==i.container.length&&(i.container=i.sidebar.parent()),i.sidebar.parents().css("-webkit-transform","none"),i.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),i.stickySidebar=i.sidebar.children(".theiaStickySidebar"),0==i.stickySidebar.length&&(i.sidebar.hasClass("penci-sticky-sb")||i.sidebar.hasClass("penci-sticky-ct")?(t="yes",i.sidebar.find("script").remove(),i.stickySidebar=i.sidebar.children().addClass("theiaStickySidebar")):(i.sidebar.find("script").remove(),i.stickySidebar=g("<div>").addClass("theiaStickySidebar").append(i.sidebar.children())),i.sidebar.append(i.stickySidebar)),i.marginTop=parseInt(i.sidebar.css("margin-top")),i.marginBottom=parseInt(i.sidebar.css("margin-bottom")),i.paddingTop=parseInt(i.sidebar.css("padding-top")),i.paddingBottom=parseInt(i.sidebar.css("padding-bottom"));var o,a,e=i.stickySidebar.offset().top,d=i.stickySidebar.outerHeight();function p(){i.fixedScrollTop=0,i.sidebar.css({"min-height":"1px"}),i.stickySidebar.css({position:"static",width:""})}"yes"!==t&&(i.stickySidebar.css("padding-top",1),i.stickySidebar.css("padding-bottom",1)),e-=i.stickySidebar.offset().top,d=i.stickySidebar.outerHeight()-d-e,0==e?("yes"!==t&&i.stickySidebar.css("padding-top",0),i.stickySidebarPaddingTop=0):i.stickySidebarPaddingTop=1,0==d?("yes"!==t&&i.stickySidebar.css("padding-bottom",0),i.stickySidebarPaddingBottom=0):i.stickySidebarPaddingBottom=1,i.previousScrollTop=null,i.fixedScrollTop=0,p(),i.onScroll=function(i){var t,o,a,e,d,s,r,n,c;i.stickySidebar.is(":visible")&&(g("body").width()<i.options.minWidth||i.sidebar.outerWidth(!0)+50>i.container.width()?p():(r="static",(t=g(document).scrollTop())>=i.container.offset().top+(i.paddingTop+i.marginTop-i.options.additionalMarginTop)&&(a=i.paddingTop+i.marginTop+b.additionalMarginTop,s=i.paddingBottom+i.marginBottom+b.additionalMarginBottom,e=i.container.offset().top,d=i.container.offset().top+(c=i.container,n=c.height(),c.children().each(function(){n=Math.max(n,g(this).height())}),n),o=0+b.additionalMarginTop,c=i.stickySidebar.outerHeight()+a+s<g(window).height()?o+i.stickySidebar.outerHeight():g(window).height()-i.marginBottom-i.paddingBottom-b.additionalMarginBottom,a=e-t+i.paddingTop+i.marginTop,s=d-t-i.paddingBottom-i.marginBottom,e=i.stickySidebar.offset().top-t,d=i.previousScrollTop-t,"fixed"==i.stickySidebar.css("position")&&(e+=d),e=0<d?Math.min(e,o):Math.max(e,c-i.stickySidebar.outerHeight()),e=Math.max(e,a),e=Math.min(e,s-i.stickySidebar.outerHeight()),r=((s=i.container.height()==i.stickySidebar.outerHeight())||e!=o)&&(s||e!=c-i.stickySidebar.outerHeight())?t+e-i.sidebar.offset().top-i.paddingTop<=b.additionalMarginTop?"static":"absolute":"fixed"),"fixed"==r?i.stickySidebar.css({position:"fixed",width:i.sidebar.width(),top:e,left:i.sidebar.offset().left+parseInt(i.sidebar.css("padding-left"))+parseInt(i.sidebar.css("border-left"))}):"absolute"==r?(c={},"absolute"!=i.stickySidebar.css("position")&&(c.position="absolute",c.top=t+e-i.sidebar.offset().top-i.stickySidebarPaddingTop-i.stickySidebarPaddingBottom),c.width=i.sidebar.width(),c.left="",i.stickySidebar.css(c)):"static"==r&&p(),"static"!=r&&1==i.options.updateSidebarHeight&&i.sidebar.css({"min-height":i.stickySidebar.outerHeight()+i.stickySidebar.offset().top-i.sidebar.offset().top+i.paddingBottom}),i.previousScrollTop=t))},i.onScroll(i),g(document).on("scroll",(o=i,function(){o.onScroll(o)})),g(window).on("resize",(a=i,function(){a.stickySidebar.css({position:"static"}),a.onScroll(a)}))})}}(jQuery);

/* justifiedGallery */
!function(l){function n(t,i){this.settings=i,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=0<=i.border?i.border:i.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.spinner={phase:0,timeSlot:150,$el:l('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.checkWidthIntervalId=null,this.galleryWidth=t.width(),this.$gallery=t}n.prototype.getSuffix=function(t,i){for(var e=i<t?t:i,s=0;s<this.suffixRanges.length;s++)if(e<=this.suffixRanges[s])return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];return this.settings.sizeRangeSuffixes[this.suffixRanges[s-1]]},n.prototype.removeSuffix=function(t,i){return t.substring(0,t.length-i.length)},n.prototype.endsWith=function(t,i){return-1!==t.indexOf(i,t.length-i.length)},n.prototype.getUsedSuffix=function(t){for(var i in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(i)){if(0===this.settings.sizeRangeSuffixes[i].length)continue;if(this.endsWith(t,this.settings.sizeRangeSuffixes[i]))return this.settings.sizeRangeSuffixes[i]}return""},n.prototype.newSrc=function(t,i,e){var s,n;return this.settings.thumbnailPath?n=this.settings.thumbnailPath(t,i,e):(s=null!==(s=t.match(this.settings.extension))?s[0]:"",n=t.replace(this.settings.extension,""),n=this.removeSuffix(n,this.getUsedSuffix(n)),n+=this.getSuffix(i,e)+s),n},n.prototype.showImg=function(t,i){this.settings.cssAnimation?(t.addClass("entry-visible"),i&&i()):t.stop().fadeTo(this.settings.imagesAnimationDuration,1,i)},n.prototype.extractImgSrcFromImage=function(t){var i=void 0!==t.data("src")?t.data("src"):t.attr("src");return t.data("jg.originalSrc",i),i},n.prototype.imgFromEntry=function(t){var i=t.find("> img");return 0===i.length&&(i=t.find("> a > img")),0===i.length?null:i},n.prototype.captionFromEntry=function(t){t=t.find("> .caption");return 0===t.length?null:t},n.prototype.displayEntry=function(t,i,e,s,n,r){t.width(s),t.height(r),t.css("top",e),t.css("left",i);var o,a,h,g=this.imgFromEntry(t);null!==g?(g.css("width",s),g.css("height",n),g.css("margin-left",-s/2),g.css("margin-top",-n/2),o=g.attr("src"),a=this.newSrc(o,s,n),g.one("error",function(){g.attr("src",g.data("jg.originalSrc"))}),h=function(){o!==a&&g.attr("src",a)},"skipped"===t.data("jg.loaded")?this.onImageEvent(o,l.proxy(function(){this.showImg(t,h),t.data("jg.loaded",!0)},this)):this.showImg(t,h)):this.showImg(t),this.displayEntryCaption(t)},n.prototype.displayEntryCaption=function(t){var i,e=this.imgFromEntry(t);null!==e&&this.settings.captions?(null===(i=this.captionFromEntry(t))&&(e=e.attr("alt"),this.isValidCaption(e)||(e=t.attr("title")),this.isValidCaption(e)&&(i=l('<div class="caption">'+e+"</div>"),t.append(i),t.data("jg.createdCaption",!0))),null!==i&&(this.settings.cssAnimation||i.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(t))):this.removeCaptionEventsHandlers(t)},n.prototype.isValidCaption=function(t){return void 0!==t&&0<t.length},n.prototype.onEntryMouseEnterForCaption=function(t){t=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?t.addClass("caption-visible").removeClass("caption-hidden"):t.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},n.prototype.onEntryMouseLeaveForCaption=function(t){t=this.captionFromEntry(l(t.currentTarget));this.settings.cssAnimation?t.removeClass("caption-visible").removeClass("caption-hidden"):t.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},n.prototype.addCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0===i&&(i={mouseenter:l.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:l.proxy(this.onEntryMouseLeaveForCaption,this)},t.on("mouseenter",void 0,void 0,i.mouseenter),t.on("mouseleave",void 0,void 0,i.mouseleave),t.data("jg.captionMouseEvents",i))},n.prototype.removeCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0!==i&&(t.off("mouseenter",void 0,i.mouseenter),t.off("mouseleave",void 0,i.mouseleave),t.removeData("jg.captionMouseEvents"))},n.prototype.prepareBuildingRow=function(t){var i,e,s,n,r=!0,o=0,a=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,h=a/this.buildingRow.aspectRatio,g=this.buildingRow.width/a>this.settings.justifyThreshold;if(t&&"hide"===this.settings.lastRow&&!g){for(i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],this.settings.cssAnimation?e.removeClass("entry-visible"):e.stop().fadeTo(0,0);return-1}for(t&&!g&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(r=!1),i=0;i<this.buildingRow.entriesBuff.length;i++)n=(e=this.buildingRow.entriesBuff[i]).data("jg.width")/e.data("jg.height"),n=r?(s=i===this.buildingRow.entriesBuff.length-1?a:h*n,h):(s=this.settings.rowHeight*n,this.settings.rowHeight),a-=Math.round(s),e.data("jg.jwidth",Math.round(s)),e.data("jg.jheight",Math.ceil(n)),(0===i||n<o)&&(o=n);return this.settings.fixedHeight&&o>this.settings.rowHeight&&(o=this.settings.rowHeight),this.buildingRow.height=o,r},n.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},n.prototype.flushRow=function(t){var i,e=this.settings,s=this.border,n=this.prepareBuildingRow(t);if(t&&"hide"===e.lastRow&&-1===this.buildingRow.height)this.clearBuildingRow();else{if(this.maxRowHeight.isPercentage?this.maxRowHeight.value*e.rowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value*e.rowHeight):0<this.maxRowHeight.value&&this.maxRowHeight.value<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value),"center"===e.lastRow||"right"===e.lastRow){for(var r=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*e.margins,o=0;o<this.buildingRow.entriesBuff.length;o++)r-=(i=this.buildingRow.entriesBuff[o]).data("jg.jwidth");"center"===e.lastRow?s+=r/2:"right"===e.lastRow&&(s+=r)}for(o=0;o<this.buildingRow.entriesBuff.length;o++)i=this.buildingRow.entriesBuff[o],this.displayEntry(i,s,this.offY,i.data("jg.jwidth"),i.data("jg.jheight"),this.buildingRow.height),s+=i.data("jg.jwidth")+e.margins;this.$gallery.height(this.offY+this.buildingRow.height+this.border+(this.isSpinnerActive()?this.getSpinnerHeight():0)),(!t||this.buildingRow.height<=e.rowHeight&&n)&&(this.offY+=this.buildingRow.height+e.margins,this.clearBuildingRow(),this.$gallery.trigger("jg.rowflush"))}},n.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(l.proxy(function(){var t=parseFloat(this.$gallery.width());Math.abs(t-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=t,this.rewind(),this.startImgAnalyzer(!0))},this),this.settings.refreshTime)},n.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},n.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},n.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.$gallery.height(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},n.prototype.startLoadingSpinnerAnimation=function(){var t=this.spinner,i=t.$el.find("span");clearInterval(t.intervalId),this.$gallery.append(t.$el),this.$gallery.height(this.offY+this.buildingRow.height+this.getSpinnerHeight()),t.intervalId=setInterval(function(){t.phase<i.length?i.eq(t.phase).fadeTo(t.timeSlot,1):i.eq(t.phase-i.length).fadeTo(t.timeSlot,0),t.phase=(t.phase+1)%(2*i.length)},t.timeSlot)},n.prototype.rewind=function(){this.lastAnalyzedIndex=-1,this.offY=this.border,this.clearBuildingRow()},n.prototype.updateEntries=function(t){return this.entries=this.$gallery.find(this.settings.selector).toArray(),0!==this.entries.length&&(this.settings.filter?this.modifyEntries(this.filterArray,t):this.modifyEntries(this.resetFilters,t),"function"==typeof this.settings.sort?this.modifyEntries(this.sortArray,t):this.settings.randomize&&this.modifyEntries(this.shuffleArray,t),!0)},n.prototype.insertToGallery=function(t){var i=this;l.each(t,function(){l(this).appendTo(i.$gallery)})},n.prototype.shuffleArray=function(t){for(var i,e,s=t.length-1;0<s;s--)i=Math.floor(Math.random()*(s+1)),e=t[s],t[s]=t[i],t[i]=e;return this.insertToGallery(t),t},n.prototype.sortArray=function(t){return t.sort(this.settings.sort),this.insertToGallery(t),t},n.prototype.resetFilters=function(t){for(var i=0;i<t.length;i++)l(t[i]).removeClass("jg-filtered");return t},n.prototype.filterArray=function(t){var i=this.settings;return"string"==typeof i.filter?t.filter(function(t){t=l(t);return t.is(i.filter)?(t.removeClass("jg-filtered"),!0):(t.addClass("jg-filtered"),!1)}):"function"==typeof i.filter?t.filter(i.filter):void 0},n.prototype.modifyEntries=function(t,i){var e=i?this.entries.splice(this.lastAnalyzedIndex+1,this.entries.length-this.lastAnalyzedIndex-1):this.entries,e=t.call(this,e);this.entries=i?this.entries.concat(e):e},n.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),l.each(this.entries,l.proxy(function(t,i){var e=l(i);e.css("width",""),e.css("height",""),e.css("top",""),e.css("left",""),e.data("jg.loaded",void 0),e.removeClass("jg-entry");i=this.imgFromEntry(e);i.css("width",""),i.css("height",""),i.css("margin-left",""),i.css("margin-top",""),i.attr("src",i.data("jg.originalSrc")),i.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(e);i=this.captionFromEntry(e);e.data("jg.createdCaption")?(e.data("jg.createdCaption",void 0),null!==i&&i.remove()):null!==i&&i.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},n.prototype.analyzeImages=function(t){for(var i=this.lastAnalyzedIndex+1;i<this.entries.length;i++){var e=l(this.entries[i]);if(!0===e.data("jg.loaded")||"skipped"===e.data("jg.loaded")){var s=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,n=e.data("jg.width")/e.data("jg.height");if(s/(this.buildingRow.aspectRatio+n)<this.settings.rowHeight&&(this.flushRow(!1),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(t);this.buildingRow.entriesBuff.push(e),this.buildingRow.aspectRatio+=n,this.buildingRow.width+=n*this.settings.rowHeight,this.lastAnalyzedIndex=i}else if("error"!==e.data("jg.loaded"))return}0<this.buildingRow.entriesBuff.length&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.$gallery.trigger(t?"jg.resize":"jg.complete")},n.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&clearTimeout(this.imgAnalyzerTimeout)},n.prototype.startImgAnalyzer=function(t){var i=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){i.analyzeImages(t)},.001)},n.prototype.onImageEvent=function(t,i,e){var s,n;(i||e)&&(s=new Image,n=l(s),i&&n.one("load",function(){n.off("load error"),i(s)}),e&&n.one("error",function(){n.off("load error"),e(s)}),s.src=t)},n.prototype.init=function(){var r=!1,o=!1,a=this;l.each(this.entries,function(t,i){var e=l(i),s=a.imgFromEntry(e);if(e.addClass("jg-entry"),!0!==e.data("jg.loaded")&&"skipped"!==e.data("jg.loaded"))if(null!==a.settings.rel&&e.attr("rel",a.settings.rel),null!==a.settings.target&&e.attr("target",a.settings.target),null!==s){var n=a.extractImgSrcFromImage(s);if(s.attr("src",n),!1===a.settings.waitThumbnailsLoad){i=parseFloat(s.attr("width")),s=parseFloat(s.attr("height"));if(!isNaN(i)&&!isNaN(s))return e.data("jg.width",i),e.data("jg.height",s),e.data("jg.loaded","skipped"),o=!0,a.startImgAnalyzer(!1),!0}e.data("jg.loaded",!1),r=!0,a.isSpinnerActive()||a.startLoadingSpinnerAnimation(),a.onImageEvent(n,function(t){e.data("jg.width",t.width),e.data("jg.height",t.height),e.data("jg.loaded",!0),a.startImgAnalyzer(!1)},function(){e.data("jg.loaded","error"),a.startImgAnalyzer(!1)})}else e.data("jg.loaded",!0),e.data("jg.width",e.width()|parseFloat(e.css("width"))|1),e.data("jg.height",e.height()|parseFloat(e.css("height"))|1)}),r||o||this.startImgAnalyzer(!1),this.checkWidth()},n.prototype.checkOrConvertNumber=function(t,i){if("string"==typeof t[i]&&(t[i]=parseFloat(t[i])),"number"!=typeof t[i])throw i+" must be a number";if(isNaN(t[i]))throw"invalid number for "+i},n.prototype.checkSizeRangesSuffixes=function(){if("object"!=typeof this.settings.sizeRangeSuffixes)throw"sizeRangeSuffixes must be defined and must be an object";var t,i=[];for(t in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(t)&&i.push(t);for(var e={0:""},s=0;s<i.length;s++)if("string"==typeof i[s])try{e[parseInt(i[s].replace(/^[a-z]+/,""),10)]=this.settings.sizeRangeSuffixes[i[s]]}catch(t){throw"sizeRangeSuffixes keys must contains correct numbers ("+t+")"}else e[i[s]]=this.settings.sizeRangeSuffixes[i[s]];this.settings.sizeRangeSuffixes=e},n.prototype.retrieveMaxRowHeight=function(){var t={};if("string"==typeof this.settings.maxRowHeight)this.settings.maxRowHeight.match(/^[0-9]+%$/)?(t.value=parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100,t.isPercentage=!1):(t.value=parseFloat(this.settings.maxRowHeight),t.isPercentage=!0);else{if("number"!=typeof this.settings.maxRowHeight)throw"maxRowHeight must be a number or a percentage";t.value=this.settings.maxRowHeight,t.isPercentage=!1}if(isNaN(t.value))throw"invalid number for maxRowHeight";return t.isPercentage?t.value<100&&(t.value=100):0<t.value&&t.value<this.settings.rowHeight&&(t.value=this.settings.rowHeight),t},n.prototype.checkSettings=function(){if(this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border"),"justify"!==this.settings.lastRow&&"nojustify"!==this.settings.lastRow&&"left"!==this.settings.lastRow&&"center"!==this.settings.lastRow&&"right"!==this.settings.lastRow&&"hide"!==this.settings.lastRow)throw'lastRow must be "justify", "nojustify", "left", "center", "right" or "hide"';if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||1<this.settings.justifyThreshold)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!=typeof this.settings.cssAnimation)throw"cssAnimation must be a boolean";if("boolean"!=typeof this.settings.captions)throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||1<this.settings.captionSettings.visibleOpacity)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||1<this.settings.captionSettings.nonVisibleOpacity)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!=typeof this.settings.fixedHeight)throw"fixedHeight must be a boolean";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!=typeof this.settings.randomize)throw"randomize must be a boolean";if("string"!=typeof this.settings.selector)throw"selector must be a string";if(!1!==this.settings.sort&&"function"!=typeof this.settings.sort)throw"sort must be false or a comparison function";if(!1!==this.settings.filter&&"function"!=typeof this.settings.filter&&"string"!=typeof this.settings.filter)throw"filter must be false, a string or a filter function"},n.prototype.retrieveSuffixRanges=function(){var t,i=[];for(t in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(t)&&i.push(parseInt(t,10));return i.sort(function(t,i){return i<t?1:t<i?-1:0}),i},n.prototype.updateSettings=function(t){this.settings=l.extend({},this.settings,t),this.checkSettings(),this.border=0<=this.settings.border?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},l.fn.justifiedGallery=function(s){return this.each(function(t,i){var e=l(i);e.addClass("justified-gallery");i=e.data("jg.controller");if(void 0===i){if(null!=s&&"object"!=typeof s){if("destroy"===s)return;throw"The argument must be an object"}i=new n(e,l.extend({},l.fn.justifiedGallery.defaults,s)),e.data("jg.controller",i)}else if("norewind"!==s){if("destroy"===s)return void i.destroy();i.updateSettings(s),i.rewind()}i.updateEntries("norewind"===s)&&i.init()})},l.fn.justifiedGallery.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:-1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,sort:!1,filter:!1,selector:"> a, > div:not(.spinner)"}}(jQuery);

/*! FAKTOR VIER Video Controller v0.1.3 | (c) 2015 FAKTOR VIER GmbH | http://faktorvier.ch */
function PenciISJson(e){e="string"!=typeof e?JSON.stringify(e):e;try{e=JSON.parse(e)}catch(e){return!1}return"object"==typeof e&&null!==e}function onYouTubeIframeAPIReady(){if(void 0!==jQuery.video)for(callback_index in jQuery.video.global.youtube_api_ready_callbacks)jQuery.video.global.youtube_api_ready_callbacks[callback_index]()}var video_postmessage_event_func="attachEvent",video_postmessage_event="onmessage";window.addEventListener&&(video_postmessage_event_func="addEventListener",video_postmessage_event="message"),window[video_postmessage_event_func](video_postmessage_event,function(e){if(PenciISJson(e.data)&&/^https?:\/\/player.vimeo.com/.test(e.origin)&&"object"!=typeof e.data){var t=JSON.parse(e.data);if(void 0!==t.player_id&&-1===t.player_id.indexOf("VideoWorker")){var i=void 0===t.event?null:t.event,a=(void 0===t.method||t.method,jQuery("#"+t.player_id)),o=a.getVideoConfig();switch(null==o&&(a.initVideo(),o=a.getVideoConfig()),i){case"ready":jQuery.video.vimeo_postmessage(a,"addEventListener","play"),jQuery.video.vimeo_postmessage(a,"addEventListener","pause"),jQuery.video.vimeo_postmessage(a,"addEventListener","finish"),a.data("video-player",a),a.attr(o.attr_ready,""),a.trigger("ready"+jQuery.video.global.event_suffix);break;case"play":a.removeAttr(o.attr_paused),a.attr(o.attr_playing,""),a.trigger("play"+jQuery.video.global.event_suffix);break;case"pause":a.removeAttr(o.attr_playing),a.attr(o.attr_paused,""),a.trigger("pause"+jQuery.video.global.event_suffix);break;case"finish":a.removeAttr(o.attr_playing),a.removeAttr(o.attr_paused),a.trigger("finish"+$.video.global.event_suffix)}}}},!1),function(e){e.video={global:{event_suffix:"_video",youtube_api_ready_callbacks:[],youtube_iframe_api:"https://www.youtube.com/iframe_api"},config:{attr_ready:"data-video-ready",attr_playing:"data-video-playing",attr_paused:"data-video-paused"}};var t=function(t,i){var a=t.data("video").config;if(void 0===t.data("video-player")){var o=function(){var o=new YT.Player(t[0],{events:{onReady:function(e){t.attr(a.attr_ready,""),i(e.target)},onStateChange:function(i){switch(i.data){case 0:t.removeAttr(a.attr_paused),t.removeAttr(a.attr_playing),t.trigger("finish"+e.video.global.event_suffix);break;case 1:t.removeAttr(a.attr_paused),t.attr(a.attr_playing,""),t.trigger("play"+e.video.global.event_suffix);break;case 2:t.removeAttr(a.attr_playing),t.attr(a.attr_paused,""),t.trigger("pause"+e.video.global.event_suffix)}}}});t.data("video-player",o)};"undefined"==typeof YT||void 0===YT.Player?(e.video.global.youtube_api_ready_callbacks.push(function(){o()}),0==e('script[src="https://www.youtube.com/iframe_api"]').length&&0==e('script[src="http://www.youtube.com/iframe_api"]').length&&e("<script><\/script>").attr("src",e.video.global.youtube_iframe_api).insertBefore(e("script").first())):o()}else i(t.data("video-player"))},i=function(e,t){void 0!==e.data("video-player")&&t(e.data("video-player"))};e.video.vimeo_postmessage=function(e,t,i){var a={method:t};i&&(a.value=i),void 0!==e[0]&&e[0].contentWindow.postMessage(JSON.stringify(a),"*")},e.fn.getVideoConfig=function(){var t=e(this).first();return void 0!==t.data("video")?t.data("video").config:null},e.fn.getVideoPlayer=function(){var t=e(this).first();return void 0!==t.data("video-player")?t.data("video-player"):null},e.fn.getVideoType=function(){var t=e(this).first();return"video"==t.prop("tagName").toLowerCase()?video_type="video":-1!==t.attr("src").indexOf("youtube.com/embed")?video_type="youtube":-1!==t.attr("src").indexOf("player.vimeo.com/video")?video_type="vimeo":video_type="undefined",video_type},e.fn.initVideo=function(a){return this.each(function(){var o=e(this),r=o.getVideoType(),n=o.getVideoConfig();if(null!=n)return console.warn("Player already initialized!"),!1;if(n=e.extend(e.extend({},e.video.config),a),o.data("video",{config:n}),"youtube"==r)-1==o.attr("src").indexOf("enablejsapi=true")&&-1==o.attr("src").indexOf("enablejsapi=1")&&(-1==o.attr("src").indexOf("?")?o.attr("src",o.attr("src")+"?enablejsapi=1"):o.attr("src",o.attr("src")+"&enablejsapi=1"));else if("vimeo"==r&&(-1==o.attr("src").indexOf("api=true")&&-1==o.attr("src").indexOf("api=1")&&(-1==o.attr("src").indexOf("?")?o.attr("src",o.attr("src")+"?api=1"):o.attr("src",o.attr("src")+"&api=1")),-1==o.attr("src").indexOf("player_id="))){var d=o.attr("id");void 0===d&&(d="video-"+Math.round((new Date).getTime()+100*Math.random()),o.attr("id",d)),-1==o.attr("src").indexOf("?")?o.attr("src",o.attr("src")+"?player_id="+d):o.attr("src",o.attr("src")+"&player_id="+d)}"video"==r?(4==o.get(0).readyState?(o.attr(n.attr_ready,""),o.trigger("ready"+e.video.global.event_suffix)):o.get(0).addEventListener("canplaythrough",function(){o.attr(n.attr_ready,""),o.trigger("ready"+e.video.global.event_suffix),o.get(0).removeEventListener("canplaythrough",this)},!1),o.on("play",function(){o.removeAttr(n.attr_paused),o.attr(n.attr_playing,""),o.trigger("play"+e.video.global.event_suffix)}),o.on("pause",function(){o.removeAttr(n.attr_playing),o.attr(n.attr_paused,""),o.trigger("pause"+e.video.global.event_suffix)}),o.on("ended",function(){o.removeAttr(n.attr_playing),o.removeAttr(n.attr_paused),o.trigger("finish"+e.video.global.event_suffix)}),o.data("video-player",o[0])):"youtube"==r?t(o,function(t){o.trigger("ready"+e.video.global.event_suffix)}):"vimeo"==r&&i(o,function(t){o.trigger("ready"+e.video.global.event_suffix)})})},e.fn.playVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?r.play():"youtube"==o?t(a,function(e){e.playVideo()}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"play")})})},e.fn.pauseVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?r.pause():"youtube"==o?t(a,function(e){e.pauseVideo()}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"pause")})})},e.fn.stopVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?(r.pause(),r.currentTime=0):"youtube"==o?t(a,function(e){e.seekTo(e.getDuration())}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"unload")})})},e.fn.restartVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();a.getVideoConfig();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?(r.currentTime=0,r.play()):"youtube"==o?t(a,function(t){t.seekTo(0),t.playVideo(),a.trigger("restart"+e.video.global.event_suffix)}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"seekTo","0"),e.video.vimeo_postmessage(t,"play"),a.trigger("restart"+e.video.global.event_suffix)})})},e.fn.muteVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?r.muted=!0:"youtube"==o?t(a,function(e){e.mute()}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"setVolume","0")})})},e.fn.unmuteVideo=function(){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();if(null==r)return console.warn("Player not initialized!"),!1;"video"==o?r.muted=!1:"youtube"==o?t(a,function(e){e.unMute()}):"vimeo"==o&&i(a,function(t){e.video.vimeo_postmessage(t,"setVolume",1)})})},e.fn.seekToVideo=function(a){return this.each(function(){var o=e(this),r=o.getVideoType(),n=o.getVideoPlayer();if(null==n)return console.warn("Player not initialized!"),!1;"video"==r?n.currentTime=a:"youtube"==r?t(o,function(e){e.seekTo(a)}):"vimeo"==r&&i(o,function(t){e.video.vimeo_postmessage(t,"seekTo",a)})})},e.fn.destroyVideo=function(){return this.each(function(){var t=e(this),i=(t.getVideoType(),t.getVideoPlayer(),t.getVideoConfig());null!=i&&(t.removeData("video"),t.removeData("video-player"),t.removeAttr(i.attr_ready),t.removeAttr(i.attr_playing),t.removeAttr(i.attr_paused),t.trigger("destroy"+e.video.global.event_suffix))})},e.fn.addVideoEvent=function(t,i){return this.each(function(){var a=e(this),o=a.getVideoType(),r=a.getVideoPlayer();"play"!=t||"video"!=o||void 0===a.get(0).paused||a.get(0).paused||i(null,a,o,r),a.on(t+e.video.global.event_suffix,function(e){i(e,a,o,r)})})},e.fn.removeVideoEvent=function(t){return this.each(function(){e(this).unbind(t+e.video.global.event_suffix)})},e.fn.video=function(){var t="init",i={};return"string"==typeof arguments[0]?(t=arguments[0],i=arguments[1]):i=arguments[0],this.each(function(){var a=e(this);switch(t){case"init":a.initVideo(i);break;case"play":a.playVideo();break;case"pause":a.pauseVideo();break;case"stop":a.stopVideo();break;case"restart":a.restartVideo();break;case"mute":a.muteVideo();break;case"unmute":a.unmuteVideo();break;case"seekTo":a.seekToVideo(i);break;case"destroy":a.destroyVideo();break;case"addEvent":a.addVideoEvent(i[0],i[1]);break;case"removeEvent":a.removeVideoEvent(i[0]);break;default:console.warn('Video action "'+t+'" not found')}})}}(jQuery);

/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */

var Swiper=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function l(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function o(){return Date.now()}function d(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let a=1;a<arguments.length;a+=1){const i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i&&(s=i,!("undefined"!=typeof window&&void 0!==window.HTMLElement?s instanceof HTMLElement:s&&(1===s.nodeType||11===s.nodeType)))){const s=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,a=s.length;t<a;t+=1){const a=s[t],r=Object.getOwnPropertyDescriptor(i,a);void 0!==r&&r.enumerable&&(c(e[a])&&c(i[a])?i[a].__swiper__?e[a]=i[a]:p(e[a],i[a]):!c(e[a])&&c(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:p(e[a],i[a])):e[a]=i[a])}}}var s;return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e){try{return void console.warn(e)}catch(e){}}function v(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:n(t)),s}function w(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function b(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function y(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function E(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function x(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function S(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let T,M,C;function P(){return T||(T=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),T}function L(e){return void 0===e&&(e={}),M||(M=function(e){let{userAgent:t}=void 0===e?{}:e;const s=P(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),M}function A(){return C||(C=function(){const e=r();let t=!1;function s(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(s()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[e,a]=s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&a<2}}return{isSafari:t||s(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),C}var I={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};const z=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){let t=s.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(s.shadowRoot?t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{s.shadowRoot&&(t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},$=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},k=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,r=[s-t];return r.push(...Array.from({length:t}).map(((e,t)=>s+a+t))),void e.slides.forEach(((t,s)=>{r.includes(t.column)&&$(e,s)}))}const r=i+a-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=r+t;a+=1){const t=(a%s+s)%s;(t<i||t>r)&&$(e,t)}else for(let a=Math.max(i-t,0);a<=Math.min(r+t,s-1);a+=1)a!==i&&(a>r||a<i)&&$(e,a)};var O={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(b(a,"padding-left")||0,10)-parseInt(b(a,"padding-right")||0,10),s=s-parseInt(b(a,"padding-top")||0,10)-parseInt(b(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t,s){return parseFloat(t.getPropertyValue(e.getDirectionLabel(s))||0)}const s=e.params,{wrapperEl:a,slidesEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&s.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=f(i,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:c.length;let m=[];const h=[],g=[];let v=s.slidesOffsetBefore;"function"==typeof v&&(v=s.slidesOffsetBefore.call(e));let w=s.slidesOffsetAfter;"function"==typeof w&&(w=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,E=e.slidesGrid.length;let x=s.spaceBetween,T=-v,M=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*r:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x,c.forEach((e=>{n?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),s.centeredSlides&&s.cssMode&&(u(a,"--swiper-centered-offset-before",""),u(a,"--swiper-centered-offset-after",""));const P=s.grid&&s.grid.rows>1&&e.grid;let L;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();const A="auto"===s.slidesPerView&&s.breakpoints&&Object.keys(s.breakpoints).filter((e=>void 0!==s.breakpoints[e].slidesPerView)).length>0;for(let a=0;a<p;a+=1){let i;if(L=0,c[a]&&(i=c[a]),P&&e.grid.updateSlide(a,i,c),!c[a]||"none"!==b(i,"display")){if("auto"===s.slidesPerView){A&&(c[a].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(i),n=i.style.transform,l=i.style.webkitTransform;if(n&&(i.style.transform="none"),l&&(i.style.webkitTransform="none"),s.roundLengths)L=e.isHorizontal()?S(i,"width",!0):S(i,"height",!0);else{const e=t(r,"width"),s=t(r,"padding-left"),a=t(r,"padding-right"),n=t(r,"margin-left"),l=t(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)L=e+n+l;else{const{clientWidth:t,offsetWidth:r}=i;L=e+s+a+n+l+(r-t)}}n&&(i.style.transform=n),l&&(i.style.webkitTransform=l),s.roundLengths&&(L=Math.floor(L))}else L=(r-(s.slidesPerView-1)*x)/s.slidesPerView,s.roundLengths&&(L=Math.floor(L)),c[a]&&(c[a].style[e.getDirectionLabel("width")]=`${L}px`);c[a]&&(c[a].swiperSlideSize=L),g.push(L),s.centeredSlides?(T=T+L/2+M/2+x,0===M&&0!==a&&(T=T-r/2-x),0===a&&(T=T-r/2-x),Math.abs(T)<.001&&(T=0),s.roundLengths&&(T=Math.floor(T)),C%s.slidesPerGroup==0&&m.push(T),h.push(T)):(s.roundLengths&&(T=Math.floor(T)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&m.push(T),h.push(T),T=T+L+x),e.virtualSize+=L+x,M=L,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+w,n&&l&&("slide"===s.effect||"coverflow"===s.effect)&&(a.style.width=`${e.virtualSize+x}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),P&&e.grid.updateWrapperSize(L,m),!s.centeredSlides){const t=[];for(let a=0;a<m.length;a+=1){let i=m[a];s.roundLengths&&(i=Math.floor(i)),m[a]<=e.virtualSize-r&&t.push(i)}m=t,Math.floor(e.virtualSize-r)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-r)}if(o&&s.loop){const t=g[0]+x;if(s.slidesPerGroup>1){const a=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),i=t*s.slidesPerGroup;for(let e=0;e<a;e+=1)m.push(m[m.length-1]+i)}for(let a=0;a<e.virtual.slidesBefore+e.virtual.slidesAfter;a+=1)1===s.slidesPerGroup&&m.push(m[m.length-1]+t),h.push(h[h.length-1]+t),e.virtualSize+=t}if(0===m.length&&(m=[0]),0!==x){const t=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(((e,t)=>!(s.cssMode&&!s.loop)||t!==c.length-1)).forEach((e=>{e.style[t]=`${x}px`}))}if(s.centeredSlides&&s.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=e-r;m=m.map((e=>e<=0?-v:e>t?t+w:e))}if(s.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(x||0)})),e-=x,e<r){const t=(r-e)/2;m.forEach(((e,s)=>{m[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:m,slidesGrid:h,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){u(a,"--swiper-centered-offset-before",-m[0]+"px"),u(a,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),m.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(o||s.cssMode||"slide"!==s.effect&&"fade"!==s.effect)){const t=`${s.containerModifierClass}backface-hidden`,a=e.el.classList.contains(t);p<=s.maxBackfaceHiddenSlides?a||e.el.classList.add(t):a&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.forEach((e=>{e.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<a.length;e+=1){const o=a[e];let d=o.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const c=(n+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),u=-(n-d),m=u+t.slidesSizesGrid[e],h=u>=0&&u<=t.size-t.slidesSizesGrid[e];(u>=0&&u<t.size-1||m>1&&m<=t.size||u<=0&&m>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),a[e].classList.add(s.slideVisibleClass)),h&&a[e].classList.add(s.slideFullyVisibleClass),o.progress=i?-c:c,o.originalProgress=i?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndexByData(0),a=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e.grid&&s.grid&&s.grid.rows>1,l=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let o,d,c;if(t.forEach((e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)})),r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),o=l(`[data-swiper-slide-index="${t}"]`)}else o=l(`[data-swiper-slide-index="${i}"]`);else n?(o=t.filter((e=>e.column===i))[0],c=t.filter((e=>e.column===i+1))[0],d=t.filter((e=>e.column===i-1))[0]):o=t[i];o&&(o.classList.add(s.slideActiveClass),n?(c&&c.classList.add(s.slideNextClass),d&&d.classList.add(s.slidePrevClass)):(c=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c&&(c=t[0]),c&&c.classList.add(s.slideNextClass),d=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&0===!d&&(d=t[t.length-1]),d&&d.classList.add(s.slidePrevClass))),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r&&!t.params.loop)return void(o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")));if(d===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=c(d));const p=t.grid&&i.grid&&i.grid.rows>1;let u;if(t.virtual&&i.virtual.enabled&&i.loop)u=c(d);else if(p){const e=t.slides.filter((e=>e.column===d))[0];let s=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(s)&&(s=Math.max(t.slides.indexOf(e),0)),u=Math.floor(s/i.grid.rows)}else if(t.slides[d]){const e=t.slides[d].getAttribute("data-swiper-slide-index");u=e?parseInt(e,10):d}else u=d;Object.assign(t,{previousSnapIndex:l,snapIndex:o,previousRealIndex:n,realIndex:u,previousIndex:r,activeIndex:d}),t.initialized&&k(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(n!==u&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const s=this,a=s.params;let i=e.closest(`.${a.slideClass}, swiper-slide`);!i&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!i&&e.matches&&e.matches(`.${a.slideClass}, swiper-slide`)&&(i=e)}));let r,n=!1;if(i)for(let e=0;e<s.slides.length;e+=1)if(s.slides[e]===i){n=!0,r=e;break}if(!i||!n)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=i,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=r,a.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};var D={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=d(i,e);return r+=this.cssOverflowAdjustment(),s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d,i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():d-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${d}px, 0px)`);const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function G(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var X={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(r.animating&&l.preventInteractionOnTransition||!f&&!a&&!i)return!1;const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&(u?w>r.translate&&w>r.minTranslate():w<r.translate&&w<r.minTranslate()))return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this,r=i.grid&&i.params.grid&&i.params.grid.rows>1;let n=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)n+=i.virtual.slidesBefore;else{let e;if(r){const t=n*i.params.grid.rows;e=i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=i.getSlideIndexByData(n);const t=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:s}=i.params;let a=i.params.slidesPerView;"auto"===a?a=i.slidesPerViewDynamic():(a=Math.ceil(parseFloat(i.params.slidesPerView,10)),s&&a%2==0&&(a+=1));let l=t-e<a;if(s&&(l=l||e<Math.ceil(a/2)),l){const a=s?e<i.activeIndex?"prev":"next":e-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:a,slideTo:!0,activeSlideIndex:"next"===a?e+1:e-t+1,slideRealIndex:"next"===a?i.realIndex:void 0})}if(r){const e=n*i.params.grid.rows;n=i.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else n=i.getSlideIndexByData(n)}return requestAnimationFrame((()=>{i.slideTo(n,t,s,a)})),i},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i)return a;let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame((()=>{a.slideTo(a.activeIndex+o,e,t,s)})),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o)return a;const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return i.loop&&0===a.activeIndex&&i.cssMode?(requestAnimationFrame((()=>{a.slideTo(f,e,t,s)})),!0):a.slideTo(f,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const n=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var H={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},r=t.grid&&s.grid&&s.grid.rows>1,n=s.slidesPerGroup*(r?s.grid.rows:1),l=t.slides.length%n!=0,o=r&&t.slides.length%s.grid.rows!=0,d=e=>{for(let a=0;a<e;a+=1){const e=t.isElement?v("swiper-slide",[s.slideBlankClass]):v("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(e)}};if(l){if(s.loopAddBlankSlides){d(n-t.slides.length%n),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(o){if(s.loopAddBlankSlides){d(s.grid.rows-t.slides.length%s.grid.rows),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o,{centeredSlides:h}=m;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");let f=m.slidesPerView;"auto"===f?f=o.slidesPerViewDynamic():(f=Math.ceil(parseFloat(m.slidesPerView,10)),h&&f%2==0&&(f+=1));const v=m.slidesPerGroupAuto?f:m.slidesPerGroup;let w=v;w%v!=0&&(w+=v-w%v),w+=m.loopAdditionalSlides,o.loopedSlides=w;const b=o.grid&&m.grid&&m.grid.rows>1;d.length<f+w?g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===m.grid.fill&&g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],E=[];let x=o.activeIndex;void 0===r?r=o.getSlideIndex(d.filter((e=>e.classList.contains(m.slideActiveClass)))[0]):x=r;const S="next"===a||!a,T="prev"===a||!a;let M=0,C=0;const P=b?Math.ceil(d.length/m.grid.rows):d.length,L=(b?d[r].column:r)+(h&&void 0===i?-f/2+.5:0);if(L<w){M=Math.max(w-L,v);for(let e=0;e<w-L;e+=1){const t=e-Math.floor(e/P)*P;if(b){const e=P-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&y.push(t)}else y.push(P-t-1)}}else if(L+f>P-w){C=Math.max(L-(P-2*w),v);for(let e=0;e<C;e+=1){const t=e-Math.floor(e/P)*P;b?d.forEach(((e,s)=>{e.column===t&&E.push(s)})):E.push(t)}}if(o.__preventObserver__=!0,requestAnimationFrame((()=>{o.__preventObserver__=!1})),T&&y.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.prepend(d[e]),d[e].swiperLoopMoveDOM=!1})),S&&E.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.append(d[e]),d[e].swiperLoopMoveDOM=!1})),o.recalcSlides(),"auto"===m.slidesPerView?o.updateSlides():b&&(y.length>0&&T||E.length>0&&S)&&o.slides.forEach(((e,t)=>{o.grid.updateSlide(t,e,o.slides)})),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(y.length>0&&T){if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x+M]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x+M,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else if(i){const e=b?y.length/m.grid.rows:y.length;o.slideTo(o.activeIndex+e,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(E.length>0&&S)if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x-C]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x-C,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else{const e=b?E.length/m.grid.rows:E.length;o.slideTo(o.activeIndex-e,0,!1,!0)}if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===m.slidesPerView&&s})})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...e,slideTo:o.controller.control.params.slidesPerView===m.slidesPerView&&s})}o.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;a[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),a.forEach((e=>{s.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function N(e,t,s){const a=r(),{params:i}=e,n=i.edgeSwipeDetection,l=i.edgeSwipeThreshold;return!n||!(s<=l||s>=a.innerWidth-l)||"prevent"===n&&(t.preventDefault(),!0)}function Y(e){const t=this,s=a();let i=e;i.originalEvent&&(i=i.originalEvent);const n=t.touchEventsData;if("pointerdown"===i.type){if(null!==n.pointerId&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(n.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type)return void N(t,i,i.targetTouches[0].pageX);const{params:l,touches:d,enabled:c}=t;if(!c)return;if(!l.simulateTouch&&"mouse"===i.pointerType)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=i.target;if("wrapper"===l.touchEventsTarget&&!t.wrapperEl.contains(p))return;if("which"in i&&3===i.which)return;if("button"in i&&i.button>0)return;if(n.isTouched&&n.isMoved)return;const u=!!l.noSwipingClass&&""!==l.noSwipingClass,m=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&m&&(p=m[0]);const h=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!i.target||!i.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(h,p):p.closest(h)))return void(t.allowClick=!0);if(l.swipeHandler&&!p.closest(l.swipeHandler))return;d.currentX=i.pageX,d.currentY=i.pageY;const g=d.currentX,v=d.currentY;if(!N(t,i,g))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=g,d.startY=v,n.touchStartTime=o(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1);let w=!0;p.matches(n.focusableElements)&&(w=!1,"SELECT"===p.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==p&&s.activeElement.blur();const b=w&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!b||p.isContentEditable||i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function B(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c,p=e;if(p.originalEvent&&(p=p.originalEvent),"pointermove"===p.type){if(null!==i.touchId)return;if(p.pointerId!==i.pointerId)return}if("touchmove"===p.type){if(c=[...p.changedTouches].filter((e=>e.identifier===i.touchId))[0],!c||c.identifier!==i.touchId)return}else c=p;if(!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));const u=c.pageX,m=c.pageY;if(p.preventedByNestedSwiper)return n.startX=u,void(n.startY=m);if(!s.allowTouchMove)return p.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m}),i.touchStartTime=o()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<n.startX&&s.translate<=s.maxTranslate()||u>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&p.target===t.activeElement&&p.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);i.allowTouchCallbacks&&s.emit("touchMove",p),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=u,n.currentY=m;const h=n.currentX-n.startX,f=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(h**2+f**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:h*h+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(h))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation();let g=s.isHorizontal()?h:f,v=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),n.diff=g,g*=r.touchRatio,l&&(g=-g,v=-v);const w=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const b=s.params.loop&&!r.cssMode,y="next"===s.touchesDirection&&s.allowSlideNext||"prev"===s.touchesDirection&&s.allowSlidePrev;if(!i.isMoved){if(b&&y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)}if((new Date).getTime(),i.isMoved&&i.allowThresholdMove&&w!==s.touchesDirection&&b&&y&&Math.abs(g)>=1)return Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,void(i.startTranslate=i.currentTranslate);s.emit("sliderMove",p),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let E=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),g>0?(b&&y&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+g)**x))):g<0&&(b&&y&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-g)**x))),E&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(g)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function R(e){const t=this,s=t.touchEventsData;let a,i=e;i.originalEvent&&(i=i.originalEvent);if("touchend"===i.type||"touchcancel"===i.type){if(a=[...i.changedTouches].filter((e=>e.identifier===s.touchId))[0],!a||a.identifier!==s.touchId)return}else{if(null!==s.touchId)return;if(i.pointerId!==s.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)){if(!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return}s.pointerId=null,s.touchId=null;const{params:r,touches:n,rtlTranslate:d,slidesGrid:c,enabled:p}=t;if(!p)return;if(!r.simulateTouch&&"mouse"===i.pointerType)return;if(s.allowTouchCallbacks&&t.emit("touchEnd",i),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&r.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);r.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=o(),m=u-s.touchStartTime;if(t.allowClick){const e=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(e&&e[0]||i.target,e),t.emit("tap click",i),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(s.lastClickTime=o(),l((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=r.followFinger?d?t.translate:-t.translate:-s.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});const f=h>=-t.maxTranslate()&&!t.params.loop;let g=0,v=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==c[e+t]?(f||h>=c[e]&&h<c[e+t])&&(g=e,v=c[e+t]-c[e]):(f||h>=c[e])&&(g=e,v=c[c.length-1]-c[c.length-2])}let w=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(w=0));const y=(h-c[g])/v,E=g<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(m>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?w:g+E):t.slideTo(g)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(g+E):null!==b&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(b):t.slideTo(g))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(g+E):t.slideTo(g):("next"===t.swipeDirection&&t.slideTo(null!==w?w:g+E),"prev"===t.swipeDirection&&t.slideTo(null!==b?b:g))}}function q(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function V(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function F(e){const t=this;z(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function j(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const W=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;s[d]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[d]("touchstart",e.onTouchStart,{passive:!1}),r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("touchend",e.onTouchEnd,{passive:!0}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("touchcancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),s[d]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",q,!0):e[c]("observerUpdate",q,!0),r[d]("load",e.onLoad,{capture:!0})};const U=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var K={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Z(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(!0===e[a]&&(e[a]={enabled:!0}),"navigation"===a&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),a in e&&"enabled"in i?("object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const Q={eventsEmitter:I,update:O,translate:D,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=0===e?"0ms":""),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),G({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),G({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:X,loop:H,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=Y.bind(e),e.onTouchMove=B.bind(e),e.onTouchEnd=R.bind(e),e.onDocumentTouchStart=j.bind(e),t.cssMode&&(e.onScroll=_.bind(e)),e.onClick=V.bind(e),e.onLoad=F.bind(e),W(e,"on")},detachEvents:function(){W(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=U(e,a),d=U(e,l),c=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===l[t])return;const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const u=l.direction&&l.direction!==a.direction,m=a.loop&&(l.slidesPerView!==a.slidesPerView||u),h=a.loop;u&&s&&e.changeDirection(),p(e.params,l);const f=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!f?e.disable():!c&&f&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),s&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!h&&g?(e.loopCreate(t),e.updateSlides()):h&&!g&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},J={};class ee{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new ee(a))})),e}const l=this;l.__swiper__=!0,l.support=P(),l.device=L({userAgent:t.userAgent}),l.browser=A(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const o={};l.modules.forEach((e=>{e({params:t,swiper:l,extendParams:Z(t,o),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})}));const d=p({},K,o);return l.params=p({},d,J,t),l.originalParams=p({},l.params),l.passedParams=p({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach((e=>{l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===l.params.direction,isVertical:()=>"vertical"===l.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=y(f(t,`.${s.slideClass}, swiper-slide`)[0]);return y(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if("number"==typeof s.slidesPerView)return s.slidesPerView;if(s.centeredSlides){let e,t=a[l]?a[l].swiperSlideSize:0;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&z(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&e.updateAutoHeight();else{if(("auto"===s.slidesPerView||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const t=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&"SWIPER-CONTAINER"===s.parentNode.host.nodeName&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=v("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:i,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction")),wrongRTL:"-webkit-box"===b(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach((e=>{e.complete?z(t,e):e.addEventListener("load",(e=>{z(t,e.target)}))})),k(t),t.initialized=!0,k(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(J,e)}static get extendedDefaults(){return J}static get defaults(){return K}static installModule(e){ee.prototype.__modules__||(ee.prototype.__modules__=[]);const t=ee.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>ee.installModule(e))),ee):(ee.installModule(e),ee)}}function te(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=v("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function se(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ae(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function ie(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function re(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function ne(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function le(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function oe(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function de(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function ce(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowRoot&&t.shadowRoot===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{x(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function pe(e,t,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,i=h(t);let r=i.querySelector(`.${a.split(" ").join(".")}`);return r||(r=v("div",a.split(" ")),i.append(r)),r}Object.keys(Q).forEach((e=>{Object.keys(Q[e]).forEach((t=>{ee.prototype[t]=Q[e][t]}))})),ee.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=E(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const ue=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?v("swiper-slide"):v("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i,loop:r}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:c,to:p,slides:u,slidesGrid:m,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const g=s.activeIndex||0;let v,w,b;v=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(w=Math.floor(t/2)+a+o,b=Math.floor(t/2)+a+l):(w=t+(a-1)+o,b=(r?t:a)+l);let y=g-b,E=g+w;r||(y=Math.max(y,0),E=Math.min(E,u.length-1));let x=(s.slidesGrid[y]||0)-(s.slidesGrid[0]||0);function S(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(r&&g>=b?(y-=b,i||(x+=s.slidesGrid[0])):r&&g<b&&(y=-b,i&&(x+=s.slidesGrid[0])),Object.assign(s.virtual,{from:y,to:E,offset:x,slidesGrid:s.slidesGrid,slidesBefore:b,slidesAfter:w}),c===y&&p===E&&!e)return s.slidesGrid!==m&&x!==h&&s.slides.forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:y,to:E,slides:function(){const e=[];for(let t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?S():n("virtualUpdate"));const T=[],M=[],C=e=>{let t=e;return e<0?t=u.length+e:t>=u.length&&(t-=u.length),t};if(e)s.slides.filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e=>{e.remove()}));else for(let e=c;e<=p;e+=1)if(e<y||e>E){const t=C(e);s.slides.filter((e=>e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e=>{e.remove()}))}const P=r?-u.length:0,L=r?2*u.length:u.length;for(let t=P;t<L;t+=1)if(t>=y&&t<=E){const s=C(t);void 0===p||e?M.push(s):(t>p&&M.push(s),t<c&&T.push(s))}if(M.forEach((e=>{s.slidesEl.append(d(u[e],e))})),r)for(let e=T.length-1;e>=0;e-=1){const t=T[e];s.slidesEl.prepend(d(u[t],t))}else T.sort(((e,t)=>t-e)),T.forEach((e=>{s.slidesEl.prepend(d(u[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),S()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,c()})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.params.virtual.cache&&(delete s.virtual.cache[e[a]],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e[a],1),e[a]<t&&(t-=1),t=Math.max(t,0);else s.params.virtual.cache&&(delete s.virtual.cache[e],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e,1),e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(E(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===E(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=w(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let c,p=o();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&o()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&o()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new n.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget));const p=n&&n.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:o(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let n=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=l((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=l((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),r.releaseOnEdges&&(n===t.minTranslate()||n===t.maxTranslate()))return!0}}else{const s={time:o(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function n(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.el.querySelectorAll(e).length&&(s=t.el.querySelector(e))),e&&!s?e:s)}function l(e,s){const a=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function o(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return l(s,!1),void l(e,!1);l(s,t.isBeginning&&!t.params.rewind),l(e,t.isEnd&&!t.params.rewind)}function d(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=te(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=n(e.nextEl),a=n(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=r(s),a=r(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?c:d),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function u(){let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?c:d),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}a("init",(()=>{!1===t.params.navigation.enabled?m():(p(),o())})),a("toEdge fromEdge lock unlock",(()=>{o()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=r(e),s=r(s),t.enabled?o():[...e,...s].filter((e=>!!e)).forEach((e=>e.classList.add(t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:n}=t.navigation;a=r(a),n=r(n);const l=s.target;if(t.params.navigation.hideOnClick&&!n.includes(l)&&!a.includes(l)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===l||t.pagination.el.contains(l)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...n].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),o()},disable:m,update:o,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;const o=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function d(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function p(e){const s=e.target.closest(se(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=y(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;t.slideToLoop(a)}else t.slideTo(a)}function u(){const e=t.rtl,s=t.params.pagination;if(d())return;let a,r,p=t.pagination.el;p=o(p);const u=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,m=t.params.loop?Math.ceil(u/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,a=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(a=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,a=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,d,u;if(s.dynamicBullets&&(n=S(i[0],t.isHorizontal()?"width":"height",!0),p.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==r&&(l+=a-(r||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),d=o+(Math.min(i.length,s.dynamicMainBullets)-1),u=(d+o)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),p.length>1)i.forEach((e=>{const i=y(e);i===a?e.classList.add(...s.bulletActiveClass.split(" ")):t.isElement&&e.setAttribute("part","bullet"),s.dynamicBullets&&(i>=o&&i<=d&&e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),i===o&&c(e,"prev"),i===d&&c(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(...s.bulletActiveClass.split(" ")),t.isElement&&i.forEach(((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")})),s.dynamicBullets){const e=i[o],t=i[d];for(let e=o;e<=d;e+=1)i[e]&&i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-u*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}p.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(se(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(se(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(m)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/m;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(se(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,m),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function m(){const e=t.params.pagination;if(d())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let a=t.pagination.el;a=o(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",a[0])}function h(){t.params.pagination=te(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>E(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=o(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(...(e.clickableClass||"").split(" ")),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",p),t.enabled||s.classList.add(e.lockClass)})))}function f(){const e=t.params.pagination;if(d())return;let s=t.pagination.el;s&&(s=o(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(s.classList.remove(...(e.clickableClass||"").split(" ")),s.removeEventListener("click",p))}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}a("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:s}=t.pagination;s=o(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),a("init",(()=>{!1===t.params.pagination.enabled?g():(h(),m(),u())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&u()})),a("snapIndexChange",(()=>{u()})),a("snapGridLengthChange",(()=>{m(),u()})),a("destroy",(()=>{f()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{u()})),a("click",((e,s)=>{const a=s.target,r=o(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),f()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=o(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),h(),m(),u()},disable:g,render:m,update:u,init:h,destroy:f})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const o=a();let d,c,p,u,m=!1,h=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=c,o=(p-c)*n;s?(o=-o,o>0?(l=c-o,o=0):-o+c>p&&(l=p+o)):o<0?(l=c+o,o=0):o+c>p&&(l=p-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(h),i.style.opacity=1,h=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function b(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",p=t.isHorizontal()?a.offsetWidth:a.offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?p*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${c}px`:s.style.height=`${c}px`,a.style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function y(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(y(e)-w(i)[t.isHorizontal()?"left":"top"]-(null!==d?d:c/2))/(p-c),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;m=!0,d=e.target===l?y(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",E(e),clearTimeout(f),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;m&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function T(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n}=a;m&&(m=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(f),f=l((()=>{n.style.opacity=0,n.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function M(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},l=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",x,n),o[d]("pointermove",S,n),o[d]("pointerup",T,l)}function C(){const{scrollbar:e,el:s}=t;t.params.scrollbar=te(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;if("string"==typeof a.el&&t.isElement&&(i=t.el.querySelector(a.el)),i||"string"!=typeof a.el)i||(i=a.el);else if(i=o.querySelectorAll(a.el),!i.length)return;t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(se(t.params.scrollbar.dragClass)),r||(r=v("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&M("on"),i&&i.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))}function P(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(...n(t.isHorizontal()?e.horizontalClass:e.verticalClass)),t.params.scrollbar.el&&t.scrollbar.el&&M("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?L():(C(),b(),g())})),i("update resize observerUpdate lock unlock",(()=>{b()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))})),i("destroy",(()=>{P()}));const L=()=>{t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),P()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),C(),b(),g()},disable:L,updateSize:b,setTranslate:g,init:C,destroy:P})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},n=()=>{const{el:e,slides:s,progress:a,snapGrid:n,isElement:l}=t,o=f(e,i);t.isElement&&o.push(...f(t.hostEl,i)),o.forEach((e=>{r(e,a)})),s.forEach(((e,s)=>{let l=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(l+=Math.ceil(s/2)-a*(n.length-1)),l=Math.min(Math.max(l,-1),1),e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e=>{r(e,l)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&n()})),a("setTranslate",(()=>{t.params.parallax.enabled&&n()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s,hostEl:a}=t,r=[...s.querySelectorAll(i)];t.isElement&&r.push(...a.querySelectorAll(i)),r.forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c=1,p=!1;const u=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function b(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function y(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function x(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!y(e))return;const s=t.params.zoom;if(l=!1,o=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=b(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?E(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=m.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x-n.scrollX)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y-n.scrollY)/c]}();m.originX=e,m.originY=t,m.imageEl.style.transitionDuration="0ms"}p=!0}}function S(e){if(!y(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(o=!0,m.scaleMove=b(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function T(e){if(!y(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&o&&(l=!1,o=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,a.scale>1&&m.slideEl?m.slideEl.classList.add(`${s.zoomedSlideClass}`):a.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${s.zoomedSlideClass}`),1===a.scale&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}function M(e){if(!y(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.hostEl.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth,h.height=m.imageEl.offsetHeight,h.startX=d(m.imageWrapEl,"x")||0,h.startY=d(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(a<m.slideWidth&&i<m.slideHeight)return;h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY;if(Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(t.allowClick=!1),!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return void(h.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return void(h.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),h.isMoved=!0;const r=(s.scale-c)/(m.maxRatio-t.params.zoom.minRatio),{originX:n,originY:l}=m;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+r*(h.width-2*n),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+r*(h.height-2*l),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function C(){const e=t.zoom;m.slideEl&&t.activeIndex!==t.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function P(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?E(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,v,b,y,x,S,T,M,C,P,L;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(i=void 0,r=void 0),s.scale=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,c=A||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,!e||1===c&&A?(u=0,g=0):(P=m.slideEl.offsetWidth,L=m.slideEl.offsetHeight,l=w(m.slideEl).left+n.scrollX,o=w(m.slideEl).top+n.scrollY,d=l+P/2-i,p=o+L/2-r,v=m.imageEl.offsetWidth,b=m.imageEl.offsetHeight,y=v*s.scale,x=b*s.scale,S=Math.min(P/2-y/2,0),T=Math.min(L/2-x/2,0),M=-S,C=-T,u=d*s.scale,g=p*s.scale,u<S&&(u=S),u>M&&(u=M),g<T&&(g=T),g>C&&(g=C)),A&&1===s.scale&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function L(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?E(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0)}function A(e){const s=t.zoom;s.scale&&1!==s.scale?L():P(e)}function I(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function z(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=I();t.wrapperEl.addEventListener("pointerdown",x,s),t.wrapperEl.addEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,T,s)})),t.wrapperEl.addEventListener("pointermove",M,a)}function $(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=I();t.wrapperEl.removeEventListener("pointerdown",x,s),t.wrapperEl.removeEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,T,s)})),t.wrapperEl.removeEventListener("pointermove",M,a)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&z()})),a("destroy",(()=>{$()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;if(!m.imageEl)return;if(h.isTouched)return;s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0;const a=u.length>0?u[0]:e;h.touchesStart.x=a.pageX,h.touchesStart.y=a.pageY}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&A(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:z,disable:$,in:P,out:L,toggle:A})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){if(e.destroyed)return;const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(r)&&Number.isFinite(r)||(r=1),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.destroyed||(s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&l((()=>{s.updateAutoHeight()})),x(s.wrapperEl,(()=>{i&&s.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const n=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e));function l(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function o(e){(e=n(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function d(e,t){(e=n(e)).forEach((e=>{e.setAttribute("role",t)}))}function c(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function p(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function u(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function m(e){(e=n(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function h(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;t.pagination&&t.pagination.el&&(a===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(se(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&a===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&a===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.matches(se(t.params.pagination.bulletClass))&&a.click())}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const w=(e,t,s)=>{l(e),"BUTTON"!==e.tagName&&(d(e,"button"),e.addEventListener("keydown",h)),p(e,s),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},b=()=>{t.a11y.clicked=!0},E=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},S=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&d(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;p(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},T=()=>{const e=t.params.a11y;t.el.append(i);const s=t.el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var l;const o=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var d;d=r,n(a).forEach((e=>{e.setAttribute("id",d)})),function(e,t){(e=n(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(a,o),S();let{nextEl:u,prevEl:m}=t.navigation?t.navigation:{};if(u=n(u),m=n(m),u&&u.forEach((t=>w(t,r,e.nextSlideMessage))),m&&m.forEach((t=>w(t,r,e.prevSlideMessage))),g()){n(t.pagination.el).forEach((e=>{e.addEventListener("keydown",h)}))}t.el.addEventListener("focus",x,!0),t.el.addEventListener("pointerdown",b,!0),t.el.addEventListener("pointerup",E,!0)};a("beforeInit",(()=>{i=v("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),a("afterInit",(()=>{t.params.a11y.enabled&&T()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&S()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(u(s),o(s)):(m(s),l(s))),e&&(t.isEnd?(u(e),o(e)):(m(e),l(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(l(s),t.params.pagination.renderBullet||(d(s,"button"),p(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,y(s)+1)))),s.matches(se(t.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){i&&i.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=n(e),s=n(s),e&&e.forEach((e=>e.removeEventListener("keydown",h))),s&&s.forEach((e=>e.removeEventListener("keydown",h))),g()&&n(t.pagination.el).forEach((e=>{e.removeEventListener("keydown",h)}));t.el.removeEventListener("focus",x,!0),t.el.removeEventListener("pointerdown",b,!0),t.el.removeEventListener("pointerup",E,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,s){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===s))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])}}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#",""),s=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex];if(e!==(s?s.getAttribute("data-hash"):"")){const s=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===s||Number.isNaN(s))return;t.slideTo(s)}},p=()=>{if(!l||!t.params.hashNavigation.enabled)return;const e=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],s=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState?(d.history.replaceState(null,null,`#${s}`||""),i("hashSet")):(o.location.hash=s||"",i("hashSet"))};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0,a=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(a||0,s,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g,v=o&&o.autoplay?o.autoplay.delay:3e3,w=o&&o.autoplay?o.autoplay.delay:3e3,b=(new Date).getTime();function y(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",y),g||C())}const E=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(w=d,c=!1);const e=i.autoplay.paused?d:b+w-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/v),s=requestAnimationFrame((()=>{E()}))},x=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),E();let a=void 0===e?i.params.autoplay.delay:e;v=i.params.autoplay.delay,w=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,v=r,w=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(b=(new Date).getTime(),requestAnimationFrame((()=>{x()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},S=()=>{b=(new Date).getTime(),i.autoplay.running=!0,x(),l("autoplayStart")},T=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},M=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",y):C()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-b),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},C=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(b=(new Date).getTime(),f?(f=!1,x(d)):x(),i.autoplay.paused=!1,l("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,M(!0)),"visible"===e.visibilityState&&C()},L=e=>{"mouse"===e.pointerType&&(f=!0,g=!0,i.animating||i.autoplay.paused||M(!0))},A=e=>{"mouse"===e.pointerType&&(g=!1,i.autoplay.paused&&C())};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",L),i.el.addEventListener("pointerleave",A)),a().addEventListener("visibilitychange",P),S())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",L),i.el.removeEventListener("pointerleave",A),a().removeEventListener("visibilitychange",P),i.autoplay.running&&T()})),n("_freeModeStaticRelease",(()=>{(u||f)&&C()})),n("_freeModeNoMomentumRelease",(()=>{i.params.autoplay.disableOnInteraction?T():M(!0,!0)})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?M(!0,!0):T())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?T():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,M(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&C(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:S,stop:T,pause:M,resume:C})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(c(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function d(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),d(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),d(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),d(!0)})),i("slideChange update resize observerUpdate",(()=>{d()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:d})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:o()})},onTouchEnd:function(e){let{currentPos:s}=e;if(t.params.cssMode)return;const{params:r,wrapperEl:n,rtlTranslate:l,snapGrid:d,touchEventsData:c}=t,p=o()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||o()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;l&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,x(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(a("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,i,{swiper:r,extendParams:n,on:l}=e;n({grid:{rows:1,fill:"column"}});const o=()=>{let e=r.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*r.size:"string"==typeof e&&(e=parseFloat(e)),e};l("init",(()=>{i=r.params.grid&&r.params.grid.rows>1})),l("update",(()=>{const{params:e,el:t}=r,s=e.grid&&e.grid.rows>1;i&&!s?(t.classList.remove(`${e.containerModifierClass}grid`,`${e.containerModifierClass}grid-column`),a=1,r.emitContainerClasses()):!i&&s&&(t.classList.add(`${e.containerModifierClass}grid`),"column"===e.grid.fill&&t.classList.add(`${e.containerModifierClass}grid-column`),r.emitContainerClasses()),i=s})),r.grid={initSlides:e=>{const{slidesPerView:i}=r.params,{rows:n,fill:l}=r.params.grid,o=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:e.length;a=Math.floor(o/n),t=Math.floor(o/n)===o/n?o:Math.ceil(o/n)*n,"auto"!==i&&"row"===l&&(t=Math.max(t,i*n)),s=t/n},unsetSlides:()=>{r.slides&&r.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[r.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,i,n)=>{const{slidesPerGroup:l}=r.params,d=o(),{rows:c,fill:p}=r.params.grid,u=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:n.length;let m,h,f;if("row"===p&&l>1){const s=Math.floor(e/(l*c)),a=e-c*l*s,r=0===s?l:Math.min(Math.ceil((u-s*c*l)/c),l);f=Math.floor(a/r),h=a-f*r+s*l,m=h+f*t/c,i.style.order=m}else"column"===p?(h=Math.floor(e/c),f=e-h*c,(h>a||h===a&&f===c-1)&&(f+=1,f>=c&&(f=0,h+=1))):(f=Math.floor(e/s),h=e-f*s);i.row=f,i.column=h,i.style.height=`calc((100% - ${(c-1)*d}px) / ${c})`,i.style[r.getDirectionLabel("margin-top")]=0!==f?d&&`${d}px`:"",i.swiperSlideGridSet=!0},updateWrapperSize:(e,s)=>{const{centeredSlides:a,roundLengths:i}=r.params,n=o(),{rows:l}=r.params.grid;if(r.virtualSize=(e+n)*t,r.virtualSize=Math.ceil(r.virtualSize/l)-n,r.params.cssMode||(r.wrapperEl.style[r.getDirectionLabel("width")]=`${r.virtualSize+n}px`),a){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];i&&(a=Math.floor(a)),s[t]<r.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:ae.bind(t),prependSlide:ie.bind(t),addSlide:re.bind(t),removeSlide:ne.bind(t),removeAllSlides:le.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),oe({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=de(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),ce({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"left":"top")).split(" ")),e.append(a)),i||(i=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"right":"bottom")).split(" ")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};oe({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.wrapperEl.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),t.wrapperEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const s=a[e];let r=e;u&&(r=parseInt(s.getAttribute("data-swiper-slide-index"),10));let n=90*r,d=Math.floor(n/360);l&&(n=-n,d=Math.floor(-n/360));const m=Math.max(Math.min(s.progress,1),-1);let f=0,g=0,v=0;r%4==0?(f=4*-d*o,v=0):(r-1)%4==0?(f=0,v=4*-d*o):(r-2)%4==0?(f=o+4*d*o,v=o):(r-3)%4==0&&(f=-o,v=3*o+4*o*d),l&&(f=-f),p||(g=f,f=0);const w=`rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;m<=1&&m>-1&&(h=90*r+90*m,l&&(h=90*-r-90*m),t.browser&&t.browser.isSafari&&Math.abs(h)/90%2==1&&(h+=.001)),s.style.transform=w,c.slideShadows&&i(s,m,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s)=>{let a=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=pe("flip",e,t.isHorizontal()?"left":"top")),i||(i=pe("flip",e,t.isHorizontal()?"right":"bottom")),a&&(a.style.opacity=Math.max(-s,0)),i&&(i.style.opacity=Math.max(s,0))};oe({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),t.browser&&t.browser.isSafari&&(Math.abs(d)/90%2==1&&(d+=.001),Math.abs(c)/90%2==1&&(c+=.001)),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;de(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect,t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),oe({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,s=a.length;e<s;e+=1){const s=a[e],l=i[e],p=(o-s.swiperSlideOffset-l/2)/l,u="function"==typeof r.modifier?r.modifier(p):p*r.modifier;let m=n?d*u:0,h=n?0:d*u,f=-c*Math.abs(u),g=r.stretch;"string"==typeof g&&-1!==g.indexOf("%")&&(g=parseFloat(r.stretch)/100*l);let v=n?0:g*u,w=n?g*u:0,b=1-(1-r.scale)*Math.abs(u);Math.abs(w)<.001&&(w=0),Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(h)<.001&&(h=0),Math.abs(b)<.001&&(b=0),t.browser&&t.browser.isSafari&&(Math.abs(m)/90%2==1&&(m+=.001),Math.abs(h)/90%2==1&&(h+=.001));const y=`translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;if(de(0,s).style.transform=y,s.style.zIndex=1-Math.abs(Math.round(u)),r.slideShadows){let e=n?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),t=n?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");e||(e=pe("coverflow",s,n?"left":"top")),t||(t=pe("coverflow",s,n?"right":"bottom")),e&&(e.style.opacity=u>0?u:0),t&&(t.style.opacity=-u>0?-u:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;oe({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,s)=>{let a=f.rotate[s]*Math.abs(d*n);t.browser&&t.browser.isSafari&&Math.abs(a)/90%2==1&&(a+=.001),m[s]=a})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=pe("creative",a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=de(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),oe({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s,rtlTranslate:a}=t,i=t.params.cardsEffect,{startTranslate:r,isTouched:n}=t.touchEventsData,l=a?-t.translate:t.translate;for(let o=0;o<e.length;o+=1){const d=e[o],c=d.progress,p=Math.min(Math.max(c,-4),4);let u=d.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(u-=e[0].swiperSlideOffset);let m=t.params.cssMode?-u-t.translate:-u,h=0;const f=-100*Math.abs(p);let g=1,v=-i.perSlideRotate*p,w=i.perSlideOffset-.75*Math.abs(p);const b=t.virtual&&t.params.virtual.enabled?t.virtual.from+o:o,y=(b===s||b===s-1)&&p>0&&p<1&&(n||t.params.cssMode)&&l<r,E=(b===s||b===s+1)&&p<0&&p>-1&&(n||t.params.cssMode)&&l>r;if(y||E){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;v+=-28*p*e,g+=-.5*e,w+=96*e,h=-25*e*Math.abs(p)+"%"}if(m=p<0?`calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))`:p>0?`calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))`:`${m}px`,!t.isHorizontal()){const e=h;h=m,m=e}const x=p<0?""+(1+(1-g)*p):""+(1-(1-g)*p),S=`\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;if(i.slideShadows){let e=d.querySelector(".swiper-slide-shadow");e||(e=pe("cards",d)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(c))+e.length;de(0,d).style.transform=S}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),ce({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return ee.use(ue),ee}();

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/main.js?ver=8.6.5.1 */
/* Debounce */
(
  function (b, c) {
    var $ = b.jQuery || b.Cowboy || (
      b.Cowboy = {}
    ), a
    $.throttle = a = function (e, f, j, i) {
      var h, d = 0
      if (typeof f !== 'boolean') {
        i = j
        j = f
        f = c
      }

      function g () {
        var o = this, m = +new Date() - d, n = arguments

        function l () {
          d = +new Date()
          j.apply(o, n)
        }

        function k () {
          h = c
        }

        if (i && !h) {
          l()
        }
        h && clearTimeout(h)
        if (i === c && m > e) {
          l()
        } else {
          if (f !== true) {
            h = setTimeout(i ? k : l, i === c ? e - m : e)
          }
        }
      }

      if ($.guid) {
        g.guid = j.guid = j.guid || $.guid++
      }
      return g
    }
    $.debounce = function (d, e, f) {
      return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
  }
)(this);

/* global PENCILOCALIZE */
(
  function ($) {
    'use strict'
    var PENCI = PENCI || {}

    /* General functions
 ---------------------------------------------------------------*/
    PENCI.general = function () {
      // Top search
      $('.pcheader-icon a.search-click').on('click', function (e) {
        var $this = $(this),
          $body = $('body'),
          $container = $this.closest('.container')

        $('body').find('.search-input').removeClass('active')
        $container.find('.search-input').toggleClass('active')

        if ($body.find('.header-search-style-overlay').length ||
          $body.find('.header-search-style-showup').length) {
          $container.find('.show-search').toggleClass('active')
        } else {
          $this.next().fadeToggle()
        }

        var opentimeout = setTimeout(function () {
          var element = document.querySelector('.search-input.active')
          if (element !== null) {
            element.focus({
              preventScroll: true,
            })
          }
        }, 200, function () {
          clearTimeout(opentimeout)
        })

        $body.addClass('search-open')
        e.preventDefault()
        e.stopPropagation()
        return false
      })

      $('.pcheader-icon .close-search').on('click', function (e) {

        if ($('body').find('.header-search-style-overlay').length ||
          $('body').find('.header-search-style-showup').length) {
          $('body').find('.show-search').each(function () {
            $(this).removeClass('active')
          })
        } else {
          $(this).closest('.show-search').fadeToggle()
        }
        $('body').removeClass('search-open')
        $('body').find('.search-input').each(function () {
          $(this).removeClass('active')
        })
        return false
      })

      $(document).keyup(function (e) {
        var bd = $('body')
        if (e.key === 'Escape' && bd.hasClass('pchds-overlay') &&
          bd.hasClass('search-open')) {
          bd.removeClass('search-open')
          if ($('body').find('.header-search-style-overlay').length ||
            $('body').find('.header-search-style-showup').length) {
            $('body').find('.show-search').each(function () {
              $(this).removeClass('active')
            })
          } else {
            $('body').find('.show-search').fadeToggle()
          }
          $('body').find('.search-input, .show-search').each(function () {
            $(this).removeClass('active')
          })
        }
        return false
      })

      // Go to top
      $('.go-to-top, .penci-go-to-top-floating').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 700)
        return false
      })

      // Go to top button
      var $goto_button = $('.penci-go-to-top-floating')
      if ($goto_button.length) {
        $(document).on('scroll', $.debounce(200, function () {
          var y = $(this).scrollTop()
          if (y > 300) {
            $goto_button.addClass('show-up')
          } else {
            $goto_button.removeClass('show-up')
          }
        }))
      }

      // Call back fitvid when click load more button on buddypress
      $('body.buddypress .activity .load-more a').on('click', function () {
        $(document).ajaxStop(function () {
          $('.container').fitVids({ ignore: '.penci-sticky-video' })
        })
      })

      document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.menu-item-has-anchor').forEach(function (item) {
          const offset = -120;
          const anchor = item.querySelector('a');
      
          if (!anchor) return;
      
          const href = anchor.getAttribute('href');
          if (!href || !href.startsWith('#')) return;
      
          const target = document.querySelector(href);
      
          if (!target) {
            console.error('Target element not found for:', href);
            return;
          }
      
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            $('body').removeClass('open-sidebar-nav penci-menuhbg-open open-mobile-builder-sidebar-nav');
      
            const targetOffset = target.getBoundingClientRect().top + window.pageYOffset;
      
            console.log('Scrolling to:', targetOffset); // Debug
      
            window.scrollTo({
              top: targetOffset + offset,
              behavior: 'smooth',
            });
          });
        });
      });
      
      

      $('#pc_archive_sort').on('change', function (e) {
        var form = $(this).closest('form')
        form.submit()
      })

      $(document).on('click', '.pcauthor-tabs', function (e) {
        e.preventDefault()

        if ($(this).hasClass('active')) {
          return
        }

        var tab = $(this).attr('data-tab'),
          wrapper = $(this).closest('.post-author')

        wrapper.find('.author-tab-content').removeClass('active')
        wrapper.find('.pcauthor-tabs').removeClass('active')
        wrapper.find('#' + tab).addClass('active')
        $(this).addClass('active')
      })

      $(document).
        on('click', '.penci-category-description-button a', function (e) {
          e.preventDefault()
          $(this).closest('.penci-category-description').toggleClass('active')
        })

      $(document).on('click', '.penci-wuser-gps', function (e) {
        e.preventDefault()
        var t = $(this),
          parent = t.closest('.penci-weather-widget'),
          id = parent.attr('data-id'),
          forecast_days = parent.attr('data-forecast_days'),
          units = parent.attr('data-units')

        parent.addClass('loading')

        $.ajax({
          type: 'GET',
          url: ajax_var_more.url,
          data: {
            action: 'penci_get_weather_loc',
            id: id,
            forecast_days: forecast_days,
            units: units,
          },
          success: function (response) {
            var z = response.data.html,
              v = $(z).html()
            parent.html(v)
            parent.removeClass('loading')
          },
        })
      })

      $(document).on('click','.pc-comment-s1-button a',function(e) {
        e.preventDefault()
        $('.pc-comment-s1').toggleClass('active')
      })
      
      $(document).on('click','.new-ver-share.post-share-link',function(e) {
        e.preventDefault()
        var link = $(this).attr('href');
        navigator.clipboard.writeText(link);
      })

      $(document).on('click','.penci_cmrm',function(e){
        e.preventDefault()
        $(this).closest('.comment-text').addClass('showfull')
        $(this).remove()
      })

      $(document).on('click','.penci-mtp-filters-mobile',function(e){
        e.preventDefault()
        $(this).addClass('active')
        $('.penci-mtp-filters-main').addClass('active')
        $('.penci-mtp-filters-close').addClass('active')
      })

      $(document).on('click','.penci-mtp-filters-close',function(e){
        e.preventDefault()
        $(this).removeClass('active')
        $('.penci-mtp-filters-mobile').removeClass('active')
        $('.penci-mtp-filters-main').removeClass('active')
      })

      $(document).on('click','.penci-post-share-box-btn',function(e){
        e.preventDefault()
        var t = $(this).closest('.list-post-3')
        t.find('.penci-post-box-meta').toggleClass('active')
      })
      
      $(document).on('click','.penci-bmca',function(e){
        e.preventDefault()
        var t = $(this).closest('.penci-sg-cth')
        t.addClass('show-full')
        $(this).remove()
      })

      $(document).on('click tap', '.item-content', function() {
        var link = $(this).attr("data-excerpt-link");
        if (link) {
            window.location.href = link;
        }
      });

      return false
    }

    PENCI.rdatetime = function () {
      function formatDate(date, format, locale = 'en-US') {
        const map = {
            'd': ('0' + date.getDate()).slice(-2),           // Day of the month (01 to 31)
            'D': date.toLocaleDateString(locale, { weekday: 'short' }),  // Short textual day
            'j': date.getDate(),                             // Day of the month (1 to 31)
            'l': date.toLocaleDateString(locale, { weekday: 'long' }),   // Full textual day
            'F': date.toLocaleDateString(locale, { month: 'long' }),     // Full textual month
            'm': ('0' + (date.getMonth() + 1)).slice(-2),    // Month (01 to 12)
            'M': date.toLocaleDateString(locale, { month: 'short' }),    // Short month (Jan, Feb)
            'n': date.getMonth() + 1,                        // Month without leading zeros (1 to 12)
            'Y': date.getFullYear(),                         // Full year (2024)
            'y': ('' + date.getFullYear()).slice(-2),        // Short year (24)
            'H': ('0' + date.getHours()).slice(-2),          // 24-hour format (00 to 23)
            'h': ('0' + (date.getHours() % 12 || 12)).slice(-2),  // 12-hour format (01 to 12)
            'i': ('0' + date.getMinutes()).slice(-2),        // Minutes (00 to 59)
            's': ('0' + date.getSeconds()).slice(-2),        // Seconds (00 to 59)
            'a': date.getHours() < 12 ? 'am' : 'pm',         // am/pm lowercase
            'A': date.getHours() < 12 ? 'AM' : 'PM',         // AM/PM uppercase
        };

        return format.replace(/[a-zA-Z]/g, function(match) {
            return map[match] !== undefined ? map[match] : match;
        });
      }

      function applyRealTimeDate() {
        const locale = document.documentElement.lang || 'en-US';

        const elements = document.querySelectorAll('.penci-dtf-real');

        elements.forEach(el => {
            const format = el.getAttribute('data-format');

            const currentDate = new Date();

            const formattedDate = formatDate(currentDate, format, locale);

            el.textContent = formattedDate;
        });
      }

      applyRealTimeDate();

    }

    PENCI.videofloat = function () {
      $('body.single .post').each(function (e) {

        var wrapper = $(this),
          t = wrapper.find('.post-image'),
          h = t.height(),
          f = t.find('iframe'),
          p

        if (f.length && ajax_var_more.vfloat) {

          t.addClass(ajax_var_more.vfloatp)

          var z = h + t.offset().top

          $(document).on('scroll', function () {

            if (t.hasClass('disable-sticky')) {
              return
            }
            var y = $(this).scrollTop()
            if (y > z) {
              t.addClass('stick-video-enable')
              if (t.find('.stick-video-enable-remove').length == 0) {
                t.append(
                  '<span class="stick-video-enable-remove"><i class="penciicon-close-button"></i></span>')
              }
              if (!wrapper.hasClass('penci-apply-padding')) {
                wrapper.addClass('penci-apply-padding').css('padding-top', h)
              }
            } else {
              t.removeClass('stick-video-enable')
              t.find('.stick-video-enable-remove').remove()
              wrapper.removeClass('penci-apply-padding')
              wrapper.css('padding-top', 0)
            }
          })
        }

      })

      $(document).on('click', '.stick-video-enable-remove', function (e) {
        e.preventDefault()
        var t = $(this).closest('.post-image')

        t.find('.stick-video-enable-remove').remove()
        t.removeClass('stick-video-enable').addClass('disable-sticky')
      })

      $(document).on('mouseenter', '.penci-preview-thumb', function () {
        var t = $(this),
          ow = t.outerWidth(),
          oh = t.outerHeight(),
          w = t.outerHeight() * 16 / 9,
          h = t.outerHeight(),
          type = $(this).attr('data-type'),
          url = $(this).attr('data-url')

        if ( w < ow ) { 
          w = ow
          h = oh
        }

        t.addClass('active')

        if (t.find('video').length == 0 && type == 'self') {
          t.append('<video src="' + url + '" loop muted></video>')
        }

        if (t.find('iframe').length == 0 && type !== 'self') {
          t.append('<div class="penci-preview-iframe"><iframe src="' + url +
            '" frameborder="0"></iframe></div>')
          $(this).find('iframe').width(w).height(h).fadeIn()
        }

        if ($(this).find('video').length !== 0) {
          $(this).find('video').fadeIn()
          $(this).find('video')[0].play()
        }

        if ($(this).find('iframe').length !== 0) {
          $(this).find('iframe').fadeIn()
        }

      }).on('mouseleave', '.penci-preview-thumb', function () {
        if ($(this).find('video').length !== 0) {
          $(this).find('video')[0].pause()
          $(this).find('video').fadeOut()
        }
        if ($(this).find('iframe').length !== 0) {
          $(this).find('iframe').fadeOut()
        }
        $(this).removeClass('active')
      })
    }

    /* Font Size Changer
---------------------------------------------------------------*/
    PENCI.fontsizeChanger = function () {

      if ($('.penci-font-changer').length) {

        var c = Cookies.get('penci-font-changer') ? Cookies.get(
            'penci-font-changer') : 1,
          pr = $('.penci-font-changer'),
          w = $('#main').width(),
          step = .1

        if ($('body').hasClass('elementor-default')) {
          w = $('article.post').width()
        }

        pr.attr('data-size', c)

        var penci_apply_fontsize = function ($csize = null) {
          var size = parseFloat(pr.attr('data-size'))

          size = $csize ? parseFloat($csize) : size

          size = size > 1.5 ? size = 1.5 : (
            size < -1.5 ? size = -1.5 : size
          )

          $('.entry-content').css({
            'transform': 'scale(' + size + ')',
            'transform-origin': '0 0 0',
            'overflow': 'hidden',
            'width': parseInt(w / size) + 'px',
          })

          if ($('body').hasClass('rtl')) {
            $('.entry-content').css({
              'transform-origin': '100% 0',
            })
          }

          $('.entry-content p,.entry-content iframe,.entry-content audio,.entry-content div,.entry-content ol, .entry-content ul, .entry-content blockquote, .entry-content h1, .entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5, .entry-content h6').
            css({
              'max-width': parseInt(w / size) + 'px',
            })

          if ($('.entry-content .penci-toc-container-wrapper').length) {
            $('.penci-toc-container-wrapper, .penci-toc-container-wrapper div, .penci-toc-container-wrapper ul, .penci-toc-container-wrapper span, .penci-toc-container-wrapper p').
              css({ 'max-width': '' })
          }

          $('.penci-single-block').each(function(e){
              
            if ( ! $(this).hasClass('pcapply_fs') ) {
            
                $(this).addClass('pcapply_fs');
                
                var t = $(this).find('.entry-content'),
                    p = $(this).find('.post-entry'),
                    h = t[0].getBoundingClientRect().height;
  
                    p.css({
                      'height': h + 'px',
                      'transform': 'none',
                    })
                
            }

          });
        }

        penci_apply_fontsize()

        if ($.isFunction($.fn.jRange)) {
          var def = Cookies.get('penci-font-changer') ? Cookies.get(
            'penci-font-changer') : '1'
          $('.penci-font-changer-slider').each(function () {
            $(this).jRange({
              from: 0.5,
              to: 1.5,
              step: 0.1,
              scale: [0.5, 0, 1.0, 1.5],
              format: '%s',
              width: 120,
              showLabels: false,
              showScale: false,
              snap: true,
              theme: 'penci-fs-slider',
              onstatechange: function (size) {
                penci_apply_fontsize(size)
                Cookies.set('penci-font-changer', size)
              },
            })
            $(this).jRange('setValue', def)
          })
        }

        $('body').on('single_loaded_more', function (e) {
          penci_apply_fontsize()
          if ($.isFunction($.fn.jRange)) {
            var def = Cookies.get('penci-font-changer') ? Cookies.get(
              'penci-font-changer') : '1'
            $('.penci-font-changer-slider').each(function () {
              $(this).jRange({
                from: 0.5,
                to: 1.5,
                step: 0.1,
                scale: [0.5, 0, 1.0, 1.5],
                format: '%s',
                width: 120,
                showLabels: false,
                showScale: false,
                snap: true,
                theme: 'penci-fs-slider',
                onstatechange: function (size) {
                  penci_apply_fontsize(size)
                  Cookies.set('penci-font-changer', size)
                },
              })
              $(this).jRange('setValue', def)
            })
          }
        })

        $(document).on('click', '.penci-font-changer-reset', function (e) {
          e.preventDefault()
          $('.penci-font-changer-slider').jRange('setValue', '1')
          Cookies.set('penci-font-changer', 1)
        })

        $(document).on('click', '.penci-font-changer-btn', function (e) {
          e.preventDefault()
          $(this).closest('.penci-font-changer-popup').addClass('active')
        })

        $(document).on('click', function (e) {
          var container = $('.penci-font-changer-popup')

          if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active')
          }
        })
      }

    }

    /* Block Heading Lists
 ---------------------------------------------------------------*/
    PENCI.blockheadinglist = function () {
      $('.pcnav-lgroup').each(function () {
        var lgroup = $(this),
          maintitle = $(this).closest('.penci-homepage-title'),
          maintitlew = maintitle.width(),
          mainwrap = lgroup.find('ul.pcflx'),
          titlew = maintitle.find('.inner-arrow span').width(),
          nav = maintitle.find('.pcflx-nav').length ? maintitle.find(
            '.pcflx-nav').width() : 0,
          extrabtn = maintitle.find('.pcbh-extrabtn').length ? maintitle.find(
            '.pcbh-extrabtn').width() : 0,
          maxwidthc = 0,
          childlists = $(
            '<li class="more"><a class="more-click" href="#"><i class="fa fa-ellipsis-v"></i></a><ul class="pcflx-sub"></ul></li>'),
          width = maintitlew - titlew - nav,
          oldlist

        if (maintitle.hasClass('pcalign-center')) {
          width = maintitlew / 2 - titlew / 2 - 30
        }

        if (maintitle.hasClass('pciconp-left') ||
          maintitle.hasClass('pciconp-right')) {
          width = width - 36
        }

        lgroup.css('width', width)
        maintitle.css('--extrabtn', extrabtn + 'px')

        //reset
        oldlist = mainwrap.find('.pcflx-sub').html()
        mainwrap.find('.more').remove()
        mainwrap.append(oldlist)

        mainwrap.find('li').each(function () {
          maxwidthc = maxwidthc + $(this).outerWidth()
          if (maxwidthc > width - 60) {
            $(childlists).find('.pcflx-sub').append($(this))
          }
        })
        if ($(childlists).find('.pcflx-sub li').length) {
          mainwrap.append(childlists)
        }
        maintitle.parent().addClass('pc-flexmnld')
        lgroup.addClass('loaded')
      })
      $(document).on('click', '.pcnav-lgroup .more-click', function (e) {
        e.preventDefault()
      })

      $('.pcnav-lgroup a').on('click', function () {
        var t = $(this),
          pr = t.closest('.pcnav-lgroup')

        if (!t.hasClass('pcaj-nav-link')) {
          pr.find('a').removeClass('clactive')
          t.addClass('clactive')
        }

      })
    }

    /* Share Expand
 ---------------------------------------------------------------*/
    PENCI.shareexpand = function () {

      if (!$('.tags-share-box').length) {
        return
      }

      $('.tags-share-box').each(function () {
        var tag = $(this)

        if (tag.hasClass('disable-btnplus')) {
          tag.css('opacity', '1')
          return
        }

        if (tag.length) {
          var sharew = 0,
            sexpand = false,
            maxw = tag.width(),
            $count = 1,
            exspace,
            dsharew = tag.find('.post-share-expand').outerWidth()

          if (tag.find('.penci-social-share-text').length) {
            maxw = maxw - tag.find('.penci-social-share-text').outerWidth(true)
          }

          if (tag.find('.post-share-plike').length) {
            maxw = maxw - tag.find('.post-share-plike').outerWidth(true)
          }

          if (tag.find('.new-ver-share').length) {
            exspace = tag.find('.new-ver-share').outerWidth(true) -
              tag.find('.new-ver-share').outerWidth()
          }

          tag.find('.post-share-expand').
            removeClass('auto-hidden').
            removeClass('showing').
            removeClass('hidden')

          tag.find('.new-ver-share').each(function () {
            $(this).removeClass('auto-hidden').removeClass('show')
            sharew += $(this).outerWidth(true)
            if (sharew > maxw + exspace) {
              $(this).addClass('auto-hidden').removeClass('show')
              sexpand = true
            } else {
              $(this).removeClass('auto-hidden').addClass('show')
            }
            $count++
          })

          if (sexpand) {
            tag.find('.post-share-expand').
              removeClass('auto-hidden').
              addClass('showing')

            tag.find('.new-ver-share.show').each(function () {
              dsharew += $(this).outerWidth(true)
              if (dsharew >= maxw - exspace) {
                $(this).addClass('auto-hidden').removeClass('show')
              }
            })

          } else {
            tag.find('.post-share-expand').addClass('hidden')
          }

          $('.post-share-item.post-share-expand').
            off().
            on('click', function (e) {
              e.preventDefault()
              var parent = $(this).closest('.post-share')
              parent.find('.auto-hidden').toggleClass('active')
              parent.toggleClass('showing-hidden')
            })

          tag.css('opacity', '1')
        }
      })

    }

    /* Smooth Scroll */
    PENCI.smoothlinkscroll = function () {
      $('a[href^="#"]').on('click', function (e) {
        // e.preventDefault();

        var target = this.hash,
          $target = $(target)

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 70,
        }, 900, 'swing', function () {
          window.location.hash = target
        })
      })
    }
    /* Cookie Law
 ---------------------------------------------------------------*/
    PENCI.cookie = function () {
      var wrapCookie = '.penci-wrap-gprd-law',
        $wrapCookie = $(wrapCookie),
        classAction = 'penci-wrap-gprd-law-close',
        penciCookieName = 'penci_law_footer_new'

      if (!$wrapCookie.length) {
        return false
      }

      var penciCookie = {
        set: function (name, value) {
          var date = new Date()
          date.setTime(date.getTime() + (
            31536000000
          ))
          var expires = '; expires=' + date.toGMTString()
          document.cookie = name + '=' + value + expires + '; path=/'
        },
        read: function (name) {
          var namePre = name + '='
          var cookieSplit = document.cookie.split(';')
          for (var i = 0; i < cookieSplit.length; i++) {
            var cookie = cookieSplit[i]
            while (cookie.charAt(0) == ' ') {
              cookie = cookie.substring(1, cookie.length)
            }
            if (cookie.indexOf(namePre) === 0) {
              return cookie.substring(namePre.length, cookie.length)
            }
          }
          return null
        },
        erase: function (name) {
          this.set(name, '', -1)
        },
        exists: function (name) {
          return (
            this.read(name) !== null
          )
        },
      }

      $wrapCookie.removeClass('penci-close-all')
      if (!penciCookie.exists(penciCookieName) ||
        (
          penciCookie.exists(penciCookieName) && 1 ==
          penciCookie.read(penciCookieName)
        )) {
        $wrapCookie.removeClass(classAction)
      } else {
        $wrapCookie.addClass(classAction)
      }

      $('.penci-gprd-accept, .penci-gdrd-show').on('click', function (e) {
        e.preventDefault()

        var $this = $(this),
          $parent_law = $this.closest(wrapCookie)

        $parent_law.toggleClass(classAction)

        if ($parent_law.hasClass(classAction)) {
          penciCookie.set(penciCookieName, '2')
        } else {
          penciCookie.set(penciCookieName, '1')
        }

        return false
      })
    }

    /* Sticky main navigation
 ---------------------------------------------------------------*/
    PENCI.main_sticky = function () {
      if ($('nav#navigation').length && $().pensticky &&
        !$('nav#navigation').hasClass('penci-disable-sticky-nav')) {
        var spaceTop = 0
        if ($('body').hasClass('admin-bar')) {
          spaceTop = 32
        }
        $('nav#navigation').each(function () {
          $(this).pensticky({ topSpacing: spaceTop })
        })
      } // sticky
    }

    /* Homepage Featured Slider
 ---------------------------------------------------------------*/
    PENCI.featured_slider = function () {

      const owl_fslider_name = {}

      $('.featured-area .penci-owl-featured-area').each(function () {

        var $this = $(this),
          $style = $this.data('style'),
          $auto = false,
          $autotime = $this.data('autotime'),
          $speed = $this.data('speed'),
          $loop = $this.data('loop'),
          $item = 1,
          $slideby = 1,
          $nav = true,
          $dots = false,
          $rtl = false,
          $items_desktop = 1,
          $items_tablet = 1,
          $items_tabsmall = 1,
          $items_mobile = 1,
          $spaceBetween = 0,
          $ctyle = ajax_var.fcarousel_e,
          $sstyle = ajax_var.fslider_e,
          $id = 'fetured-swiper-' + Math.floor(Math.random() * (
            1 - 999999
          ) + 1) + 1

        if ($this.attr('data-id')) {
          $id = $this.attr('data-id')
        }

        $this.addClass($id)

        if ($this.hasClass('no-df-swiper')) {
          return
        }
        
        if ($this.hasClass('penci-owl-loaded')) {
          return
        }

        if ($this.attr('data-ceffect')) {
          $ctyle = $this.attr('data-ceffect')
        }

        if ($this.attr('data-seffect')) {
          $sstyle = $this.attr('data-seffect')
        }

        if ($('html').attr('dir') === 'rtl') {
          $rtl = true
        }
        if ($this.attr('data-auto') === 'true') {
          $auto = true
        }
        if ($this.attr('data-nav') === 'false') {
          $nav = false
        }
        if ($this.attr('data-dots') === 'true') {
          $dots = true
          $this.append('<div class="penci-owl-dots"></div>')
        }
        if ($this.attr('data-item')) {
          $item = parseInt($this.data('item'))
          $slideby = $item
        }
        if ($this.attr('data-desktop')) {
          $items_desktop = parseInt($this.data('desktop'))
        }
        if ($this.attr('data-tablet')) {
          $items_tablet = parseInt($this.data('tablet'))
        }
        if ($this.attr('data-tabsmall')) {
          $items_tabsmall = parseInt($this.data('tabsmall'))
        }
        if ($this.attr('data-mobile')) {
          $items_mobile = parseInt($this.data('mobile'))
        }
        if ($this.attr('data-slideby')) {
          $slideby = parseInt($this.data('slideby'))
        }

        if ($item > 1) {
          $this.addClass('swiper-multi-items')
        }

        let a = 0,
          e = $(this),
          t = !1

        var interleaveOffset = 0.5

        if ($style === 'style-2') {
          $spaceBetween = 10
          $loop = true
        } else if ($style === 'style-28') {
          $items_desktop = $item = 6
        } else if ($style === 'style-38') {
          $spaceBetween = 5
          $items_desktop = $item = 5
        } else if ($style === 'style-43') {
          $spaceBetween = 0
        }

        var swiper_arg = {
          loop: $loop,
          autoplay: $auto,
          spaceBetween: $spaceBetween,
          slidesPerView: $item,
          speed: $speed,
          slideActiveClass: 'active',
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.' + $id + ' .owl-next',
            prevEl: '.' + $id + ' .owl-prev',
          },
          on: {
            init: function () {
              $this.addClass('penci-owl-loaded')
            },
            afterInit: function () {
              $this.addClass('penci-featured-loaded')
            },
            setTransition: function (swiper, speed) {

              if (swiper.slides) {

                for (var i = 0; i < swiper.slides.length; i++) {
                  if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                    $sstyle == 'creative') {
                    swiper.slides[i].style.transition = speed + 'ms'
                    swiper.slides[i].querySelector(
                      '.slide-inner').style.transition = speed + 'ms'
                  }
                  if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                    null && $sstyle == 'creative') {
                    swiper.slides[i].style.transition = speed + 'ms'
                    swiper.slides[i].querySelector(
                      '.penci-swiper-mask').style.transition = speed + 'ms'
                  }
                }

              }

            },
            touchStart (...n) {
              if ($item > 1) {
                t = !0, e.on && e.on.touchStart && e.on.touchStart(...n)
              }
              var swiper = this
              for (var i = 0; i < swiper.slides.length; i++) {
                if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                  $sstyle == 'creative') {
                  swiper.slides[i].style.transition = ''
                }
                if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                  null && $sstyle == 'creative') {
                  swiper.slides[i].style.transition = ''
                }
              }
            },
            touchEnd (...n) {
              if ($item > 1) {
                t = !1, e.on && e.on.touchStart && e.on.touchEnd(...n)
              }
            },
            progress (n, u) {
              if (t) {
                return
              }
              if ($item > 1 && $ctyle == 'swing') {
                n.on && n.on.progress && n.on.progress(n, u)
                const g = n.progress > a ? 'next' : 'prev'
                a = n.progress
                const y = n.params.speed / 16,
                  f = n.visibleSlidesIndexes ? n.visibleSlidesIndexes : [],
                  h = f[0],
                  m = f[f.length - 1],
                  v = (l, c) => {
                    g === 'next' && c >= h ? l.style.transitionDelay = `${(c -
                      h + 1) * y}ms` : g === 'prev' && c <= m + 1
                      ? l.style.transitionDelay = `${(m - c + 1) * y}ms`
                      : l.style.transitionDelay = `${0}ms`
                  }
                n.slides.forEach((l, c) => {
                  n.animating
                    ? (l.style.transitionDelay = '0ms', requestAnimationFrame(
                      () => {
                        v(l, c)
                      }))
                    : v(l, c)
                })
              }

              var swiper = this
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress
                var innerOffset = swiper.width * interleaveOffset
                var innerTranslate = slideProgress * innerOffset
                if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                  $sstyle == 'creative') {
                  swiper.slides[i].querySelector(
                    '.slide-inner').style.transform = 'translate3d(' +
                    innerTranslate + 'px, 0, 0)'
                }
                if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                  null && $sstyle == 'creative') {
                  swiper.slides[i].querySelector(
                    '.penci-swiper-mask').style.transform = 'translate3d(' +
                    innerTranslate + 'px, 0, 0)'
                }
              }

            },
          },
        }

        if ($this.attr('data-slidespg')) {
          swiper_arg['slidesPerGroup'] = $this.attr('data-slidespg')
        }

        if ($auto) {
          swiper_arg['autoplay'] = {
            delay: $autotime,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        }

        if ($style === 'style-2' || $style === 'style-38') {
          swiper_arg['centeredSlides'] = true
          swiper_arg['loop'] = true
          swiper_arg['slidesPerView'] = 'auto'
        }

        if ($style === 'style-43' ) {
          swiper_arg['centeredSlides'] = true
          swiper_arg['loop'] = true
        }

        if ($this.find('.swiper-mark-item').length) {
          swiper_arg['parallax'] = true
        }

        if ($style === 'style-2') {
          swiper_arg['loopAddBlankSlides'] = true
          swiper_arg['watchSlidesProgress'] = false
          swiper_arg['centerInsufficientSlides'] = true
        }

        if ($style === 'style-38') {
          swiper_arg['loopAddBlankSlides'] = true
          swiper_arg['watchSlidesProgress'] = false
          swiper_arg['centerInsufficientSlides'] = true
        }

        if ($dots) {
          swiper_arg['pagination'] = {
            el: '.' + $id + ' .penci-owl-dots',
            type: 'bullets',
            bulletElement: 'div',
            clickable: true,
            bulletClass: 'penci-owl-dot',
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><span></span></div>'
            },
          }
        }

        if ($item == 1 && $style !== 'style-38') {

          if ($sstyle === 'creative') {
            swiper_arg['effect'] = 'slide'
          } else {
            swiper_arg['effect'] = $sstyle
          }
        }

        if ($style == 'style-28' || $style == 'style-2' || $style ==
          'style-38') {
          swiper_arg['effect'] = 'side'
          swiper_arg['slidesPerView'] = 'auto'
        }

        if (swiper_arg['effect'] == 'fade') {
          swiper_arg['fadeEffect'] = {
            crossFade: true,
          }
        }

        if ($ctyle == 'swing' && $item > 1) {
          swiper_arg['speed'] = $speed
          swiper_arg['loop'] = false

          if ($style !== 'style-38') {
            swiper_arg['rewind'] = true
          }

          swiper_arg['effect'] = 'creative'
          swiper_arg['followFinger'] = !1
          swiper_arg['creativeEffect'] = {
            limitProgress: 100,
            prev: {
              translate: ['-100%', 0, 0],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }
        }

        if (swiper_arg['slidesPerView'] !== 'auto') {
          swiper_arg['breakpoints'] = {
            0: {
              slidesPerView: $items_mobile,
            },
            480: {
              slidesPerView: $items_tabsmall,
            },
            768: {
              slidesPerView: $items_tablet,
            },
            1170: {
              slidesPerView: $items_desktop,
            },
          }
        }

        owl_fslider_name[$id] = new Swiper('.' + $id, swiper_arg)

        owl_fslider_name[$id].update()

        if ($this.attr('data-slideTo')) {
          owl_fslider_name[$id].slideTo($this.attr('data-slideTo'), 0)
        } else if ($style == 'style-38') {
          owl_fslider_name[$id].slideTo(4, 0)
        } else if ($style == 'style-2') {
          owl_fslider_name[$id].slideTo(4, 0)
        } else if ($style == 'style-43') {
          owl_fslider_name[$id].slideTo(2, 0)
        }

        if ($('body').hasClass('rtl')) {
          owl_fslider_name[$id].changeLanguageDirection('ltr')
        }
      })
    }

    /* Owl Slider General
 ---------------------------------------------------------------*/
    PENCI.owl_slider = function () {

      const owl_slider_name = {}

      $('.penci-owl-carousel-slider').each(function () {
        var $this = $(this),
          $parent = $this.parent(),
          $auto = true,
          $dots = false,
          $nav = true,
          $loop = true,
          $rtl = false,
          $items_desktop = 1,
          $items_tablet = 1,
          $items_tabsmall = 1,
          $items_mobile = 1,
          $speed = 600,
          $item = 1,
          $slideby = 1,
          $margin = 0,
          $autotime = 5000,
          $height = true,
          $datalazy = false,
          $carousel_effect = ajax_var.carousel_e,
          $slide_effect = ajax_var.slider_e,
          $direction = 'horizontal',
          $disable_effect = false,
          $e = false,
          $thumbs = $this.attr('data-thumbs'),
          $id = 'fetured-swiper-' + Math.floor(Math.random() * (
            1 - 999999
          ) + 1) + 1

        if ($this.hasClass('no-df')) {
          return
        }
        
        if ($this.hasClass('penci-owl-loaded')) {
          return
        }

        if ($this.hasClass('nav-thumb-creative')) {
          return
        }

        if ($this.hasClass('penci-featured-loaded')) {
          return
        }

        if ($this.attr('data-id')) {
          $id = $this.attr('data-id')
        }

        if ($this.attr('data-ceffect')) {
          $carousel_effect = $this.attr('data-ceffect')
        }

        if ($this.attr('data-seffect')) {
          $slide_effect = $this.attr('data-seffect')
        }

        $this.addClass($id)

        $this.find('.swiper-slide').removeClass('penci-ajrs-animate')

        if ($this.attr('data-nav') !== 'false') {
          $this.append(
            '<div class="penci-owl-nav"><div class="owl-prev"><i class="penciicon-left-chevron"></i></div><div class="owl-next"><i class="penciicon-right-chevron"></i></div></div>')
        }

        if ($('html').attr('dir') === 'rtl') {
          $rtl = true
        }
        if ($this.attr('data-dots') === 'true') {
          $dots = true
          if (!$this.find('.penci-owl-dots').length) {
            $this.append('<div class="penci-owl-dots"></div>')
          }
        }
        if ($this.attr('data-loop') === 'false') {
          $loop = false
        }
        if ($this.attr('data-nav') === 'false') {
          $nav = false
        }
        if ($this.attr('data-auto') === 'false') {
          $auto = false
        }

        if ($this.attr('data-margin')) {
          $margin = parseInt($this.data('margin'))
        }
        if ($this.attr('data-desktop')) {
          $items_desktop = $this.data('desktop') == 'auto' ? 'auto' : parseInt($this.data('desktop'))
        }
        if ($this.attr('data-tablet')) {
          $items_tablet = $this.data('tablet') == 'auto' ? 'auto' : parseInt($this.data('tablet'))
        }
        if ($this.attr('data-tabsmall')) {
          $items_tabsmall = $this.data('tabsmall') == 'auto' ? 'auto' : parseInt($this.data('tabsmall'))
        }
        if ($this.attr('data-mobile')) {
          $items_mobile = $this.data('mobile') == 'auto' ? 'auto' : parseInt($this.data('mobile'))
        }
        if ($this.attr('data-speed')) {
          $speed = parseInt($this.data('speed'))
        }
        if ($this.attr('data-autotime')) {
          $autotime = parseInt($this.data('autotime'))
        }
        if ($this.attr('data-item')) {
          $item = $slideby = parseInt($this.data('item'))
        }
        if ($this.attr('data-lazy')) {
          $datalazy = true
        }
        if ($this.attr('data-height')) {
          $height = $this.attr('data-height')
        }

        if ($this.attr('data-direction')) {
          $direction = $this.attr('data-direction')
        }

        if ( $direction == 'vertical' || $this.attr('data-e') == 'false' ) {
          $disable_effect = true;
        }

        let a = 0,
          t = !1

        var interleaveOffset = 0.5

        var swiper_arg = {
          loop: $loop,
          spaceBetween: $margin,
          slidesPerView: $item,
          speed: $speed,
          autoplay: $auto,
          pauseOnMouseEnter: true,
          autoHeight: $height,
          slideActiveClass: 'active',
          watchSlidesProgress: true,
          lazyLoading: $datalazy,
          direction: $direction,
          navigation: {
            nextEl: '.' + $id + ' .owl-next',
            prevEl: '.' + $id + ' .owl-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: $items_mobile,
              direction: 'horizontal',
            },
            768: {
              slidesPerView: $items_tablet,
              direction: 'horizontal',
            },
            1170: {
              slidesPerView: $items_desktop,
            },
          },
          on: {
            init: function () {
              $this.addClass('penci-owl-loaded')
            },
            afterInit: function () {
              $this.addClass('penci-featured-loaded')
            },
            touchStart (slider) {

              if ($item > 1) {
                t = !0, slider.on && slider.on.touchStart &&
                slider.on.touchStart(slider)
              } else {
                var swiper = this
                for (var i = 0; i < swiper.slides.length; i++) {
                  if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                    $slide_effect == 'creative') {
                    swiper.slides[i].style.transition = ''
                  }
                  if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                    null && $slide_effect == 'creative') {
                    swiper.slides[i].style.transition = ''
                  }
                }
              }
            },
            touchEnd (slider) {

              if ($item > 1) {
                t = !1, slider.on && slider.on.touchStart &&
                slider.on.touchEnd(slider)
              }
            },
            setTransition: function (swiper, speed) {

              if ( $disable_effect ) {
                return;
              }

              if (swiper.slides) {

                for (var i = 0; i < swiper.slides.length; i++) {

                  if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                    $slide_effect == 'creative') {
                    swiper.slides[i].style.transition = speed + 'ms'
                    swiper.slides[i].querySelector(
                      '.slide-inner').style.transition = speed + 'ms'
                  }
                  if (swiper.slides[i].querySelector('.penci-ctslide-bg') !==
                    null && $slide_effect == 'creative') {
                    swiper.slides[i].style.transition = speed + 'ms'
                    swiper.slides[i].querySelector(
                      '.penci-ctslide-bg').style.transition = speed + 'ms'
                  }
                  if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                    null && $slide_effect == 'creative') {
                    swiper.slides[i].style.transition = speed + 'ms'
                    swiper.slides[i].querySelector(
                      '.penci-swiper-mask').style.transition = speed + 'ms'
                  }
                }

              }

            },
            progress (n, u) {
              if (t) {
                return
              }

              if ( $disable_effect ) {
                return;
              }

              if ($item > 1 && $carousel_effect === 'swing') {

                n.on && n.on.progress && n.on.progress(n, u)
                const g = n.progress > a ? 'next' : 'prev'
                a = n.progress
                const y = n.params.speed / 16,
                  f = n.visibleSlidesIndexes ? n.visibleSlidesIndexes : [],
                  h = f[0],
                  m = f[f.length - 1],
                  v = (l, c) => {
                    g === 'next' && c >= h ? l.style.transitionDelay = `${(c -
                      h + 1) * y}ms` : g === 'prev' && c <= m + 1
                      ? l.style.transitionDelay = `${(m - c + 1) * y}ms`
                      : l.style.transitionDelay = `${0}ms`
                  }
                n.slides.forEach((l, c) => {
                  n.animating
                    ? (l.style.transitionDelay = '0ms', requestAnimationFrame(
                      () => {
                        v(l, c)
                      }))
                    : v(l, c)
                })

              } else {

                var swiper = this
                for (var i = 0; i < swiper.slides.length; i++) {
                  var slideProgress = swiper.slides[i].progress
                  var innerOffset = swiper.width * interleaveOffset
                  var innerTranslate = slideProgress * innerOffset
                  if (swiper.slides[i].querySelector('.slide-inner') !== null &&
                    $slide_effect === 'creative') {
                    swiper.slides[i].querySelector(
                      '.slide-inner').style.transform = 'translate3d(' +
                      innerTranslate + 'px, 0, 0)'
                  }
                  if (swiper.slides[i].querySelector('.penci-ctslide-bg') !==
                    null && $slide_effect === 'creative') {
                    swiper.slides[i].querySelector(
                      '.penci-ctslide-bg').style.transform = 'translate3d(' +
                      innerTranslate + 'px, 0, 0)'
                  }
                  if (swiper.slides[i].querySelector('.penci-swiper-mask') !==
                    null && $slide_effect === 'creative') {
                    swiper.slides[i].querySelector(
                      '.penci-swiper-mask').style.transform = 'translate3d(' +
                      innerTranslate + 'px, 0, 0)'
                  }
                }
              }
            },
          },
        }

        if ($carousel_effect === 'swing' && $item > 1 && !$disable_effect) {
          $this.addClass('penci-swing-ef')
          swiper_arg['speed'] = $speed
          swiper_arg['loop'] = false
          swiper_arg['rewind'] = true
          swiper_arg['effect'] = 'creative'
          swiper_arg['followFinger'] = !1
          swiper_arg['creativeEffect'] = {
            limitProgress: 100,
            prev: {
              translate: ['-100%', 0, 0],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }
        } else if ($item == 1 && !$disable_effect) {
          swiper_arg['effect'] = $slide_effect
        }

        if ((
          swiper_arg['effect'] === 'flip' || swiper_arg['effect'] === 'cards'
        ) && $item == 1) {
          swiper_arg['loop'] = false
        }

        if (swiper_arg['effect'] === 'creative' && $item === 1) {
          swiper_arg['creativeEffect'] = {
            shadowPerProgress: true,
            prev: {
              translate: ['-100%', 0, 0],
              opacity: 0.5,
            },
            next: {
              translate: ['100%', 0, 0],
              opacity: 1,
            },
          }
        }

        if ($dots) {
          swiper_arg['pagination'] = {
            el: '.' + $id + ' .penci-owl-dots',
            type: 'bullets',
            bulletElement: 'div',
            clickable: true,
            bulletClass: 'penci-owl-dot',
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><span></span></div>'
            },
          }
        }

        if ($this.attr('data-thumbs-id')) {
          swiper_arg['thumbs'] = {
            swiper: owl_slider_name[$this.attr('data-thumbs-id')],
          }
        }

        if ($this.attr('data-thumb')) {
          swiper_arg['slideToClickedSlide'] = true
        }

        if ($parent.hasClass('penci-topbar-trending')) {

          swiper_arg['navigation'] = {
            nextEl: '.penci-slider-next',
            prevEl: '.penci-slider-prev',
          }

          swiper_arg['autoHeight'] = false

          if ($this.attr('data-anim')) {
            swiper_arg['slideActiveClass'] = 'animated'
          }

          if ($this.attr('data-anim') === 'slideInUp') {
            swiper_arg['effect'] = 'creative'
            swiper_arg['creativeEffect'] = {
              shadowPerProgress: true,
              prev: {
                translate: [0, '-100%', 0],
                opacity: 0,
              },
              next: {
                translate: [0, '100%', 0],
                opacity: 1,
              },
            }
          }

          if ($this.attr('data-anim') === 'slideInRight') {
            swiper_arg['effect'] = 'creative'
            swiper_arg['creativeEffect'] = {
              shadowPerProgress: false,
              perspective: true,

              prev: {
                translate: ['20px', 0, 0],
                opacity: 0,
              },
              next: {
                translate: ['20px', 0, 0],
                opacity: 0,
              },
            }
          }

          if ($this.attr('data-anim') === 'fadeIn') {
            swiper_arg['effect'] = 'fade'
            swiper_arg['fadeEffect'] = {
              crossFade: true,
            }
          }
        }

        if ($auto) {
          swiper_arg['autoplay'] = {
            delay: $autotime,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        }

        owl_slider_name[$id] = new Swiper('.' + $id, swiper_arg)

        if ($this.attr('data-thumbs-id')) {
          owl_slider_name[$this.attr('data-thumbs-id')].update()
        }

        owl_slider_name[$id].update()

      })

    }

    /* Slick Slider w Thumbnails
     ---------------------------------------------------------------*/
    PENCI.slick_slider = function () {

      $('.penci-image-gallery-thumbnail-slider').each(function () {

        var main_slider = $(this).find('.pcthumb-s-msl').attr('data-id'),
          thumb_slider = $(this).find('.pcthumb-s-csl').attr('data-id'),
          thumb_total = $(this).find('.pcthumb-s-csl').attr('data-total')

        var swiper_thumb_slider = new Swiper('.' + thumb_slider, {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          slideToClickedSlide: true,
          on: {
            init: function (e) {
              $('.' + thumb_slider).addClass('slick-initialized')
            },
          },
          navigation: {
            nextEl: '.' + thumb_slider + ' .slick-next',
            prevEl: '.' + thumb_slider + ' .slick-prev',
          },
        })

        var swiper_slider = new Swiper('.' + main_slider, {
          slidesPerView: 1,
          autoHeight: true,
          loop: true,
          thumbs: {
            swiper: swiper_thumb_slider,
          },
          on: {
            init: function (e) {
              $('.' + main_slider).addClass('slick-initialized')
            },
            slideChange: function (e) {
              var number = e.realIndex,
                number = number == 0 ? 1 : number
              $('.' + thumb_slider).
                find('.pcslick-nav-area').
                find('.current').
                html(number)
            },
          },
        })

        swiper_thumb_slider.update()
        swiper_slider.update()

      })

    }

    /* Fitvids
 ---------------------------------------------------------------*/
    PENCI.fitvids = function () {
      // Target your .container, .wrapper, .post, etc.
      if ($().fitVids) {
        $('.container').fitVids({ ignore: '.penci-sticky-video' })
      }
    }

    /* Sticky sidebar
 ----------------------------------------------------------------*/
    PENCI.sticky_sidebar = function () {
      if ($().theiaStickySidebar) {
        var top_margin = 80
        if ($('body').hasClass('admin-bar') &&
          $('body').hasClass('penci-vernav-enable')) {
          top_margin = 52
        } else if (!$('body').hasClass('admin-bar') &&
          $('body').hasClass('penci-vernav-enable')) {
          top_margin = 20
        } else if ($('body').hasClass('admin-bar') &&
          !$('body').hasClass('penci-vernav-enable')) {
          top_margin = 112
        }

        if ($('.pc-wrapbuilder-header').length) {
          var headerdesktop = $('.penci_builder_sticky_header_desktop')
          top_margin = 20
          if (headerdesktop.length &&
            !headerdesktop.hasClass('hide-scroll-down')) {
            top_margin = headerdesktop.height() + 20
          }
          if ($('body').hasClass('admin-bar')) {
            top_margin = top_margin + 32
          }
        }

        $('.pc-container-sticky').each(function () {
          var t = $(this)
          if (t.find('.theiaStickySidebar').length === 0) {
            t.wrapInner('<div class="theiaStickySidebar"></div>')
          }
        })

        if ($(
          '.penci-vc-sticky-sidebar > .penci-vc-row > .penci-vc-column').length) {
          $('.penci-vc-sticky-sidebar > .penci-vc-row > .penci-vc-column').
            theiaStickySidebar({
              additionalMarginTop: top_margin,
              'minWidth': 961,
            })
        }

        if ($('.penci-enSticky .penci-sticky-sb').length) {
          $('.penci-enSticky .penci-sticky-sb,.penci-enSticky .penci-sticky-ct').
            theiaStickySidebar({
              additionalMarginTop: top_margin,
              'minWidth': 961,
            })
        }
        $('#main.penci-main-sticky-sidebar, #sidebar.penci-sticky-sidebar').
          theiaStickySidebar({
            // settings
            additionalMarginTop: top_margin,
          })
      } // if sticky
    }

    /* Mega menu
 ----------------------------------------------------------------*/
    PENCI.mega_menu = function () {
      // Hover parent
      $('#navigation ul.menu > li.penci-mega-menu').
        on('mouseenter', function () {
          var $this = $(this),
            $row_active = $this.find('.row-active'),
            $rowsLazy = $row_active.find('.penci-lazy')
          $row_active.fadeIn('200').css('display', 'inline-block')
        })

      $('#navigation .penci-mega-child-categories a').
        on('mouseenter', function () {
          if ($(this).hasClass('mega-normal-child')) {
            return
          }
          if (!$(this).hasClass('cat-active')) {
            var $this = $(this),
              $row_active = $this.data('id'),
              $parentA = $this.parent().children('a'),
              $parent = $this.closest('.penci-megamenu'),
              $rows = $this.closest('.penci-megamenu').
                find('.penci-mega-latest-posts').
                children('.penci-mega-row'),
              $rowsLazy = $rows.find('.penci-lazy')
            $parentA.removeClass('cat-active')
            $this.addClass('cat-active')
            $rows.hide()
            $rows.removeClass('row-active')
            $parent.find('.' + $row_active).
              fadeIn('300').
              css('display', 'inline-block').
              addClass('row-active')
          }
        })
    }

    PENCI.categories_lists = function () {
      // Add indicator

      $('.pc-advanced-cat li').each(function (e) {
        if ($(this).find('.children').length) {
          $(this).addClass('has-children')
          $(this).find('.children').hide()
          $(this).
            append('<u class="indicator"><i class="fa fa-angle-down"></i></u>')
        }
      })

      // indicator click
      $('.pc-advanced-cat .indicator').on('click', function (e) {
        var $this = $(this)
        e.preventDefault()
        $this.children().toggleClass('fa-angle-up')
        $this.closest('li').find('.children').slideToggle('fast')
      })

      $(document).on('mouseenter', '.penci-mega-menu', function (e) {
        var t = $(this),
            w = t.find('.penci-megamenu')
            if ( w.hasClass('loading') || t.hasClass('pcmn-ajxd') ) {
              return
            }
            if ( ! w.hasClass('loaded') ) {
              var menu = w.attr('data-menu'),
                  item = w.attr('data-item'),
                  catid = w.attr('data-catid'),
                  number = w.attr('data-number'),
                  style = w.attr('data-style'),
                  rid = w.attr('data-id'),
                  position = w.attr('data-position')

              w.addClass('loading')

              if ( menu && item && catid && number && style && rid && position ) {

                var save_name = 'penci_megamn_'+menu+item+catid+number+style+position;

                if (sessionStorage.getItem(save_name) ) {
                  w.append(sessionStorage.getItem(save_name))
                  w.removeClass('loading')
                  w.addClass('loaded')

                  var $row_active = w.find('.row-active')
                  $row_active.fadeIn('200').css('display', 'inline-block')

                  $('body').trigger('penci-ajax-menu-loaded')
                } else {

                  $.post(
                    ajax_var_more.megamenu_url,
                    {
                      menu: menu,
                      item: item,
                      catid: catid,
                      number: number,
                      style: style,
                      position: position,
                      id: rid,
                      action: 'penci_html_mega_menu',
                    }, function (response) {
                      sessionStorage.setItem(save_name, response.data);
                      w.append(response.data)
                      w.removeClass('loading')
                      w.addClass('loaded')

                      var $row_active = w.find('.row-active')
                      $row_active.fadeIn('200').css('display', 'inline-block')

                      $('body').trigger('penci-ajax-menu-loaded')
                    }
                  )
                }
              }
            }
      })
    }

    /* Mobile AJAX Menu
    ----------------------------------------------------------------*/
    PENCI.mobile_ajax_menu = function () {
        $('.penci-megamenu').each(function (index, element) {
          var w = $(this);
              if ( w.hasClass('loadingm') ) {
                return
              }
              if ( ! w.hasClass('loaded') ) {
                var menu = w.attr('data-menu'),
                    item = w.attr('data-item'),
                    catid = w.attr('data-catid'),
                    number = w.attr('data-number'),
                    style = w.attr('data-style'),
                    rid = w.attr('data-id'),
                    position = w.attr('data-position')

                w.addClass('loadingm')

                if ( menu && item && catid && number && style && rid && position ) {

                  var save_name = 'penci_megamn_m_'+menu+item+catid+number+style+position;

                  if (sessionStorage.getItem(save_name) ) {
                    w.append(sessionStorage.getItem(save_name))
                    w.removeClass('loadingm')
                    w.addClass('loaded')

                    var $row_active = w.find('.row-active')
                    $row_active.fadeIn('200').css('display', 'inline-block')

                    $('body').trigger('penci-ajax-menu-loaded')
                  } else {

                    $.post(
                      ajax_var_more.megamenu_url,
                      {
                        menu: menu,
                        item: item,
                        catid: catid,
                        number: number,
                        style: style,
                        position: position,
                        id: rid,
                        action: 'penci_html_mega_menu',
                      }, function (response) {
                        sessionStorage.setItem(save_name, response.data);
                        w.append(response.data)
                        w.removeClass('loadingm')
                        w.addClass('loaded')

                        var $row_active = w.find('.row-active')
                        $row_active.fadeIn('200').css('display', 'inline-block')

                        $('body').trigger('penci-ajax-menu-loaded')
                      }
                    )
                  }
                }
              }
        })
    }

    /* Mobile menu responsive
 ----------------------------------------------------------------*/
    PENCI.mobile_menu = function () {
      // Add indicator
      $('#sidebar-nav .menu li.menu-item-has-children > a').
        append('<u class="indicator"><i class="fa fa-angle-down"></i></u>')

      // Toggle menu when click show/hide menu
      $('#navigation .button-menu-mobile').on('click', function () {
        $('body').addClass('open-sidebar-nav')
      })

      // indicator click
      $('#sidebar-nav .menu li a .indicator').on('click', function (e) {
        if ($('body').hasClass('penci-vernav-cparent')) {
          return
        }
        var $this = $(this)
        e.preventDefault()
        $this.children().toggleClass('fa-angle-up')
        $this.parent().next().slideToggle('fast')
      })

      $('.penci-vernav-cparent #sidebar-nav .menu li.menu-item-has-children > a').
        on('click', function (e) {
          var $this = $(this)
          e.preventDefault()
          $this.children().children().toggleClass('fa-angle-up')
          $this.next().slideToggle('fast')
        })

      // Close sidebar nav
      $('body').on('click', '#close-sidebar-nav', function (e) {
        e.preventDefault()
        $('body').removeClass('open-sidebar-nav')
      })
    }

    PENCI.toggleMenuHumburger = function () {
      var $menuhumburger = $('.penci-menu-hbg')
      if ($menuhumburger.length) {
        var $body = $('body'),
          $button = $(
            '.penci-vernav-toggle,.penci-menuhbg-toggle,#penci-close-hbg,.penci-menu-hbg-overlay'),
          sidebarClass = 'penci-menuhbg-open'

        // Add indicator
        $('.penci-menu-hbg .menu li.menu-item-has-children > a').
          append('<u class="indicator"><i class="fa fa-angle-down"></i></u>')

        // indicator click
        $('.penci-menu-hbg .menu li a .indicator').on('click', function (e) {
          if ($('body').hasClass('penci-hbg-cparent') &&
            !$menuhumburger.hasClass('penci-builder-mobile-sidebar-nav')) {
            return
          }
          if ($menuhumburger.hasClass('penci-builder-mobile-sidebar-nav') &&
            $menuhumburger.find('.pchb-cparent').length) {
            return
          }
          var $this = $(this)
          e.preventDefault()
          $this.children().toggleClass('fa-angle-up')
          $this.parent().next().slideToggle('fast')
        })

        $('.penci-hbg-cparent .penci-menu-hbg .menu li.menu-item-has-children > a').
          on('click', function (e) {
            var $this = $(this)
            e.preventDefault()
            $this.children().children().toggleClass('fa-angle-up')
            $this.next().slideToggle('fast')
          })

        // Click to show mobile menu
        $button.on('click', function (e) {
          e.preventDefault()

          if ($body.hasClass(sidebarClass)) {
            $body.removeClass(sidebarClass)
            $button.removeClass('active')

            return
          }
          e.stopPropagation() // Do not trigger click event on '.site' below
          $body.addClass(sidebarClass)
          $button.addClass('active')

        })
      }
    }
    
    PENCI.ElementorHumburger = function () {
      var $menuhumburger = $('.penci-menu-hbg-ele')
      if ($menuhumburger.length) {
        var $body = $('body'),
          $button = $(
            '.penci-vernav-toggle,.penci-menuhbg-toggle,#penci-close-hbg,.penci-menu-hbg-overlay'),
          sidebarClass = 'penci-menuhbg-open'

        // Add indicator
        $('.penci-menu-hbg-ele .menu li.menu-item-has-children > a').
          append('<u class="indicator"><i class="fa fa-angle-down"></i></u>')

        // indicator click
        $('.penci-menu-hbg-ele .menu li a .indicator').on('click', function (e) {
          if ($('body').hasClass('penci-hbg-cparent') &&
            !$menuhumburger.hasClass('penci-builder-mobile-sidebar-nav')) {
            return
          }
          if ($menuhumburger.hasClass('penci-builder-mobile-sidebar-nav') &&
            $menuhumburger.find('.pchb-cparent').length) {
            return
          }
          var $this = $(this)
          e.preventDefault()
          $this.children().toggleClass('fa-angle-up')
          $this.parent().next().slideToggle('fast')
        })

        $('.penci-hbg-cparent .penci-menu-hbg-ele .menu li.menu-item-has-children > a').
          on('click', function (e) {
            var $this = $(this)
            e.preventDefault()
            $this.children().children().toggleClass('fa-angle-up')
            $this.next().slideToggle('fast')
          })

        // Click to show mobile menu
        $button.on('click', function (e) {
          e.preventDefault()

          if ($body.hasClass(sidebarClass)) {
            $body.removeClass(sidebarClass)
            $button.removeClass('active')

            return
          }
          e.stopPropagation() // Do not trigger click event on '.site' below
          $body.addClass(sidebarClass)
          $button.addClass('active')

        })
      }
    }

    /* Light box
 ----------------------------------------------------------------*/
    PENCI.lightbox = function () {
      if ($().magnificPopup) {
        $('a[data-rel^="penci-gallery-image-content"], .penci-enable-lightbox .gallery-item a').
          magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            image: {
              verticalFit: true,
              titleSrc: 'data-cap',
            },
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: false,
              duration: 300,
            },
          })

        $('a[data-rel^="penci-gallery-bground-content"]').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          image: {
            verticalFit: true,
          },
          gallery: {
            enabled: true,
          },
        })

        // Enable lightbox videos
        $('.penci-other-layouts-lighbox').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: false,
          closeOnContentClick: true,
        })

        if ($('.penci-image-gallery').length) {
          $('.penci-image-gallery').each(function () {
            var $this = $(this),
              id = $this.attr('id')

            $('#' + id + ' a.penci-gallery-ite').magnificPopup({
              type: 'image',
              closeOnContentClick: true,
              closeBtnInside: false,
              fixedContentPos: true,
              image: {
                verticalFit: true,
                titleSrc: 'data-cap',
              },
              gallery: {
                enabled: true,
              },
            })
          })
        }

        if ($('.penci-post-gallery-container').length) {
          $('.penci-post-gallery-container').each(function () {
            var $this = $(this),
              id = $this.attr('id')

            $('#' + id + ' a.penci-gallery-ite').magnificPopup({
              type: 'image',
              closeOnContentClick: true,
              closeBtnInside: false,
              fixedContentPos: true,
              image: {
                verticalFit: true,
                titleSrc: 'data-cap',
              },
              gallery: {
                enabled: true,
              },
            })
          })
        }

      } // if magnificPopup exists
    }

    /* Masonry layout
 ----------------------------------------------------------------*/
    PENCI.masonry = function () {
      var $masonry_container = $(
        '.penci-masonry, .penci-bgstyle-2 .penci-biggrid-data')
      if ($masonry_container.length) {
        $masonry_container.each(function () {
          var $this = $(this)
          $this.imagesLoaded(function () {
            // initialize isotope
            $this.isotope({
              itemSelector: '.item-masonry',
              transitionDuration: '.55s',
              layoutMode: 'masonry',
            })
          })
        })
      }
    }

    /* Video Background
 ----------------------------------------------------------------*/
    PENCI.video_background = function () {
      var $penci_videobg = $('#penci-featured-video-bg')
      if ($penci_videobg.length) {
        $($penci_videobg).each(function () {
          var $this = $(this),
            $src = $this.data('videosrc'),
            $startime = $this.data('starttime'),
            $jarallaxArgs = {
              videoSrc: $src,
              videoStartTime: $startime,
              videoPlayOnlyVisible: false,
            }

          jarallax($this, $jarallaxArgs)
          $('.featured-area').addClass('loaded-wait')
          setTimeout(function () {
            $('.featured-area').addClass('loaded-animation')
          }, 1500)
        })
      }
    }

    /* Portfolio
 ----------------------------------------------------------------*/
    PENCI.AjaxPortfolio = function () {
      
      var $penci_portfolio_w = $('.wrapper-penci-portfolio.pcpt-ajax-ftl'),
          $penci_portfolio = $penci_portfolio_w.find('.penci-portfolio'),
          $penci_portfolio_i = $penci_portfolio_w.find('.inner-portfolio-posts'),
          $filter_a = $penci_portfolio_w.find('.penci-portfolio-filter a'),
          unique_id = $penci_portfolio.attr('id'),
          pagenavi = $penci_portfolio_w.find('.penci-pagenavi-shortcode'),
          DataFilter = null

      if (typeof (
          portfolioDataJs
        ) != 'undefined' && portfolioDataJs !==
        null) {
        for (var e in portfolioDataJs) {

          if (portfolioDataJs[e].instanceId == unique_id) {
            DataFilter = portfolioDataJs[e]
          }
        }
      }

      if ($().isotope && $penci_portfolio_i.length) {
        $penci_portfolio_i.each(function () {
          var $this = $(this)

          $this.imagesLoaded(function () {
            $this.isotope({
              itemSelector: '.portfolio-item',
              animationEngine: 'best-available',
              animationOptions: {
                duration: 250,
                queue: false,
              },
            }) // isotope

            $this.addClass('loaded')

            $('.portfolio-item .inner-item-portfolio').each(function () {
              var $this = $(this)
              $this.one('inview',
                function (event, isInView, visiblePartX, visiblePartY) {
                  $this.addClass('animated')
                }) // inview
            }) // each
          })
        })
      }
      
      $filter_a.on('click', function(e) {
        e.preventDefault();
        var filter_a = $(this),
            term = filter_a.attr('data-term'),
            paged = filter_a.attr('data-paged') ? parseInt( filter_a.attr('data-paged') ) : 1,
            term_wrapper = $penci_portfolio.find('.pcpt_data_' + term),
            df_wrapper =  $penci_portfolio.find('.inner-portfolio-posts:first-child'),
            loadmorebtm = $penci_portfolio_w.find('.penci-ajax-more-button'),
            mesNoMore = loadmorebtm.data('mes_no_more'),
            mes = loadmorebtm.data('mes')


          if ( filter_a.hasClass('loadmore-finish') ) {
            loadmorebtm.find('.ajax-more-text').html(mesNoMore)
            loadmorebtm.addClass('disable')
          } else {
            loadmorebtm.find('.ajax-more-text').html(mes)
            loadmorebtm.removeClass('disable')
          }

          if ( filter_a.hasClass('loading-data') || filter_a.closest('li').hasClass('active') ){
            return;
          }

          $penci_portfolio_w.find('.penci-portfolio-filter li').removeClass('active');
          filter_a.closest('li').addClass('active')

          filter_a.addClass('loading-data')
          $penci_portfolio.addClass('pcftaj-ld')


          if ( term == '*' ) {
            $penci_portfolio.find('.inner-portfolio-posts').hide()
            $penci_portfolio.find('.inner-portfolio-posts').removeClass('loaded')
            df_wrapper.show()
            df_wrapper.isotope('layout')
            df_wrapper.addClass('loaded')
            filter_a.removeClass('loading-data');
            $penci_portfolio.removeClass('pcftaj-ld');
            return
          }

          if( filter_a.hasClass('loaded_data')){
            $penci_portfolio.find('.inner-portfolio-posts').hide()
            $penci_portfolio.find('.inner-portfolio-posts').removeClass('loaded')
            $('.pcpt_data_' + term).show()
            $('.pcpt_data_' + term).isotope('layout')
            $('.pcpt_data_' + term).addClass('loaded')
            filter_a.removeClass('loading-data');
            $penci_portfolio.removeClass('pcftaj-ld');
            return;
          }

          if( filter_a.hasClass('load_full')){
            pagenavi.hide();
          } else {
            pagenavi.show();
          }

        DataFilter.currentTerm = term
        DataFilter.query.paged = paged

        var data = {
          action: 'penci_pfl_more_post_ajax',
          datafilter: DataFilter,
          nonce: ajax_var_more.nonce,
        }

        $.post(ajax_var_more.url, data, function (response) {

          filter_a.attr('data-paged', paged + 1)

          var $data = $(response.data.items)

          if ( ! term_wrapper.length && term != '*' ) {
            $penci_portfolio.append('<div class="inner-portfolio-posts pcpt_data_'+ term +'"></div>')
          }

          $penci_portfolio.find('.inner-portfolio-posts').hide()
          $penci_portfolio.find('.inner-portfolio-posts').removeClass('loaded')
          $('.pcpt_data_' + term).show()
          $('.pcpt_data_' + term).addClass('loaded')

          if ( $data.length > 0 ) {
            $('.pcpt_data_' + term).isotope()
            .append( $data )
            .isotope( 'appended', $data )
            .isotope('layout');
            filter_a.addClass('loaded_data')
          } else {
            $('.pcpt_data_' + term).isotope().isotope('layout')
            filter_a.addClass('load_full')
          }

          $('.container').fitVids({ ignore: '.penci-sticky-video' })

          $('a[data-rel^="penci-gallery-image-content"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            image: {
              verticalFit: true,
            },
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: false,
              duration: 300,
            },
          })

          $('.portfolio-item .inner-item-portfolio').each(function () {
            var $this = $(this)
            $this.one('inview',
              function (event, isInView, visiblePartX, visiblePartY) {
                $this.addClass('animated')
              }) // inview
          }) // each

          filter_a.removeClass('loading-data')
          $penci_portfolio.removeClass('pcftaj-ld')
        })
      });

      PENCI.Ajax_Portfolio_LoadMore.loadMore(DataFilter)
      PENCI.Ajax_Portfolio_LoadMore.infinityScroll(DataFilter)
      
    }

    PENCI.Ajax_Portfolio_LoadMore = {
      btnLoadMore: $('.penci-plf-loadmore'),
      loadMore: function (DataFilter) {
        var self = this
        $('body').on('click', '.penci-plf-loadmore .penci-ajax-more-button', function (event) {
          self.actionLoadMore($(this), DataFilter)
        })
      },
      infinityScroll: function (DataFilter) {
        var self = this,
          $handle = $('.penci-plf-loadmore'),
          $button_load = $handle.find('.penci-ajax-more-button')

        if ($handle.hasClass('penci-infinite-scroll')) {
          $(window).on('scroll', function () {
            var hT = $button_load.offset().top,
              hH = $button_load.outerHeight(),
              wH = $(window).height(),
              wS = $(this).scrollTop()

            if ((
              wS > (
                hT + hH - wH
              )
            ) && $button_load.length) {
              self.actionLoadMore($button_load, DataFilter)
            }
          }).trigger('scroll')
        }
      },
      actionLoadMore: function ($button_load, DataFilter) {
        if ($button_load.hasClass('loading-portfolios')) {
          return false
        }

        $button_load.addClass('loading-portfolios')

        var mesNoMore = $button_load.data('mes_no_more'),
            mes = $button_load.data('mes'),
            currentItem = $button_load.closest('.wrapper-penci-portfolio').find('.penci-portfolio-filter li.active a'),
            $wrap_content = $button_load.closest('.wrapper-penci-portfolio').find('.inner-portfolio-posts.loaded'),
            term_name = currentItem.attr('data-term'),
            term_paged = currentItem.attr('data-paged')


            DataFilter.currentTerm = term_name
            DataFilter.query.paged = term_paged

        var data = {
          action: 'penci_pfl_more_post_ajax',
          datafilter: DataFilter,
          nonce: ajax_var_more.nonce,
        }
        $.post(ajax_var_more.url, data, function (response) {
          if (!response.data.items) {
            $button_load.find('.ajax-more-text').html(mesNoMore)
            $button_load.removeClass('loading-portfolios')

            currentItem.addClass('loadmore-finish')
            $wrap_content.addClass('nore-moreposts')
            $button_load.addClass('disable')
            return false
          }

          currentItem.attr('data-paged', term_paged + 1)

          var $data = $(response.data.items)

          $wrap_content.append($data)
          $wrap_content.isotope('appended', $data).imagesLoaded(function () {
            $wrap_content.isotope('layout')
          })

          $('.container').fitVids({ ignore: '.penci-sticky-video' })

          $('a[data-rel^="penci-gallery-image-content"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            image: {
              verticalFit: true,
            },
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: false,
              duration: 300,
            },
          })

          $('.portfolio-item .inner-item-portfolio').each(function () {
            var $this = $(this)
            $this.one('inview',
              function (event, isInView, visiblePartX, visiblePartY) {
                $this.addClass('animated')
              }) // inview
          }) // each

          $button_load.removeClass('loading-portfolios')
        })
      },
    }

    // end portfolio ajax

    PENCI.portfolio = function () {
      var $penci_portfolio = $('.penci-portfolio')

      if ( $penci_portfolio.hasClass( 'pcpt-ajax-ftl' ) ) {
        return;
      }

      if ($().isotope && $penci_portfolio.length) {
        $('.penci-portfolio').each(function () {
          var $this = $(this),
            unique_id = $(this).attr('id'),
            DataFilter = null

          if (typeof (
              portfolioDataJs
            ) != 'undefined' && portfolioDataJs !==
            null) {
            for (var e in portfolioDataJs) {

              if (portfolioDataJs[e].instanceId == unique_id) {
                var DataFilter = portfolioDataJs[e]
              }
            }
          }

          $this.imagesLoaded(function () {
            $this.isotope({
              itemSelector: '.portfolio-item',
              animationEngine: 'best-available',
              animationOptions: {
                duration: 250,
                queue: false,
              },
            }) // isotope

            $this.addClass('loaded')

            $('.portfolio-item .inner-item-portfolio').each(function () {
              var $this = $(this)
              $this.one('inview',
                function (event, isInView, visiblePartX, visiblePartY) {
                  $this.addClass('animated')
                }) // inview
            }) // each

            var location = window.location.hash.toString()
            if (location.length) {
              location = location.replace('#', '')
              location.match(/:/)
              var Mlocation = location.match(/^([^:]+)/)[1]
              location = location.replace(Mlocation + ':', '')

              if (location.length > 1) {

                var $termActive = $afilter.filter(
                    '[data-term="' + location + '"]'),
                  portfolioItem = $this.find('.portfolio-item'),
                  $buttonLoadMore = $this.parent().
                    find('.penci-pagenavi-shortcode')

                if ($termActive.length) {

                  liFilter.removeClass('active')
                  $termActive.parent().addClass('active')
                  $this.isotope({ filter: '.penci-' + location })

                  var dataTerm = $termActive.data('term'),
                    p = {}

                  DataFilter.currentTerm = dataTerm
                  $.each(DataFilter.countByTerms, function (t, e) {
                    p[t] = 0
                  })

                  portfolioItem.each(function (t, e) {
                    $.each((
                      $(e).data('terms') + ''
                    ).split(' '), function (t, e) {
                      p[e]++
                    })
                  })

                  var show_button = 'number' == typeof p[dataTerm] &&
                    p[dataTerm] == DataFilter.countByTerms[dataTerm]
                  if ($buttonLoadMore.length) {
                    if (portfolioItem.length !== DataFilter.count &&
                      !show_button) {
                      $buttonLoadMore.show()
                    } else {
                      $buttonLoadMore.hide()
                    }
                  }
                }
              }
            }
          }) // imagesloaded

          // Filter items when filter link is clicked
          var $filter = $this.parent().find('.penci-portfolio-filter'),
            $afilter = $filter.find('a'),
            liFilter = $filter.find('li')

          liFilter.on('click', function () {

            var self = $(this),
              term = self.find('a').data('term'),
              selector = self.find('a').attr('data-filter'),
              $e_dataTerm = $filter.find('a').
                filter('[data-term="' + term + '"]'),
              portfolioItem = $this.find('.portfolio-item'),
              $buttonLoadMore = $this.parent().
                find('.penci-pagenavi-shortcode'),
              scrollTop = $(window).scrollTop()

            liFilter.removeClass('active')
            self.addClass('active')

            $this.parent().
              find('.penci-ajax-more-button').
              attr('data-cat', term)

            $this.isotope({ filter: selector })

            if ($e_dataTerm.length) {
              window.location.hash = '*' == term ? '' : term

              $(window).scrollTop(scrollTop)
            }

            var p = {}
            DataFilter.currentTerm = term
            $.each(DataFilter.countByTerms, function (t, e) {
              p[t] = 0
            })

            portfolioItem.each(function (t, e) {
              $.each((
                $(e).data('terms') + ''
              ).split(' '), function (t, e) {
                p[e]++
              })
            })

            var show_button = 'number' == typeof p[term] && p[term] ==
              DataFilter.countByTerms[term]
            if ($buttonLoadMore.length) {
              if (portfolioItem.length !== DataFilter.count && !show_button) {
                $buttonLoadMore.show()
              } else {
                $buttonLoadMore.hide()
              }
            }

            return false
          })

          PENCI.portfolioLoadMore.loadMore($this, DataFilter)
          PENCI.portfolioLoadMore.infinityScroll(DataFilter)

        }) // each .penci-portfolio

      }	// end if isotope & portfolio

      var $btnLoadMore = $('.penci-plf-loadmore')
      if (!$().isotope || !$btnLoadMore.length) {
        return false
      }
    }

    PENCI.portfolioLoadMore = {
      btnLoadMore: $('.penci-plf-loadmore'),
      loadMore: function ($pfl_wapper, DataFilter) {
        var self = this
        $('body').on('click', '.penci-ajax-more-button', function (event) {
          self.actionLoadMore($(this), $pfl_wapper, DataFilter)
        })
      },
      infinityScroll: function (DataFilter) {
        var self = this,
          $handle = $('.penci-plf-loadmore'),
          $button_load = $handle.find('.penci-ajax-more-button')

        if ($handle.hasClass('penci-infinite-scroll')) {
          $(window).on('scroll', function () {
            var hT = $button_load.offset().top,
              hH = $button_load.outerHeight(),
              wH = $(window).height(),
              wS = $(this).scrollTop()

            if ((
              wS > (
                hT + hH - wH
              )
            ) && $button_load.length) {
              var $pfl_wapper = $button_load.closest('.penci-portfolio')
              self.actionLoadMore($button_load, $pfl_wapper, DataFilter)
            }
          }).trigger('scroll')
        }
      },
      actionLoadMore: function ($button_load, $pfl_wapper, DataFilter) {
        if ($button_load.hasClass('loading-portfolios')) {
          return false
        }

        $button_load.addClass('loading-portfolios')

        var mesNoMore = $button_load.data('mes_no_more'),
          mes = $button_load.data('mes')

        DataFilter.pflShowIds = []

        $button_load.closest('.wrapper-penci-portfolio').
          find('.portfolio-item').
          each(function (t, e) {
            DataFilter.pflShowIds.push($(e).data('pflid'))
          })

        var data = {
          action: 'penci_pfl_more_post_ajax',
          datafilter: DataFilter,
          nonce: ajax_var_more.nonce,
        }
        $.post(ajax_var_more.url, data, function (response) {
          if (!response.data.items) {
            $button_load.find('.ajax-more-text').html(mesNoMore)
            $button_load.removeClass('loading-portfolios')

            $button_load.closest('.wrapper-penci-portfolio').
              find('.penci-portfolio-filter li.active').
              addClass('loadmore-finish')

            setTimeout(function () {
              $button_load.parent().parent().hide()
              $button_load.find('.ajax-more-text').html(mes)
            }, 1200)

            return false
          }

          var $wrap_content = $button_load.closest('.wrapper-penci-portfolio').
              find('.penci-portfolio'),
            $data = $(response.data.items)

          $wrap_content.find('.inner-portfolio-posts').append($data)
          $wrap_content.isotope('appended', $data).imagesLoaded(function () {
            $wrap_content.isotope('layout')
          })

          $('.container').fitVids({ ignore: '.penci-sticky-video' })

          $('a[data-rel^="penci-gallery-image-content"]').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            image: {
              verticalFit: true,
            },
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: false,
              duration: 300,
            },
          })

          $wrap_content.addClass('loaded')

          $('.portfolio-item .inner-item-portfolio').each(function () {
            var $this = $(this)
            $this.one('inview',
              function (event, isInView, visiblePartX, visiblePartY) {
                $this.addClass('animated')
              }) // inview
          }) // each

          $button_load.removeClass('loading-portfolios')
        })
      },
    }

    /* Gallery
 ----------------------------------------------------------------*/
    PENCI.gallery = function () {
      var $justified_gallery = $('.penci-post-gallery-container.justified')
      var $masonry_gallery = $('.penci-post-gallery-container.masonry')
      if ($().justifiedGallery && $justified_gallery.length) {
        $('.penci-post-gallery-container.justified').each(function () {
          var $this = $(this)
          $this.justifiedGallery({
            rowHeight: $this.data('height'),
            lastRow: 'nojustify',
            margins: $this.data('margin'),
            randomize: false,
          })
        }) // each .penci-post-gallery-container
      }

      if ($().isotope && $masonry_gallery.length) {

        $('.penci-post-gallery-container.masonry .item-gallery-masonry').
          each(function () {
            var $this = $(this).children()
            if ($this.attr('data-cap') && !$this.hasClass('added-caption')) {
              var $title = $this.attr('data-cap')
              if ($title !== 'undefined') {
                $this.children().
                  append('<div class="caption">' + $title + '</div>')
                $this.addClass('added-caption')
              }

            }
          })
      }

      if ($masonry_gallery.length) {
        $masonry_gallery.each(function () {
          var $this = $(this)
          $this.imagesLoaded(function () {
            // initialize isotope
            $this.isotope({
              itemSelector: '.item-gallery-masonry',
              transitionDuration: '.55s',
              layoutMode: 'masonry',
            })

            $this.addClass('loaded')

            $('.penci-post-gallery-container.masonry .item-gallery-masonry').
              each(function () {
                var $this = $(this)
                $this.one('inview',
                  function (event, isInView, visiblePartX, visiblePartY) {
                    $this.children().addClass('animated')
                  }) // inview
              }) // each
          })
        })
      }
    },

      /* Jarallax
 ----------------------------------------------------------------*/
      PENCI.Jarallax = function () {
        if (!$.fn.jarallax || !$('.penci-jarallax').length) {
          return false
        }
        $('.penci-jarallax').each(function () {
          var $this = $(this),
            $jarallaxArgs = {}

          $this.imagesLoaded({ background: true }, function () {
            jarallax($this, $jarallaxArgs)
          })
        })
      },

      /* Related Popup
 ----------------------------------------------------------------*/
      PENCI.RelatedPopup = function () {
        if ($('.penci-rlt-popup').length) {
          var rltpopup = $('.penci-rlt-popup'),
            rltclose = $('.penci-rlt-popup .penci-close-rltpopup'),
            rltlazy = rltpopup.find('.penci-lazy')

          $('body').on('inview', '.penci-flag-rlt-popup',
            function (event, isInView, visiblePartX, visiblePartY) {
              if (!rltpopup.hasClass('rltpopup-notshow-again') &&
                isInView) {
                rltpopup.addClass('rltpopup-show-up')
                rltclose.on('click', function (e) {
                  e.preventDefault()
                  rltpopup.removeClass('rltpopup-show-up').
                    addClass('rltpopup-notshow-again')
                })
              }
            })
          rltclose.on('click', function (e) {
            e.preventDefault()
            rltpopup.removeClass('rltpopup-show-up').
              addClass('rltpopup-notshow-again')
          })
        }
      },

      PENCI.extraFunction = {
        init: function () {
          this.counterUp()
          this.progressBar()
          this.loginPopup()
          this.recoverPassPopup()
          this.registerPopup()
          this.login()
          this.register()
          this.map()
          if ($('#penci_agreebox').is(':checked')) {
            $('.register-input-checkbox').addClass('checked');
          }
          $('body').on('change', '#penci_agreebox', function () {
              if ($(this).is(':checked')) {
                  $('.register-input-checkbox').addClass('checked');
              } else {
                  $('.register-input-checkbox').removeClass('checked');
              }
          });
        },
        progressBar: function () {
          if ($('.penci-review-process').length) {
            $('.penci-review-process').each(function () {
              var $this = $(this),
                $bar = $this.children(),
                $bar_w = $bar.data('width') * 10
              $this.one('inview',
                function (event, isInView, visiblePartX, visiblePartY) {
                  $bar.animate({ width: $bar_w + '%' }, 1000)
                }) // bind inview
            }) // each
          }

          if ($.fn.easyPieChart && $('.penci-piechart').length) {
            $('.penci-piechart').each(function () {
              var $this = $(this)
              $this.one('inview',
                function (event, isInView, visiblePartX, visiblePartY) {
                  var chart_args = {
                    barColor: $this.data('color'),
                    trackColor: $this.data('trackcolor'),
                    scaleColor: false,
                    lineWidth: $this.data('thickness'),
                    size: $this.data('size'),
                    animate: 1000,
                  }
                  $this.easyPieChart(chart_args)
                }) // bind inview
            }) // each
          }
        },
        counterUp: function () {
          var $counterup = $('.penci-counterup-number')

          if (!$.fn.counterUp || !$counterup.length) {
            return false
          }

          $counterup.each(function () {
            var $this = $(this)

            $this.one('inview',
              function (event, isInView, visiblePartX, visiblePartY) {
                setTimeout(function () {
                  $({ countNum: $this.text() }).animate(
                    {
                      countNum: $this.attr('data-count'),
                    },

                    {
                      duration: 2000,
                      easing: 'linear',
                      step: function () {
                        $this.text(Math.floor(this.countNum))
                      },
                      complete: function () {
                        $this.text(this.countNum)
                      },
                    },
                  )
                }, $this.attr('data-delay'))

              }) // bind inview
          })
        },
        loginPopup: function () {
          var $body = $('body'),
            $loginform = $('#penci-loginpopform'),
            $loginContainer = $loginform.closest('.penci-popup-wrapper')

          if ($loginform.length) {

            $('.penci-login-popup-btn a').magnificPopup({
              type: 'inline',
              midClick: true,
              removalDelay: 600,
              mainClass: 'penci-popup-animation',
            })

            $body.on('click', '.penci-lostpassword-btn', function (e) {
              var $this = $(this),
                $parent = $this.closest('.penci-popup-wrapper')

              $parent.children('.penci-popup-passreset').slideDown('normal')
              $parent.children('.penci-popup-login').slideUp('normal')
              e.preventDefault()
              return false
            })

            $body.on('click', '.penci-register-popup-btn', function (e) {
              var $this = $(this),
                $parent = $this.closest('.penci-popup-wrapper')

              $parent.children('.penci-popup-register').slideDown('normal')
              $parent.children('.penci-popup-login').slideUp('normal')
              e.preventDefault()
              return false
            })

            $body.on('click', '.penci-login-popup-btn', function (e) {
              var $this = $(this),
                $parent = $this.closest('.penci-popup-wrapper')

              $parent.children('.penci-popup-login').slideDown('normal')
              $parent.children('.penci-popup-register').slideUp('normal')
              $parent.children('.penci-popup-passreset').slideUp('normal')

              e.preventDefault()
              return false
            })

            $('#penci_user, #penci_pass').on('focus', function () {
              $(this).removeClass('invalid')
            })

            $loginform.on('submit', function (e) {
              var $this = $(this),
                inputUsername = $this.find('#penci_user'),
                inputPass = $this.find('#penci_pass'),
                valUsername = inputUsername.val(),
                valPass = inputPass.val(),
                nonce = $this.find('.penci_form_nonce').val(),
                gcapcha = $this.find('.g-recaptcha-response')
              if (gcapcha.length) {
                var captcha = gcapcha.val()
              } else {
                var captcha = 'noexists'
              }

              if (inputUsername.length > 0 && valUsername == '') {
                inputUsername.addClass('invalid')
                e.preventDefault()
              }

              if (inputPass.length > 0 && valPass == '') {
                inputPass.addClass('invalid')
                e.preventDefault()
              }

              if (valUsername == '' || valPass == '') {
                return false
              }

              $loginContainer.addClass('ajax-loading')
              $loginContainer.find('.message').slideDown().remove()

              var data = {
                action: 'penci_login_ajax',
                username: valUsername,
                password: valPass,
                captcha: captcha,
                security: nonce,
                remember: $loginContainer.find('#remembermepopup').val(),
              }

              $.post(ajax_var_more.url, data, function (response) {
                $loginContainer.removeClass('ajax-loading')
                $loginContainer.children('.penci-popup-login').
                  append(response.data)
                if (!response.success) {
                  return
                }

                var rdurl = window.location.href,
                  curl = ajax_var_more.redirect_url,
                  urlPattern = /^(https?:\/\/)?([\w-]+\.)*[\w-]+[\.][\w]+(\/.*)?$/

                if (urlPattern.test(curl)) {
                  rdurl = curl
                }

                window.location.href = rdurl + '?singin=true'
              })

              e.preventDefault()
              return false
            })
          }
        },
        recoverPassPopup: function () {
          var $body = $('body'),
            $recoveryform = $('#penci-passreset-popup'),
            $recoveryContainer = $recoveryform.closest(
              '.penci-popup-wrapper')

          if ($recoveryform.length) {

            $('.penci_user_email').on('focus', function () {
              $(this).removeClass('invalid')
            })

            $recoveryform.on('submit', function (e) {
              e.preventDefault()

              var $this = $(this),
                inputUsername = $this.find('.penci_user_email'),
                valUsername = inputUsername.val(),
                nonce = $this.find('.penci_form_nonce').val(),
                gcapcha = $this.find('.g-recaptcha-response')
              if (gcapcha.length) {
                var captcha = gcapcha.val()
              } else {
                var captcha = 'noexists'
              }

              if (inputUsername.length > 0 && valUsername == '') {
                inputUsername.addClass('invalid')

                e.preventDefault()
                return false
              }

              $recoveryContainer.addClass('ajax-loading')
              $recoveryContainer.find('.message').slideDown().remove()

              var data = {
                action: 'penci_resetpass_ajax',
                security: nonce,
                username: valUsername,
                captcha: captcha,
              }

              $.post(ajax_var_more.url, data, function (response) {
                $recoveryContainer.removeClass('ajax-loading')
                $recoveryContainer.children('.penci-popup-passreset').
                  append(response.data)

                return
              })

              event.preventDefault()
              return false
            })
          }
        },
        registerPopup: function () {
          var $body = $('body'),
            $registerform = $('#penci-register-popup'),
            $registerContainer = $registerform.closest(
              '.penci-popup-wrapper')

          if ($registerform.length) {

            var $allInput = $(
              '.penci_user_name,.penci_user_email,.penci_user_pass,.penci_user_pass_confirm')
            $allInput.on('focus', function () {
              $(this).removeClass('invalid')
            })

            $registerform.on('submit', function (e) {
              e.preventDefault()

              var $this = $(this),
                inputUsername = $this.find('.penci_user_name'),
                inputEmail = $this.find('.penci_user_email'),
                $inputPass = $this.find('.penci_user_pass'),
                inputPhone = $this.find('.penci_user_phone'),
                $inputPassConfirm = $this.find('.penci_user_pass_confirm'),
                valUsername = inputUsername.val(),
                valEmail = inputEmail.val(),
                valPass = $inputPass.val(),
                valPhone = inputPhone.val(),
                valPassConfirm = $inputPassConfirm.val(),
                nonce = $this.find('.penci_form_nonce').val(),
                gcapcha = $this.find('.g-recaptcha-response')
              if (gcapcha.length) {
                var captcha = gcapcha.val()
              } else {
                var captcha = 'noexists'
              }

              $allInput.removeClass('invalid')

              if (inputUsername.length > 0 && valUsername == '') {
                inputUsername.addClass('invalid')
                event.preventDefault()
              }
              
              if (inputPhone.length > 0 && valPhone == '') {
                inputPhone.addClass('invalid')
                event.preventDefault()
              }

              if (inputEmail.length > 0 && valEmail == '') {
                inputEmail.addClass('invalid')
                event.preventDefault()
              }

              if ($inputPass.length > 0 && valPass == '') {
                $inputPass.addClass('invalid')
                event.preventDefault()
              }

              if ($inputPassConfirm.length > 0 && valPassConfirm == '') {
                $inputPassConfirm.addClass('invalid')
                event.preventDefault()
              }
              if (valUsername == '' || valEmail == '' || valPass == '' ||
                valPassConfirm == '') {
                return false
              }

              $registerContainer.find('.message').slideDown().remove()

              // Password does not match the confirm password
              if (valPassConfirm !== valPass) {
                $inputPass.addClass('invalid')
                $inputPassConfirm.addClass('invalid')
                $registerContainer.children('.penci-popup-register').
                  append(ajax_var_more.errorPass)
                event.preventDefault()

                return false
              }
              $registerContainer.addClass('ajax-loading')

              var data = {
                action: 'penci_register_ajax',
                fistName: $this.find('.penci_first_name').val(),
                lastName: $this.find('.penci_last_name').val(),
                username: valUsername,
                password: valPass,
                phone: valPhone,
                confirmPass: valPassConfirm,
                email: valEmail,
                security: nonce,
                captcha: captcha,
              }

              $.post(ajax_var_more.url, data, function (response) {
                $registerContainer.removeClass('ajax-loading')
                $registerContainer.children('.penci-popup-register').
                  append(response.data)
                if (!response.success) {
                  return
                }
                window.location.href = window.location.href + '?singin=true'
              })

              event.preventDefault()
              return false
            })

          }
        },
        login: function () {
          var $body = $('body'),
            $loginform = $('.penci-loginform'),
            $loginContainer = $loginform.parent('.penci-login-wrap')

          if ($loginform.length) {
            $body.on('click', '.penci-user-register', function (e) {
              e.preventDefault()

              var $this = $(this),
                $parent = $this.closest('.penci-login-register')

              $parent.find('.penci-login-wrap').addClass('hidden')
              $parent.find('.penci-register-wrap').removeClass('hidden')
            })

            $('#penci-user-login,#penci-user-pass').on('focus', function () {
              $(this).removeClass('invalid')
            })

            $('.penci-loginform').each(function () {
              $(this).on('submit', function (e) {
                var $this = $(this),
                  $loginContainer = $this.parent('.penci-login-wrap'),
                  inputUsername = $this.find('#penci-user-login'),
                  inputPass = $this.find('#penci-user-pass'),
                  valUsername = inputUsername.val(),
                  valPass = inputPass.val(),
                  nonce = $this.find('.penci_form_nonce').val(),
                  gcapcha = $this.find('.g-recaptcha-response')
                if (gcapcha.length) {
                  var captcha = gcapcha.val()
                } else {
                  var captcha = 'noexists'
                }

                if (inputUsername.length > 0 && valUsername == '') {
                  inputUsername.addClass('invalid')
                  e.preventDefault()
                }

                if (inputPass.length > 0 && valPass == '') {
                  inputPass.addClass('invalid')
                  e.preventDefault()
                }

                if (valUsername == '' || valPass == '') {
                  return false
                }

                $loginContainer.parent().addClass('ajax-loading')
                $loginContainer.find('.message').slideDown().remove()

                var data = {
                  action: 'penci_login_ajax',
                  username: valUsername,
                  password: valPass,
                  captcha: captcha,
                  security: nonce,
                  remember: $loginContainer.find('#rememberme').val(),
                }

                $.post(ajax_var_more.url, data, function (response) {
                  $loginContainer.parent().removeClass('ajax-loading')
                  $loginContainer.append(response.data)
                  if (!response.success) {
                    return
                  }

                  window.location.href = window.location.href + '?singin=true'
                })

                e.preventDefault()
                return false
              })
            })
          }
        },
        register: function () {
          var $body = $('body'),
            $registerform = $('#penci-registration-form'),
            $registerContainer = $registerform.closest(
              '.penci-register-wrap')

          if (!$registerform.length) {
            return false
          }

          $body.on('click', '.penci-user-login-here', function (e) {
            e.preventDefault()

            var $this = $(this),
              $parent = $this.closest('.penci-login-register')

            $parent.find('.penci-login-wrap').removeClass('hidden')
            $parent.find('.penci-register-wrap').addClass('hidden')

            return false
          })

          var $allInput = $(
            '.penci_user_name,.penci_user_email,.penci_user_pass,.penci_user_pass_confirm')
          $allInput.on('focus', function () {
            $(this).removeClass('invalid')
          })

          $('.penci-registration-form').each(function () {
            $(this).on('submit', function (e) {
              e.preventDefault()

              var $this = $(this),
                $registerContainer = $this.closest('.penci-register-wrap'),
                inputUsername = $this.find('.penci_user_name'),
                inputEmail = $this.find('.penci_user_email'),
                $inputPass = $this.find('.penci_user_pass'),
                $inputPassConfirm = $this.find('.penci_user_pass_confirm'),
                valUsername = inputUsername.val(),
                valEmail = inputEmail.val(),
                valPass = $inputPass.val(),
                valPassConfirm = $inputPassConfirm.val(),
                inputPhone = $this.find('.penci_user_phone'),
                valPhone = inputPhone.val(),
                nonce = $this.find('.penci_form_nonce').val(),
                gcapcha = $this.find('.g-recaptcha-response')
              if (gcapcha.length) {
                var captcha = gcapcha.val()
              } else {
                var captcha = 'noexists'
              }

              $allInput.removeClass('invalid')

              if (inputUsername.length > 0 && valUsername == '') {
                inputUsername.addClass('invalid')
                event.preventDefault()
              }

              if (inputPhone.length > 0 && valPhone == '') {
                  inputPhone.addClass('invalid')
                  event.preventDefault()
              }

              if (inputEmail.length > 0 && valEmail == '') {
                inputEmail.addClass('invalid')
                event.preventDefault()
              }

              if ($inputPass.length > 0 && valPass == '') {
                $inputPass.addClass('invalid')
                event.preventDefault()
              }

              if ($inputPassConfirm.length > 0 && valPassConfirm == '') {
                $inputPassConfirm.addClass('invalid')
                event.preventDefault()
              }
              if (valUsername == '' || valEmail == '' || valPass == '' ||
                valPassConfirm == '') {
                return false
              }

              $registerContainer.find('.message').slideDown().remove()

              // Password does not match the confirm password
              if (valPassConfirm !== valPass) {
                $inputPass.addClass('invalid')
                $inputPassConfirm.addClass('invalid')
                $registerContainer.append(ajax_var_more.errorPass)
                event.preventDefault()

                return false
              }
              $registerContainer.parent().addClass('ajax-loading')

              var data = {
                action: 'penci_register_ajax',
                fistName: $this.find('.penci_first_name').val(),
                lastName: $this.find('.penci_last_name').val(),
                username: valUsername,
                password: valPass,
                confirmPass: valPassConfirm,
                email: valEmail,
                phone: valPhone,
                security: nonce,
                captcha: captcha,
              }

              $.post(ajax_var_more.url, data, function (response) {
                $registerContainer.parent().removeClass('ajax-loading')
                $registerContainer.append(response.data)
                if (!response.success) {
                  return
                }
                window.location.href = window.location.href + '?singin=true'
              })

              event.preventDefault()
              return false
            })
          })
        },
        map: function () {
          if (!$('.penci-google-map').length) {
            return false
          }
          $('.penci-google-map').each(function () {

            var map = $(this),
              Option = map.data('map_options'),
              mapID = map.attr('id')

            var mapTypePre = google.maps.MapTypeId.ROADMAP
            switch (Option.map_type) {
              case'satellite':
                mapTypePre = google.maps.MapTypeId.SATELLITE
                break
              case'hybrid':
                mapTypePre = google.maps.MapTypeId.HYBRID
                break
              case'terrain':
                mapTypePre = google.maps.MapTypeId.TERRAIN
            }
            var latLng = new google.maps.LatLng(-34.397, 150.644)
            var map = new google.maps.Map(document.getElementById(mapID), {
              zoom: parseInt(Option.map_zoom),
              center: latLng,
              mapTypeId: mapTypePre,
              panControl: Option.map_pan,
              zoomControl: Option.map_is_zoom,
              mapTypeControl: true,
              scaleControl: Option.map_scale,
              streetViewControl: Option.map_street_view,
              rotateControl: Option.map_rotate,
              overviewMapControl: Option.map_overview,
              scrollwheel: Option.map_scrollwheel,
            })
            var marker = new google.maps.Marker({
              position: latLng,
              map: map,
              title: Option.marker_title,
              icon: Option.marker_img,
            })

            if (Option.info_window) {
              var infoWindow = new google.maps.InfoWindow({
                content: Option.info_window,
              })

              google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker)
              })
            }

            if ('coordinates' == Option.map_using && Option.latitude &&
              Option.longtitude) {
              latLng = new google.maps.LatLng(Option.latitude,
                Option.longtitude)
              map.setCenter(latLng)
              marker.setPosition(latLng)
            } else {
              var geocoder = new google.maps.Geocoder()
              geocoder.geocode({
                address: Option.address,
              }, function (results) {
                var loc = results[0].geometry.location
                latLng = new google.maps.LatLng(loc.lat(), loc.lng())
                map.setCenter(latLng)
                marker.setPosition(latLng)
              })
            }
          })
        },
      },

      PENCI.VideosList = {
        // Init the module
        init: function () {
          PENCI.VideosList.play()
        },
        play: function () {
          if (!$('.penci-video_playlist').length) {
            return false
          }
          $('.penci-video_playlist').each(function (idx, item) {
            var $blockVideo = $(this),
              $VideoF = $blockVideo.find('.penci-video-frame')

            var $height = $blockVideo.find('.penci-video-nav').height(),
              $heightTitle = $blockVideo.find(
                '.penci-video-nav .penci-playlist-title').height()

            $blockVideo.find('.penci-video-playlist-nav').
              css('height', $height - $heightTitle)
            // Init
            $VideoF.video()
            PENCI.VideosList.updateStatus($blockVideo)

            // Show First video and remove the loader icon
            $VideoF.addVideoEvent('ready', function () {
              $VideoF.css('visibility', 'visible').fadeIn()
              $blockVideo.find('.loader-overlay').remove()
            })
            // Play videos
            $blockVideo.on('click', '.penci-video-playlist-item', function () {
              var $thisVideo = $(this),
                frameID = $thisVideo.data('name'),
                $thisFrame = $('#' + frameID),
                videoSrc = $thisVideo.data('src'),
                videoNum = $thisVideo.find('.penci-video-number').text()

              if ($thisVideo.hasClass('is-playing')) {
                $thisFrame.pauseVideo()
                return
              }

              // Update the number of the playing video in the title section
              $blockVideo.find('.penci-video-playing').text(videoNum)

              // Pause all Videos
              $blockVideo.find('.penci-video-frame').each(function () {
                $(this).pauseVideo().hide()
              })

              // If the iframe not loaded before, add it
              if (!$thisFrame.length) {
                // Add the loader icon
                $blockVideo.find('.fluid-width-video-wrapper').prepend('')

                $blockVideo.find('.fluid-width-video-wrapper').
                  append('<iframe class="penci-video-frame" id="' + frameID +
                    '" src="' + videoSrc +
                    '" frameborder="0" width="100%"" height="434" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                $thisFrame = $('#' + frameID)

                $thisFrame.video() // reinit

                $thisFrame.addVideoEvent('ready',
                  function (e, $thisFrame, video_type) {
                    $thisFrame.playVideo()
                    $blockVideo.find('.loader-overlay').remove()
                  })
              } else {
                $thisFrame.playVideo()
              }

              $thisFrame.css('visibility', 'visible').fadeIn()

              PENCI.VideosList.updateStatus($blockVideo)

            })
          })
        },
        updateStatus: function ($blockVideo) {
          $blockVideo.find('.penci-video-frame').each(function () {
            var $this = $(this),
              $videoItem = $('[data-name=\'' + $this.attr('id') + '\']')

            $this.addVideoEvent('play', function () {
              $videoItem.removeClass('is-paused').addClass('is-playing')
            })

            $this.addVideoEvent('pause', function () {
              $videoItem.removeClass('is-playing').addClass('is-paused')
            })

            $this.addVideoEvent('finish', function () {
              $videoItem.removeClass('is-paused is-playing')
            })
          })
        },
      },

      PENCI.JumtoRecipe = function () {

        $('.penci-jump-recipe').on('click', function (e) {
          e.preventDefault()
          var $closetMain = $(this).closest('.penci-single-block'),
            id = $(this).attr('href'),
            $firstRecipe = $closetMain.find(id).first()
          if ($firstRecipe.length) {
            var $scroll_top = $firstRecipe.offset().top,
              $nav_height = 30
            if ($('#navigation').length) {
              $nav_height = $('#navigation').height() + 30
            } else if ($('.pc-wrapbuilder-header').length) {
              if (window.matchMedia('(max-width: 960px)').matches) {
                var headermobile = $('.penci_navbar_mobile')
                if (!headermobile.hasClass('hide-scroll-down')) {
                  $nav_height = headermobile.height() + 30
                }
              } else {
                var headerdesktop = $('.penci_builder_sticky_header_desktop')
                if (headerdesktop.length &&
                  !headerdesktop.hasClass('hide-scroll-down')) {
                  $nav_height = headerdesktop.height() + 30
                }
              }
            }
            if ($('body').hasClass('admin-bar')) {
              $nav_height = $nav_height + 32
            }
            var $scroll_to = $scroll_top - $nav_height
            $('html,body').animate({
              scrollTop: $scroll_to,
            }, 'fast')
          }
        })
      },

      PENCI.DelayedContent = function () {
        $(document).on('mousemove scroll click', function(event) {
          $('.pc-content-delayed').each( function(e) {
            var t = $(this),
                d = t.attr('data-type') ? t.attr('data-type') : '',
                u = t.attr('data-url') ? t.attr('data-url') : '',
                c = t.attr('data-class') ? t.attr('data-class') : '',
                id = t.attr('data-id') ? t.attr('data-id') : '',
                s = t.attr('data-settings') ? t.attr('data-settings') : '',
                save_name = ('pcdelayed_' + d + id + c).toLowerCase();

            if ( ! t.hasClass('loaded') ) {
              t.addClass('loaded')
              if ( localStorage.getItem( save_name ) ) {
                t.after( localStorage.getItem( save_name ) )
                t.remove()
              } else {

                if ( u ) {
                  $.ajax({
                    type: "GET",
                    url: u,
                    success: function (response) {
                      t.after( response )
                      t.remove()
                      localStorage.setItem( save_name, response );
                    }
                  })
                } else {
                  $.ajax({
                    type: "POST",
                    dataType: 'JSON',
                    url: ajax_var_more.url,
                    data: {
                      type: d,
                      class: c,
                      id: id,
                      settings: s,
                      action: 'penci_delayed_div_content',
                    },
                    success: function (response) {
                      t.after( response.data.html )
                      t.remove()
                      localStorage.setItem( save_name, response.data.html );
                    }
                  })
                }
              }
              
            }

            $(document).trigger('penci-mega-loaded')
            
          })
        })
      },

      /* Smart Lists
    ---------------------------------------------------------------*/
      PENCI.SmartLists = function () {
        $('.pcsml-dropdown').each(function () {
          var select = $(this)
          select.on('change', function () {
            var url = this.value,
              curl = window.location.href

            if (url != curl && url !== undefined) {
              window.location.href = url
            }
          })
        })
      },

      PENCI.Single_Loadmore = function () {
        var $wrapper_loadmore = $('.penci-single-infiscroll')
        if ($wrapper_loadmore.length) {
          var adsHTML = $wrapper_loadmore.data('infiads')
          $(window).on('scroll', $.debounce(250, function () {
            var $lastArticle = $wrapper_loadmore.find('.penci-single-block').
                last(),
              $windowScroll = $(window).scrollTop(),
              $lastArticleTop = $lastArticle.offset().top,
              $dataURL = $lastArticle.data('prev-url')

            if ($lastArticle.hasClass('penci-single-infiblock-end')) {
              $('.penci-ldsingle').remove()
            }

            if ((
                $windowScroll > $lastArticleTop
              ) &&
              (
                typeof $dataURL !== 'undefined'
              ) && (
                typeof $dataURL !== ''
              ) &&
              !$lastArticle.hasClass('penci-single-infiblock-end')) {
              if (!$wrapper_loadmore.hasClass('penci-disable-sendajax')) {
                $wrapper_loadmore.addClass('penci-disable-sendajax')
                $.ajax({
                  url: $dataURL,
                  type: 'GET',
                  dataType: 'html',
                  success: function (result) {
                    var resultBlock = $(
                      $(result).find('.penci-single-wrapper').html()).
                      css('opacity', 0).
                      animate({ 'opacity': 1 }, 300)
                    if ((
                        typeof adsHTML !== 'undefined'
                      ) &&
                      (
                        typeof adsHTML !== ''
                      )) {
                      $wrapper_loadmore.append(adsHTML)
                    }
                    $wrapper_loadmore.append(resultBlock)
                    if (resultBlock.find('.penci_facebook_widget').length) {
                      try {
                        FB.XFBML.parse()
                      } catch (ex) {
                      }
                    }
                    $wrapper_loadmore.removeClass('penci-disable-sendajax')

                    PENCI.featured_slider()
                    PENCI.owl_slider()
                    PENCI.fitvids()
                    PENCI.sticky_sidebar()
                    PENCI.lightbox()
                    PENCI.masonry()
                    PENCI.portfolio()
                    PENCI.AjaxPortfolio()
                    PENCI.gallery()
                    PENCI.Jarallax()
                    PENCI.extraFunction.init()
                    PENCI.VideosList.init()
                    PENCI.JumtoRecipe()
                    PENCI.shareexpand()
                    PENCI.videofloat()

                    var $review_process = $('.penci-review-process'),
                      $review_piechart = $('.penci-piechart')
                    if ($review_process.length) {
                      $('.penci-review-process').each(function () {
                        var $this = $(this),
                          $bar = $this.children(),
                          $bar_w = $bar.data('width') * 10
                        $this.one('inview',
                          function (event, isInView, visiblePartX,
                            visiblePartY,
                          ) {
                            $bar.animate({ width: $bar_w + '%' }, 1000)
                          }) // bind inview
                      }) // each
                    }

                    if ($review_piechart.length) {
                      $('.penci-piechart').each(function () {
                        var $this = $(this)
                        $this.one('inview',
                          function (event, isInView, visiblePartX,
                            visiblePartY,
                          ) {
                            var chart_args = {
                              barColor: $this.data('color'),
                              trackColor: $this.data('trackcolor'),
                              scaleColor: false,
                              lineWidth: $this.data('thickness'),
                              size: $this.data('size'),
                              animate: 1000,
                            }
                            $this.easyPieChart(chart_args)
                          }) // bind inview
                      }) // each
                    }
                    $('body').trigger('single_loaded_more')
                  },
                })
              }
            }
          }))

          $(window).bind('scroll touchstart', function () {
            // UPdate permalink
            var scrollTop = $(this).scrollTop()
            var firstPost = $('.penci-single-block')
            window.setTimeout(function () {
              var preScrollTop = scrollTop + 60
              var postsContainer = $('.penci-single-block')
              var locationHref = window.location.href

              var currentP = postsContainer.map(function () {
                if ($(this).offset().top < preScrollTop) {
                  return this
                }
              })

              currentP = currentP[currentP.length - 1]
              var pid = $(currentP).data('postid'),
                plink = $(currentP).data('current-url'),
                ptitle = $(currentP).data('post-title'),
                pedit = $(currentP).data('edit-post')

              if (typeof pid === 'undefined' || typeof pid === '') {
                pid = firstPost.data('postid')
                plink = firstPost.data('current-url')
                ptitle = firstPost.data('post-title')
                pedit = firstPost.data('edit-post')
              }

              if (locationHref !== plink) {
                window.history.pushState({ 'pageTitle': ptitle }, '', plink)
                if ($('#wpadminbar').length) {
                  $('#wp-admin-bar-edit a').attr('href', pedit)
                }
                if ($('title').length) {
                  $('title').each(function () {
                    $(this).text(ptitle)
                  })
                }

                if (typeof _gaq !== 'undefined' && _gaq !== null) {
                  _gaq.push(['_trackPageview', plink])
                }

                if (typeof ga !== 'undefined' && ga !== null) {
                  ga('send', 'pageview', plink)
                }
              }

            }, 100)
          })
        }
      }

    /* Init functions
 ---------------------------------------------------------------*/
    $(document).ready(function () {
      PENCI.general()
      PENCI.rdatetime()
      PENCI.cookie()
      PENCI.main_sticky()
      PENCI.featured_slider()
      PENCI.slick_slider()
      PENCI.owl_slider()
      PENCI.fitvids()
      PENCI.sticky_sidebar()
      PENCI.mega_menu()
      PENCI.mobile_menu()
      PENCI.toggleMenuHumburger()
      PENCI.ElementorHumburger()
      PENCI.lightbox()
      PENCI.masonry()
      PENCI.video_background()
      PENCI.portfolio()
      PENCI.AjaxPortfolio()
      PENCI.gallery()
      PENCI.Jarallax()
      PENCI.RelatedPopup()
      PENCI.extraFunction.init()
      PENCI.VideosList.init()
      PENCI.JumtoRecipe()
      PENCI.Single_Loadmore()
      PENCI.fontsizeChanger()
      setTimeout(function () {
        PENCI.shareexpand()
        PENCI.fontsizeChanger()
      }, 100)
      PENCI.categories_lists()
      PENCI.blockheadinglist()
      PENCI.SmartLists()
      PENCI.videofloat()
      PENCI.DelayedContent()
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        PENCI.mobile_ajax_menu()
      }
      $('body').on('penci-ajax-menu-loaded', function(){
        PENCI.mega_menu()
      })
      $('body').on('penci-block-heading', function () {
        PENCI.blockheadinglist()
      }).on('penci-image-gallery', function () {
        PENCI.slick_slider()
      })
      $('body').on('el_featured_slider', function () {
        PENCI.slick_slider()
        PENCI.featured_slider()
        PENCI.owl_slider()
      })
      $('body').on('slider-load', function () {
        PENCI.owl_slider()
      })
      $('body').on('penci_swiper_sliders', function () {
        PENCI.owl_slider()
        PENCI.slick_slider()
      })
      $(document).on('pajax-tab-loaded', function () {
        PENCI.owl_slider()
      })
      $(window).on('resize', function () {
        PENCI.sticky_sidebar()
        PENCI.blockheadinglist()
        PENCI.fontsizeChanger()
        PENCI.videofloat()
        PENCI.mobile_ajax_menu()
        setTimeout(function () {
          PENCI.shareexpand()
        }, 100)
      })
      $(window).on('scroll', function () {
        PENCI.fontsizeChanger()
      })
      $(document).on('penci-mega-loaded', function () {
        PENCI.featured_slider()
        PENCI.owl_slider()
        PENCI.fitvids()
        PENCI.lightbox()
        PENCI.masonry()
        PENCI.portfolio()
        PENCI.AjaxPortfolio()
        PENCI.gallery()
        PENCI.extraFunction.init()
        PENCI.VideosList.init()
      })
    })
  }
)(jQuery)	// EOF

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/post-like.js?ver=8.6.5.1 */
jQuery( document ).ready( function ($) {
	jQuery( 'body' ).on( 'click', '.penci-post-like', function ( event ) {
		event.preventDefault();
		var $this = jQuery( this ),
			post_id = $this.data( "post_id" ),
			like_text = $this.data( "like" ),
			unlike_text = $this.data( "unlike" ),
			$selector = $this.children('.dt-share' );
			if( $this.hasClass( 'single-like-button' ) ) {
				$selector = $this.parent().find('.count-number-like');
			}
		var	$like = parseInt( $selector.text() );

		if ( $this.hasClass( 'single-like-button' ) ) {
			$selector = $( '.post-share-plike .count-number-like' );
			$this = $( '.single-like-button' );
		}

		if ( $this.hasClass( 'liked' ) ) {
			$this.removeClass( 'liked' );
			$this.prop( 'title', 'Like' );
			$selector.html( ( $like - 1 ) );
		}
		else {
			$this.addClass( 'liked' );
			$this.prop( 'title', 'Unlike' );
			$selector.html( ( $like + 1 ) );
		}

		jQuery.ajax( {
			type: "post",
			url : ajax_var.url,
			data: "action=penci-post-like&nonce=" + ajax_var.nonce + "&penci_post_like=&post_id=" + post_id
		} );
	} );
} );

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-includes/js/comment-reply.min.js?ver=6.1.1 */
/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/inview.js?ver=8.6.5.1 */
(function(e){function m(){var b=window.innerHeight;if(b)return b;var f=document.compatMode;if(f||!e.support.boxModel)b="CSS1Compat"===f?document.documentElement.clientHeight:document.body.clientHeight;return b}var n=function(b,f){function e(){null!==a?c=!0:(c=!1,b(),a=setTimeout(function(){a=null;c&&e()},f))}var c=!1,a=null;return e}(function(){var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=b+m(),g=[];e.each(e.cache,function(){this.events&&this.events.inview&&
g.push(this.handle.elem)});e(g).each(function(){var c=e(this),a;a=0;for(var d=this;d;d=d.offsetParent)a+=d.offsetTop;var d=c.height(),k=a+d,d=c.data("inview")||!1,h=c.data("offset")||0,g=a>b&&k<f,l=k+h>b&&a<b,h=a-h<f&&k>f;g||l||h||a<b&&k>f?(a=h?"top":l?"bottom":"both",d&&d===a||(c.data("inview",a),c.trigger("inview",[!0,a]))):!g&&d&&(c.data("inview",!1),c.trigger("inview",[!1]))})},100);e(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview",n)})(jQuery);

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/sticky_share.js?ver=8.6.5.1 */
(function($) {
  'use strict';
  var PENCI = PENCI || {};
  /* Single Post Scroll
 ---------------------------------------------------------------*/
  PENCI.singlepostscrollin_share = function() {
    
    $('.penci-single-block').bind('inview', function (event, visible, topOrBottomOrBoth) {
      var t = $(this);
      if (visible == true) {
        t.addClass('inview');
      } else {
        t.removeClass('inview');
      }
    });
    
  };
  
  $(document).ready(function() {
    PENCI.singlepostscrollin_share();
    $('body').on('single_loaded_more', function() {
      PENCI.singlepostscrollin_share();
    });
  });
})(jQuery); // EOF
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/mc4wp-form.js?ver=8.6.5.1 */
jQuery(document).ready(function ($) {
  $(document).on('submit','.mc4wp-form',function (e){
    e.preventDefault();

    var form = $(this),
        formData = form.serialize();

    form.addClass('loading');

    // Send the AJAX request
    $.ajax({
      url: form.attr('action'),
      type: 'POST',
      data: formData,
      success: function(data) {
        var $html = $(data),
          $message = $html.find('.mc4wp-response').html();
          $('body').append('<div class="penciwp-notice-form"><div class="penciwp-notice-form-inner"><a class="pcwp-close-btn"></a>'+$message+'</div></div>');
      },
      error: function(xhr, status, error) {
        // Handle any errors
        console.error('Error:', error);
        alert('There was an error with the submission.');
      },
      complete: function (){
        form.removeClass('loading');
      }
    });
  });
  $(document).on('click','.pcwp-close-btn',function (e){
    e.preventDefault();
    $('.penciwp-notice-form').remove();
  });
});
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/inc/builder/assets/js/penci-header-builder.js?ver=8.6.5.1 */
(function ($) {
    "use strict";
    var PENCI = PENCI || {};
    PENCI.sticky_header = function () {
        var headersticky = $(".penci_header.penci_builder_sticky_header_desktop"),
            headertop = $(".penci_header.penci-header-builder.main-builder-header"),
            headernormal = headertop.outerHeight() + 20,
            headermobile = $(".penci_navbar_mobile"),
            lastScrollTop = 0;

        $(window).on("scroll", function () {
            var st = $(this).scrollTop();

            if (st > headernormal) {
                if (headersticky.length) {
                    headersticky.addClass("sticky-apply");
                    headertop.addClass("ns-apply");
                }
            } else {
                if (headersticky.length) {
                    headersticky.removeClass("sticky-apply");
                    headertop.removeClass("ns-apply");
                }
            }

            if (st > headermobile.outerHeight()) {
                headermobile.addClass("mobile-sticky");
            } else {
                headermobile.removeClass("mobile-sticky");
            }

            if (st > lastScrollTop) {
                headersticky.addClass("scrolldown").removeClass("scrollup");
                headermobile.addClass("scrolldown").removeClass("scrollup");
            } else {
                headersticky.addClass("scrollup").removeClass("scrolldown");
                headermobile.addClass("scrollup").removeClass("scrolldown");
            }
            lastScrollTop = st;
        });
    };

    PENCI.main_menu = function () {
        $(".navigation ul.menu > li.penci-mega-menu").on("mouseenter", function () {
            var $this = $(this),
                $row_active = $this.find(".row-active"),
                $rowsLazy = $row_active.find(".penci-lazy");
            $row_active.fadeIn("200").css("display", "inline-block");
        });

        $(".navigation .penci-mega-child-categories a").on(
            "mouseenter",
            function () {
                if ($(this).hasClass("mega-normal-child")) {
                    return;
                }
                if (!$(this).hasClass("cat-active")) {
                    var $this = $(this),
                        $row_active = $this.data("id"),
                        $parentA = $this.parent().children("a"),
                        $parent = $this.closest(".penci-megamenu"),
                        $rows = $this
                            .closest(".penci-megamenu")
                            .find(".penci-mega-latest-posts")
                            .children(".penci-mega-row");
                    $parentA.removeClass("cat-active");
                    $this.addClass("cat-active");
                    $rows.hide();
                    $rows.removeClass("row-active");
                    $parent
                        .find("." + $row_active)
                        .fadeIn("300")
                        .css("display", "inline-block")
                        .addClass("row-active");
                }
            }
        );
    };

    PENCI.mobile_menu = function () {
        // Add indicator

        // Toggle menu when click show/hide menu
        $(".navigation .button-menu-mobile").on("click", function () {
            $("body").addClass("open-mobile-builder-sidebar-nav");
        });

        $(
            ".pc-builder-element nav.penci-vernav-cparent li.menu-item-has-children > a"
        ).on("click", function (e) {
            var $this = $(this);
            e.preventDefault();
            $this.children().children().toggleClass("fa-angle-up");
            $this.next().slideToggle("fast");
        });

        // Close sidebar nav
        $("#close-sidebar-nav").on("click", function () {
            $("body").removeClass("open-sidebar-nav");
        });

        $(".close-mobile-menu-builder").on("click", function (e) {
            e.preventDefault();
            $("body").removeClass("open-mobile-builder-sidebar-nav");
        });
    };
    /* Init functions
       ---------------------------------------------------------------*/
    $(document).ready(function () {
        PENCI.sticky_header();
        PENCI.mobile_menu();
        PENCI.main_menu();
        $("body").on("penci-ajax-menu-loaded", function () {
            PENCI.main_menu();
        });
    });
})(jQuery); // EOF

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/widgets-ajax.js?ver=8.6.5.1 */
(function ($) {
    "use strict";
    var PENCI = PENCI || {};
    PENCI.ajaxwidgets = function () {
        $(document).on('click', '.widget .penci-wgajx-btn', function (e) {
            e.preventDefault();
            var t = $(this),
                wrapper = t.closest('.widget').find('ul'),
                navwrapper = t.closest('.penci-pagination'),
                settings = wrapper.attr('data-settings'),
                mes = wrapper.attr('data-mes'),
                action = wrapper.data('action'),
                id = parseInt(wrapper.data('id')),
                max = parseInt(wrapper.data('max')),
                nav = t.hasClass('pcajx-btn'),
                paged = parseInt(wrapper.attr('data-paged')),
                type = wrapper.attr('data-type'),
                get_paged = paged + 1;

            if (t.hasClass('disable')) {
                return;
            }

            if (t.hasClass('pc-tabsajax-btn')) {
                wrapper = t.closest('.tab-content-wrapper').find('ul');
                settings = wrapper.attr('data-settings');
                type = wrapper.attr('data-type');
                mes = wrapper.attr('data-mes');
                paged = parseInt(wrapper.attr('data-paged'));
                max = parseInt(wrapper.data('max'));
                action = wrapper.data('action');
                get_paged = paged + 1;
            }

            if (nav && t.hasClass('prev')) {
                get_paged = paged - 1;
            }

            t.addClass('loading-posts');
            wrapper.closest(".widget").addClass('ajx-loading');

            $.ajax({
                type: "POST",
                dataType: "html",
                url: penci_widgets_ajax.url,
                data: {
                    action: action,
                    settings: settings,
                    id: id ? id : '',
                    type: type ? type : '',
                    paged: get_paged,
                    nonce: penci_widgets_ajax.nonce,
                },
                success: function (data) {

                    if (data) {

                        if (nav && get_paged >= max) {
                            navwrapper.find('.pcajx-btn.next').addClass('disable');
                        } else {
                            navwrapper.find('.pcajx-btn.next').removeClass('disable');
                        }

                        if (nav && get_paged > 1) {
                            navwrapper.find('.pcajx-btn.prev').removeClass('disable');
                        } else {
                            navwrapper.find('.pcajx-btn.prev').addClass('disable');
                        }

                        var datajs = $(data);

                        if (nav) {
                            wrapper.empty();
                        }

                        wrapper.append(datajs.html());

                        wrapper.attr('data-paged', get_paged);

                    } else {

                        t.find(".ajax-more-text").text(mes);
                        t.find("i").remove();
                        setTimeout(function () {
                            t.closest('.penci-pagination').remove();
                        }, 1200);
                    }
                    t.removeClass('loading-posts');
                    wrapper.closest(".widget").removeClass('ajx-loading');
                }
            });
        });
    };

    $(document).ready(function () {
        PENCI.ajaxwidgets();
    });
})(jQuery);
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/themes/soledad/js/ajax-filter-slist.js?ver=8.6.5.1 */
jQuery(document).ready(function ($) {
    function penciGetsListData() {
        var nav = [];
        $('.elementor-widget-penci-small-list').each(function () {
            var elID = $(this).data('id');
            if ($(this).find('.pcflx-nav').length > 0) {
                var maxnum = $(this).find('.pcflx li.all a').attr('data-maxp');
                if (parseInt(maxnum) <= 1) {
                    $(this).find('.pcflx-nav .pcaj-nav-link').addClass('disable');
                }
            }
            if($(this).find('.penci-ajax-more').length) {
                nav[elID] = $(this).find('.penci-ajax-more').prop('outerHTML');
            }
        });

        jQuery('body').on('click', '.penci-wrapper-smalllist .pc-ajaxfil-link', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('loading-posts')) {
                var $this = $(this),
                    parentID = $(this).closest('.elementor-widget-penci-small-list').data('id'),
                    $navthis = $this,
                    wrapId = $this.data('id') ? $this.data('id') : 'default',
                    parentclass = $(this).closest('.pcnav-lgroup'),
                    wrapper = $(this).closest('.penci-wrapper-smalllist').find('.penci-smalllist-wrapper'),
                    tag = $this.data('tag'),
                    cat = $this.data('cat'),
                    author = $this.data('author'),
                    navlink = false,
                    prev,
                    pagednum = parseInt($this.attr('data-paged')),
                    curpaged = pagednum,
                    $wrap_content_id = wrapper.find('.pwsl-id-' + wrapId);

                var OBjBlockData = penciGetOBjBlockData(parentclass.data('blockid')),
                    dataFilter = OBjBlockData.atts_json ? JSON.parse(OBjBlockData.atts_json) : OBjBlockData.atts_json;

                wrapper.addClass('loading-posts pcftaj-ld');
                $this.addClass('loading-posts');

                if ($this.hasClass('pcaj-nav-link')) {
                    navlink = true;
                }

                if (navlink && $this.hasClass('prev')) {
                    prev = true;
                }

                if (navlink) {
                    $this = parentclass.find('.current-item');
                    wrapId = $this.data('id');
                    cat = $this.data('cat');
                    tag = $this.data('tag');
                    curpaged = parseInt($this.attr('data-paged'));

                    if (prev) {
                        pagednum = curpaged - 1;
                    } else {
                        pagednum = curpaged + 1;
                    }
                }

                if (!navlink) {
                    parentclass.find('.pc-ajaxfil-link').removeClass('current-item');
                    $this.addClass('current-item');
                }

                if ($wrap_content_id.length && !navlink) {
                    wrapper.find('.pcsl-wrapper').hide();
                    wrapper.find('.pwsl-id-' + wrapId).show();
                    wrapper.removeClass('loading-posts pcftaj-ld');
                    $this.removeClass('loading-posts');
                    $navthis.removeClass('loading-posts');
                    $('body').trigger( 'penci_swiper_sliders' );

                    var maxp = undefined;
                    if (wrapId == 'default') {
                        maxp = $(this).attr('data-maxp');
                    }

                    if (curpaged <= 1) {
                        parentclass.find('.pc-ajaxfil-link.prev').addClass('disable');
                    } else {
                        parentclass.find('.pc-ajaxfil-link.prev').removeClass('disable');
                    }

                    if ($wrap_content_id.hasClass('pc-nomorepost') || parseInt(maxp) <= 1) {
                        parentclass.find('.pc-ajaxfil-link.next').addClass('disable');
                    } else {
                        parentclass.find('.pc-ajaxfil-link.next').removeClass('disable');
                    }

                    var o = 0;
                    $wrap_content_id.find('.pcsl-item').each(function () {
                        if ( $(this).hasClass('swiper-slide') ) {
                            return;
                        }
                        o++;
                        $(this).addClass('penci-ajrs-animate').attr('style', 'animation-delay:' + o / 10 + 's')
                    });

                } else {

                    var data = {
                        action: 'penci_more_slist_post_ajax',
                        datafilter: dataFilter,
                        id: wrapId,
                        tag: tag,
                        cat: cat,
                        author: author,
                        pagednum: pagednum,
                        nonce: pcslist_ajax.nonce,
                    };

                    $.ajax({
                        type: "POST",
                        dataType: "html",
                        url: ajax_var_more.url,
                        data: data,
                        success: function (data) {
                            if (data) {

                                var data_paded = curpaged;

                                if (navlink) {
                                    wrapper.find('.pwsl-id-' + wrapId).remove();
                                    data_paded = curpaged + 1;
                                }

                                if (prev) {
                                    data_paded = curpaged - 1;
                                }

                                if (data_paded <= 1) {
                                    parentclass.find('.pc-ajaxfil-link.prev').addClass('disable');
                                } else {
                                    parentclass.find('.pc-ajaxfil-link.prev').removeClass('disable');
                                }


                                $this.attr('data-paged', data_paded);

                                wrapper.append(data);

                                if ($('.pwsl-id-' + wrapId).hasClass('pc-nomorepost')) {
                                    parentclass.find('.pc-ajaxfil-link.next').addClass('disable');
                                } else {
                                    parentclass.find('.pc-ajaxfil-link.next').removeClass('disable');
                                }

                                $(".penci-wrapper-smalllist").fitVids();


                                if ($().easyPieChart) {
                                    $('.penci-piechart').each(function () {
                                        var $this = $(this);
                                        $this.one('inview', function (event, isInView, visiblePartX, visiblePartY) {
                                            var chart_args = {
                                                barColor: $this.data('color'),
                                                trackColor: $this.data('trackcolor'),
                                                scaleColor: false,
                                                lineWidth: $this.data('thickness'),
                                                size: $this.data('size'),
                                                animate: 1000
                                            };
                                            $this.easyPieChart(chart_args);
                                        }); // bind inview
                                    }); // each
                                }

                                var $justified_gallery = $('.penci-post-gallery-container.justified');
                                var $masonry_gallery = $('.penci-post-gallery-container.masonry');
                                if ($().justifiedGallery && $justified_gallery.length) {
                                    $('.penci-post-gallery-container.justified').each(function () {
                                        var $this = $(this);
                                        $this.justifiedGallery({
                                            rowHeight: $this.data('height'),
                                            lastRow: 'nojustify',
                                            margins: $this.data('margin'),
                                            randomize: false
                                        });
                                    }); // each .penci-post-gallery-container
                                }

                                if ($().isotope && $masonry_gallery.length) {

                                    $('.penci-post-gallery-container.masonry .item-gallery-masonry').each(function () {
                                        var $this = $(this);
                                        if ($this.attr('title')) {
                                            var $title = $this.attr('title');
                                            $this.children().append('<div class="caption">' + $title + '</div>');
                                        }
                                    });
                                }

                                if ($masonry_gallery.length) {
                                    $masonry_gallery.each(function () {
                                        var $this = $(this);
                                        $this.imagesLoaded(function () {
                                            // initialize isotope
                                            $this.isotope({
                                                itemSelector: '.item-gallery-masonry',
                                                transitionDuration: '.55s',
                                                layoutMode: 'masonry'
                                            });

                                            $this.addClass('loaded');

                                            $('.penci-post-gallery-container.masonry .item-gallery-masonry').each(function () {
                                                var $this = $(this);
                                                $this.one('inview', function (event, isInView, visiblePartX, visiblePartY) {
                                                    $this.addClass('animated');
                                                }); // inview
                                            }); // each
                                        });
                                    });
                                }

                                if ($().theiaStickySidebar) {
                                    var top_margin = 90;
                                    if ($('body').hasClass('admin-bar')) {
                                        top_margin = 122;
                                    }
                                    $('#main.penci-main-sticky-sidebar, #sidebar.penci-sticky-sidebar').theiaStickySidebar({
                                        // settings
                                        additionalMarginTop: top_margin
                                    });
                                } // if sticky

                                if (nav[parentID] !== undefined) {
                                    wrapper.find('.pwsl-id-' + wrapId).append($(nav[parentID]));
                                    wrapper.find('.pwsl-id-' + wrapId + ' .penci-ajax-more .penci-ajax-more-button')
                                        .removeAttr('data-cat')
                                        .removeAttr('data-tag')
                                        .removeAttr('data-author');
                                    if (cat) {
                                        wrapper.find('.pwsl-id-' + wrapId + ' .penci-ajax-more .penci-ajax-more-button').attr('data-cat', cat);
                                    }
                                    if (tag) {
                                        wrapper.find('.pwsl-id-' + wrapId + ' .penci-ajax-more .penci-ajax-more-button').attr('data-tag', tag);
                                    }
                                    if (author) {
                                        wrapper.find('.pwsl-id-' + wrapId + ' .penci-ajax-more .penci-ajax-more-button').attr('data-author', author);
                                    }
                                    wrapper.find('.pwsl-id-' + wrapId + ' .penci-ajax-more .penci-ajax-more-button').attr('data-pagednum', data_paded + 1);
                                }

                                wrapper.find('.pcsl-wrapper').hide();
                                wrapper.find('.pwsl-id-' + wrapId).show();
                                wrapper.removeClass('loading-posts pcftaj-ld');
                                $this.removeClass('loading-posts');
                                $navthis.removeClass('loading-posts');

                                var o = 0;
                                wrapper.find('.pwsl-id-' + wrapId + ' .pcsl-item').each(function () {
                                    o++;
                                    $(this).addClass('penci-ajrs-animate').attr('style', 'animation-delay:' + o / 10 + 's')
                                });
                                $(document).trigger('pajax-tab-loaded');
                                $(document).trigger('penci_bf_check');
                            } else {
                                wrapper.find('.pcsl-wrapper').hide();
                                wrapper.append('<div class="penci-smalllist pcsl-wrapper pwsl-id-' + wrapId + '"></div>');
                                wrapper.find('.pwsl-id-' + wrapId).append('<div class="pcajx-nopost"><span>No post found !</span></div>');
                                wrapper.find('.pwsl-id-' + wrapId).show();
                                wrapper.removeClass('loading-posts pcftaj-ld');
                                $this.removeClass('loading-posts');
                                $navthis.removeClass('loading-posts');
                            }
                        }
                    });
                }
            }
        });
    }

    function penciGetOBjBlockData($blockID) {
        var $obj = new penciBlock();

        jQuery.each(penciBlocksArray, function (index, block) {

            if (block.blockID === $blockID) {
                $obj = penciBlocksArray[index];
            }
        });

        return $obj;
    }

    penciGetsListData();

    $('body').on('penci-small-list-loaded', function () {
        penciGetsListData();
    });
});

/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.8.12 */
(()=>{var e={999:e=>{function t(){this.listeners={}}t.prototype.emit=function(e,t){var r;this.listeners[e]=null!==(r=this.listeners[e])&&void 0!==r?r:[],this.listeners[e].forEach((function(e){return e.apply(null,t)}))},t.prototype.on=function(e,t){var r;this.listeners[e]=null!==(r=this.listeners[e])&&void 0!==r?r:[],this.listeners[e].push(t)},e.exports=t},1677:()=>{function e(e){for(var t=!!e.getAttribute("data-show-if"),r=t?e.getAttribute("data-show-if").split(":"):e.getAttribute("data-hide-if").split(":"),n=r[0],i=(r.length>1?r[1]:"*").split("|"),a=function(e,t){for(var r=[],n=e.querySelectorAll('input[name="'+t+'"],select[name="'+t+'"],textarea[name="'+t+'"]'),i=0;i<n.length;i++){var a=n[i];("radio"!==a.type&&"checkbox"!==a.type||a.checked)&&r.push(a.value)}return r}(function(e){for(var t=e;t.parentElement;)if("FORM"===(t=t.parentElement).tagName)return t;return null}(e),n),o=!1,s=0;s<a.length;s++){var l=a[s];if(o=i.indexOf(l)>-1||i.indexOf("*")>-1&&l.length>0)break}e.style.display=t?o?"":"none":o?"none":"";for(var u=e.querySelectorAll("input,select,textarea"),c=0;c<u.length;c++){var f=u[c];(o||t)&&f.getAttribute("data-was-required")&&(f.required=!0,f.removeAttribute("data-was-required")),o&&t||!f.required||(f.setAttribute("data-was-required","true"),f.required=!1)}}function t(){for(var t=document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]"),r=0;r<t.length;r++)e(t[r])}function r(t){if(t.target&&t.target.form&&!(t.target.form.className.indexOf("mc4wp-form")<0))for(var r=t.target.form.querySelectorAll("[data-show-if],[data-hide-if]"),n=0;n<r.length;n++)e(r[n])}document.addEventListener("keyup",r,!0),document.addEventListener("change",r,!0),document.addEventListener("mc4wp-refresh",t,!0),window.addEventListener("load",t),t()},2573:(e,t,r)=>{var n=r(7422),i=r(3409),a=function(e,t){this.id=e,this.element=t||document.createElement("form"),this.name=this.element.getAttribute("data-name")||"Form #"+this.id,this.errors=[],this.started=!1};a.prototype.setData=function(e){try{i(this.element,e)}catch(e){console.error(e)}},a.prototype.getData=function(){return n(this.element,{hash:!0,empty:!0})},a.prototype.getSerializedData=function(){return n(this.element,{hash:!1,empty:!0})},a.prototype.setResponse=function(e){this.element.querySelector(".mc4wp-response").innerHTML=e},a.prototype.reset=function(){this.setResponse(""),this.element.querySelector(".mc4wp-form-fields").style.display="",this.element.reset()},e.exports=a},8592:(e,t,r)=>{var n=r(2573),i=[],a=new(r(999));function o(e,t){t=t||parseInt(e.getAttribute("data-id"))||0;var r=new n(t,e);return i.push(r),r}e.exports={get:function(e){e=parseInt(e);for(var t=0;t<i.length;t++)if(i[t].id===e)return i[t];return o(document.querySelector(".mc4wp-form-"+e),e)},getByElement:function(e){for(var t=e.form||e,r=0;r<i.length;r++)if(i[r].element===t)return i[r];return o(t)},on:function(e,t){a.on(e,t)},trigger:function(e,t){"submit"===e||e.indexOf(".submit")>0?(a.emit(t[0].id+"."+e,t),a.emit(e,t)):window.setTimeout((function(){a.emit(t[0].id+"."+e,t),a.emit(e,t)}),10)}}},7422:e=>{var t=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function i(e,t,r){if(0===t.length)return r;var n=t.shift(),a=n.match(/^\[(.+?)\]$/);if("[]"===n)return e=e||[],Array.isArray(e)?e.push(i(null,t,r)):(e._values=e._values||[],e._values.push(i(null,t,r))),e;if(a){var o=a[1],s=+o;isNaN(s)?(e=e||{})[o]=i(e[o],t,r):(e=e||[])[s]=i(e[s],t,r)}else e[n]=i(e[n],t,r);return e}function a(e,t,r){if(t.match(n))i(e,function(e){var t=[],r=new RegExp(n),i=/^([^\[\]]*)/.exec(e);for(i[1]&&t.push(i[1]);null!==(i=r.exec(e));)t.push(i[1]);return t}(t),r);else{var a=e[t];a?(Array.isArray(a)||(e[t]=[a]),e[t].push(r)):e[t]=r}return e}function o(e,t,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=(r=encodeURIComponent(r)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+r}e.exports=function(e,n){"object"!=typeof n?n={hash:!!n}:void 0===n.hash&&(n.hash=!0);for(var i=n.hash?{}:"",s=n.serializer||(n.hash?a:o),l=e&&e.elements?e.elements:[],u=Object.create(null),c=0;c<l.length;++c){var f=l[c];if((n.disabled||!f.disabled)&&f.name&&r.test(f.nodeName)&&!t.test(f.type)){var d=f.name,m=f.value;if("checkbox"!==f.type&&"radio"!==f.type||f.checked||(m=void 0),n.empty){if("checkbox"!==f.type||f.checked||(m=""),"radio"===f.type&&(u[f.name]||f.checked?f.checked&&(u[f.name]=!0):u[f.name]=!1),null==m&&"radio"==f.type)continue}else if(!m)continue;if("select-multiple"!==f.type)i=s(i,d,m);else{m=[];for(var p=f.options,h=!1,v=0;v<p.length;++v){var g=p[v],y=n.empty&&!g.value,w=g.value||y;g.selected&&w&&(h=!0,i=n.hash&&"[]"!==d.slice(d.length-2)?s(i,d+"[]",g.value):s(i,d,g.value))}!h&&n.empty&&(i=s(i,d,""))}}}if(n.empty)for(var d in u)u[d]||(i=s(i,d,""));return i}},3409:e=>{e.exports&&(e.exports=function e(t,r,n){for(var i in r)if(r.hasOwnProperty(i)){var a=i,o=r[i];if(void 0===o&&(o=""),null===o&&(o=""),void 0!==n&&(a=n+"["+i+"]"),o.constructor===Array)a+="[]";else if("object"==typeof o){e(t,o,a);continue}var s=t.elements.namedItem(a);if(s)switch(s.type||s[0].type){default:s.value=o;break;case"radio":case"checkbox":for(var l=o.constructor===Array?o:[o],u=0;u<s.length;u++)s[u].checked=l.indexOf(s[u].value)>-1;break;case"select-multiple":l=o.constructor===Array?o:[o];for(var c=0;c<s.options.length;c++)s.options[c].selected=l.indexOf(s.options[c].value)>-1;break;case"select":case"select-one":s.value=o.toString()||o;break;case"date":s.value=new Date(o).toISOString().split("T")[0]}}})}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e=window.mc4wp||{},t=r(8592);function n(e,t){document.addEventListener(e,(function(e){if(e.target){var r=e.target;("string"==typeof r.className&&r.className.indexOf("mc4wp-form")>-1||"function"==typeof r.matches&&r.matches(".mc4wp-form *"))&&t.call(e,e)}}),!0)}r(1677),n("submit",(function(e){if(!e.defaultPrevented){var r=t.getByElement(e.target);e.defaultPrevented||t.trigger("submit",[r,e])}})),n("focus",(function(e){var r=t.getByElement(e.target);r.started||(t.trigger("started",[r,e]),r.started=!0)})),n("change",(function(e){var r=t.getByElement(e.target);t.trigger("change",[r,e])})),e.listeners&&([].forEach.call(e.listeners,(function(e){t.on(e.event,e.callback)})),delete e.listeners),e.forms=t,window.mc4wp=e})()})();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.19.4 */
/*! elementor - v3.19.0 - 28-02-2024 */
(()=>{"use strict";var e,r,_,t,a,i={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return i[e].call(_.exports,_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=i,e=[],__webpack_require__.O=(r,_,t,a)=>{if(!_){var i=1/0;for(u=0;u<e.length;u++){for(var[_,t,a]=e[u],n=!0,c=0;c<_.length;c++)(!1&a||i>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,a<i&&(i=a));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[_,t,a]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);__webpack_require__.r(a);var i={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,__webpack_require__.d(a,i),a},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.1b6e05e0607040eb8929.bundle.min.js":48===e?"text-path.b50b3e74488a4e302613.bundle.min.js":209===e?"accordion.8799675460c73eb48972.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js":181===e?"toggle.31881477c45ff5cf9d4d.bundle.min.js":791===e?"video.fea4f8dfdf17262f23e8.bundle.min.js":268===e?"image-carousel.4455c6362492d9067512.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.5b1a7d06907f6d7f85b6.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="elementor:",__webpack_require__.l=(e,r,_,i)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",a+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");if(_.length)for(var t=_.length-1;t>-1&&!e;)e=_[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var a=new Promise(((_,a)=>t=e[r]=[_,a]));_.push(t[2]=a);var i=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(i,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var a=_&&("load"===_.type?"missing":_.type),i=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",n.name="ChunkLoadError",n.type=a,n.request=i,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,a,[i,n,c]=_,o=0;if(i.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<i.length;o++)a=i[o],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.19.4 */
/*! elementor - v3.19.0 - 28-02-2024 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const n of t)if(e.constructor.name===n.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(n=>{t[n]=e.attributes[n]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},6752:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class NestedTitleKeyboardHandler extends r.default{__construct(e){super.__construct(e),this.directionNext="next",this.directionPrevious="previous",this.focusableElementSelector='audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])'}getDefaultSettings(){return{selectors:{itemTitle:".e-n-tab-title",itemContainer:".e-n-tabs-content > .e-con"},ariaAttributes:{titleStateAttribute:"aria-selected",activeTitleSelector:'[aria-selected="true"]'},datasets:{titleIndex:"data-tab-index"},keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?this.directionNext:this.directionPrevious,ArrowUp:this.directionPrevious,ArrowRight:elementorFrontendConfig.is_rtl?this.directionPrevious:this.directionNext,ArrowDown:this.directionNext}}}getDefaultElements(){const e=this.getSettings("selectors");return{$itemTitles:this.findElement(e.itemTitle),$itemContainers:this.findElement(e.itemContainer),$focusableContainerElements:this.getFocusableElements(this.findElement(e.itemContainer))}}getFocusableElements(e){return e.find(this.focusableElementSelector).not("[disabled], [inert]")}getKeyDirectionValue(e){const t=this.getSettings("keyDirection")[e.key];return this.directionNext===t?1:-1}getTitleIndex(e){const{titleIndex:t}=this.getSettings("datasets");return e.getAttribute(t)}getTitleFilterSelector(e){const{titleIndex:t}=this.getSettings("datasets");return`[${t}="${e}"]`}getActiveTitleElement(){const e=this.getSettings("ariaAttributes").activeTitleSelector;return this.elements.$itemTitles.filter(e)}onInit(){super.onInit(...arguments)}bindEvents(){this.elements.$itemTitles.on(this.getTitleEvents()),this.elements.$focusableContainerElements.on(this.getContentElementEvents())}unbindEvents(){this.elements.$itemTitles.off(),this.elements.$itemContainers.children().off()}getTitleEvents(){return{keydown:this.handleTitleKeyboardNavigation.bind(this)}}getContentElementEvents(){return{keydown:this.handleContentElementKeyboardNavigation.bind(this)}}isDirectionKey(e){return["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)}isActivationKey(e){return["Enter"," "].includes(e.key)}handleTitleKeyboardNavigation(e){if(this.isDirectionKey(e)){e.preventDefault();const t=parseInt(this.getTitleIndex(e.currentTarget))||1,n=this.elements.$itemTitles.length,i=this.getTitleIndexFocusUpdated(e,t,n);this.changeTitleFocus(i),e.stopPropagation()}else if(this.isActivationKey(e)){if(e.preventDefault(),this.handeTitleLinkEnterOrSpaceEvent(e))return;const t=this.getTitleIndex(e.currentTarget);elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard",{widgetId:this.getID(),titleIndex:t})}else"Escape"===e.key&&this.handleTitleEscapeKeyEvents(e)}handeTitleLinkEnterOrSpaceEvent(e){const t="a"===e?.currentTarget?.tagName?.toLowerCase();return!elementorFrontend.isEditMode()&&t&&(e?.currentTarget?.click(),e.stopPropagation()),t}getTitleIndexFocusUpdated(e,t,n){let i=0;switch(e.key){case"Home":i=1;break;case"End":i=n;break;default:const r=this.getKeyDirectionValue(e);i=n<t+r?1:0===t+r?n:t+r}return i}changeTitleFocus(e){const t=this.elements.$itemTitles.filter(this.getTitleFilterSelector(e));this.setTitleTabindex(e),t.trigger("focus")}setTitleTabindex(e){this.elements.$itemTitles.attr("tabindex","-1");this.elements.$itemTitles.filter(this.getTitleFilterSelector(e)).attr("tabindex","0")}handleTitleEscapeKeyEvents(){}handleContentElementKeyboardNavigation(e){"Tab"!==e.key||e.shiftKey?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.handleContentElementEscapeEvents(e)):this.handleContentElementTabEvents(e)}handleContentElementEscapeEvents(){this.getActiveTitleElement().trigger("focus")}handleContentElementTabEvents(){}}t.default=NestedTitleKeyboardHandler},1292:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2821));class CarouselHandlerBase extends r.default{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,swiperWrapper:".swiper-wrapper",slideContent:".swiper-slide",swiperArrow:".elementor-swiper-button",paginationWrapper:".swiper-pagination",paginationBullet:".swiper-pagination-bullet",paginationBulletWrapper:".swiper-pagination-bullets"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel),$swiperWrapper:this.$element.find(e.swiperWrapper),$swiperArrows:this.$element.find(e.swiperArrow),$paginationWrapper:this.$element.find(e.paginationWrapper),$paginationBullets:this.$element.find(e.paginationBullet),$paginationBulletWrapper:this.$element.find(e.paginationBulletWrapper)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,n=1===t,i=elementorFrontend.config.responsive.activeBreakpoints,r={mobile:1,tablet:n?1:2},s={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=t;Object.keys(i).reverse().forEach((t=>{const n=r[t]?r[t]:o;s.breakpoints[i[t].value]={slidesPerView:+e["slides_to_show_"+t]||n,slidesPerGroup:+e["slides_to_scroll_"+t]||1},e.image_spacing_custom&&(s.breakpoints[i[t].value].spaceBetween=this.getSpaceBetween(t)),o=+e["slides_to_show_"+t]||n})),"yes"===e.autoplay&&(s.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),n?(s.effect=e.effect,"fade"===e.effect&&(s.fadeEffect={crossFade:!0})):s.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(s.spaceBetween=this.getSpaceBetween());const a="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation||e.pagination;return a&&(s.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(s.pagination={el:`.elementor-element-${this.getID()} .swiper-pagination`,type:e.pagination?e.pagination:"bullets",clickable:!0,renderBullet:(e,t)=>`<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e+1}"></span>`}),"yes"===e.lazyload&&(s.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),s.a11y={enabled:!0,prevSlideMessage:elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,nextSlideMessage:elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,firstSlideMessage:elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,lastSlideMessage:elementorFrontend.config.i18n.a11yCarouselLastSlideMessage},s.on={slideChangeTransitionEnd:()=>{this.a11ySetSlideAriaHidden()},slideChange:()=>{this.a11ySetPaginationTabindex(),this.handleElementHandlers()},init:()=>{this.a11ySetWidgetAriaDetails(),this.a11ySetPaginationTabindex(),this.a11ySetSlideAriaHidden("initialisation")}},this.applyOffsetSettings(e,s,t),s}getOffsetWidth(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"offset_width","size",e)||0}applyOffsetSettings(e,t,n){const i=e.offset_sides;if(elementorFrontend.isEditMode()&&"NestedCarousel"===this.constructor.name||!i||"none"===i)return;this.getOffsetWidth();switch(i){case"right":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-right");break;case"left":this.addClassToSwiperContainer("offset-left");break;case"both":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-both")}}forceSliderToShowNextSlideWhenOnLast(e,t){e.slidesPerView=t+.001}addClassToSwiperContainer(e){this.getDefaultElements().$swiperContainer[0].classList.add(e)}async onInit(){if(super.onInit(...arguments),!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const e=elementorFrontend.utils.swiper;this.swiper=await new e(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper);"yes"===this.getElementSettings().pause_on_hover&&this.togglePauseOnHover(!0)}bindEvents(){this.elements.$swiperArrows.on("keydown",this.onDirectionArrowKeydown.bind(this)),this.elements.$paginationWrapper.on("keydown",".swiper-pagination-bullet",this.onDirectionArrowKeydown.bind(this)),this.elements.$swiperContainer.on("keydown",".swiper-slide",this.onDirectionArrowKeydown.bind(this)),this.$element.find(":focusable").on("focus",this.onFocusDisableAutoplay.bind(this)),elementorFrontend.elements.$window.on("resize",this.getSwiperSettings.bind(this))}unbindEvents(){this.elements.$swiperArrows.off(),this.elements.$paginationWrapper.off(),this.elements.$swiperContainer.off(),this.$element.find(":focusable").off(),elementorFrontend.elements.$window.off("resize")}onDirectionArrowKeydown(e){const t=elementorFrontend.config.is_rtl,n=e.originalEvent.code,i=t?"ArrowLeft":"ArrowRight";if(!(-1!==["ArrowLeft","ArrowRight"].indexOf(n)))return!0;(t?"ArrowRight":"ArrowLeft")===n?this.swiper.slidePrev():i===n&&this.swiper.slideNext()}onFocusDisableAutoplay(){this.swiper.autoplay.stop()}updateSwiperOption(e){const t=this.getElementSettings()[e],n=this.swiper.params;switch(e){case"autoplay_speed":n.autoplay.delay=t;break;case"speed":n.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",arrows_position:"arrows_position"}}onElementChange(e){if(0===e.indexOf("image_spacing_custom"))return void this.updateSpaceBetween(e);if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}getSpaceBetween(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"image_spacing_custom","size",e)||0}updateSpaceBetween(e){const t=e.match("image_spacing_custom_(.*)"),n=t?t[1]:"desktop",i=this.getSpaceBetween(n);"desktop"!==n&&(this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween=i),this.swiper.params.spaceBetween=i,this.swiper.update()}getPaginationBullets(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"array";const t=this.$element.find(this.getSettings("selectors").paginationBullet);return"array"===e?Array.from(t):t}a11ySetWidgetAriaDetails(){const e=this.$element;e.attr("aria-roledescription","carousel"),e.attr("aria-label",elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)}a11ySetPaginationTabindex(){const e=this.swiper?.params.pagination.bulletClass,t=this.swiper?.params.pagination.bulletActiveClass;this.getPaginationBullets().forEach((e=>{e.classList?.contains(t)||e.removeAttribute("tabindex")}));const n="ArrowLeft"===event?.code||"ArrowRight"===event?.code;event?.target?.classList?.contains(e)&&n&&this.$element.find(`.${t}`).trigger("focus")}getSwiperWrapperTranformXValue(){let e=this.elements.$swiperWrapper[0]?.style.transform;return e=e.replace("translate3d(",""),e=e.split(","),e=parseInt(e[0].replace("px","")),e||0}a11ySetSlideAriaHidden(){if("number"!=typeof("initialisation"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")?0:this.swiper?.activeIndex))return;const e=this.getSwiperWrapperTranformXValue(),t=this.elements.$swiperWrapper[0].clientWidth;this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n,i)=>{0<=i.offsetLeft+e&&t>i.offsetLeft+e?(i.removeAttribute("aria-hidden"),i.removeAttribute("inert")):(i.setAttribute("aria-hidden",!0),i.setAttribute("inert",""))}))}handleElementHandlers(){}}t.default=CarouselHandlerBase},2821:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class SwiperHandlerBase extends r.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,isElementInTheCurrentDocument(){return!!elementorFrontend.isEditMode()&&elementor.documents.currentDocument.id.toString()===this.$element[0].closest(".elementor").dataset.elementorId},findElement(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).parent().closest(".elementor-element").is(t)}))},getUniqueHandlerID(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let n="change";"global"!==t&&(n+=":"+t),e.editorListeners.push({event:n,to:elementor.channels.editor,callback(t,n){e.getUniqueHandlerID(n.model.cid,n.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,n)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(t,n){if(n.model.cid!==e.getModelCID())return;const i=Object.keys(t.changed)[0];e.onEditSettingsChange(i,t.changed[i])}}),["page"].forEach((function(t){var n="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[n]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback(t){e[n](t.changed)}})}))},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType(){return this.$element.data("element_type")},getWidgetType(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(e){let t={};const n=this.getModelCID();if(this.isEdit&&n){const e=elementorFrontend.config.elements.data[n],i=e.attributes;let r=i.widgetType||i.elType;i.isInner&&(r="inner-"+r);let s=elementorFrontend.config.elements.keys[r];s||(s=elementorFrontend.config.elements.keys[r]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&s.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==s.indexOf(e)){let n=i[e];n.toJSON&&(n=n.toJSON()),t[e]=n}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},2263:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090));class StretchedElement extends r.default{getStretchedClass(){return"e-stretched"}getStretchSettingName(){return"stretch_element"}getStretchActiveValue(){return"yes"}bindEvents(){const e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass(this.getStretchedClass())}getStretchElementForConfig(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.$element.find(e):this.$element}getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl}}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue()}stretch(){this.isStretchSettingEnabled()&&this.stretchElement.stretch()}onInit(){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...arguments),this.stretch())}onElementChange(e){this.getStretchSettingName()===e&&(this.isStretchSettingEnabled()?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}t.default=StretchedElement},6412:(e,t,n)=>{"use strict";var i=n(3203),r=i(n(5955)),s=i(n(8135)),o=i(n(5658)),a=i(n(2263)),l=i(n(3090)),c=i(n(2821)),u=i(n(1292)),d=i(n(7323)),h=i(n(32)),g=i(n(6752));r.default.frontend={Document:s.default,tools:{StretchElement:o.default},handlers:{Base:l.default,StretchedElement:a.default,SwiperBase:c.default,CarouselBase:u.default,NestedTabs:d.default,NestedAccordion:h.default,NestedTitleKeyboardHandler:g.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window},considerScrollbar:!1,cssOutput:"inline"}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){const e=this.getSettings();let t;try{t=jQuery(e.selectors.container)}catch(e){}t&&t.length||(t=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var n=this.elements.$element,i=t.innerWidth(),r=n.offset().left,s="fixed"===n.css("position"),o=s?0:r,a=window===t[0];if(!a){var l=t.offset().left;s&&(o=l),r>l&&(o=r-l)}if(e.considerScrollbar&&a){o-=window.innerWidth-i}s||(elementorFrontend.config.is_rtl&&(o=i-(n.outerWidth()+o)),o=-o),e.margin&&(o+=e.margin);var c={};let u=i;e.margin&&(u-=2*e.margin),c.width=u+"px",c[e.direction]=o+"px","variables"!==e.cssOutput?n.css(c):this.applyCssVariables(n,c)},reset(){const e={},t=this.getSettings(),n=this.elements.$element;"variables"!==t.cssOutput?(e.width="",e[t.direction]="",n.css(e)):this.resetCssVariables(n)},applyCssVariables(e,t){e.css("--stretch-width",t.width),t.left?e.css("--stretch-left",t.left):e.css("--stretch-right",t.right)},resetCssVariables(e){e.css({"--stretch-width":"","--stretch-left":"","--stretch-right":""})}})},6630:(e,t)=>{"use strict";function getChildrenWidth(e){let t=0;const n=e[0].parentNode,i=getComputedStyle(n),r=parseFloat(i.gap)||0;for(let n=0;n<e.length;n++)t+=e[n].offsetWidth+r;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.changeScrollStatus=function changeScrollStatus(e,t){"mousedown"===t.type?(e.classList.add("e-scroll"),e.dataset.pageX=t.pageX):(e.classList.remove("e-scroll","e-scroll-active"),e.dataset.pageX="")},t.setHorizontalScrollAlignment=function setHorizontalScrollAlignment(e){let{element:t,direction:n,justifyCSSVariable:i,horizontalScrollStatus:r}=e;if(!t)return;!function isHorizontalScroll(e,t){return e.clientWidth<getChildrenWidth(e.children)&&"enable"===t}(t,r)?t.style.setProperty(i,""):function initialScrollPosition(e,t,n){const i=elementorFrontend.config.is_rtl;if("end"===t)e.style.setProperty(n,"start"),e.scrollLeft=i?-1*getChildrenWidth(e.children):getChildrenWidth(e.children);else e.style.setProperty(n,"start"),e.scrollLeft=0}(t,n,i)},t.setHorizontalTitleScrollValues=function setHorizontalTitleScrollValues(e,t,n){const i=e.classList.contains("e-scroll"),r="enable"===t,s=e.scrollWidth>e.clientWidth;if(!i||!r||!s)return;n.preventDefault();const o=parseFloat(e.dataset.pageX),a=n.pageX-o;let l=0;l=20<a?5:-20>a?-5:a;e.scrollLeft=e.scrollLeft-l,e.classList.add("e-scroll-active")}},2618:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(740);var r=i(n(7597)),s=i(n(381));class ArgsObject extends r.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(t,e))throw Error(`${e} is required.`)}requireArgumentType(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),typeof n[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),!(n[e]instanceof t||(0,s.default)(n[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),n[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0,n(740);class ForceMethodImplementation extends Error{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`,t),Object.keys(t).length&&console.error(t),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=e=>{const t=Error().stack.split("\n")[2].trim(),n=t.startsWith("at new")?"constructor":t.split(" ")[1],i={};if(i.functionName=n,i.fullName=n,i.functionName.includes(".")){const e=i.functionName.split(".");i.className=e[0],i.functionName=e[1]}else i.isStatic=!0;throw new ForceMethodImplementation(i,e)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}}t.default=InstanceType},1192:(e,t,n)=>{"use strict";n(740);const Module=function(){const e=jQuery,t=arguments,n=this,i={};let r;this.getItems=function(e,t){if(t){const n=t.split("."),i=n.splice(0,1);if(!n.length)return e[i];if(!e[i])return;return this.getItems(e[i],n.join("."))}return e},this.getSettings=function(e){return this.getItems(r,e)},this.setSettings=function(t,i,s){if(s||(s=r),"object"==typeof t)return e.extend(s,t),n;const o=t.split("."),a=o.splice(0,1);return o.length?(s[a]||(s[a]={}),n.setSettings(o.join("."),i,s[a])):(s[a]=i,n)},this.getErrorMessage=function(e,t){let n;if("forceMethodImplementation"===e)n=`The method '${t}' must to be implemented in the inheritor child.`;else n="An error occurs";return n},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,r){if("object"==typeof t)return e.each(t,(function(e){n.on(e,this)})),n;return t.split(" ").forEach((function(e){i[e]||(i[e]=[]),i[e].push(r)})),n},this.off=function(e,t){if(!i[e])return n;if(!t)return delete i[e],n;const r=i[e].indexOf(t);return-1!==r&&(delete i[e][r],i[e]=i[e].filter((e=>e))),n},this.trigger=function(t){const r="on"+t[0].toUpperCase()+t.slice(1),s=Array.prototype.slice.call(arguments,1);n[r]&&n[r].apply(n,s);const o=i[t];return o?(e.each(o,(function(e,t){t.apply(n,s)})),n):n},n.__construct.apply(n,t),e.each(n,(function(e){const t=n[e];"function"==typeof t&&(n[e]=function(){return t.apply(n,arguments)})})),function(){r=n.getDefaultSettings();const i=t[0];i&&e.extend(!0,r,i)}(),n.trigger("init")};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,n=this,child=function(){return n.apply(this,arguments)};return t.extend(child,n),(child.prototype=Object.create(t.extend({},n.prototype,e))).constructor=child,child.__super__=n.prototype,child},e.exports=Module},6516:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(2640)).default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var e=[],t=this.elements.$container.position().top,n=this.getSettings(),i=n.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(r){var s=Math.floor(r/i),o=jQuery(this),a=o[0].getBoundingClientRect().height+n.verticalSpaceBetween;if(s){var l=o.position(),c=r%i,u=l.top-t-e[c];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),e[c]+=a}else e.push(a)}))}});t.default=r},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const n={root:e.root||null,rootMargin:e.offset||"0px",threshold:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=[];if(e>0&&e<=100){const n=100/e;for(let e=0;e<=100;e+=n)t.push(e/100)}else t.push(0);return t}(e.sensitivity)};return new IntersectionObserver((function handleIntersect(n){const i=n[0].boundingClientRect.y,r=n[0].isIntersecting,s=i<t?"down":"up",o=Math.abs(parseFloat((100*n[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:r,scrollPercentage:o,intersectionScrollDirection:s}),t=i}),n)}static getElementViewportPercentage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e[0].getBoundingClientRect(),i=t.start||0,r=t.end||0,s=window.innerHeight*i/100,o=window.innerHeight*r/100,a=n.top-window.innerHeight,l=0-a+s,c=n.top+s+e.height()-a+o,u=Math.max(0,Math.min(l/c,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n=e.start||0,i=e.end||0,r=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,s=r*n/100,o=r+s+r*i/100;return(document.documentElement.scrollTop+document.body.scrollTop+s)/o*100}}},2640:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1192)).default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}});t.default=r},5955:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(1192)),s=i(n(2640)),o=i(n(2618)),a=i(n(6516)),l=i(n(400)),c=i(n(869)),u=window.elementorModules={Module:r.default,ViewModule:s.default,ArgsObject:o.default,ForceMethodImplementation:c.default,utils:{Masonry:a.default,Scroll:l.default}};t.default=u},7148:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(6752));class NestedAccordionTitleKeyboardHandler extends r.default{__construct(){super.__construct(...arguments);const e=arguments.length<=0?void 0:arguments[0];this.toggleTitle=e.toggleTitle}getDefaultSettings(){return{...super.getDefaultSettings(),selectors:{itemTitle:".e-n-accordion-item-title",itemContainer:".e-n-accordion-item > .e-con"},ariaAttributes:{titleStateAttribute:"aria-expanded",activeTitleSelector:'[aria-expanded="true"]'},datasets:{titleIndex:"data-accordion-index"}}}handeTitleLinkEnterOrSpaceEvent(e){this.toggleTitle(e)}handleContentElementEscapeEvents(e){this.getActiveTitleElement().trigger("focus"),this.toggleTitle(e)}handleTitleEscapeKeyEvents(e){const t=e?.currentTarget?.parentElement,n=t?.open;n&&this.toggleTitle(e)}}t.default=NestedAccordionTitleKeyboardHandler},32:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090)),s=i(n(7148));class NestedAccordion extends r.default{constructor(){super(...arguments),this.animations=new Map}getDefaultSettings(){return{selectors:{accordion:".e-n-accordion",accordionContentContainers:".e-n-accordion > .e-con",accordionItems:".e-n-accordion-item",accordionItemTitles:".e-n-accordion-item-title",accordionContent:".e-n-accordion-item > .e-con",accordionWrapper:".e-n-accordion-item"},default_state:"expanded"}}getDefaultElements(){const e=this.getSettings("selectors");return{$accordion:this.findElement(e.accordion),$contentContainers:this.findElement(e.accordionContentContainers),$accordionItems:this.findElement(e.accordionItems),$accordionTitles:this.findElement(e.accordionItemTitles),$accordionContent:this.findElement(e.accordionContent)}}onInit(){super.onInit(...arguments),elementorFrontend.isEditMode()&&this.interlaceContainers(),this.injectKeyboardHandler()}injectKeyboardHandler(){"nested-accordion.default"===this.getSettings("elementName")&&new s.default({$element:this.$element,toggleTitle:this.clickListener.bind(this)})}interlaceContainers(){const{$contentContainers:e,$accordionItems:t}=this.getDefaultElements();e.each(((e,n)=>{t[e].appendChild(n)}))}bindEvents(){this.elements.$accordionTitles.on("click",this.clickListener.bind(this))}unbindEvents(){this.elements.$accordionTitles.off()}clickListener(e){e.preventDefault();const t=this.getSettings(),n=e?.currentTarget?.closest(t.selectors.accordionWrapper),i=n.querySelector(t.selectors.accordionItemTitles),r=n.querySelector(t.selectors.accordionContent),{max_items_expended:s}=this.getElementSettings(),{$accordionTitles:o,$accordionItems:a}=this.elements;"one"===s&&this.closeAllItems(a,o),n.open?this.closeAccordionItem(n,i):this.prepareOpenAnimation(n,i,r)}animateItem(e,t,n,i){e.style.overflow="hidden";let r=this.animations.get(e);r&&r.cancel(),r=e.animate({height:[t,n]},{duration:this.getAnimationDuration()}),r.onfinish=()=>this.onAnimationFinish(e,i),this.animations.set(e,r),e.querySelector("summary")?.setAttribute("aria-expanded",i)}closeAccordionItem(e,t){const n=`${e.offsetHeight}px`,i=`${t.offsetHeight}px`;this.animateItem(e,n,i,!1)}prepareOpenAnimation(e,t,n){e.style.overflow="hidden",e.style.height=`${e.offsetHeight}px`,e.open=!0,window.requestAnimationFrame((()=>this.openAccordionItem(e,t,n)))}openAccordionItem(e,t,n){const i=`${e.offsetHeight}px`,r=`${t.offsetHeight+n.offsetHeight}px`;this.animateItem(e,i,r,!0)}onAnimationFinish(e,t){e.open=t,this.animations.set(e,null),e.style.height=e.style.overflow=""}closeAllItems(e,t){t.each(((t,n)=>{this.closeAccordionItem(e[t],n)}))}getAnimationDuration(){const{size:e,unit:t}=this.getElementSettings("n_accordion_animation_duration");return e*("ms"===t?1:1e3)}}t.default=NestedAccordion},7323:(e,t,n)=>{"use strict";var i=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(3090)),s=n(6630);class NestedTabs extends r.default{constructor(){super(...arguments),this.resizeListenerNestedTabs=null}getTabTitleFilterSelector(e){return`[data-tab-index="${e}"]`}getTabContentFilterSelector(e){return`*:nth-child(${e})`}getTabIndex(e){return e.getAttribute("data-tab-index")}getDefaultSettings(){return{selectors:{widgetContainer:".e-n-tabs",tabTitle:".e-n-tab-title",tabContent:".e-n-tabs-content > .e-con",headingContainer:".e-n-tabs-heading",activeTabContentContainers:".e-con.e-active"},classes:{active:"e-active"},ariaAttributes:{titleStateAttribute:"aria-selected",activeTitleSelector:'[aria-selected="true"]'},showTabFn:"show",hideTabFn:"hide",toggleSelf:!1,hidePrevious:!0,autoExpand:!0}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent),$headingContainer:this.findElement(e.headingContainer)}}getKeyboardNavigationSettings(){return this.getSettings()}activateDefaultTab(){const e=this.getSettings(),t=this.getEditSettings("activeItemIndex")||1,n={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(n)}deactivateActiveTab(e){const t=this.getSettings(),n=t.classes.active,i=t.ariaAttributes.activeTitleSelector,r="."+n,s=this.elements.$tabTitles.filter(i),o=this.elements.$tabContents.filter(r);return this.setTabDeactivationAttributes(s,e),o.removeClass(n),o[t.hideTabFn](0,(()=>this.onHideTabContent(o))),o}getTitleActivationAttributes(){return{tabindex:"0",[this.getSettings("ariaAttributes").titleStateAttribute]:"true"}}setTabDeactivationAttributes(e){const t=this.getSettings("ariaAttributes").titleStateAttribute;e.attr({tabindex:"-1",[t]:"false"})}onHideTabContent(){}activateTab(e){const t=this.getSettings(),n=t.classes.active,i="show"===t.showTabFn?0:400;let r=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));if(!r.length){const t=Math.max(e-1,1);r=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))}r.attr(this.getTitleActivationAttributes()),s.addClass(n),s[t.showTabFn](i,(()=>this.onShowTabContent(s)))}onShowTabContent(e){elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate",e),elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")}isActiveTab(e){return"true"===this.elements.$tabTitles.filter('[data-tab-index="'+e+'"]').attr(this.getSettings("ariaAttributes").titleStateAttribute)}onTabClick(e){e.preventDefault(),this.changeActiveTab(e.currentTarget?.getAttribute("data-tab-index"),!0)}getTabEvents(){return{click:this.onTabClick.bind(this)}}getHeadingEvents(){const e=this.elements.$headingContainer[0];return{mousedown:s.changeScrollStatus.bind(this,e),mouseup:s.changeScrollStatus.bind(this,e),mouseleave:s.changeScrollStatus.bind(this,e),mousemove:s.setHorizontalTitleScrollValues.bind(this,e,this.getHorizontalScrollSetting())}}bindEvents(){this.elements.$tabTitles.on(this.getTabEvents()),this.elements.$headingContainer.on(this.getHeadingEvents());const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};this.resizeListenerNestedTabs=s.setHorizontalScrollAlignment.bind(this,e),elementorFrontend.elements.$window.on("resize",this.resizeListenerNestedTabs),elementorFrontend.elements.$window.on("resize",this.setTouchMode.bind(this)),elementorFrontend.elements.$window.on("elementor/nested-tabs/activate",this.reInitSwipers),elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard",this.changeActiveTabByKeyboard.bind(this))}unbindEvents(){this.elements.$tabTitles.off(),this.elements.$headingContainer.off(),this.elements.$tabContents.children().off(),elementorFrontend.elements.$window.off("resize"),elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")}reInitSwipers(e,t){const n=t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);for(const e of n){if(!e.swiper)return;e.swiper.initialized=!1,e.swiper.init()}}onInit(){super.onInit(...arguments),this.getSettings("autoExpand")&&this.activateDefaultTab();const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(e),this.setTouchMode(),"nested-tabs.default"===this.getSettings("elementName")&&new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())}onEditSettingsChange(e,t){"activeItemIndex"===e&&this.changeActiveTab(t,!1)}onElementChange(e){if(this.checkSliderPropsToWatch(e)){const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(e)}}checkSliderPropsToWatch(e){return 0===e.indexOf("horizontal_scroll")||"breakpoint_selector"===e||0===e.indexOf("tabs_justify_horizontal")||0===e.indexOf("tabs_title_space_between")}changeActiveTab(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.isEdit&&this.isElementInTheCurrentDocument())return window.top.$e.run("document/repeater/select",{container:elementor.getContainer(this.$element.attr("data-id")),index:parseInt(e)});const t=this.isActiveTab(e),n=this.getSettings();if(!n.toggleSelf&&t||!n.hidePrevious||this.deactivateActiveTab(e),!n.hidePrevious&&t&&this.deactivateActiveTab(e),!t){if(this.isAccordionVersion())return void this.activateMobileTab(e);this.activateTab(e)}}changeActiveTabByKeyboard(e,t){t.widgetId.toString()===this.getID().toString()&&this.changeActiveTab(t.titleIndex,!0)}activateMobileTab(e){setTimeout((()=>{this.activateTab(e),this.forceActiveTabToBeInViewport(e)}),10)}forceActiveTabToBeInViewport(e){if(!elementorFrontend.isEditMode())return;const t=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e));elementor.helpers.isInViewport(t[0])||t[0].scrollIntoView({block:"center"})}getActiveClass(){return this.getSettings().classes.active}getTabsDirection(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"tabs_justify_horizontal","",e)}getHorizontalScrollSetting(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"horizontal_scroll","",e)}isAccordionVersion(){return"contents"===this.elements.$headingContainer.css("display")}setTouchMode(){const e=this.getSettings("selectors").widgetContainer;if(elementorFrontend.isEditMode()||"resize"===event?.type){const t=["mobile","mobile_extra","tablet","tablet_extra"],n=elementorFrontend.getCurrentDeviceMode();if(-1!==t.indexOf(n))return void this.$element.find(e).attr("data-touch-mode","true")}else if("ontouchstart"in window)return void this.$element.find(e).attr("data-touch-mode","true");this.$element.find(e).attr("data-touch-mode","false")}}t.default=NestedTabs},5089:(e,t,n)=>{"use strict";var i=n(930),r=n(9268),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},1378:(e,t,n)=>{"use strict";var i=n(930),r=String,s=TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+r(e)+" as a prototype")}},6112:(e,t,n)=>{"use strict";var i=n(8759),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},6198:(e,t,n)=>{"use strict";var i=n(4088),r=n(7740),s=n(2871),createMethod=function(e){return function(t,n,o){var a,l=i(t),c=s(l),u=r(o,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},2306:(e,t,n)=>{"use strict";var i=n(8240),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},375:(e,t,n)=>{"use strict";var i=n(2371),r=n(930),s=n(2306),o=n(211)("toStringTag"),a=Object,l="Arguments"==s(function(){return arguments}());e.exports=i?s:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),o))?n:l?s(t):"Object"==(i=s(t))&&r(t.callee)?"Arguments":i}},8474:(e,t,n)=>{"use strict";var i=n(9606),r=n(6095),s=n(4399),o=n(7826);e.exports=function(e,t,n){for(var a=r(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];i(e,d)||n&&i(n,d)||l(e,d,c(t,d))}}},2585:(e,t,n)=>{"use strict";var i=n(5283),r=n(7826),s=n(5736);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5736:e=>{"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1343:(e,t,n)=>{"use strict";var i=n(930),r=n(7826),s=n(3712),o=n(9444);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(i(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(e){}l?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9444:(e,t,n)=>{"use strict";var i=n(2086),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},5283:(e,t,n)=>{"use strict";var i=n(3677);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7886:e=>{"use strict";var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},821:(e,t,n)=>{"use strict";var i=n(2086),r=n(8759),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4999:e=>{"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1448:(e,t,n)=>{"use strict";var i,r,s=n(2086),o=n(4999),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=(i=u.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(!(i=o.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/))&&(r=+i[1]),e.exports=r},8684:e=>{"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79:(e,t,n)=>{"use strict";var i=n(8240),r=Error,s=i("".replace),o=String(r("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!r.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},8395:(e,t,n)=>{"use strict";var i=n(2585),r=n(79),s=n(2114),o=Error.captureStackTrace;e.exports=function(e,t,n,a){s&&(o?o(e,t):i(e,"stack",r(n,a)))}},2114:(e,t,n)=>{"use strict";var i=n(3677),r=n(5736);e.exports=!i((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},1695:(e,t,n)=>{"use strict";var i=n(2086),r=n(4399).f,s=n(2585),o=n(1343),a=n(9444),l=n(8474),c=n(7189);e.exports=function(e,t){var n,u,d,h,g,p=e.target,f=e.global,m=e.stat;if(n=f?i:m?i[p]||a(p,{}):(i[p]||{}).prototype)for(u in t){if(h=t[u],d=e.dontCallGetSet?(g=r(n,u))&&g.value:n[u],!c(f?u:p+(m?".":"#")+u,e.forced)&&void 0!==d){if(typeof h==typeof d)continue;l(h,d)}(e.sham||d&&d.sham)&&s(h,"sham",!0),o(n,u,h,e)}}},3677:e=>{"use strict";e.exports=function(e){try{return!!e()}catch(e){return!0}}},7258:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype,s=r.apply,o=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},6059:(e,t,n)=>{"use strict";var i=n(3677);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9413:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},4398:(e,t,n)=>{"use strict";var i=n(5283),r=n(9606),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),l=a&&"something"===function something(){}.name,c=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1518:(e,t,n)=>{"use strict";var i=n(8240),r=n(5089);e.exports=function(e,t,n){try{return i(r(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},8240:(e,t,n)=>{"use strict";var i=n(6059),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);e.exports=i?o:function(e){return function(){return s.apply(e,arguments)}}},563:(e,t,n)=>{"use strict";var i=n(2086),r=n(930);e.exports=function(e,t){return arguments.length<2?(n=i[e],r(n)?n:void 0):i[e]&&i[e][t];var n}},2964:(e,t,n)=>{"use strict";var i=n(5089),r=n(1858);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},2086:function(e,t,n){"use strict";var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},9606:(e,t,n)=>{"use strict";var i=n(8240),r=n(3060),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){return s(r(e),t)}},7153:e=>{"use strict";e.exports={}},6761:(e,t,n)=>{"use strict";var i=n(5283),r=n(3677),s=n(821);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5974:(e,t,n)=>{"use strict";var i=n(8240),r=n(3677),s=n(2306),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},5070:(e,t,n)=>{"use strict";var i=n(930),r=n(8759),s=n(7530);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9277:(e,t,n)=>{"use strict";var i=n(8240),r=n(930),s=n(4489),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8945:(e,t,n)=>{"use strict";var i=n(8759),r=n(2585);e.exports=function(e,t){i(t)&&"cause"in t&&r(e,"cause",t.cause)}},3278:(e,t,n)=>{"use strict";var i,r,s,o=n(640),a=n(2086),l=n(8759),c=n(2585),u=n(9606),d=n(4489),h=n(8944),g=n(7153),p="Object already initialized",f=a.TypeError,m=a.WeakMap;if(o||d.state){var v=d.state||(d.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,i=function(e,t){if(v.has(e))throw f(p);return t.facade=e,v.set(e,t),t},r=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var b=h("state");g[b]=!0,i=function(e,t){if(u(e,b))throw f(p);return t.facade=e,c(e,b,t),t},r=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:i,get:r,has:s,enforce:function(e){return s(e)?r(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=r(t)).type!==e)throw f("Incompatible receiver, "+e+" required");return n}}}},930:(e,t,n)=>{"use strict";var i=n(7886),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},7189:(e,t,n)=>{"use strict";var i=n(3677),r=n(930),s=/#|\.prototype\./,isForced=function(e,t){var n=a[o(e)];return n==c||n!=l&&(r(t)?i(t):!!t)},o=isForced.normalize=function(e){return String(e).replace(s,".").toLowerCase()},a=isForced.data={},l=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},1858:e=>{"use strict";e.exports=function(e){return null==e}},8759:(e,t,n)=>{"use strict";var i=n(930),r=n(7886),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},3296:e=>{"use strict";e.exports=!1},2071:(e,t,n)=>{"use strict";var i=n(563),r=n(930),s=n(5516),o=n(1876),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},2871:(e,t,n)=>{"use strict";var i=n(4005);e.exports=function(e){return i(e.length)}},3712:(e,t,n)=>{"use strict";var i=n(8240),r=n(3677),s=n(930),o=n(9606),a=n(5283),l=n(4398).CONFIGURABLE,c=n(9277),u=n(3278),d=u.enforce,h=u.get,g=String,p=Object.defineProperty,f=i("".slice),m=i("".replace),v=i([].join),b=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),S=e.exports=function(e,t,n){"Symbol("===f(g(t),0,7)&&(t="["+m(g(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),b&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var i=d(e);return o(i,"source")||(i.source=v(y,"string"==typeof t?t:"")),e};Function.prototype.toString=S((function toString(){return s(this)&&h(this).source||c(this)}),"toString")},5681:e=>{"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function trunc(e){var i=+e;return(i>0?n:t)(i)}},1879:(e,t,n)=>{"use strict";var i=n(4059);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},7826:(e,t,n)=>{"use strict";var i=n(5283),r=n(6761),s=n(8202),o=n(6112),a=n(2258),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",g="writable";t.f=i?s?function defineProperty(e,t,n){if(o(e),t=a(t),o(n),"function"==typeof e&&"prototype"===t&&"value"in n&&g in n&&!n[g]){var i=u(e,t);i&&i[g]&&(e[t]=n.value,n={configurable:h in n?n[h]:i[h],enumerable:d in n?n[d]:i[d],writable:!1})}return c(e,t,n)}:c:function defineProperty(e,t,n){if(o(e),t=a(t),o(n),r)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4399:(e,t,n)=>{"use strict";var i=n(5283),r=n(9413),s=n(7446),o=n(5736),a=n(4088),l=n(2258),c=n(9606),u=n(6761),d=Object.getOwnPropertyDescriptor;t.f=i?d:function getOwnPropertyDescriptor(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(e){}if(c(e,t))return o(!r(s.f,e,t),e[t])}},62:(e,t,n)=>{"use strict";var i=n(1352),r=n(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return i(e,r)}},6952:(e,t)=>{"use strict";t.f=Object.getOwnPropertySymbols},5516:(e,t,n)=>{"use strict";var i=n(8240);e.exports=i({}.isPrototypeOf)},1352:(e,t,n)=>{"use strict";var i=n(8240),r=n(9606),s=n(4088),o=n(6198).indexOf,a=n(7153),l=i([].push);e.exports=function(e,t){var n,i=s(e),c=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&l(u,n);for(;t.length>c;)r(i,n=t[c++])&&(~o(u,n)||l(u,n));return u}},7446:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function propertyIsEnumerable(e){var t=i(this,e);return!!t&&t.enumerable}:n},7530:(e,t,n)=>{"use strict";var i=n(1518),r=n(6112),s=n(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=i(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},7999:(e,t,n)=>{"use strict";var i=n(9413),r=n(930),s=n(8759),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},6095:(e,t,n)=>{"use strict";var i=n(563),r=n(8240),s=n(62),o=n(6952),a=n(6112),l=r([].concat);e.exports=i("Reflect","ownKeys")||function ownKeys(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},1632:(e,t,n)=>{"use strict";var i=n(7826).f;e.exports=function(e,t,n){n in e||i(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},9586:(e,t,n)=>{"use strict";var i=n(1858),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},8944:(e,t,n)=>{"use strict";var i=n(9197),r=n(5422),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},4489:(e,t,n)=>{"use strict";var i=n(2086),r=n(9444),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},9197:(e,t,n)=>{"use strict";var i=n(3296),r=n(4489);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5558:(e,t,n)=>{"use strict";var i=n(1448),r=n(3677),s=n(2086).String;e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},7740:(e,t,n)=>{"use strict";var i=n(9502),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},4088:(e,t,n)=>{"use strict";var i=n(5974),r=n(9586);e.exports=function(e){return i(r(e))}},9502:(e,t,n)=>{"use strict";var i=n(5681);e.exports=function(e){var t=+e;return t!=t||0===t?0:i(t)}},4005:(e,t,n)=>{"use strict";var i=n(9502),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},3060:(e,t,n)=>{"use strict";var i=n(9586),r=Object;e.exports=function(e){return r(i(e))}},1288:(e,t,n)=>{"use strict";var i=n(9413),r=n(8759),s=n(2071),o=n(2964),a=n(7999),l=n(211),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=i(l,e,t),!r(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2258:(e,t,n)=>{"use strict";var i=n(1288),r=n(2071);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},2371:(e,t,n)=>{"use strict";var i={};i[n(211)("toStringTag")]="z",e.exports="[object z]"===String(i)},4059:(e,t,n)=>{"use strict";var i=n(375),r=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},9268:e=>{"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},5422:(e,t,n)=>{"use strict";var i=n(8240),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},1876:(e,t,n)=>{"use strict";var i=n(5558);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(e,t,n)=>{"use strict";var i=n(5283),r=n(3677);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},640:(e,t,n)=>{"use strict";var i=n(2086),r=n(930),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},211:(e,t,n)=>{"use strict";var i=n(2086),r=n(9197),s=n(9606),o=n(5422),a=n(5558),l=n(1876),c=i.Symbol,u=r("wks"),d=l?c.for||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:d("Symbol."+e)),u[e]}},1557:(e,t,n)=>{"use strict";var i=n(563),r=n(9606),s=n(2585),o=n(5516),a=n(7530),l=n(8474),c=n(1632),u=n(5070),d=n(1879),h=n(8945),g=n(8395),p=n(5283),f=n(3296);e.exports=function(e,t,n,m){var v="stackTraceLimit",b=m?2:1,y=e.split("."),S=y[y.length-1],w=i.apply(null,y);if(w){var E=w.prototype;if(!f&&r(E,"cause")&&delete E.cause,!n)return w;var T=i("Error"),C=t((function(e,t){var n=d(m?t:e,void 0),i=m?new w(e):new w;return void 0!==n&&s(i,"message",n),g(i,C,i.stack,2),this&&o(E,this)&&u(i,this,C),arguments.length>b&&h(i,arguments[b]),i}));if(C.prototype=E,"Error"!==S?a?a(C,T):l(C,T,{name:!0}):p&&v in w&&(c(C,w,v),c(C,w,"prepareStackTrace")),l(C,w),!f)try{E.name!==S&&s(E,"name",S),E.constructor=C}catch(e){}return C}}},740:(e,t,n)=>{"use strict";var i=n(1695),r=n(2086),s=n(7258),o=n(1557),a="WebAssembly",l=r[a],c=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(e,t){var n={};n[e]=o(e,t,c),i({global:!0,constructor:!0,arity:1,forced:c},n)},exportWebAssemblyErrorCauseWrapper=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),i({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};exportGlobalErrorCauseWrapper("Error",(function(e){return function Error(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(e){return function EvalError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(e){return function RangeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(e){return function ReferenceError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(e){return function SyntaxError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(e){return function TypeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(e){return function URIError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(e){return function CompileError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(e){return function LinkError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(e){return function RuntimeError(t){return s(e,this,arguments)}}))},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=6412,e(e.s=t)}]);
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2 */
!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2 */
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&(0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
/* From https://soledaddemo.pencidesign.net/soledad-modern-news-magazine/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.19.4 */
/*! elementor - v3.19.0 - 28-02-2024 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(8135));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:i.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,o=t.elementorType,i=this.documentClasses[o]||this.documentClasses.base;this.documents[n]=new i({$element:e,id:n})}}t.default=_default},9804:(e,t,n)=>{var o=n(3203),i=o(n(6397)),s=o(n(8704)),r=o(n(4985)),a=o(n(7537)),l=o(n(355)),d=o(n(2804)),c=o(n(3384));e.exports=function(e){var t=this;const o={};this.elementsHandlers={"accordion.default":()=>n.e(209).then(n.bind(n,8470)),"alert.default":()=>n.e(745).then(n.bind(n,9269)),"counter.default":()=>n.e(120).then(n.bind(n,7884)),"progress.default":()=>n.e(192).then(n.bind(n,1351)),"tabs.default":()=>n.e(520).then(n.bind(n,9459)),"toggle.default":()=>n.e(181).then(n.bind(n,2)),"video.default":()=>n.e(791).then(n.bind(n,5363)),"image-carousel.default":()=>n.e(268).then(n.bind(n,5914)),"text-editor.default":()=>n.e(357).then(n.bind(n,1327)),"wp-widget-media_audio.default":()=>n.e(52).then(n.bind(n,7602))},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>Promise.resolve().then(n.bind(n,7323))),elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-accordion.default"]=()=>Promise.resolve().then(n.bind(n,32)));const addElementsHandlers=()=>{this.elementsHandlers.section=[d.default,...s.default,l.default,c.default],this.elementsHandlers.container=[...s.default],elementorFrontend.isEditMode()&&this.elementsHandlers.container.push(...r.default),this.elementsHandlers.column=a.default,e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const o=n[1]||null;this.attachHandler(e,t,o)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(t,n){const i=n.$element.data("model-cid");let s;if(i){s=t.prototype.getConstructorID(),o[i]||(o[i]={});const e=o[i][s];e&&e.onDestroy()}const r=new t(n);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`,n.$element,e),i&&(o[i][s]=r)},this.attachHandler=(e,n,o)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";o=o?"."+o:"";const i=e+o;elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e,elementName:i},!0);else{const o=n();if(!o)return;o instanceof Promise?o.then((n=>{let{default:o}=n;t.addHandler(o,{$element:e,elementName:i},!0)})):t.addHandler(o,{$element:e,elementName:i},!0)}}))}(e,n,o)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(elementorFrontend.config.is_static)return;const n=jQuery(t),o=n.attr("data-element_type");if(o&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`,n,e),"widget"===o)){const t=n.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,n,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",i.default),addElementsHandlers()}}},5654:(e,t,n)=>{var o=n(3203);n(59);var i=o(n(9220)),s=o(n(5107)),r=o(n(3308)),a=o(n(1604)),l=o(n(1911)),d=o(n(4773)),c=o(n(2064)),u=o(n(8628)),h=o(n(8646)),m=o(n(6866)),g=o(n(4375)),p=o(n(6404)),f=o(n(6046)),v=o(n(1322)),b=n(6028);const _=n(9469),y=n(9804),w=n(3346);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0"),!1}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()","3.0.0","getKitSettings() and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const o=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let i=o.indexOf(e);for(;i>0;){const e=t[n+"_"+o[i]];if(e||0===e)return e;i--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let o;return o=e[n]?e[n]:e[t],o}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,anchors:new w,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:r.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:p.default,controls:new v.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(r.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,o){if(o||(o=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,o),o instanceof jQuery){const i=t+"."+e;o.on(i,n)}else o.on(t,n,e);else o.on(t,n)}removeListeners(e,t,n,o){if(o||(o=this.elements.$window),o instanceof jQuery){const i=t+"."+e;o.off(i,n)}else o.off(t,n,e)}debounce(e,t){let n;return function(){const o=this,i=arguments,s=!n;clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(o,i)}),t),s&&e.apply(o,i)}}waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function(){const e=this.element||this,o=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),o}),n)}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:f.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new _,this.breakpoints=new g.default(this.config.responsive),this.storage=new s.default,this.elementsHandler=new y(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),p.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new i.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},4058:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:`elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",swiperPreloader:"swiper-lazy-preloader",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}getSwiperOptions(){const e=this.getElementSettings(),t={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===e.background_slideshow_loop,speed:e.background_slideshow_transition_duration,autoplay:{delay:e.background_slideshow_slide_duration,stopOnLastSlide:!e.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:()=>{e.background_slideshow_ken_burns&&this.handleKenBurns()}}};switch("yes"===e.background_slideshow_loop&&(t.loopedSlides=this.getSlidesCount()),e.background_slideshow_slide_transition){case"fade":t.effect="fade",t.fadeEffect={crossFade:!0};break;case"slide_down":t.autoplay.reverseDirection=!0,t.direction="vertical";break;case"slide_up":t.direction="vertical"}return"yes"===e.background_slideshow_lazyload&&(t.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),t}buildSwiperElements(){const e=this.getSettings("classes"),t=this.getElementSettings(),n="slide_left"===t.background_slideshow_slide_transition?"ltr":"rtl",o=jQuery("<div>",{class:e.swiperContainer,dir:n}),i=jQuery("<div>",{class:e.swiperWrapper}),s=t.background_slideshow_ken_burns,r="yes"===t.background_slideshow_lazyload;let a=e.slideBackground;if(s){a+=" "+e.kenBurns;const n="in"===t.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";a+=" "+e[n]}r&&(a+=" swiper-lazy"),this.elements.$slides=jQuery(),t.background_slideshow_gallery.forEach((t=>{const n=jQuery("<div>",{class:e.swiperSlide});let o;if(r){const n=jQuery("<div>",{class:e.swiperPreloader});o=jQuery("<div>",{class:a,"data-background":t.url}),o.append(n)}else o=jQuery("<div>",{class:a,style:'background-image: url("'+t.url+'");'});n.append(o),i.append(n),this.elements.$slides=this.elements.$slides.add(n)})),o.append(i),this.$element.prepend(o),this.elements.$backgroundSlideShowContainer=o}async initSlider(){if(1>=this.getSlidesCount())return;const e=this.getElementSettings(),t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns()}activate(){this.buildSwiperElements(),this.initSlider()}deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}onInit(){super.onInit(),this.getElementSettings("background_slideshow_gallery")&&this.run()}onDestroy(){super.onDestroy(),this.deactivate()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundSlideshow},9501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}calcVideosSize(e){let t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);const n=this.elements.$backgroundVideoContainer.outerWidth(),o=this.elements.$backgroundVideoContainer.outerHeight(),i=t.split(":"),s=i[0]/i[1],r=n/o>s;return{width:r?n:o*s,height:r?n/s:o}}changeVideoSize(){if("hosted"!==this.videoType&&!this.player)return;let e;if("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),!e)return;const t=this.calcVideosSize(e);e.width(t.width).height(t.height)}startVideoLoop(e){if(!this.player.getIframe().contentWindow)return;const t=this.getElementSettings(),n=t.background_video_start||0,o=t.background_video_end;if(!t.background_play_once||e){if(this.player.seekTo(n),o){setTimeout((()=>{this.startVideoLoop(!1)}),1e3*(o-n+1))}}else this.player.stopVideo()}prepareVimeoVideo(e,t){const n=this.getElementSettings(),o={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!0,background:!0,muted:!0};n.background_privacy_mode&&(o.dnt=!0),this.player=new e.Player(this.elements.$backgroundVideoContainer,o),this.handleVimeoStartEndTimes(n),this.player.ready().then((()=>{jQuery(this.player.element).addClass("elementor-background-video-embed"),this.changeVideoSize()}))}handleVimeoStartEndTimes(e){e.background_video_start&&this.player.on("play",(t=>{0===t.seconds&&this.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(t=>{e.background_video_end&&e.background_video_end<t.seconds&&(e.background_play_once?this.player.pause():this.player.setCurrentTime(e.background_video_start)),this.player.getDuration().then((n=>{e.background_video_start&&!e.background_video_end&&t.seconds>n-.5&&this.player.setCurrentTime(e.background_video_start)}))}))}prepareYTVideo(e,t){const n=this.elements.$backgroundVideoContainer,o=this.getElementSettings();let i=e.PlayerState.PLAYING;window.chrome&&(i=e.PlayerState.UNSTARTED);const s={videoId:t,events:{onReady:()=>{this.player.mute(),this.changeVideoSize(),this.startVideoLoop(!0),this.player.playVideo()},onStateChange:t=>{switch(t.data){case i:n.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:"function"==typeof this.player.seekTo&&this.player.seekTo(o.background_video_start||0),o.background_play_once&&this.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};o.background_privacy_mode&&(s.host="https://www.youtube-nocookie.com",s.origin=window.location.hostname),n.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],s)}activate(){let e,t=this.getElementSettings("background_video_link");const n=this.getElementSettings("background_play_once");if(-1!==t.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(t),this.apiProvider.onApiReady((n=>{"youtube"===this.videoType&&this.prepareYTVideo(n,e),"vimeo"===this.videoType&&this.prepareVimeoVideo(n,t)}));else{this.videoType="hosted";const e=this.getElementSettings("background_video_start"),o=this.getElementSettings("background_video_end");(e||o)&&(t+="#t="+(e||0)+(o?","+o:"")),this.elements.$backgroundVideoHosted.attr("src",t).one("canplay",this.changeVideoSize.bind(this)),n&&this.elements.$backgroundVideoHosted.on("ended",(()=>{this.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc",this.changeVideoSize)}deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}run(){const e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}onInit(){super.onInit(...arguments),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},8704:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4058)),s=o(n(9501)),r=[i.default,s.default];t.default=r},7537:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[o(n(4058)).default];t.default=i},4985:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[()=>n.e(413).then(n.bind(n,2929)),()=>n.e(413).then(n.bind(n,343)),()=>n.e(413).then(n.bind(n,8073))];t.default=o},6397:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),o=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),o)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},355:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode()}isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}isOverflowHidden(){return"hidden"===this.$element.css("overflow")}getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;const e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}setHandlesPosition(){const e=elementor.documents.getCurrent();if(!e||!e.container.isEditable())return;const t="elementor-section--handles-inside";if(elementor.settings.page.model.attributes.scroll_snap)return void this.$element.addClass(t);const n=this.isOverflowHidden();if(!n&&!this.isFirstSection())return;const o=n?0:this.getOffset();if(o<25){this.$element.addClass(t);const e=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");o<-5?e.css("top",-o):e.css("top","")}else this.$element.removeClass(t)}onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}t.default=HandlesPosition},3384:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}getDefaultElements(){const e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}isActive(){return elementorFrontend.isEditMode()}getSvgURL(e,t){let n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}buildSVG(e){const t="shape_divider_"+e,n=this.getElementSettings(t),o=this.elements["$"+e+"Container"];if(o.attr("data-shape",n),!n)return void o.empty();let i=n;this.getElementSettings(t+"_negative")&&(i+="-negative");const s=this.getSvgURL(n,i);jQuery.get(s,(e=>{o.empty().append(e.childNodes[0])})),this.setNegative(e)}setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}onInit(){this.isActive(this.getSettings())&&(super.onInit(...arguments),["top","bottom"].forEach((e=>{this.getElementSettings("shape_divider_"+e)&&this.buildSVG(e)})))}onElementChange(e){const t=e.match(/^shape_divider_(top|bottom)$/);if(t)return void this.buildSVG(t[1]);const n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}t.default=Shapes},2804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class StretchedSection extends elementorModules.frontend.handlers.StretchedElement{getStretchedClass(){return"elementor-section-stretched"}getStretchSettingName(){return"stretch_section"}getStretchActiveValue(){return"section-stretched"}}t.default=StretchedSection},3346:(e,t,n)=>{var o=n(6028);e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:(0,o.isScrollSnapActive)()?"body":"html, body"}}),getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks(e){var t,n=e.currentTarget,i=location.pathname===n.pathname;if(location.hostname===n.hostname&&i&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var s=t.offset().top,r=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");r.length>0&&(s-=r.height()),a.length>0&&(s-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),s=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",s),(0,o.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","none"),this.elements.$scrollable.animate({scrollTop:s},this.getSettings("scrollDuration"),"linear",(()=>{(0,o.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","")}))}}},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments)}})},6866:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=new Promise((t=>{const o="style"===e?this.getStyleElement(n.src):this.getScriptElement(n.src);o.onload=()=>t(!0);const i="head"===n.parent?n.parent:"body";document[i].appendChild(o)}))),n.loader}}t.default=AssetsLoader;const n=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",o=elementorFrontendConfig.experimentalFeatures.e_swiper_latest?`${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`},"share-link":{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:o}},style:{}}},1322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let o;return o="object"==typeof e[t]&&n?e[t][n]:e[t],o}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const o=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)||elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===o){const o=this.getControlValue(e,`${t}_widescreen`,n);return o||0===o?o:i}const s=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=o,a=s.indexOf(o),l="";for(;a<=s.length;){if("desktop"===r){l=i;break}const o=`${t}_${r}`,d=this.getControlValue(e,o,n);if(d||0===d){l=d;break}a++,r=s[a]}return l}}},8646:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(723).then(n.t.bind(n,3896,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),o=elementorFrontend.utils.assetsLoader.load("script","share-link");return Promise.all([e,t,o]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),o=elementorFrontend.isEditMode(),i=o&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),s=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(o&&s&&e.preventDefault());if(e.preventDefault(),o&&!elementor.getPreferences("lightbox_in_editor"))return;if(i)return;(this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox).createLightbox(t)}isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},8628:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Swiper{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise((t=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(this.createSwiperInstance(e,this.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((o=>{const i=parseInt(o);let s;if(i===t.mobile.value||i+1===t.mobile.value)s=0;else if(!t.widescreen||i!==t.widescreen.value&&i+1!==t.widescreen.value){const e=n.findIndex((e=>i===e||i+1===e));s=n[e-1]}else s=i;e.breakpoints[s]=e.breakpoints[o],e.breakpoints[o]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},2064:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5719);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let o={};const i=e.match(/settings=(.+)/);i&&(o=JSON.parse(atob(i[1])));for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];n(o,...r)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},6028:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},4773:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},1911:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4773));class VimeoLoader extends i.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=(e=super.getAutoplayURL(e)).match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},1604:(e,t,n)=>{var o=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(4773));class YoutubeLoader extends i.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},59:(e,t,n)=>{n.p=elementorFrontendConfig.urls.assets+"js/"},4375:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),o=n.length;return e="min"===t[n[o-1]].direction?n[o-2]:n[o-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let o;if(n[0]===e)o=320;else if("widescreen"===e)o=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const i=n.indexOf(e);o=t[n[i-1]].value+1}return o}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},6404:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,o&&e.dispatchEvent(new CustomEvent(o,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;var n=Events;t.default=n},9469:e=>{e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,o,i){var s,r,a;if(n[e][t])if(o)if(s=n[e][t],i)for(a=s.length;a--;)(r=s[a]).callback===o&&r.context===i&&s.splice(a,1);else for(a=s.length;a--;)s[a].callback===o&&s.splice(a,1);else n[e][t]=[]}function _addHook(e,t,o,i,s){var r={callback:o,priority:i,context:s},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===o)return l=!0,!1})),l)return;a.push(r),a=function _hookInsertSort(e){for(var t,n,o,i=1,s=e.length;i<s;i++){for(t=e[i],n=i;(o=e[n-1])&&o.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[r];n[e][t]=a}function _runHook(e,t,o){var i,s,r=n[e][t];if(!r)return"filters"===e&&o[0];if(s=r.length,"filters"===e)for(i=0;i<s;i++)o[0]=r[i].callback.apply(r[i].context,o);else for(i=0;i<s;i++)r[i].callback.apply(r[i].context,o);return"filters"!==e||o[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),o=n.shift();return"string"==typeof o?_runHook("filters",o,n):e},addFilter:function addFilter(t,n,o,i){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,o=parseInt(o||10,10),i),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),o=n.shift();return"string"==typeof o&&_runHook("actions",o,n),e},addAction:function addAction(t,n,o,i){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,o=parseInt(o||10,10),i),e}},e}},3308:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,o=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),i=matchUserAgent("Firefox"),s=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!r&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||o),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d;var u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:i,ie:r,mac:matchUserAgent("Macintosh"),opera:o,safari:s,webkit:matchUserAgent("AppleWebKit")};t.default=u},5107:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let o=n.getItem("elementor");o=o?JSON.parse(o):{},o.__expiration||(o.__expiration={});const i=o.__expiration;let s=[];e?i[e]&&(s=[e]):s=Object.keys(i);let r=!1;return s.forEach((e=>{new Date(i[e])<new Date&&(delete o[e],delete i[e],r=!0)})),r&&this.save(o,t.session),e?o[e]:o}set(e,t,n){n=n||{};const o=this.get(null,n);if(o[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),o.__expiration[e]=t.getTime()}this.save(o,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},6046:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(48).then(n.bind(n,6468))))}}t.default=_default},1855:(e,t,n)=>{var o=n(5516),i=TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},3621:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5719:(e,t,n)=>{var o=n(1695),i=n(2086),s=n(563),r=n(5736),a=n(7826).f,l=n(9606),d=n(1855),c=n(5070),u=n(1879),h=n(3621),m=n(79),g=n(5283),p=n(3296),f="DOMException",v=s("Error"),b=s(f),_=function DOMException(){d(this,y);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),o=new b(t,n),i=v(t);return i.name=f,a(o,"stack",r(1,m(i.stack,1))),c(o,this,_),o},y=_.prototype=b.prototype,w="stack"in v(f),k="stack"in new b(1,2),S=b&&g&&Object.getOwnPropertyDescriptor(i,f),E=!(!S||S.writable&&S.configurable),M=w&&!E&&!k;o({global:!0,constructor:!0,forced:p||M},{DOMException:M?_:b});var C=s(f),A=C.prototype;if(A.constructor!==C)for(var D in p||a(A,"constructor",r(1,C)),h)if(l(h,D)){var $=h[D],R=$.s;l(C,R)||a(C,R,r(6,$.c))}}},e=>{e.O(0,[354],(()=>{return t=5654,e(e.s=t);var t}));e.O()}]);
/* From https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015 */
!function(){var e={343:function(e){"use strict";for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,i=t;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},944:function(e){"use strict";var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},508:function(e,t,n){"use strict";var r=n(944),i=n(343);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var c=0;c<16;++c)t[o+c]=a[c];return t||i(a)}},168:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(699),o=n(752),a=n(104),c=n(508);!function(){function e(e){var t="";if(t=window.location.origin?window.location.origin:"".concat(window.location.protocol,"://").concat(window.location.host),e&&"string"==typeof e)if(0===e.indexOf("/"))t+=e;else try{var n=new URL(e);return"".concat(n.protocol,"://").concat(n.host).concat(n.pathname)}catch(e){}else{var r=window.location.pathname;r&&r.length>0&&(t+=r)}return t}function t(e,t){for(var n in e){var r=e[n];void 0!==t&&("number"!=typeof r&&"string"!=typeof r||(t[n]=r))}}!function(){var n,u,s=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,f="data-cf-beacon",d=document.currentScript||("function"==typeof document.querySelector?document.querySelector("script[".concat(f,"]")):void 0),l=c(),v=[],p=window.__cfBeacon?window.__cfBeacon:{};if(!p||"single"!==p.load){if(d){var m=d.getAttribute(f);if(m)try{p=r(r({},p),JSON.parse(m))}catch(e){}else{var g=d.getAttribute("src");if(g&&"function"==typeof URLSearchParams){var y=new URLSearchParams(g.replace(/^[^\?]+\??/,"")),h=y.get("token");h&&(p.token=h);var T=y.get("spa");p.spa=null===T||"true"===T}}p&&"multi"!==p.load&&(p.load="single"),window.__cfBeacon=p}if(s&&p&&p.token){var w,S,b=!1;document.addEventListener("visibilitychange",(function(){if("hidden"===document.visibilityState){if(L&&A()){var t=e();(null==w?void 0:w.url)==t&&(null==w?void 0:w.triggered)||P(),_(t)}!b&&w&&(b=!0,B())}else"visible"===document.visibilityState&&(new Date).getTime()}));var E={};"function"==typeof PerformanceObserver&&((0,a.onLCP)(x),(0,a.onFID)(x),(0,a.onFCP)(x),(0,a.onINP)(x),(0,a.onTTFB)(x),PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes("layout-shift")&&(0,a.onCLS)(x));var L=p&&(void 0===p.spa||!0===p.spa),C=p.send&&p.send.to?p.send.to:void 0===p.version?"https://cloudflareinsights.com/cdn-cgi/rum":null,P=function(r){var a=function(r){var o,a,c=s.timing,u=s.memory,f=r||e(),d={memory:{},timings:{},resources:[],referrer:(o=document.referrer||"",a=v[v.length-1],L&&w&&a?a.url:o),eventType:i.EventType.Load,firstPaint:0,firstContentfulPaint:0,startTime:F(),versions:{fl:p?p.version:"",js:"2024.6.1",timings:1},pageloadId:l,location:f,nt:S,serverTimings:I()};if(null==n){if("function"==typeof s.getEntriesByType){var m=s.getEntriesByType("navigation");m&&Array.isArray(m)&&m.length>0&&(d.timingsV2={},d.versions.timings=2,d.dt=m[0].deliveryType,delete d.timings,t(m[0],d.timingsV2))}1===d.versions.timings&&t(c,d.timings),t(u,d.memory)}else O(d);return d.firstPaint=k("first-paint"),d.firstContentfulPaint=k("first-contentful-paint"),p&&(p.icTag&&(d.icTag=p.icTag),d.siteToken=p.token),void 0!==n&&(delete d.timings,delete d.memory),d}(r);a&&p&&(a.resources=[],p&&((0,o.sendObjectBeacon)("",a,(function(){}),!1,C),void 0!==p.forward&&void 0!==p.forward.url&&(0,o.sendObjectBeacon)("",a,(function(){}),!1,p.forward.url)))},B=function(){var t=function(){var t=s.getEntriesByType("navigation")[0],n="";try{n="function"==typeof s.getEntriesByType?new URL(null==t?void 0:t.name).pathname:u?new URL(u).pathname:window.location.pathname}catch(e){}var r={referrer:document.referrer||"",eventType:i.EventType.WebVitalsV2,versions:{js:"2024.6.1"},pageloadId:l,location:e(),landingPath:n,startTime:F(),nt:S,serverTimings:I()};return p&&(p.version&&(r.versions.fl=p.version),p.icTag&&(r.icTag=p.icTag),r.siteToken=p.token),E&&["lcp","fid","cls","fcp","ttfb","inp"].forEach((function(e){r[e]={value:-1,path:void 0},E[e]&&void 0!==E[e].value&&(r[e]=E[e])})),O(r),r}();p&&(0,o.sendObjectBeacon)("",t,(function(){}),!0,C)},R=function(){var t=window.__cfRl&&window.__cfRl.done||window.__cfQR&&window.__cfQR.done;t?t.then(P):P(),w={id:l,url:e(),ts:(new Date).getTime(),triggered:!0}};"complete"===window.document.readyState?R():window.addEventListener("load",(function(){window.setTimeout(R)}));var A=function(){return L&&0===v.filter((function(e){return e.id===l})).length},_=function(e){v.push({id:l,url:e,ts:(new Date).getTime()}),v.length>3&&v.shift()};L&&(u=e(),function(t){var r=t.pushState;if(r){var i=function(){l=c()};t.pushState=function(o,a,c){n=e(c);var u=e(),s=!0;return n==u&&(s=!1),s&&(A()&&((null==w?void 0:w.url)==u&&(null==w?void 0:w.triggered)||P(u),_(u)),i()),r.apply(t,[o,a,c])},window.addEventListener("popstate",(function(t){A()&&((null==w?void 0:w.url)==n&&(null==w?void 0:w.triggered)||P(n),_(n)),n=e(),i()}))}}(window.history))}}function x(e){var t,n,r,i,o,a,c,u=window.location.pathname;switch(S||(S=e.navigationType),"INP"!==e.name&&(E[e.name.toLowerCase()]={value:e.value,path:u}),e.name){case"CLS":(c=e.attribution)&&E.cls&&(E.cls.element=c.largestShiftTarget,E.cls.currentRect=null===(t=c.largestShiftSource)||void 0===t?void 0:t.currentRect,E.cls.previousRect=null===(n=c.largestShiftSource)||void 0===n?void 0:n.previousRect);break;case"FID":(c=e.attribution)&&E.fid&&(E.fid.element=c.eventTarget,E.fid.name=c.eventType);break;case"LCP":(c=e.attribution)&&E.lcp&&(E.lcp.element=c.element,E.lcp.size=null===(r=c.lcpEntry)||void 0===r?void 0:r.size,E.lcp.url=c.url,E.lcp.rld=c.resourceLoadDelay,E.lcp.rlt=c.resourceLoadTime,E.lcp.erd=c.elementRenderDelay,E.lcp.it=null===(i=c.lcpResourceEntry)||void 0===i?void 0:i.initiatorType,E.lcp.fp=null===(a=null===(o=c.lcpEntry)||void 0===o?void 0:o.element)||void 0===a?void 0:a.getAttribute("fetchpriority"));break;case"INP":(null==E.inp||Number(E.inp.value)<Number(e.value))&&(E.inp={value:Number(e.value),path:u},(c=e.attribution)&&E.inp&&(E.inp.element=c.eventTarget,E.inp.name=c.eventType))}}function F(){return s.timeOrigin}function I(){if(p&&p.serverTiming){for(var e=[],t=0,n=["navigation","resource"];t<n.length;t++)for(var r=n[t],i=0,o=s.getEntriesByType(r);i<o.length;i++){var a=o[i],c=a.name,u=a.serverTiming;if(u){if("resource"===r){var f=p.serverTiming.location_startswith;if(!f||!Array.isArray(f))continue;for(var d=!1,l=0,v=f;l<v.length;l++){var m=v[l];if(c.startsWith(m)){d=!0;break}}if(!d)continue}for(var g=0,y=u;g<y.length;g++){var h=y[g],T=h.name,w=h.description,S=h.duration;if(p.serverTiming.name&&p.serverTiming.name[T])try{var b=new URL(c);e.push({location:"resource"===r?"".concat(b.origin).concat(b.pathname):void 0,name:T,dur:S,desc:w})}catch(e){}}}}return e}}function O(e){if("function"==typeof s.getEntriesByType){var n=s.getEntriesByType("navigation"),r={};e.timingsV2={},n&&n[0]&&(n[0].nextHopProtocol&&(r.nextHopProtocol=n[0].nextHopProtocol),n[0].transferSize&&(r.transferSize=n[0].transferSize),n[0].decodedBodySize&&(r.decodedBodySize=n[0].decodedBodySize),e.dt=n[0].deliveryType),t(r,e.timingsV2)}}function k(e){var t;if("first-contentful-paint"===e&&E.fcp&&E.fcp.value)return E.fcp.value;if("function"==typeof s.getEntriesByType){var n=null===(t=s.getEntriesByType("paint"))||void 0===t?void 0:t.filter((function(t){return t.name===e}))[0];return n?n.startTime:0}return 0}}()}()},752:function(e,t){"use strict";t.__esModule=!0,t.sendObjectBeacon=void 0,t.sendObjectBeacon=function(e,t,n,r,i){void 0===r&&(r=!1),void 0===i&&(i=null);var o=i||(t.siteToken&&t.versions.fl?"/cdn-cgi/rum?".concat(e):"/cdn-cgi/beacon/performance?".concat(e)),a=!0;if(navigator&&"string"==typeof navigator.userAgent)try{var c=navigator.userAgent.match(/Chrome\/([0-9]+)/);c&&c[0].toLowerCase().indexOf("chrome")>-1&&parseInt(c[1])<81&&(a=!1)}catch(e){}if(navigator&&"function"==typeof navigator.sendBeacon&&a&&r){t.st=1;var u=JSON.stringify(t),s=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);null==s||s(o,new Blob([u],{type:"application/json"}))}else{t.st=2,u=JSON.stringify(t);var f=new XMLHttpRequest;n&&(f.onreadystatechange=function(){4==this.readyState&&204==this.status&&n()}),f.open("POST",o,!0),f.setRequestHeader("content-type","application/json"),f.send(u)}}},699:function(e,t){"use strict";var n,r;t.__esModule=!0,t.FetchPriority=t.EventType=void 0,(r=t.EventType||(t.EventType={}))[r.Load=1]="Load",r[r.Additional=2]="Additional",r[r.WebVitalsV2=3]="WebVitalsV2",(n=t.FetchPriority||(t.FetchPriority={})).High="high",n.Low="low",n.Auto="auto"},104:function(e,t){!function(e){"use strict";var t,n,r,i,o,a=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},c=function(e){if("loading"===document.readyState)return"loading";var t=a();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},u=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},s=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:u(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},f=-1,d=function(){return f},l=function(e){addEventListener("pageshow",(function(t){t.persisted&&(f=t.timeStamp,e(t))}),!0)},v=function(){var e=a();return e&&e.activationStart||0},p=function(e,t){var n=a(),r="navigate";return d()>=0?r="back-forward-cache":n&&(document.prerendering||v()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},m=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},g=function(e,t,n,r){var i,o;return function(a){t.value>=0&&(a||r)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},h=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},T=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},w=-1,S=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},b=function(e){"hidden"===document.visibilityState&&w>-1&&(w="visibilitychange"===e.type?e.timeStamp:0,L())},E=function(){addEventListener("visibilitychange",b,!0),addEventListener("prerenderingchange",b,!0)},L=function(){removeEventListener("visibilitychange",b,!0),removeEventListener("prerenderingchange",b,!0)},C=function(){return w<0&&(w=S(),E(),l((function(){setTimeout((function(){w=S(),E()}),0)}))),{get firstHiddenTime(){return w}}},P=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},B=[1800,3e3],R=function(e,t){t=t||{},P((function(){var n,r=C(),i=p("FCP"),o=m("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-v(),0),i.entries.push(e),n(!0)))}))}));o&&(n=g(e,i,B,t.reportAllChanges),l((function(r){i=p("FCP"),n=g(e,i,B,t.reportAllChanges),y((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},A=[.1,.25],_={passive:!0,capture:!0},x=new Date,F=function(e,i){t||(t=i,n=e,r=new Date,k(removeEventListener),I())},I=function(){if(n>=0&&n<r-x){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};i.forEach((function(t){t(e)})),i=[]}},O=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){F(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,_),removeEventListener("pointercancel",r,_)};addEventListener("pointerup",n,_),addEventListener("pointercancel",r,_)}(t,e):F(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,O,_)}))},M=[100,300],D=function(e,r){r=r||{},P((function(){var o,a=C(),c=p("FID"),u=function(e){e.startTime<a.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),o(!0))},s=function(e){e.forEach(u)},f=m("first-input",s);o=g(e,c,M,r.reportAllChanges),f&&h(T((function(){s(f.takeRecords()),f.disconnect()}))),f&&l((function(){var a;c=p("FID"),o=g(e,c,M,r.reportAllChanges),i=[],n=-1,t=null,k(addEventListener),a=u,i.push(a),I()}))}))},N=0,V=1/0,j=0,q=function(e){e.forEach((function(e){e.interactionId&&(V=Math.min(V,e.interactionId),j=Math.max(j,e.interactionId),N=j?(j-V)/7+1:0)}))},H=function(){return o?N:performance.interactionCount||0},z=function(){"interactionCount"in performance||o||(o=m("event",q,{type:"event",buffered:!0,durationThreshold:0}))},U=[200,500],J=0,W=function(){return H()-J},Q=[],X={},G=function(e){var t=Q[Q.length-1],n=X[e.interactionId];if(n||Q.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};X[r.id]=r,Q.push(r)}Q.sort((function(e,t){return t.latency-e.latency})),Q.splice(10).forEach((function(e){delete X[e.id]}))}},K=[2500,4e3],Y={},Z=[800,1800],$=function e(t){document.prerendering?P((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},ee=function(e,t){t=t||{};var n=p("TTFB"),r=g(e,n,Z,t.reportAllChanges);$((function(){var i=a();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;n.value=Math.max(o-v(),0),n.entries=[i],r(!0),l((function(){n=p("TTFB",0),(r=g(e,n,Z,t.reportAllChanges))(!0)}))}}))};e.CLSThresholds=A,e.FCPThresholds=B,e.FIDThresholds=M,e.INPThresholds=U,e.LCPThresholds=K,e.TTFBThresholds=Z,e.onCLS=function(e,t){!function(e,t){t=t||{},R(T((function(){var n,r=p("CLS",0),i=0,o=[],a=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=o[0],n=o[o.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,n())},c=m("layout-shift",a);c&&(n=g(e,r,A,t.reportAllChanges),h((function(){a(c.takeRecords()),n(!0)})),l((function(){i=0,r=p("CLS",0),n=g(e,r,A,t.reportAllChanges),y((function(){return n()}))})),setTimeout(n,0))})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:s(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:c(t.startTime)})}}var r;e.attribution={}}(t),e(t)}),t)},e.onFCP=function(e,t){R((function(t){!function(e){if(e.entries.length){var t=a(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:c(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:c(d())}}(t),e(t)}),t)},e.onFID=function(e,t){D((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:s(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:c(t.startTime)}}(t),e(t)}),t)},e.onINP=function(e,t){!function(e,t){t=t||{},P((function(){var n;z();var r,i=p("INP"),o=function(e){e.forEach((function(e){e.interactionId&&G(e),"first-input"===e.entryType&&!Q.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&G(e)}));var t,n=(t=Math.min(Q.length-1,Math.floor(W()/50)),Q[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},a=m("event",o,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});r=g(e,i,U,t.reportAllChanges),a&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),h((function(){o(a.takeRecords()),i.value<0&&W()>0&&(i.value=0,i.entries=[]),r(!0)})),l((function(){Q=[],J=H(),i=p("INP"),r=g(e,i,U,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0],n=e.entries.find((function(e){return e.target}));e.attribution={eventTarget:s(n&&n.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:c(t.startTime)}}else e.attribution={}}(t),e(t)}),t)},e.onLCP=function(e,t){!function(e,t){t=t||{},P((function(){var n,r=C(),i=p("LCP"),o=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-v(),0),i.entries=[t],n())},a=m("largest-contentful-paint",o);if(a){n=g(e,i,K,t.reportAllChanges);var c=T((function(){Y[i.id]||(o(a.takeRecords()),a.disconnect(),Y[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(c,0)}),!0)})),h(c),l((function(r){i=p("LCP"),n=g(e,i,K,t.reportAllChanges),y((function(){i.value=performance.now()-r.timeStamp,Y[i.id]=!0,n(!0)}))}))}}))}((function(t){!function(e){if(e.entries.length){var t=a();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],o=Math.max(0,t.responseStart-n),c=Math.max(o,i?(i.requestStart||i.startTime)-n:0),u=Math.max(c,i?i.responseEnd-n:0),f=Math.max(u,r?r.startTime-n:0),d={element:s(r.element),timeToFirstByte:o,resourceLoadDelay:c-o,resourceLoadTime:u-c,elementRenderDelay:f-u,navigationEntry:t,lcpEntry:r};return r.url&&(d.url=r.url),i&&(d.lcpResourceEntry=i),void(e.attribution=d)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(t),e(t)}),t)},e.onTTFB=function(e,t){ee((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),o=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:o-i,requestTime:e.value-o,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(t),e(t)}),t)}}(t)}},t={};!function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(168)}();