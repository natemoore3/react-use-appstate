(this["webpackJsonpreact-use-appstate-example"]=this["webpackJsonpreact-use-appstate-example"]||[]).push([[0],{59:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(46),i=a(45),u=a.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.createContext)({state:{},setState:function(){}});function f(){var e=Object(n.useContext)(m);return[e.state,e.setState]}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function d(e,t,a){var n;t(((n={})[e]={loading:a},n))}function p(e,t){var a=f(),n=a[0],r=a[1];return Object.keys(t).reduce((function(a,o){var l;return s({},a,((l={})[o]=function(a){try{var l=function(e,t){try{var a=e()}catch(n){return t(!0,n)}return a&&a.then?a.then(t.bind(null,!1),t.bind(null,!0)):t(!1,a)}((function(){return function(e,t){try{var a=e()}catch(n){return t(n)}return a&&a.then?a.then(void 0,t):a}((function(){return d(e,r,!0),Promise.resolve(t[o](a,n,r)).then((function(){}))}),(function(t){!function(e,t,a){var n;t(((n={})[e]={error:a},n))}(e,r,t)}))}),(function(t,a){if(d(e,r,!1),t)throw a;return a}));return Promise.resolve(l&&l.then?l.then((function(){})):void 0)}catch(c){return Promise.reject(c)}},l))}),{})}function h(e){return s({},function(e,t){return{setState:function(a){var n;t(((n={})[e]={data:a},n))}}}(e,f()[1]))}function v(e){var t=f(),a=t[0],n=t[1];return Object.keys(e).reduce((function(t,r){var o;return s({},t,((o={})[r]=function(t){return e[r](t,a,n)},o))}),{})}var g=function(e,t){void 0===e&&(e="");var a=t.actions,n=void 0===a?{}:a,r=t.api,o=void 0===r?{}:r;return function(){return{state:f()[0][e],actions:s({},v(n),h(e)),api:p(e,o)}}};function y(e,t){switch(t.type){case"SET_STATE":return Object(c.a)(e,(function(e){return u()(e,t.payload)}));default:throw new Error}}function E(e){var t=e.children,a=e.initialState,o=Object(n.useReducer)(y,function(e){return Object.keys(e).reduce((function(t,a){var n;return s({},t,((n={})[a]={data:e[a],loading:!1,error:null},n))}),{})}(a)),l=o[0],c=o[1];return r.a.createElement(m.Provider,{value:{state:l,setState:function(e){c({type:"SET_STATE",payload:e})}}},t)}var b=a(36),S=a(10);var x={useForm:{firstName:"",lastName:"",email:"",phone:""},useDemoState:{hello:"world"}},j=a(23),w=a.n(j),k=a(29),N=g("useForm",{api:{get:function(){var e=Object(k.a)(w.a.mark((function e(t,a,n){var r,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://postman-echo.com/delay/2");case 2:return e.next=4,fetch("https://postman-echo.com/get?firstName=Nathan");case 4:return r=e.sent,e.next=7,r.json();case 7:o=e.sent,l=o.args,n({useForm:{data:{firstName:l.firstName}}});case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}}),O=a(51),C=a(34),F=a.n(C),T=a(100),D=a(104),P=a(105),A=a(106),B=a(107),I=a(108),W=a(109),H=a(111),J=a(110),_=a(50),L=a.n(_),R=g("useDemoState",{});function q({state:e,setState:t,step:a,next:n}){const o=f(),l=Object(O.a)(o,1)[0],c=R().state.data,i=e.data,u=e.loading;return r.a.createElement(T.a,{container:!0,justify:"center",alignContent:"center",spacing:4},r.a.createElement(D.a,null,r.a.createElement(P.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(A.a,{variant:"h6"},"react-use-appstate Demo"),r.a.createElement(B.a,{onClick:()=>{window.location.assign("https://github.com/natemoore3/react-use-appstate")}},r.a.createElement(L.a,{style:{fill:"#ffffff"}})))),r.a.createElement(T.a,{item:!0,xs:9,style:{marginTop:100}},r.a.createElement(I.a,{style:{padding:"24px 100px",minHeight:275}},r.a.createElement(A.a,{variant:"h5"},"Demo Form"),r.a.createElement("form",{onSubmit:n},u?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(W.a,null)):r.a.createElement(r.a.Fragment,null,1===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{value:i.firstName,variant:"outlined",label:"First Name",name:"firstName",onChange:e=>t({[e.target.name]:e.target.value}),margin:"normal",fullWidth:!0}),r.a.createElement(H.a,{value:i.lastName,variant:"outlined",label:"Last Name",name:"lastName",onChange:e=>t({[e.target.name]:e.target.value}),margin:"normal",fullWidth:!0})),2===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{value:i.email,variant:"outlined",label:"Email",name:"email",onChange:e=>t({[e.target.name]:e.target.value}),margin:"normal",fullWidth:!0}),r.a.createElement(H.a,{value:i.phoneNumber,variant:"outlined",label:"Phone Number",name:"phone",onChange:e=>t({[e.target.name]:e.target.value}),margin:"normal",fullWidth:!0})),1===a&&r.a.createElement(J.a,{variant:"contained",color:"secondary",style:{marginTop:24},onClick:n,type:"submit"},"Next"))))),r.a.createElement(T.a,{item:!0,md:4},r.a.createElement(I.a,{style:{padding:"24px 100px"}},r.a.createElement("div",null,r.a.createElement(A.a,{variant:"h5",style:{marginBottom:10}},"useForm Hook"),r.a.createElement(F.a,{id:"json-state",data:e,theme:{main:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px",error:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",key:"color:#f92672;",string:"color:#fd971f;",value:"color:#a6e22e;",boolean:"color:#ac81fe;"}})),r.a.createElement("div",null,r.a.createElement(A.a,{variant:"h5",style:{marginBottom:10}},"useDemoState Hook"),r.a.createElement(F.a,{id:"json-state",data:c,theme:{main:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px",error:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",key:"color:#f92672;",string:"color:#fd971f;",value:"color:#a6e22e;",boolean:"color:#ac81fe;"}})))),r.a.createElement(T.a,{item:!0,md:4},r.a.createElement(I.a,{style:{padding:"24px 100px"}},r.a.createElement(A.a,{variant:"h5",style:{marginBottom:10}},"App State"),r.a.createElement(F.a,{id:"json-state",data:l,theme:{main:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;padding:12px",error:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",key:"color:#f92672;",string:"color:#fd971f;",value:"color:#a6e22e;",boolean:"color:#ac81fe;"}}))))}function z(){const e=Object(S.f)(),t=N(),a=t.state,o=t.actions.setState,l=t.api;return Object(n.useEffect)(()=>{(function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.get());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]),r.a.createElement(q,{state:a,setState:o,step:1,next:t=>{t.preventDefault(),e.push("/finish")}})}function G(){const e=N(),t=e.state,a=e.actions.setState;return r.a.createElement(q,{state:t,setState:a,step:2})}function K(){return r.a.createElement(E,{initialState:x},r.a.createElement(b.a,{basename:"."},r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/"},r.a.createElement(z,null)),r.a.createElement(S.a,{path:"/finish"},r.a.createElement(G,null)))))}l.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6ceeb35f.chunk.js.map