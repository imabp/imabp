(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{49:function(e,a,t){e.exports=t(59)},54:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(54),t(21)),o=t(22),s=t(24),m=t(23),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"avatar-class"},r.a.createElement("img",{alt:"Avatar",src:this.props.details}))}}]),t}(n.Component),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.details.fn,a=this.props.details.ln;return r.a.createElement("div",{className:"username"},r.a.createElement("span",null,e," ",a))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"CODEdecorate"},this.props.details))}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LeftPanel"},r.a.createElement(u,{details:this.props.details.avatar}),r.a.createElement(d,{details:{fn:this.props.details.firstname,ln:this.props.details.lastname}}),r.a.createElement(b,{details:"Computer Science Undergraduate"}))}}]),t}(n.Component),E=t(40),v=t(41),f=t(82),h=t(88),O=t(86),j=t(83),g=t(33),k=t.n(g),x=t(34),w=t.n(x),I=t(35),y=t.n(I),C=t(36),N=t.n(C),S=t(37),F=t.n(S),L=t(38),P=t.n(L),T=t(39),W=t.n(T),B=t(81),A=t(85);function J(e){var a=e.children,t=e.value,n=e.index,l=Object(v.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},l),t===n&&r.a.createElement(A.a,{p:3},r.a.createElement(B.a,null,a)))}function M(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var U=Object(f.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"seagreen  ",color:"white"}}}));function D(){var e=U(),a=r.a.useState(0),t=Object(E.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{position:"static",color:"default"},r.a.createElement(O.a,{value:n,onChange:function(e,a){l(a)},variant:"scrollable",scrollButtons:"on",indicatorColor:"inherit",textColor:"inherit","aria-label":"scrollable force tabs example",color:"white",style:{background:"black",color:"white"}},r.a.createElement(j.a,Object.assign({label:"Item One",icon:r.a.createElement(k.a,null)},M(0))),r.a.createElement(j.a,Object.assign({label:"Item Two",icon:r.a.createElement(w.a,null)},M(1))),r.a.createElement(j.a,Object.assign({label:"Item Three",icon:r.a.createElement(y.a,null)},M(2))),r.a.createElement(j.a,Object.assign({label:"Item Four",icon:r.a.createElement(N.a,null)},M(3))),r.a.createElement(j.a,Object.assign({label:"Item Five",icon:r.a.createElement(F.a,null)},M(4))),r.a.createElement(j.a,Object.assign({label:"Item Six",icon:r.a.createElement(P.a,null)},M(5))),r.a.createElement(j.a,Object.assign({label:"Item Seven",icon:r.a.createElement(W.a,null)},M(6))))),r.a.createElement(J,{value:n,index:0},"Item Onedsadsadsa"),r.a.createElement(J,{value:n,index:1},"Item Twod",r.a.createElement("br",null),r.a.createElement("br",null),"sadsd"),r.a.createElement(J,{value:n,index:2},"Item Three"),r.a.createElement(J,{value:n,index:3},"Item Four"),r.a.createElement(J,{value:n,index:4},"Item Five"),r.a.createElement(J,{value:n,index:5},"Item Six"),r.a.createElement(J,{value:n,index:6},"Item Seven"))}var G=t(84),$=Object(f.a)((function(e){return{LeftPanel:{background:"black",color:"white",display:"block",padding:"1%"}}}));var q=function(){var e=$();return r.a.createElement("div",{className:"main-app"},r.a.createElement("div",{className:e.LeftPanel},r.a.createElement(p,{details:{firstname:"Abir",lastname:"Pal",title:"Computer Science Undergraduate",description:"Works at Integration of ML and Web",avatar:"https://avatars3.githubusercontent.com/u/53480076?s=460&u=182022968da3f6f03777d264eef4a999dd689379&v=4",github:"https://github.com/imabp",linkedin:"https://linkedin.com/in/imabp"}})),r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(D,null)),r.a.createElement(G.a,{item:!0,xs:6,sm:6})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.b230ebe4.chunk.js.map