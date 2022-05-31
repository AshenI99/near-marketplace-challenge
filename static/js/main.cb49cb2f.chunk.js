(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{162:function(e,t){},172:function(e,t){},190:function(e,t){},221:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(46),s=n.n(r),o=n(19),i=n(37),l=n(7),j=n(237),d=n(241);Object({NODE_ENV:"production",PUBLIC_URL:"/near-marketplace-challenge",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME;var u=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:"mycontract.aef.testnet",walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:"mycontract.aef.testnet",walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},b=n(58),x=n(68),O=u("testnet");function p(){return(p=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.connect)(Object.assign({deps:{keyStore:new b.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new b.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new b.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){window.walletConnection.requestSignIn(O.contractName)}function g(){window.walletConnection.signOut(),window.location.reload()}var w=n(239),v=n(234),y=n(244),N=n(1),C=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(w.a,{children:[Object(N.jsx)(w.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(N.jsxs)(N.Fragment,{children:[n," ",Object(N.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(N.jsx)(v.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(N.jsxs)(w.a.Menu,{className:"shadow-lg border-0",children:[Object(N.jsx)(w.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(N.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(N.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(N.jsx)("span",{className:"font-monospace",children:t})]})}),Object(N.jsx)(w.a.Divider,{}),Object(N.jsxs)(w.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(N.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},k=n(60),S=(n(220),function(){return Object(N.jsx)(k.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),P=function(e){var t=e.text;return Object(N.jsxs)("div",{children:[Object(N.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(N.jsx)("span",{className:"text-secondary mx-1",children:t})]})},I=function(e){var t=e.text;return Object(N.jsxs)("div",{children:[Object(N.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(N.jsx)("span",{className:"text-secondary mx-1",children:t})]})},F={text:""};P.defaultProps=F,I.defaultProps=F;var T=n(2),E=n(148),U=n(238),A=n(240),L=n(150),_=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1],p=Object(c.useState)(""),h=Object(l.a)(p,2),m=h[0],f=h[1],g=Object(c.useState)(0),w=Object(l.a)(g,2),v=w[0],y=w[1],C=Object(c.useState)(!1),k=Object(l.a)(C,2),S=k[0],P=k[1],I=function(){return P(!1)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(E.a,{onClick:function(){return P(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(N.jsx)("i",{class:"bi bi-plus"})}),Object(N.jsxs)(U.a,{show:S,onHide:I,centered:!0,children:[Object(N.jsx)(U.a.Header,{closeButton:!0,children:Object(N.jsx)(U.a.Title,{children:"New Product"})}),Object(N.jsx)(A.a,{children:Object(N.jsxs)(U.a.Body,{children:[Object(N.jsx)(L.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(N.jsx)(A.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(N.jsx)(L.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(N.jsx)(A.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(N.jsx)(L.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(N.jsx)(A.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(N.jsx)(L.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(N.jsx)(A.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(N.jsx)(L.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(N.jsx)(A.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(N.jsxs)(U.a.Footer,{children:[Object(N.jsx)(E.a,{variant:"outline-secondary",onClick:I,children:"Close"}),Object(N.jsx)(E.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v),onClick:function(){t({name:r,image:j,description:x,location:m,price:v}),I()},children:"Save product"})]})]})]})},B=n(149),R=n(243),D=n(235),H=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(N.jsx)(B.a,{children:Object(N.jsxs)(R.a,{className:" h-100",children:[Object(N.jsx)(R.a.Header,{children:Object(N.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(N.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(N.jsxs)(D.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(N.jsx)("div",{className:" ratio ratio-4x3",children:Object(N.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(N.jsxs)(R.a.Body,{className:"d-flex  flex-column text-center",children:[Object(N.jsx)(R.a.Title,{children:r}),Object(N.jsx)(R.a.Text,{className:"flex-grow-1 ",children:s}),Object(N.jsx)(R.a.Text,{className:"text-secondary",children:Object(N.jsx)("span",{children:i})}),Object(N.jsxs)(E.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",b.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},W=function(){return Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsx)(v.a,{animation:"border",role:"status",className:"opacity-25",children:Object(N.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},M=n(236),K=n(242),z=1e14;function J(e){return q.apply(this,arguments)}function q(){return(q=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},z,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],d=s[1],u=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(n=t,n.id=Object(K.a)(),n.price=Object(x.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){u()})),Object(k.b)(Object(N.jsx)(P,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(k.b)(Object(N.jsx)(I,{text:"Failed to create a product."}))}finally{d(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J({id:t,price:n}).then((function(e){return u()}));case 3:Object(k.b)(Object(N.jsx)(P,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(k.b)(Object(N.jsx)(I,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(N.jsx)(N.Fragment,{children:j?Object(N.jsx)(W,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(N.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(N.jsx)(_,{save:b})]}),Object(N.jsx)(M.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(N.jsx)(H,{product:Object(T.a)({},e),buy:O})}))})]})})},G=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(N.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(N.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(N.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(N.jsx)("img",{src:c,alt:""})}),Object(N.jsx)("h1",{children:t}),Object(N.jsx)("p",{children:"Please connect your wallet to continue."}),Object(N.jsx)(E.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(N.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};G.defaultProps={name:""};var Q=G,X=n.p+"static/media/sandwich.2d312449.jpg",Y=(n(221),function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,h();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S,{}),e.accountId?Object(N.jsxs)(j.a,{fluid:"md",children:[Object(N.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(N.jsx)(d.a.Item,{children:Object(N.jsx)(C,{address:e.accountId,amount:a,symbol:"NEAR",destroy:g})})}),Object(N.jsxs)("main",{children:[" ",Object(N.jsx)(V,{})," "]})]}):Object(N.jsx)(Q,{name:"Street Food",login:f,coverImg:X})]})}),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(227),n(224),n(225);window.nearInitPromise=function(){return p.apply(this,arguments)}().then((function(){s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(Y,{})}),document.getElementById("root"))})).catch(console.error),Z()}},[[226,1,2]]]);
//# sourceMappingURL=main.cb49cb2f.chunk.js.map