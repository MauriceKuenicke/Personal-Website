import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.e9bf32f7.js";import{u as d}from"./asyncData.6333d21c.js";import f from"./Ellipsis.502a71fb.js";import _ from"./ComponentPlaygroundData.cd543b5e.js";import"./TabsHeader.1c39e38d.js";import"./ComponentPlaygroundProps.45c45f7a.js";import"./ProseH4.effebb8e.js";import"./ProseCodeInline.d2b90bfd.js";import"./Badge.fd99c340.js";import"./MDCSlot.c7d435cb.js";import"./slot.a9912edd.js";import"./ProseP.ed5739e9.js";import"./index.89d950e9.js";import"./ComponentPlaygroundSlots.vue.87f33a94.js";import"./ComponentPlaygroundTokens.vue.4d18affb.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-9ca9b996"]]);export{V as default};