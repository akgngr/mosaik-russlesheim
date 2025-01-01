import{c as I}from"./studio-component.DtClU_0u.js";import"./client.Dc_o9dEB.js";const j=/_key\s*==\s*['"](.*)['"]/;function C(e){return typeof e=="string"?j.test(e.trim()):typeof e=="object"&&"_key"in e}function x(e){if(!Array.isArray(e))throw new Error("Path is not an array");return e.reduce((t,r,n)=>{const o=typeof r;if(o==="number")return`${t}[${r}]`;if(o==="string")return`${t}${n===0?"":"."}${r}`;if(C(r)&&r._key)return`${t}[_key=="${r._key}"]`;if(Array.isArray(r)){const[a,i]=r;return`${t}[${a}:${i}]`}throw new Error(`Unsupported path segment \`${JSON.stringify(r)}\``)},"")}const w={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},b={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function W(e){return`$${e.map(t=>typeof t=="string"?`['${t.replace(/[\f\n\r\t'\\]/g,r=>w[r])}']`:typeof t=="number"?`[${t}]`:t._key!==""?`[?(@._key=='${t._key.replace(/['\\]/g,r=>w[r])}')]`:`[${t._index}]`).join("")}`}function m(e){const t=[],r=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let n;for(;(n=r.exec(e))!==null;){if(n[1]!==void 0){const o=n[1].replace(/\\(\\|f|n|r|t|')/g,a=>b[a]);t.push(o);continue}if(n[2]!==void 0){t.push(parseInt(n[2],10));continue}if(n[3]!==void 0){const o=n[3].replace(/\\(\\')/g,a=>b[a]);t.push({_key:o,_index:-1});continue}}return t}function U(e){return e.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._key!=="")return{_key:t._key};if(t._index!==-1)return t._index;throw new Error(`invalid segment:${JSON.stringify(t)}`)})}function L(e){return e.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._index!==-1)return t._index;throw new Error(`invalid segment:${JSON.stringify(t)}`)})}function O(e,t){if(!t?.mappings)return;const r=W(L(e));if(t.mappings[r]!==void 0)return{mapping:t.mappings[r],matchedPath:r,pathSuffix:""};const n=Object.entries(t.mappings).filter(([f])=>r.startsWith(f)).sort(([f],[s])=>s.length-f.length);if(n.length==0)return;const[o,a]=n[0],i=r.substring(o.length);return{mapping:a,matchedPath:o,pathSuffix:i}}function N(e){return e!==null&&Array.isArray(e)}function E(e){return typeof e=="object"&&e!==null}function l(e,t,r=[]){if(N(e))return e.map((n,o)=>{if(E(n)){const a=n._key;if(typeof a=="string")return l(n,t,r.concat({_key:a,_index:o}))}return l(n,t,r.concat(o))});if(E(e)){if(e._type==="block"||e._type==="span"){const n={...e};return e._type==="block"?n.children=l(e.children,t,r.concat("children")):e._type==="span"&&(n.text=l(e.text,t,r.concat("text"))),n}return Object.fromEntries(Object.entries(e).map(([n,o])=>[n,l(o,t,r.concat(n))]))}return t(e,r)}function D(e,t,r){return l(e,(n,o)=>{if(typeof n!="string")return n;const a=O(o,t);if(!a)return n;const{mapping:i,matchedPath:f}=a;if(i.type!=="value"||i.source.type!=="documentValue")return n;const s=t.documents[i.source.document],p=t.paths[i.source.path],d=m(f),c=m(p).concat(o.slice(d.length));return r({sourcePath:c,sourceDocument:s,resultPath:o,value:n})})}const $="drafts.";function M(e){return e.startsWith($)?e.slice($.length):e}function q(e){const{baseUrl:t,workspace:r="default",tool:n="default",id:o,type:a,path:i,projectId:f,dataset:s}=e;if(!t)throw new Error("baseUrl is required");if(!i)throw new Error("path is required");if(!o)throw new Error("id is required");if(t!=="/"&&t.endsWith("/"))throw new Error("baseUrl must not end with a slash");const p=r==="default"?void 0:r,d=n==="default"?void 0:n,c=M(o),h=Array.isArray(i)?x(U(i)):i,u=new URLSearchParams({baseUrl:t,id:c,type:a,path:h});p&&u.set("workspace",p),d&&u.set("tool",d),f&&u.set("projectId",f),s&&u.set("dataset",s),o.startsWith($)&&u.set("isDraft","");const y=[t==="/"?"":t];p&&y.push(p);const g=["mode=presentation",`id=${c}`,`type=${a}`,`path=${encodeURIComponent(h)}`];return d&&g.push(`tool=${d}`),y.push("intent","edit",`${g.join(";")}?${u}`),y.join("/")}function J(e){let t=typeof e=="string"?e:e.baseUrl;return t!=="/"&&(t=t.replace(/\/$/,"")),typeof e=="string"?{baseUrl:t}:{...e,baseUrl:t}}const k=({sourcePath:e,resultPath:t,value:r})=>{if(G(r)||K(r))return!1;const n=e.at(-1);return!(e.at(-2)==="slug"&&n==="current"||typeof n=="string"&&(n.startsWith("_")||n.endsWith("Id"))||e.some(o=>o==="meta"||o==="metadata"||o==="openGraph"||o==="seo")||S(e)||S(t)||typeof n=="string"&&V.has(n))},V=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","textTheme","unit","url","username","variant","website"]);function G(e){return/^\d{4}-\d{2}-\d{2}/.test(e)?!!Date.parse(e):!1}function K(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}function S(e){return e.some(t=>typeof t=="string"&&t.match(/type/i)!==null)}const _=20;function z(e,t,r){const{filter:n,logger:o,enabled:a}=r;if(!a){const s="config.enabled must be true, don't call this function otherwise";throw o?.error?.(`[@sanity/client]: ${s}`,{result:e,resultSourceMap:t,config:r}),new TypeError(s)}if(!t)return o?.error?.("[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){const s="config.studioUrl must be defined";throw o?.error?.(`[@sanity/client]: ${s}`,{result:e,resultSourceMap:t,config:r}),new TypeError(s)}const i={encoded:[],skipped:[]},f=D(e,t,({sourcePath:s,sourceDocument:p,resultPath:d,value:c})=>{if((typeof n=="function"?n({sourcePath:s,resultPath:d,filterDefault:k,sourceDocument:p,value:c}):k({sourcePath:s,resultPath:d,filterDefault:k,sourceDocument:p,value:c}))===!1)return o&&i.skipped.push({path:P(s),value:`${c.slice(0,_)}${c.length>_?"...":""}`,length:c.length}),c;o&&i.encoded.push({path:P(s),value:`${c.slice(0,_)}${c.length>_?"...":""}`,length:c.length});const{baseUrl:h,workspace:u,tool:y}=J(typeof r.studioUrl=="function"?r.studioUrl(p):r.studioUrl);if(!h)return c;const{_id:g,_type:A,_projectId:R,_dataset:T}=p;return I(c,{origin:"sanity.io",href:q({baseUrl:h,workspace:u,tool:y,id:g,type:A,path:s,...!r.omitCrossDatasetReferenceData&&{dataset:T,projectId:R}})},!1)});if(o){const s=i.skipped.length,p=i.encoded.length;if((s||p)&&((o?.groupCollapsed||o.log)?.("[@sanity/client]: Encoding source map into result"),o.log?.(`[@sanity/client]: Paths encoded: ${i.encoded.length}, skipped: ${i.skipped.length}`)),i.encoded.length>0&&(o?.log?.("[@sanity/client]: Table of encoded paths"),(o?.table||o.log)?.(i.encoded)),i.skipped.length>0){const d=new Set;for(const{path:c}of i.skipped)d.add(c.replace(j,"0").replace(/\[\d+\]/g,"[]"));o?.log?.("[@sanity/client]: List of skipped paths",[...d.values()])}(s||p)&&o?.groupEnd?.()}return f}function P(e){return x(U(e))}var X=Object.freeze({__proto__:null,stegaEncodeSourceMap:z});export{D as encodeIntoResult,z as stegaEncodeSourceMap,X as stegaEncodeSourceMap$1};
