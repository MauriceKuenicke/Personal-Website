import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.ead3a3b7.js";import{u as d}from"./asyncData.ec6d0395.js";import f from"./Ellipsis.b10ba5fc.js";import _ from"./ComponentPlaygroundData.95c49b19.js";import"./TabsHeader.dd8c19aa.js";import"./ComponentPlaygroundProps.651742e6.js";import"./ProseH4.e545f901.js";import"./ProseCodeInline.b05f0e8b.js";import"./Badge.36a9082c.js";import"./MDCSlot.4d58e41f.js";import"./slot.1346b12f.js";import"./ProseP.d90f6027.js";import"./index.9908c9cf.js";import"./ComponentPlaygroundSlots.vue.962fd8d3.js";import"./ComponentPlaygroundTokens.vue.50be4fdc.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};
