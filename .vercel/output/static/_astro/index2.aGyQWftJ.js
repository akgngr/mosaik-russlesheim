import{e as A,b as L,u as T,_ as S,j as m,P as $,m as C,n as D,o as G,g as H,f as W,h as E,i as F,A as O,B as R,p as q,q as K,k as M,l as U}from"./studio-component.DtClU_0u.js";import"./client.Dc_o9dEB.js";const X=A.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function z(f){const t=L.c(20),{childItemId:a,items:e,isActive:i,layout:c,showIcons:d,title:r}=f,{collapsed:j}=C();let u;t[0]!==e?(u=e?.filter(J),t[0]=e,t[1]=u):u=t[1];const s=D(u);let o;t[2]!==e?(o=n=>{var B;return((B=e?.find((P,g)=>g===n))==null?void 0:B.type)==="divider"},t[2]=e,t[3]=o):o=t[3];const l=o;let y;t[4]!==d?(y=n=>{var B;const P=(B=n.displayOptions)==null?void 0:B.showIcon;return typeof P<"u"?P!==!1:d!==!1},t[4]=d,t[5]=y):y=t[5];const x=y;let p;t[6]!==a||t[7]!==s||t[8]!==i||t[9]!==c||t[10]!==x?(p=(n,B)=>{const{virtualIndex:P}=B;if(n.type==="divider")return m.jsx(R,{marginBottom:1,children:m.jsx(X,{})},`divider-${P}`);const g=!i&&a===n.id,w=i&&a===n.id,k=n._id&&n.schemaType?{_id:n._id,_type:n.schemaType.name,title:n.title}:void 0;return m.jsx(q,{icon:x(n)?n.icon:!1,id:n.id,layout:c,marginBottom:1,pressed:g,schemaType:n.schemaType,selected:w,title:s(n).title,value:k},n.id)},t[6]=a,t[7]=s,t[8]=i,t[9]=c,t[10]=x,t[11]=p):p=t[11];const I=p,v=j?"hidden":"auto";let h;t[12]!==l||t[13]!==e||t[14]!==I||t[15]!==r?(h=e&&e.length>0&&m.jsx(G,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:l,itemHeight:51,items:e,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1}),t[12]=l,t[13]=e,t[14]=I,t[15]=r,t[16]=h):h=t[16];let b;return t[17]!==v||t[18]!==h?(b=m.jsx(K,{overflow:v,children:h}),t[17]=v,t[18]=h,t[19]=b):b=t[19],b}function J(f){return f.type!=="divider"}const N=f=>{const t=L.c(11),{index:a,menuItems:e,menuItemGroups:i,title:c}=f,{features:d}=H(),{collapsed:r,isLast:j}=W(),u=j&&!r?-1:0;let s;t[0]!==i||t[1]!==e?(s=m.jsx(M,{menuItems:e,menuItemGroups:i}),t[0]=i,t[1]=e,t[2]=s):s=t[2];let o;t[3]!==d.backButton||t[4]!==a?(o=d.backButton&&a>0&&m.jsx(E,{as:F,"data-as":"a",icon:O,mode:"bleed",tooltipProps:{content:"Back"}}),t[3]=d.backButton,t[4]=a,t[5]=o):o=t[5];let l;return t[6]!==s||t[7]!==o||t[8]!==u||t[9]!==c?(l=m.jsx(U,{actions:s,backButton:o,tabIndex:u,title:c}),t[6]=s,t[7]=o,t[8]=u,t[9]=c,t[10]=l):l=t[10],l};function Y(f){const t=L.c(21),{childItemId:a,index:e,isActive:i,isSelected:c,pane:d,paneKey:r}=f,{defaultLayout:j,displayOptions:u,items:s,menuItems:o,menuItemGroups:l}=d,y=u?.showIcons!==!1,{title:x}=T(d);let p;t[0]!==d.source?(p=S,t[0]=d.source,t[1]=p):p=t[1];let I;t[2]!==e||t[3]!==l||t[4]!==o||t[5]!==x?(I=m.jsx(N,{index:e,menuItems:o,menuItemGroups:l,title:x}),t[2]=e,t[3]=l,t[4]=o,t[5]=x,t[6]=I):I=t[6];let v;t[7]!==a||t[8]!==j||t[9]!==i||t[10]!==s||t[11]!==r||t[12]!==y||t[13]!==x?(v=m.jsx(z,{childItemId:a,isActive:i,items:s,layout:j,showIcons:y,title:x},r),t[7]=a,t[8]=j,t[9]=i,t[10]=s,t[11]=r,t[12]=y,t[13]=x,t[14]=v):v=t[14];let h;return t[15]!==c||t[16]!==r||t[17]!==p||t[18]!==I||t[19]!==v?(h=m.jsxs($,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:c,children:[p,I,v]}),t[15]=c,t[16]=r,t[17]=p,t[18]=I,t[19]=v,t[20]=h):h=t[20],h}export{Y as default};
