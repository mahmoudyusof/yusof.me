import{_ as l}from"./CKaxSTBj.js";import{q as _}from"./mCaeChTw.js";import{d,G as p,c as o,e as r,f as e,F as m,E as h,B as x,C as f,w as u,t as n}from"./rvfMUhuX.js";import"./DZ2xa0op.js";const w={class:"min-h-screen flex flex-col mp-10 justify-center bg-slate-900 z-20 relative"},g=e("h1",{class:"mb-10 text-center text-4xl",id:"blog"},"Blog Posts",-1),y={class:"container mx-auto xl:w-1/2 lg:w-3/5 divide-y-2"},b={class:"col-span-10 row-span-1"},k={class:"col-span-10 row-span-1"},B={class:"row-start-1 row-end-3 col-start-11 col-end-13 self-center border-l-2 border-white pl-5"},j=d({__name:"index",async setup(C){let s,a;const c=([s,a]=p(()=>_("/blog").only(["title","description","_path","date"]).sort({date:-1}).find()),s=await s,a(),s);return(v,D)=>{const i=l;return o(),r("div",w,[g,e("div",y,[(o(!0),r(m,null,h(x(c),t=>(o(),f(i,{key:t._path,to:t._path,class:"grid grid-cols-12 grid-rows-2 items-center gap-x-8 p-5 clickable"},{default:u(()=>[e("h3",b,n(t.title),1),e("p",k,n(t.description),1),e("p",B,n(new Date(t.date).toDateString()),1)]),_:2},1032,["to"]))),128))])])}}});export{j as default};