(this["webpackJsonpzuzex-chat"]=this["webpackJsonpzuzex-chat"]||[]).push([[0],{12:function(e,t,s){e.exports={wrapper:"Footer_wrapper__3fWn5",newImage:"Footer_newImage__3VjFU",input:"Footer_input__2lSXn",file:"Footer_file__30Vqx",button:"Footer_button__3FQRe"}},123:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(23),c=s.n(r),i=(s(68),s(11)),o=(s(69),s(25)),u=s.n(o),l=s(2),d=s(24),m=s(15),_=s(60),j=s.n(_)()("https://socketiochat-server.herokuapp.com/"),b=s(34),g=s.n(b),p=s(61),f=s(62),h=s.n(f),O=function(){return h.a.get("https://breakingbadapi.com/api/character/random").then((function(e){return e.data}))},x=Object(m.b)({name:"users",initialState:{id:"",userName:"",photo:"",listOfUsers:[]},reducers:{setUser:function(e,t){e.userName=t.payload},setPhoto:function(e,t){e.photo=t.payload},addUserToTheList:function(e,t){e.listOfUsers.find((function(e){return e.name===t.payload.name}))||e.listOfUsers.push(Object(d.a)({},t.payload))},removeUser:function(e,t){var s=e.listOfUsers.findIndex((function(e){return e.name===t.payload}));s>-1&&e.listOfUsers.splice(s,1)}}}),v=x.reducer,N=x.actions,M=N.setUser,w=N.setPhoto,U=N.addUserToTheList,B=N.removeUser,I=Object(m.b)({name:"messages",initialState:{messages:[]},reducers:{addMessage:function(e,t){e.messages.push(Object(d.a)({},t.payload))},removeMessage:function(e,t){var s=e.messages.findIndex((function(e){return e.id===t.payload}));s>-1&&e.messages.splice(s,1)}}}),y=I.reducer,L=I.actions,k=L.addMessage,C=L.removeMessage,F=s(16),E=s.n(F),z=s(1),T=function(e){var t=e.photo,s=e.login;return Object(z.jsxs)("header",{className:E.a.wrapper,children:[Object(z.jsx)("div",{children:Object(z.jsx)("span",{className:E.a.icon,children:"\u2709"})}),Object(z.jsxs)("div",{className:E.a.user,children:[Object(z.jsx)("span",{className:E.a.text,children:s}),Object(z.jsx)("div",{className:E.a.image,style:{backgroundImage:'url("'.concat(t,'")')}})]})]})},W=s(12),S=s.n(W),H=s(125),R=function(e){var t=e.userName,s=e.photo,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),d=l[0],m=l[1];return Object(z.jsxs)("div",{className:S.a.wrapper,children:[d&&Object(z.jsx)("img",{className:S.a.newImage,src:"".concat(d),alt:"newImage"}),Object(z.jsx)("input",{className:S.a.input,onChange:function(e){o(e.currentTarget.value)},type:"text",placeholder:"Message",value:c}),Object(z.jsx)("input",{type:"file",name:"file",id:"input__file",className:S.a.file,onChange:function(e){var t;e.currentTarget.files&&(t=e.currentTarget.files[0]);var s=new FileReader;s.onloadend=function(){m(s.result)},t&&s.readAsDataURL(t)}}),Object(z.jsx)("label",{className:S.a.button,htmlFor:"input__file",children:"\u271b"}),Object(z.jsx)("button",{disabled:""===c&&""===d,className:S.a.button,onClick:function(){var e={id:Object(H.a)(),name:t,message:c,photo:s,newImage:d};j.emit("chat message",e),o(""),m("")},children:"\u27a3"})]})},A=s(17),P=s.n(A),G=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.users.listOfUsers}));return Object(z.jsx)("div",{className:P.a.wrapper,children:t.map((function(t){return Object(z.jsxs)("div",{className:P.a.user,children:[Object(z.jsx)("div",{className:P.a.image,style:{backgroundImage:'url("'.concat(t.photo,'")')}}),Object(z.jsx)("div",{className:P.a.text,children:t.name}),Object(z.jsx)("button",{className:P.a.delButton,onClick:function(){return s=t.name,void e(B(s));var s},children:"\u2718"})]},t.name)}))})},Z=s(63),q=s.n(Z),J=s(5),V=s.n(J),X=function(e){var t=e.photo,s=e.name,a=e.message,n=e.id,r=e.deleteMessage,c=e.newImage;return Object(z.jsxs)("div",{className:V.a.message,children:[Object(z.jsx)("div",{className:V.a.photo,style:{backgroundImage:'url("'.concat(t,'")')}}),Object(z.jsxs)("div",{className:V.a.cloud,children:[Object(z.jsx)("div",{className:V.a.triangle}),Object(z.jsxs)("div",{className:V.a.messageBox,children:[Object(z.jsx)("div",{className:V.a.name,children:s}),Object(z.jsxs)("div",{className:V.a.messageBody,children:[c&&Object(z.jsx)("img",{className:V.a.newImage,src:"".concat(c),alt:"newImage"}),a]})]})]}),Object(z.jsx)("button",{className:V.a.deleteBtn,onClick:function(){return r(n)},children:"\u2718"})]})},K=n.a.memo(X),Q=function(){var e=Object(l.c)((function(e){return e.messages.messages})),t=Object(l.b)(),s=Object(a.useCallback)((function(e){t(C(e))}),[t]);return Object(z.jsx)("div",{className:q.a.wrapper,children:e.map((function(e){return Object(z.jsx)("div",{children:Object(z.jsx)(K,{newImage:e.newImage,photo:e.photo,name:e.name,message:e.message,id:e.id,deleteMessage:s})},e.id)}))})};var Y=s(18),D=s.n(Y),$=n.a.memo((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],n=t[1],r="".concat(s?D.a.burgerMenuActive:""," ").concat(D.a.burgerMenu);return Object(z.jsxs)("div",{className:r,children:[Object(z.jsx)("div",{onClick:function(){return n(!s)},className:D.a.burgerMenuButton,children:Object(z.jsx)("span",{className:D.a.burgerMenuLines})}),Object(z.jsx)("div",{className:D.a.burgerMenuNav,children:Object(z.jsx)(G,{})})]})})),ee=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.users.userName})),s=Object(l.c)((function(e){return e.users.photo})),n=function(){var e=Object(a.useState)(void 0),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){n(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),s}();return Object(a.useEffect)((function(){e((function(e){j.on("chat message",(function(t){e(k(t)),e(U({name:t.name,photo:t.photo}))}))}))}),[e]),Object(z.jsxs)("div",{className:u.a.chatWrapper,children:[Object(z.jsx)(T,{photo:s,login:t}),Object(z.jsxs)("div",{className:u.a.dialogsWrapper,children:[n&&n<=768?Object(z.jsx)($,{}):Object(z.jsx)(G,{}),Object(z.jsxs)("div",{className:u.a.dialogs,children:[Object(z.jsx)(Q,{}),Object(z.jsx)(R,{photo:s,userName:t})]})]})]})},te=s(26),se=s.n(te),ae=function(e){var t=e.joinHandler;return Object(z.jsxs)("div",{className:se.a.wrapper,children:[Object(z.jsx)("div",{className:se.a.text,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!"}),Object(z.jsx)("button",{className:se.a.button,onClick:t,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})]})},ne=["\u043f\u0440\u0435\u0436\u043d\u0438\u0439","\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439","\u0442\u0435\u043f\u043b\u044b\u0439","\u0436\u0435\u043d\u0441\u043a\u0438\u0439","\u044f\u0440\u043a\u0438\u0439","\u0441\u0435\u0440\u044b\u0439","\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439","\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u0444\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439","\u043e\u043f\u0430\u0441\u043d\u044b\u0439","\u0431\u043e\u0433\u0430\u0442\u044b\u0439","\u043f\u0440\u0430\u0432\u043e\u0432\u043e\u0439","\u0436\u0435\u043b\u0435\u0437\u043d\u044b\u0439","\u0432\u0435\u0440\u043d\u044b\u0439","\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u043b\u0435\u0441\u043d\u043e\u0439","\u0433\u043e\u0440\u044f\u0447\u0438\u0439","\u0440\u0435\u0434\u043a\u0438\u0439","\u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0439","\u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439","\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439","\u0443\u043c\u043d\u044b\u0439","\u043b\u0435\u0442\u043d\u0438\u0439","\u0431\u043e\u0436\u0438\u0439","\u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439","\u0437\u0434\u043e\u0440\u043e\u0432\u044b\u0439","\u0432\u0435\u0441\u0435\u043b\u044b\u0439","\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439","\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439","\u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439","\u0443\u0433\u043e\u043b\u043e\u0432\u043d\u044b\u0439","\u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439","\u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439","\u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439","\u0434\u0440\u0435\u0432\u043d\u0438\u0439","\u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u043c\u0438\u043b\u044b\u0439","\u043e\u0441\u0442\u0440\u044b\u0439","\u043b\u0438\u0448\u043d\u0438\u0439","\u0443\u0437\u043a\u0438\u0439","\u0437\u0430\u0434\u043d\u0438\u0439","\u0431\u0435\u0434\u043d\u044b\u0439","\u044f\u0441\u043d\u044b\u0439","\u0441\u0438\u043d\u0438\u0439","\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439","\u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0439","\u0436\u0435\u043b\u0442\u044b\u0439","\u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0439","\u0442\u0440\u0443\u0434\u043d\u044b\u0439","\u043d\u0438\u0436\u043d\u0438\u0439","\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u0439","\u043c\u044f\u0433\u043a\u0438\u0439","\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0439","\u0441\u0443\u0445\u043e\u0439","\u0432\u0435\u0440\u0445\u043d\u0438\u0439","\u043c\u043e\u0449\u043d\u044b\u0439","\u043e\u0431\u044f\u0437\u0430\u043d\u043d\u044b\u0439","\u0436\u0435\u0441\u0442\u043a\u0438\u0439","\u043c\u043e\u0440\u0441\u043a\u043e\u0439","\u0432\u0435\u0447\u043d\u044b\u0439","\u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439","\u043d\u043e\u0447\u043d\u043e\u0439","\u0443\u0447\u0435\u0431\u043d\u044b\u0439","\u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0439","\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439","\u0441\u0432\u0435\u0436\u0438\u0439","\u043a\u0440\u0435\u043f\u043a\u0438\u0439","\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439","\u043f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439","\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439","\u043f\u0430\u0440\u0442\u0438\u0439\u043d\u044b\u0439","\u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439","\u0433\u043e\u043b\u0443\u0431\u043e\u0439","\u043f\u0440\u0430\u0432\u043e\u0441\u043b\u0430\u0432\u043d\u044b\u0439","\u0434\u0430\u043b\u044c\u043d\u0438\u0439","\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u044b\u0439","\u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0439","\u0432\u0438\u043d\u043e\u0432\u0430\u0442\u044b\u0439","\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439","\u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439","\u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u043a\u0440\u0443\u0433\u043b\u044b\u0439","\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439","\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0439","\u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0439","\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439","\u0440\u0435\u0437\u043a\u0438\u0439","\u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u043c\u0443\u0436\u0441\u043a\u043e\u0439","\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439","\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439","\u0441\u0442\u0440\u043e\u0433\u0438\u0439","\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439","\u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439","\u0441\u0435\u043b\u044c\u0441\u043a\u0438\u0439","\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0439"],re=["\u0433\u043e\u0434","\u0447\u0435\u043b\u043e\u0432\u0435\u043a","\u0434\u0435\u043d\u044c","\u0432\u043e\u043f\u0440\u043e\u0441","\u0433\u043b\u0430\u0437","\u0434\u0440\u0443\u0433","\u0434\u043e\u043c","\u0441\u043b\u0443\u0447\u0430\u0439","\u0440\u0435\u0431\u0435\u043d\u043e\u043a","\u0432\u0438\u0434","\u043a\u043e\u043d\u0435\u0446","\u0433\u043e\u0440\u043e\u0434","\u0437\u0430\u043a\u043e\u043d","\u0447\u0430\u0441","\u043e\u0431\u0440\u0430\u0437","\u043e\u0442\u0435\u0446","\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0431\u043e\u0433","\u043d\u0430\u0440\u043e\u0434","\u0433\u043e\u043b\u043e\u0441","\u043f\u0440\u043e\u0446\u0435\u0441\u0441","\u0441\u0443\u0434","\u0443\u0440\u043e\u0432\u0435\u043d\u044c","\u0441\u0442\u043e\u043b","\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442","\u043f\u0443\u0442\u044c","\u044f\u0437\u044b\u043a","\u0432\u0437\u0433\u043b\u044f\u0434","\u043c\u043e\u043c\u0435\u043d\u0442","\u043c\u0435\u0441\u044f\u0446","\u043f\u043e\u0440\u044f\u0434\u043e\u043a","\u043c\u0443\u0436","\u0432\u0435\u0447\u0435\u0440","\u043e\u0440\u0433\u0430\u043d","\u0440\u044b\u043d\u043e\u043a","\u0441\u043c\u044b\u0441\u043b","\u0442\u0435\u0430\u0442\u0440","\u0442\u0440\u0443\u0434","\u0446\u0435\u043d\u0442\u0440","\u0441\u044b\u043d","\u0438\u043d\u0442\u0435\u0440\u0435\u0441","\u0432\u0435\u043a","\u0430\u0432\u0442\u043e\u0440","\u043e\u0442\u0432\u0435\u0442","\u0441\u043e\u0432\u0435\u0442","\u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440","\u043c\u0443\u0436\u0447\u0438\u043d\u0430","\u0440\u044f\u0434","\u0441\u0447\u0435\u0442","\u043f\u043b\u0430\u043d","\u043f\u0440\u043e\u0435\u043a\u0442","\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b","\u0440\u0443\u0431\u043b\u044c","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442","\u0441\u0440\u043e\u043a","\u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0442","\u0445\u043e\u0434","\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440","\u043e\u043f\u044b\u0442","\u043f\u0440\u0438\u043d\u0446\u0438\u043f","\u0442\u043e\u0432\u0430\u0440\u0438\u0449","\u043e\u0431\u044a\u0435\u043a\u0442","\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d","\u043f\u0435\u0440\u0438\u043e\u0434","\u0441\u043e\u0441\u0442\u0430\u0432","\u043f\u0440\u0438\u043c\u0435\u0440","\u043b\u0435\u0441","\u043f\u0430\u043b\u0435\u0446","\u0442\u0438\u043f","\u043c\u0435\u0442\u043e\u0434","\u0431\u0440\u0430\u0442","\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c","\u0448\u0430\u0433","\u043a\u0440\u0430\u0439","\u0440\u0430\u0437\u043c\u0435\u0440","\u0440\u0430\u0439\u043e\u043d","\u0431\u0430\u043d\u043a","\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a","\u043a\u043b\u0430\u0441\u0441","\u0437\u0430\u043b","\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440","\u0433\u0435\u0440\u043e\u0439","\u0433\u043e\u0441\u0442\u044c","\u0432\u043e\u0437\u0434\u0443\u0445","\u043c\u0430\u043b\u044c\u0447\u0438\u043a","\u0444\u0438\u043b\u044c\u043c","\u0434\u043e\u0433\u043e\u0432\u043e\u0440","\u0440\u0435\u0433\u0438\u043e\u043d","\u0432\u044b\u0431\u043e\u0440","\u0432\u0440\u0430\u0447","\u0444\u0430\u043a\u0442","\u0437\u0430\u0432\u043e\u0434","\u0431\u0438\u0437\u043d\u0435\u0441","\u0441\u043e\u044e\u0437","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c","\u0434\u0443\u0445","\u0441\u043f\u043e\u0441\u043e\u0431","\u0445\u043e\u0437\u044f\u0438\u043d","\u0434\u043e\u043b\u043b\u0430\u0440"],ce=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],n=t[1],r=Object(l.b)();Object(a.useEffect)((function(){r(M(function(){var e=function(e){return Math.floor(Math.random()*e.length)},t=function(e){return e[0].toUpperCase()+e.slice(1)},s=ne[e(ne)],a=re[e(re)];return"".concat(t(s)," ").concat(t(a))}())),r(function(){var e=Object(p.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:s=e.sent,t(w(s[0].img)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(z.jsx)("div",{className:"App",children:s?Object(z.jsx)(ee,{}):Object(z.jsx)(ae,{joinHandler:function(){n(!0)}})})},ie=s(4),oe=s(20),ue=Object(ie.c)({users:v,messages:y}),le=Object(m.a)({reducer:ue,middleware:function(e){return e().prepend(oe.a)}});c.a.render(Object(z.jsx)(l.a,{store:le,children:Object(z.jsx)(ce,{})}),document.getElementById("root"))},16:function(e,t,s){e.exports={wrapper:"Header_wrapper__3NNzo",icon:"Header_icon__1xeEP",user:"Header_user__23UCj",text:"Header_text__394VI",image:"Header_image__2Uarx"}},17:function(e,t,s){e.exports={message:"UsersList_message__2VC16",photo:"UsersList_photo__1nqM_",cloud:"UsersList_cloud__1qdBq",triangle:"UsersList_triangle__3fdgE",messageBox:"UsersList_messageBox__1bcn4",messageBody:"UsersList_messageBody__2FkMs",newImage:"UsersList_newImage__3abgC",name:"UsersList_name__1OLtz",deleteBtn:"UsersList_deleteBtn__2fM7y",wrapper:"UsersList_wrapper__1YTw5",user:"UsersList_user__1MRMR",image:"UsersList_image__2ZdCB",text:"UsersList_text__1ymRK",delButton:"UsersList_delButton__hpZe3"}},18:function(e,t,s){e.exports={burgerMenu:"BurgerMenu_burgerMenu__3eIGJ",burgerMenuButton:"BurgerMenu_burgerMenuButton__2vkWZ",burgerMenuLines:"BurgerMenu_burgerMenuLines__Gmw5J",burgerMenuNav:"BurgerMenu_burgerMenuNav__3xeTP",burgerMenuActive:"BurgerMenu_burgerMenuActive__3Oohd"}},25:function(e,t,s){e.exports={chatWrapper:"Chat_chatWrapper__SB19N",dialogsWrapper:"Chat_dialogsWrapper__j45HI",dialogs:"Chat_dialogs__3Egep"}},26:function(e,t,s){e.exports={wrapper:"Greet_wrapper__3U6wF",text:"Greet_text__3CyFM",button:"Greet_button__3yiYv"}},5:function(e,t,s){e.exports={message:"Message_message__3j0UZ",photo:"Message_photo__1ZRQx",cloud:"Message_cloud__31EoP",triangle:"Message_triangle__kIzAx",messageBox:"Message_messageBox__2azMm",messageBody:"Message_messageBody__1gmN0",newImage:"Message_newImage__IXbyr",name:"Message_name__X7t6T",deleteBtn:"Message_deleteBtn__2gKE5"}},63:function(e,t,s){e.exports={wrapper:"Messages_wrapper__xWh8P"}},68:function(e,t,s){},69:function(e,t,s){}},[[123,1,2]]]);
//# sourceMappingURL=main.f6d5f8c4.chunk.js.map