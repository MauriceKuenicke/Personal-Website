import s from"./ContentSlot.8fed5e5b.js";import{d as o,a8 as u,I as f,aj as m}from"./entry.f4c5972d.js";import"./MDCSlot.0cc71bf9.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};