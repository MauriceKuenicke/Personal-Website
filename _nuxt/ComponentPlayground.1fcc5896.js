import{u as m}from"./asyncData.df6b0281.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.a11e0cec.js";import f from"./Ellipsis.6e4e3dc9.js";import _ from"./ComponentPlaygroundData.af786eb4.js";import"./TabsHeader.5673fcd8.js";import"./ComponentPlaygroundProps.27d74c53.js";import"./ProseH4.e4378845.js";import"./ProseCodeInline.42be3e04.js";import"./Badge.30220195.js";import"./MDCSlot.8e694f61.js";import"./slot.b507c1da.js";import"./ProseP.705515c7.js";import"./index.6fa1cd36.js";import"./ComponentPlaygroundSlots.vue.42310b13.js";import"./ComponentPlaygroundTokens.vue.27b3c5d2.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-eb351221"]]);export{V as default};
