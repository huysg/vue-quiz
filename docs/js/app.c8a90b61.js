(function(t){function e(e){for(var o,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],i[r]&&d.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i={app:0},a=[];function s(t){return u.p+"js/"+({quiz:"quiz"}[t]||t)+"."+{quiz:"209f8a0f"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={quiz:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({quiz:"quiz"}[t]||t)+"."+{quiz:"f4ff210b"}[t]+".css",i=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===o||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b75":function(t,e,n){},"0e79":function(t,e,n){"use strict";var o=n("bd5a"),r=n.n(o);r.a},2662:function(t,e,n){"use strict";var o=n("562e"),r=n.n(o);r.a},"3e25":function(t,e,n){},4042:function(t,e,n){"use strict";var o=n("c608"),r=n.n(o);r.a},"463d":function(t,e,n){"use strict";var o=n("0b75"),r=n.n(o);r.a},"4df1":function(t,e,n){"use strict";var o=n("5a3a"),r=n.n(o);r.a},"562e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("9869"),r=n("5a50"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-dialogs"},t._l(t.dialogs,function(e){return n(t.dialogType(e),{key:e.id,tag:"component",attrs:{title:e.title,content:e.content},on:{confirm:function(n){return t.onConfirm(e)},ok:function(n){return t.onOk(e)},close:function(n){return t.onClose(e)},cancel:function(n){return t.onCancel(e)}}})}),1)},a=[],s=n("acd0"),u=n("80f4"),c=u["a"].AlertModal,l=u["a"].ConfirmationModal,d={name:"AppDialog",components:{AlertModal:c,ConfirmationModal:l},data:function(){return{dialogs:[]}},methods:{onConfirm:function(t){this.handleCallback(t.onConfirm),this.handleClose(t)},onOk:function(t){this.handleCallback(t.onOk),this.handleClose(t)},onCancel:function(t){this.handleCallback(t.onCancel),this.handleClose(t)},onClose:function(t){this.handleCallback(t.onClose),this.handleClose(t)},handleCallback:function(t){"function"===typeof t&&t()},handleClose:function(t){var e=t.id;this.dialogs=this.dialogs.filter(function(t){return t.id!=e})},dialogType:function(t){var e=t.type;switch(e){case r["c"].Confirmation:return"confirmation-modal";case r["c"].Alert:default:return"alert-modal"}},showDialog:function(t){var e=(new Date).getTime(),n=Object(s["a"])({id:e},t);this.dialogs.push(n)}},beforeCreate:function(){var t=this;this.$appDialog.register(function(e){return t.showDialog(e)})},beforeDestroy:function(){this.$appDialog.destroy()}},f=d,p=(n("a9f1"),n("2be6")),h=Object(p["a"])(f,i,a,!1,null,null,null),v=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-snackbars"},[n("transition-group",{attrs:{name:"flip-list"}},t._l(t.messages,function(e){return n("snack-bar",{key:e.id,staticClass:"app-snackbars__snack-bar",attrs:{message:e.message},on:{close:function(n){return t.onClose(e)}}})}),1)],1)},g=[],_=u["a"].SnackBar,b={name:"AppSnackBar",components:{SnackBar:_},data:function(){return{messages:[]}},methods:{close:function(t){var e=this.messages.filter(function(e){return e.id!=t});this.messages=e},onClose:function(t){this.close(t.id)},autoClose:function(t){var e=this;setTimeout(function(){e.close(t.id)},t.timeout)},displayMessage:function(t){var e=t.autoClose||!0,n=(new Date).getTime(),o=Object(s["a"])({id:n,autoClose:e},t);this.messages.push(o),e&&this.autoClose(o)}},beforeCreate:function(){var t=this;this.$appSnackbar.register(function(e){return t.displayMessage(e)})},beforeDestroy:function(){this.$appSnackbar.destroy()}},y=b,C=(n("0e79"),Object(p["a"])(y,m,g,!1,null,null,null)),k=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-bar"},[n("div",{staticClass:"top-bar__left"},[t._t("left",[n("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("back")}}},[t._v("Back")])])],2),n("div",{staticClass:"top-bar__middle"},[t._t("default")],2),n("div",{staticClass:"top-bar__right"},[t._t("right",[n("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("next")}}},[t._v("Next")])])],2)])},E=[],w={name:"TopBar"},j=w,q=(n("7e5d"),Object(p["a"])(j,x,E,!1,null,null,null)),S=q.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages"},[n("router-view"),n("app-dialog"),n("app-snack-bar")],1)},N=[],$={name:"AppRoot"},A=$,T=(n("5c0b"),Object(p["a"])(A,O,N,!1,null,null,null)),L=T.exports,z=n("5f2b"),I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"nav"},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),o("router-link",{attrs:{to:"/quiz"}},[t._v("Quiz")]),t._v("|\n    "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-link",{staticClass:"quiz-nav",attrs:{to:t.QuizPage.path}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("span",{domProps:{innerHTML:t._s(t.QuizPage.description)}})])],1)},M=[],B={name:"home",data:function(){return{QuizPage:Object(s["a"])({},r["g"].welcome,{path:r["b"]})}}},D=B,P=(n("4042"),Object(p["a"])(D,I,M,!1,null,null,null)),R=P.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page"},[n("h1",{staticClass:"my-class-name-is-too-long-for-test"},[t._v("This is an about page")])])}],F=(n("849d"),{}),J=Object(p["a"])(F,Q,U,!1,null,null,null),H=J.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[n("p",[t._v("Not found")])])}],Z=(n("c20d"),{}),V=Object(p["a"])(Z,G,W,!1,null,null,null),X=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz-container"},[n("top-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[t._v(" ")]},proxy:!0},{key:"right",fn:function(){return[t._v(" ")]},proxy:!0}])},[n("h1",{domProps:{textContent:t._s(t.quiz.name)}})]),n("div",{staticClass:"quiz-container__content"},[n("transition",{attrs:{name:"slide"}},[n("router-view")],1)],1)],1)},K=[],tt=(n("ac6a"),n("20d6"),n("7514"),[{id:4,order:4,type:r["d"].NORMAL,time:60,unit:r["i"].DEFAULT,path:"nodejs",name:"NodeJs",description:"NodeJS Quiz"},{id:3,order:3,type:r["d"].RANDOM,time:60,unit:r["i"].DEFAULT,path:"random",name:"Random",totalQuestion:30,description:"Random group description"}]),et=[{group:4,id:1,order:1,path:"1",type:r["f"].SINGLE,question:" Why code written in Node.JS is pretty fast although being written in JavaScript?",result:["A"],answers:[],opts:[{id:"A",text:"Node.JS internally converts JavaScript code to Java based code and then execute the same."},{id:"B",text:"Node.JS internally converts JavaScript code to C based code and then execute the same."},{id:"C",text:"Being built on Google Chrome's V8 JavaScript Engine."},{id:"D",text:"None of the above."}]},{group:4,id:2,path:"4",order:2,type:r["f"].SINGLE,question:"By default, npm installs any dependency in the global mode.",result:["A"],answers:[],opts:[{id:"A",text:"true"},{id:"B",text:"false"}]},{id:3,group:4,order:3,type:r["f"].SINGLE,question:"Which statement executes the code of sample.js file?",result:["B"],opts:[{id:"A",text:"nodejs sample.js"},{id:"B",text:"node sample.js"},{id:"C",text:"sample.js"},{id:"D",text:" None of the above"}]},{id:4,group:4,order:4,type:r["f"].SINGLE,question:"What are the key features of Node.js?",result:["D"],opts:[{id:"A",text:"Real time Data intensive"},{id:"B",text:"Highly scalable servers for Web Applications"},{id:"C",text:"Builds fast and scalable network Applications"},{id:"D",text:"All of the above"}]},{id:5,group:4,order:5,type:r["f"].SINGLE,question:"Why a Node.JS code is pretty fast although being written in JavaScript?",result:["C"],opts:[{id:"A",text:"Node.JS internally converts JavaScript code to Java based code and then execute the same"},{id:"B",text:"Node.JS internally converts JavaScript code to C based code and then execute the same"},{id:"C",text:"Being built on Google Chrome's V8 JavaScript Engine"},{id:"D",text:"None of the above"}]},{id:6,group:4,order:6,type:r["f"].SINGLE,question:"Which module is used to serve static resources in Node.js?",result:["A"],opts:[{id:"A",text:"node-static"},{id:"B",text:"http"},{id:"C",text:"node-resource"},{id:"D",text:"static"}]},{id:7,group:4,order:7,type:r["f"].SINGLE,question:"What should you do in your code to improve your application’s performance?",result:["A"],opts:[{id:"A",text:"Use gzip compression"},{id:"B",text:"Don’t use synchronous functions"},{id:"C",text:"Do logging correctly"},{id:"D",text:"Handle exceptions properly"}]},{id:8,group:4,order:8,type:r["f"].SINGLE,question:"Is console a global object?",result:["A"],opts:[{id:"A",text:"null"},{id:"B",text:"false"},{id:"C",text:"true"},{id:"D",text:"None"}]}],nt=[{group:1,id:1,order:1,path:"1",type:r["f"].SINGLE,question:"How are you, today?",result:["1"],answers:[],opts:[{id:"1",text:"Fine"},{id:"2",text:"Good"},{id:"3",text:"Bad"},{id:"4",text:"Undefined"}]},{group:2,id:2,path:"2",order:2,type:r["f"].MULTIPLE,question:"Which place do you want to visit this summer?",result:["1","2","4"],answers:[],opts:[{id:"1",text:"Da Nang, Hoi An, Hue"},{id:"2",text:"Phu Quoc"},{id:"3",text:"Nha Trang"},{id:"4",text:"Ha noi, Ninh Binh"},{id:"5",text:"At Home"}]}].concat(et),ot={name:"Quiz about Coffee",description:"Make a description here",author:"Google",groups:tt,questions:nt},rt=function(t){return JSON.parse(localStorage.getItem(t))},it=function(t){localStorage.removeItem(t)},at=function(t,e){localStorage.setItem(t,JSON.stringify(e))},st=function(t){return Math.floor(Math.random()*Math.floor(t))},ut=function(){return ot.groups||[]},ct=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r["e"];if(!t)return ot;var o=ot.groups.find(function(e){return e.id==t}),i=[];if(e===r["d"].RANDOM){var a=ot.questions;i=[];var u=0,c=a.length,l=function(){var t=a[st(c)],e=i.findIndex(function(e){return e.id==t.id})>-1;e||i.push(t),u+=1};while(u<n)l()}else i=ot.questions.filter(function(e){return e.group==t});return Object(s["a"])({},o,{questions:i.map(function(t,e){return Object(s["a"])({},t,{no:e+1})})})},lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t[0]},dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t[t.length-1].path==e.path},ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=t.findIndex(function(t){return t.path==e.path});return t[n+1]||{}},pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0!==t.length&&0!==e.length&&t.length===e.length&&t.every(function(t){return e.indexOf(t)>-1})},ht=function(){return rt(r["a"].SOURCE_QUIZ)||[]},vt=function(t){it(r["a"].SOURCE_QUIZ),at(r["a"].SOURCE_QUIZ,t)},mt=function(t){return ht().find(function(e){return e.id==t})},gt=function(t,e){var n=mt(t);return n.questions.find(function(t){return t.id==e})},_t=function(){return rt(r["a"].USER_QUIZ)||[]},bt=function(t){var e=_t(),n=e.findIndex(function(e){return e.id==t.id})>-1;n?e.forEach(function(e){e.id===t.id&&(e=t)}):e.push(t),at(r["a"].USER_QUIZ,e)},yt=function(t){var e=_t();return e.find(function(e){return e.id==t})},Ct=function(t){var e=yt(t),n=0,o=0,r=0,i=e.questions.length;return e.questions.forEach(function(t){"undefined"===typeof t.isMatch?r+=1:t.isMatch?n+=1:o+=1}),{correct:n,wrong:o,missed:r,total:i}},kt=function(t,e){var n=yt(t);return n.questions.find(function(t){return t.id==e})},xt=function(t){at(r["a"].ACTIVED_QUIZ,t)},Et=function(t,e,n){var o=_t(),i=o.find(function(e){return e.id==t});if(i){var a=i.questions.find(function(t){return t.id==e});a.answers=n,a.isMatch=pt(n,a.result),at(r["a"].USER_QUIZ,o)}},wt=function(t){var e=yt(t);return e.questions},jt=function(t){var e=yt(t);return e||mt(t)},qt=function(t,e){var n=kt(t,e);return n||gt(t,e)},St=function(t){var e=[];for(var n in r["g"]){var o=r["g"][n];o&&o.showNav&&e.push(Object(s["a"])({},o,{fullPath:"".concat(t).concat(o.path)}))}return e},Ot={name:"QuizIndexPage",components:{TopBar:S},props:{basePath:{type:String,default:"",required:!0}},data:function(){return{isFetching:!1,showNav:!1,current:{},quiz:{},onLoaded:new o["a"]}},provide:function(){return{QuestionType:r["f"],goToReview:this.goToReview,goToResult:this.goToResult,$service:{listGroup:this.listGroup,start:this.start,saveAndNext:this.saveAndNext,loadQuestions:this.loadQuestionsOfQuiz,loadAnswers:this.loadAnswers,getQuestion:this.getQuestion,getQuizResult:Ct},onLoaded:this.onLoaded}},methods:{goToQuestion:function(t,e){this.$router.push({path:"/quiz/".concat(t,"/question/").concat(e)})},filterAnswers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce(function(t,e){return t.push(e.id),t},[])},listGroup:function(){var t=ut();return vt(t),t},loadAnswers:function(t){return wt(t)},loadQuestionsOfQuiz:function(){return this.quiz.questions},getQuestion:function(t,e){this.quiz=jt(t);var n=qt(t,e);this.triggerOnLoad(n)},start:function(t){var e=ct(t.id,t.type,t.totalQuestion||r["e"]);this.quiz=e,bt(e),xt(e.id);var n=lt(e.questions);this.triggerOnLoad(n),this.goToQuestion(this.quiz.id,n.id)},triggerOnLoad:function(t){var e=this;this.current=t,this.$nextTick(function(){e.onLoaded.$emit("loaded",t)})},saveAndNext:function(t,e){Et(this.quiz.id,t.id,this.filterAnswers(e));var n=dt(this.quiz.questions,this.current);if(n)this.goToReview(this.quiz.id);else{var o=ft(this.quiz.questions,this.current);this.triggerOnLoad(o),this.goToQuestion(this.quiz.id,o.id)}},goToReview:function(t){this.$router.push({path:"/quiz/".concat(t,"/review")})},goToResult:function(t){this.$router.push({path:"/quiz/".concat(t,"/result")})}},mounted:function(){var t=this.$route.query.showNav,e=void 0!==t&&t;this.showNav=e},computed:{navPages:function(){return St(this.basePath)}},beforeDestroy:function(){this.onLoaded.$off("loaded")}},Nt=Ot,$t=(n("6c75"),Object(p["a"])(Nt,Y,K,!1,null,null,null)),At=$t.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz"},[n("h1",[t._v("Opts, something went wrong!")])])}],zt={name:"InvalidPathPage"},It=zt,Mt=Object(p["a"])(It,Tt,Lt,!1,null,null,null),Bt=Mt.exports,Dt=[{path:"/",alias:"/welcome",name:"welcome",component:function(){return n.e("quiz").then(n.bind(null,"3aad"))}},{path:":quizId/questions",name:"questions",props:!0,component:function(){return n.e("quiz").then(n.bind(null,"db26"))}},{path:":quizId/question/:questionId",name:"question",props:!0,component:function(){return n.e("quiz").then(n.bind(null,"b9d5"))}},{path:":quizId/review",name:"review",props:!0,component:function(){return n.e("quiz").then(n.bind(null,"55e7"))}},{path:":quizId/result",name:"result",props:!0,component:function(){return n.e("quiz").then(n.bind(null,"494d"))}},{path:"*",name:"invalid-path",component:Bt}],Pt=function(t){var e=t.basePath,n=void 0===e?"/quiz":e;return{path:n,component:At,props:{basePath:n},children:Dt}};o["a"].use(z["a"]);var Rt=new z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",redirect:"/quiz",component:R},{path:"/about",name:"about",component:H},Pt({basePath:r["b"]}),{path:"*",name:"not-found",component:X}]}),Qt=n("1f29");Object(Qt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("7f7f");var Ut={install:function(t,e){var n=e.name,o=e.component;this.EventBus=new t,t.component(n,o),t.prototype.$appDialog={show:function(t){Ut.EventBus.$emit("show",t)},hide:function(){Ut.EventBus.$emit("hide")},register:function(t){Ut.EventBus.$on("show",t)},destroy:function(){Ut.EventBus.$off("show")}}}},Ft=Ut,Jt={install:function(t,e){var n=e.name,o=e.component,r=e.timeout,i=void 0===r?1e3:r;this.EventBus=new t,t.component(n,o),t.prototype.$appSnackbar={show:function(t){Jt.EventBus.$emit("show",Object(s["a"])({timeout:i},t))},hide:function(){Jt.EventBus.$emit("hide")},register:function(t){Jt.EventBus.$on("show",t)},destroy:function(){Jt.EventBus.$off("show")}}}},Ht=Jt;o["a"].config.productionTip=!1,o["a"].use(Ft,{name:"AppDialog",component:v}),o["a"].use(Ht,{name:"AppSnackBar",component:k,timeout:r["h"]}),new o["a"]({router:Rt,render:function(t){return t(L)}}).$mount("#app")},"5a3a":function(t,e,n){},"5a50":function(t,e,n){"use strict";var o={welcome:{name:"welcome",title:"Welcome",showNav:!0,path:"",description:"Welcome to Quiz"},questions:{name:"questions",title:"All Questions",showNav:!0,path:"/questions",description:"All questions will be here"},review:{name:"review",title:"Review",showNav:!0,path:"/review",description:"Review your questions & answers"},result:{name:"result",title:"Your Result",showNav:!0,path:"/result",description:"Your result"}};n.d(e,"i",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"h",function(){return s}),n.d(e,"c",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return o});var r={Default:"MINUTE",MINUTE:"MINUTE",HOUR:"HOUR"},i={SOURCE_QUIZ:"po-quiz",USER_QUIZ:"user-quiz",ACTIVED_QUIZ:"actived-quiz"},a="/quiz",s=2e3,u={Alert:"alert",Confirmation:"confirm"},c=30,l={DEFAULT:"NORMAL",NORMAL:"NORMAL",RANDOM:"RANDOM"},d={DEFAULT:"SINGLE",SINGLE:"SINGLE",MULTIPLE:"MULTIPLE",FREE_TEXT:"FREE_TEXT"}},"5b5f":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var o=n("ca68"),r=n.n(o);r.a},6310:function(t,e,n){"use strict";var o=n("9bd3"),r=n.n(o);r.a},"69fb":function(t,e,n){"use strict";var o=n("727c"),r=n.n(o);r.a},"6c75":function(t,e,n){"use strict";var o=n("3e25"),r=n.n(o);r.a},"6cf1":function(t,e,n){},"6ea2":function(t,e,n){},"727c":function(t,e,n){},7841:function(t,e,n){"use strict";var o=n("e0b8"),r=n.n(o);r.a},"7e5d":function(t,e,n){"use strict";var o=n("5b5f"),r=n.n(o);r.a},"80f4":function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"Button",function(){return f}),n.d(o,"AliasPath",function(){return _}),n.d(o,"SnackBar",function(){return O}),n.d(o,"TopBar",function(){return z}),n.d(o,"AlertModal",function(){return G}),n.d(o,"ConfirmationModal",function(){return K}),n.d(o,"Modal",function(){return R}),n.d(o,"Card",function(){return x}),n.d(o,"ErrorBoundary",function(){return ot});var r,i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v("Test Ahihi")])},s=[],u={name:"Button",props:{msg:String}},c=u,l=n("2be6"),d=Object(l["a"])(c,a,s,!1,null,"d4e6e714",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"alias-path-container"},[n("h1",[t._v("Alias path configuration")]),n("h2",{domProps:{textContent:t._s(t.msg)}}),t._m(0)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Add "),n("strong",[t._v("vue.config.js")]),t._v(" file to root of project")]),n("li",[t._v("\n      Update the content as you wish, eg:\n      "),n("pre",[t._v("        // vue.config.js\n        const path = require('path');\n        module.exports = {\n          configureWebpack: {\n            resolve: {\n              alias: {\n                \"@your_path\": path.resolve(__dirname, 'src/your_path')\n              }\n            }\n          }\n        }\n      ")])])])}],v={name:"AliasPath",props:{msg:String}},m=v,g=(n("e81b"),Object(l["a"])(m,p,h,!1,null,"1b523686",null)),_=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"card"},[n("div",{staticClass:"card__header"},[t._t("header")],2),n("div",{staticClass:"card__content"},[t._t("default")],2),n("div",{staticClass:"card__footer"},[t._t("footer")],2)])},y=[],C=(n("7841"),{}),k=Object(l["a"])(C,b,y,!1,null,null,null),x=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snackbar snackbar--open"},[n("div",{staticClass:"snackbar__body"},[n("div",{staticClass:"snackbar__content"},[t._t("body",[n("span",{domProps:{innerHTML:t._s(t.message)}})])],2),n("div",{staticClass:"snackbar__actions"},[t._t("footer",[n("button",{staticClass:"snackbar__actions-close",attrs:{title:"Dismiss"},on:{click:function(e){return t.$emit("close")}}},[t._v("\n          X\n        ")])])],2)])])},w=[],j={name:"SnackBar",props:{message:{type:String,default:"",required:!0}}},q=j,S=(n("6310"),Object(l["a"])(q,E,w,!1,null,null,null)),O=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top-bar"},[n("div",{staticClass:"top-bar__left"},[t._t("left",[n("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("back")}}},[t._v("Back")])])],2),n("div",{staticClass:"top-bar__middle"},[t._t("default")],2),n("div",{staticClass:"top-bar__right"},[t._t("right",[n("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("next")}}},[t._v("Next")])])],2)])},$=[],A={name:"TopBar"},T=A,L=(n("e09c"),Object(l["a"])(T,N,$,!1,null,null,null)),z=L.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal modal__open"},[n("div",{staticClass:"modal__overlay"}),n("div",{staticClass:"modal__container"},[n("div",{staticClass:"modal__header"},[t._t("header",[n("h2",{domProps:{textContent:t._s(t.title)}})])],2),n("div",{staticClass:"modal__body"},[t._t("body",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),n("div",{staticClass:"modal__footer"},[t._t("footer")],2)])])},M=[],B={name:"Modal",props:{title:{type:String,default:""},content:{type:String,default:""}}},D=B,P=(n("4df1"),Object(l["a"])(D,I,M,!1,null,null,null)),R=P.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{title:t.title,content:t.content},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"modal__header-text"},[n("h2",{domProps:{textContent:t._s(t.title)}})]),n("div",{staticClass:"modal__header-actions"},[n("button",{staticClass:"snackbar__actions-close",attrs:{title:"Close"},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        X\n      ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{domProps:{innerHTML:t._s(t.content)}})]},proxy:!0},{key:"footer",fn:function(){return[n("button",{attrs:{type:"button"},on:{click:function(e){return t.$emit("ok")}}},[t._v("Ok")])]},proxy:!0}])})},U=[],F={name:"AlertModal",components:{Modal:R},props:{title:{type:String,default:""},content:{type:String,default:""}}},J=F,H=Object(l["a"])(J,Q,U,!1,null,null,null),G=H.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{title:t.title,content:t.content},scopedSlots:t._u([{key:"header",fn:function(){return[n("h2",{domProps:{textContent:t._s(t.title)}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{domProps:{innerHTML:t._s(t.content)}})]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n      Cancel\n    ")]),n("button",{staticClass:"primary",attrs:{type:"button"},on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      Confirm\n    ")])]},proxy:!0}])})},Z=[],V={name:"ConfirmationModal",components:{Modal:R},props:{title:{type:String,default:"Confirmation"},content:{type:String,default:""}}},X=V,Y=Object(l["a"])(X,W,Z,!1,null,null,null),K=Y.exports,tt={name:"ErrorBoundary",data:function(){return{error:!1,info:{},vm:{}}},errorCaptured:function(t,e,n){this.error=!0,this.info=n,this.vm=e},render:function(t){return this.error?t("p","Something went wrong"):this.$slots.default[0]}},et=tt,nt=Object(l["a"])(et,r,i,!1,null,null,null),ot=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],at={name:"HelloWorld",props:{msg:String}},st=at,ut=(n("9d06"),Object(l["a"])(st,rt,it,!1,null,"10ecc34a",null)),ct=(ut.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])}),lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank",rel:"noopener"}},[t._v("e2e-cypress")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],dt={name:"HelloWorld",props:{msg:String}},ft=dt,pt=(n("2662"),Object(l["a"])(ft,ct,lt,!1,null,"c5c5d25c",null)),ht=(pt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"demo-first-loop"},[n("h1",[t._v("Demo Performance of First Loop")]),n("div",{staticClass:"actions"},[n("button",{on:{click:t.onChange}},[t._v("Click to change")]),n("button",{on:{click:t.onRemove}},[t._v("Remove Element at Idx")])]),t.source.length?n("div",{staticClass:"list"},t._l(t.source,function(e){return n("p",{key:e.id,domProps:{textContent:t._s(e.text)}})}),0):n("div",[t._v("No data.")])])}),vt=[],mt=(n("a463"),function(t){return Math.round((new Date).getTime()/1e3)+t}),gt={name:"FirstLoop",props:{total:{type:Number,default:1e4}},data:function(){return{source:[]}},methods:{onRemove:function(t){console.time("FirstLoop - Removed at Idx",t);var e=8;this.source.splice(e,1),console.timeEnd("FirstLoop - Removed at Idx")},onChange:function(t){console.time("FirstLoop - Changed at Idx ",t);var e=10;this.source[e].text="I changed here at ".concat(mt(e)),console.timeEnd("FirstLoop - Changed at Idx")}},created:function(){console.group("FirstLoop"),console.time("FirstLoop - Time");for(var t=[],e=0;e<this.total;e++)t.push({id:e,text:"".concat(e," at ").concat(mt(e))});this.source=t,console.timeEnd("FirstLoop - Time"),console.groupEnd()}},_t=gt,bt=(n("69fb"),Object(l["a"])(_t,ht,vt,!1,null,"5859a2b2",null)),yt=(bt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"demo-second-loop"},[n("h1",[t._v("Demo Performance of Second Loop")]),t.source.length?n("div",{staticClass:"list"},t._l(t.source,function(e){return n("p",{key:e.id,domProps:{textContent:t._s(e.text)}})}),0):n("div",[t._v("No data.")])])}),Ct=[],kt=function(t){return Math.round((new Date).getTime()/1e4)+t},xt={name:"SecondLoop",props:{total:{type:Number,default:1e4}},data:function(){return{source:[]}},created:function(){console.group("SecondLoop"),console.time("SecondLoop - Time");for(var t=0;t<this.total;t++)this.source.push({id:t,text:"".concat(t," at ").concat(kt(t))});console.timeEnd("SecondLoop - Time"),console.groupEnd()}},Et=xt,wt=(n("463d"),Object(l["a"])(Et,yt,Ct,!1,null,"78d53377",null)),jt=(wt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scoped-slot-demo"},[t._t("propsTest",null,{count:t.count,addOne:t.addOne})],2)}),qt=[],St={name:"ScopedSlot",props:{msg:String},data:function(){return{count:0}},methods:{addOne:function(){this.count++}}},Ot=St,Nt=Object(l["a"])(Ot,jt,qt,!1,null,null,null),$t=(Nt.exports,function(t,e){var n=e._c;return n("figure",{class:e.props.type,on:{click:e.listeners.click}},[n("img",{attrs:{src:e.props.src}}),e.slots().default?n("figcaption",[n("span",[e._t("default")],2)]):e._e()])}),At=[],Tt={props:{src:{required:!0,type:String},type:{required:!0,type:String}}},Lt=Tt,zt=Object(l["a"])(Lt,$t,At,!0,null,null,null),It=(zt.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[n("p",[t._v("Not found")])])}],Bt={},Dt=Object(l["a"])(Bt,It,Mt,!1,null,null,null),Pt=(Dt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/quiz"}},[t._v("Quiz")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])}),Rt=[],Qt={name:"HomeTpl"},Ut=Qt,Ft=Object(l["a"])(Ut,Pt,Rt,!1,null,null,null);Ft.exports;n.d(e,"a",function(){return o})},"849d":function(t,e,n){"use strict";var o=n("8b10"),r=n.n(o);r.a},"8b10":function(t,e,n){},"9bd3":function(t,e,n){},"9d06":function(t,e,n){"use strict";var o=n("a5d8"),r=n.n(o);r.a},a5d8:function(t,e,n){},a9f1:function(t,e,n){"use strict";var o=n("bdcf"),r=n.n(o);r.a},bd5a:function(t,e,n){},bdcf:function(t,e,n){},c20d:function(t,e,n){"use strict";var o=n("c381"),r=n.n(o);r.a},c381:function(t,e,n){},c608:function(t,e,n){},ca68:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.d5e5c6d4.png"},e09c:function(t,e,n){"use strict";var o=n("6cf1"),r=n.n(o);r.a},e0b8:function(t,e,n){},e81b:function(t,e,n){"use strict";var o=n("6ea2"),r=n.n(o);r.a}});
//# sourceMappingURL=app.c8a90b61.js.map