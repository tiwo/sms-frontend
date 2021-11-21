import{o as d,c as _,a as t,w as r,Q as p,b as D,d as Q,r as f,p as g,e as T,f as k,g as w,h as B,i as H,j as I,k as S,l as C,m as c,u,C as E,n as h,t as y,q as N,s as O,v as q,x as $,y as P,z as L,A as x,B as j,D as R,E as U,F}from"./vendor.9dc6e56a.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};K();var v=(a,o)=>{for(const[n,l]of o)a[n]=l;return a};const M={},J={class:"q-pa-md"};function z(a,o){return d(),_("div",J,[t(Q,{class:"bg-primary text-white shadow-2"},{default:r(()=>[t(p,{to:{name:"Dashboard"},"no-caps":"",flat:"",label:"sms-frontend"}),t(D),t(p,{to:{name:"About"},"no-caps":"",flat:"",label:"about"})]),_:1})])}var W=v(M,[["render",z]]);const Y={class:"App"},G={setup(a){const o=f(null);g("api_key",o);const n=f(!1);return g("api_key_is_valid",n),(l,e)=>{const s=T("RouterView");return d(),_("div",Y,[t(W),t(s)])}}},X={class:"AskForKey"},Z=c("div",{class:"text-h6"},"Your Messagebird API key:",-1),ee={emits:["change_api_key"],setup(a,{emit:o}){const n=f(!0),l=f(null),e=s=>{const i=u(l);console.log('"submit":',i),o("change_api_key",i)};return(s,i)=>(d(),_("div",X,[t(C,{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=m=>n.value=m),persistent:"",onBeforeHide:e},{default:r(()=>[t(k,{style:{"min-width":"350px"}},{default:r(()=>[t(w,null,{default:r(()=>[Z]),_:1}),t(w,{class:"q-pt-none"},{default:r(()=>[t(B,{dense:"",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=m=>l.value=m),autofocus:"",onKeyup:i[1]||(i[1]=H(m=>n.value=!1,["enter"]))},null,8,["modelValue"])]),_:1}),t(I,{align:"right",class:"text-primary"},{default:r(()=>[S(t(p,{flat:"",label:"submit"},null,512),[[E]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};function te(a){if(a.ok)return a;throw Error(`HTTP ${a.status} ${a.statusText}`)}const V=async(a,o)=>{const n={accept:"application/json",Authorization:`AccessKey ${o}`};console.log(n);const l=new Request("https://rest.messagebird.com/"+a,{headers:n,referrerPolicy:"no-referrer"}),e=await fetch(l);return te(e),await e.json()},ae=a=>V("balance",a),se=a=>V("messages",a);const oe=a=>(N("data-v-c35534b6"),a=a(),O(),a),ne={class:"HelpfulHackingDisplay"},le=oe(()=>c("h3",null,"Hacking Display",-1)),ie={setup(a){const o=h("api_key"),n=h("api_key_is_valid"),l=async()=>{const s=u(u(o));console.log(await ae(s))},e=async()=>{const s=u(u(o));console.log(await se(s))};return(s,i)=>(d(),_("div",ne,[le,c("div",null," api_key: "+y(JSON.stringify(u(u(o)))),1),c("div",null," api_key_is_valid: "+y(JSON.stringify(u(u(n)))),1),c("div",null,[t(p,{label:"fetch balance (to console)",onClick:l}),t(p,{label:"fetch message list (to console)",onClick:e})])]))}};var A=v(ie,[["__scopeId","data-v-c35534b6"]]);const re={class:"Dashboard"},ce={setup(a){const o=h("api_key"),n=h("api_key_is_valid"),l=e=>{n.value=!1,o.value=e};return(e,s)=>(d(),_("div",re,[t(ee,{onChange_api_key:l}),t(A)]))}},ue={class:"q-pa-md"},de={class:"q-gutter-y-md"},_e=c("div",{class:"text-h6"},"App state:",-1),pe=c("div",{class:"text-h6"},"Build information:",-1),fe={setup(a){const o=f("buildinfo"),n=JSON.stringify({VITE_BUILD_INFO:`{
  "current_git_status": "clean",
  "current_commit": "https://github.com/tiwo/sms-frontend/commit/e9eb2829cd8871d1cca95611e7d4aa919c03be58",
  "current_branch": "https://github.com/tiwo/sms-frontend/tree/main",
  "current_date": "2021-11-21T00:40:27+00:00",
  "built_from": "deploy.sh"
}`,BASE_URL:"/sms-frontend/",MODE:"production",DEV:!1,PROD:!0},null,2);return(l,e)=>(d(),_("div",ue,[c("div",de,[t(k,null,{default:r(()=>[t(q,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[t($,{name:"state",label:"state"}),t($,{name:"buildinfo",label:"build info"})]),_:1},8,["modelValue"]),t(P),t(L,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),animated:""},{default:r(()=>[t(x,{name:"state"},{default:r(()=>[_e,t(A)]),_:1}),t(x,{name:"buildinfo"},{default:r(()=>[pe,c("pre",null,y(u(n)),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}},me={},he={class:"About"},ye=c("h1",null,"About this app",-1),ve=c("p",null,"This apps display your kast sms messages",-1);function be(a,o){return d(),_("div",he,[ye,ve,t(p,{to:{name:"TechnicalInfo"},"no-caps":"",flat:"",label:"technical info"})])}var ge=v(me,[["render",be]]);const ke=[{path:"/",name:"Dashboard",component:ce},{path:"/debug",name:"TechnicalInfo",component:fe},{path:"/about",name:"About",component:ge}],we=j({routes:ke,history:R()}),b=U(G);b.use(we);b.use(F,{plugins:{}});b.mount("#app");