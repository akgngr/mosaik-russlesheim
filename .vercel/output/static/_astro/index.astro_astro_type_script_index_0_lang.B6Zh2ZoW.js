import{g as D,S as j}from"./swiper.Q9gGecdY.js";function k(C){let{swiper:e,extendParams:N,on:s,emit:r,params:u}=C;e.autoplay={running:!1,paused:!1,timeLeft:0},N({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let y,T,E=u&&u.autoplay?u.autoplay.delay:3e3,g=u&&u.autoplay?u.autoplay.delay:3e3,n,f=new Date().getTime(),b,v,p,h,L,o,S;function O(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",O),!(S||t.detail&&t.detail.bySwiperTouchMove)&&l())}const M=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?b=!0:b&&(g=n,b=!1);const t=e.autoplay.paused?n:f+g-new Date().getTime();e.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/E),T=requestAnimationFrame(()=>{M()})},V=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(a=>a.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},w=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(T),M();let i=typeof t>"u"?e.params.autoplay.delay:t;E=e.params.autoplay.delay,g=e.params.autoplay.delay;const a=V();!Number.isNaN(a)&&a>0&&typeof t>"u"&&(i=a,E=a,g=a),n=i;const m=e.params.speed,F=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(m,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,m,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(m,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,m,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return i>0?(clearTimeout(y),y=setTimeout(()=>{F()},i)):requestAnimationFrame(()=>{F()}),i},P=()=>{f=new Date().getTime(),e.autoplay.running=!0,w(),r("autoplayStart")},c=()=>{e.autoplay.running=!1,clearTimeout(y),cancelAnimationFrame(T),r("autoplayStop")},d=(t,i)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(y),t||(o=!0);const a=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",O):l()};if(e.autoplay.paused=!0,i){L&&(n=e.params.autoplay.delay),L=!1,a();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),a())},l=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),o?(o=!1,w(n)):w(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const t=D();t.visibilityState==="hidden"&&(o=!0,d(!0)),t.visibilityState==="visible"&&l()},B=t=>{t.pointerType==="mouse"&&(o=!0,S=!0,!(e.animating||e.autoplay.paused)&&d(!0))},A=t=>{t.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&l())},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",B),e.el.addEventListener("pointerleave",A))},x=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",B),e.el.removeEventListener("pointerleave",A))},R=()=>{D().addEventListener("visibilitychange",I)},_=()=>{D().removeEventListener("visibilitychange",I)};s("init",()=>{e.params.autoplay.enabled&&(q(),R(),P())}),s("destroy",()=>{x(),_(),e.autoplay.running&&c()}),s("_freeModeStaticRelease",()=>{(p||o)&&l()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?c():d(!0,!0)}),s("beforeTransitionStart",(t,i,a)=>{e.destroyed||!e.autoplay.running||(a||!e.params.autoplay.disableOnInteraction?d(!0,!0):c())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){c();return}v=!0,p=!1,o=!1,h=setTimeout(()=>{o=!0,p=!0,d(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(y),e.params.autoplay.disableOnInteraction){p=!1,v=!1;return}p&&e.params.cssMode&&l(),p=!1,v=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(L=!0)}),Object.assign(e.autoplay,{start:P,stop:c,pause:d,resume:l})}document.addEventListener("DOMContentLoaded",()=>{new j(".swiper",{modules:[k],loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:30}},spaceBetween:30,scrollbar:{el:".swiper-scrollbar"}})});