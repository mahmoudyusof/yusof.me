import{d as r,a0 as n,a8 as c,Y as h,s as o,a9 as d,c as l,e as u,B as f}from"./D9TQMOs_.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return d(s,t.src)}return t.src});return(a,s)=>(l(),u("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};