(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6172:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8931)}])},947:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(1527),o=i(3648);function s(e){let{children:t,duration:i,delay:s,whileInView:r=!1}=e,a={opacity:1,y:0,transition:{duration:i,ease:"easeInOut",delay:s}};return(0,n.jsx)(o.E.div,{initial:{y:200,opacity:0},whileInView:r?a:{},animate:r?{}:a,children:t})}},1581:function(e,t,i){"use strict";i.d(t,{G:function(){return o},X:function(){return n}});let n=[{index:0,title:"Waking Up",href:"/projects",tags:[],image:{LIGHT:"/images/projects/wakingup_1.jpg",DARK:"/images/projects/wakingup_2.jpg"}},{index:1,title:"Privilee",href:"/projects",tags:[],image:{LIGHT:"/images/projects/privilee.jpg",DARK:"/images/projects/privilee_dark.jpg"}},{index:2,title:"Lyveat",href:"/projects",tags:[],image:{LIGHT:"/images/projects/lyveat_1.jpg",DARK:"/images/projects/lyveat_2.jpg"}}],o=[{name:"Thom Browne",favicon:"/images/projects/logos/favicon.ico",imageUrl:["/images/projects/thombrowne.jpg","/images/projects/thombrowne_1.jpg"],description:"...",liveWebsiteHref:"https://www.thombrowne.com/"},{name:"Privilee",favicon:"/images/projects/logos/favicon.ico",imageUrl:["/images/projects/privilee.jpg","/images/projects/privilee_dark.jpg"],description:"... ",liveWebsiteHref:"https://kannban-board.vercel.app"},{name:"Arizona Power Sweeping",favicon:"/images/projects/logos/favicon.ico",imageUrl:["/images/projects/aps.jpg","/images/projects/aps_1.jpg"],description:"...",liveWebsiteHref:"https://manygames.vercel.app"},{name:"Waking Up",favicon:"/images/projects/logos/favicon.ico",imageUrl:["/images/projects/wakingup_1.jpg","/images/projects/wakingup_2.jpg"],description:"Waking Up isn't just another meditation app—it's a new operating system for your mind. We help you discover the true purpose of meditation, and give you pressure- tested wisdom for living a more examined, fulfilling life. Here, you won't find any New Age fluff or religious dogma—just powerful training and insights.",liveWebsiteHref:"https://www.wakingup.com/"},{name:"Lyveat",favicon:"/images/projects/logos/favicon.ico",imageUrl:["/images/projects/lyveat_1.jpg","/images/projects/lyveat_2.jpg","/images/projects/lyveat_3.jpg"],description:"Lyveat is the first French restaurant delivery application outside major cities. A very practical solution when you don't have time to go shopping or want to take a quick meal break. Or simply treat yourself without having to cook! Lyveat is a similar and competing company to Uber Eats | Deliveroo.",liveWebsiteHref:"https://www.lyveat.com/"}]},8931:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(1527),o=i(6907),s=i.n(o),r=i(9660),a=i.n(r),l=i(6288),c=i(959);function p(e){let t=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let{cleanUp:i,renderTrailCursor:n}=function(e){var t;let{ref:i,color:n="rgba(0, 200, 100, 0.7)"}=e,o=null===(t=i.current)||void 0===t?void 0:t.getContext("2d"),s={friction:.5,trails:20,size:40,dampening:.2,tension:.98},r={x:0,y:0},a=!0;class l{constructor(){this.x=0,this.y=0,this.vy=0,this.vx=0}}class c{update(){let e=this.spring,t=this.nodes[0];t.vx+=(r.x-t.x)*e,t.vy+=(r.y-t.y)*e;for(let i=0,n=this.nodes.length;i<n;i++){if(t=this.nodes[i],i>0){let n=this.nodes[i-1];t.vx+=(n.x-t.x)*e,t.vy+=(n.y-t.y)*e,t.vx+=n.vx*s.dampening,t.vy+=n.vy*s.dampening}t.vx*=this.friction,t.vy*=this.friction,t.x+=t.vx,t.y+=t.vy,e*=s.tension}}draw(){let e,t;let i=this.nodes[0].x,n=this.nodes[0].y;o.beginPath(),o.moveTo(i,n);for(let e=1,t=this.nodes.length-2;e<t;e++){let t=this.nodes[e],s=this.nodes[e+1];i=.5*(t.x+s.x),n=.5*(t.y+s.y),o.quadraticCurveTo(t.x,t.y,i,n)}e=this.nodes[this.nodes.length-2],t=this.nodes[this.nodes.length-1],o.quadraticCurveTo(e.x,e.y,t.x,t.y),o.stroke(),o.closePath()}constructor(e){var t;this.spring=e.spring+.1*Math.random()-.07,this.friction=s.friction+.01*Math.random()-.005;let i=null!==(t=e.cursorPosition)&&void 0!==t?t:{x:0,y:0};this.nodes=[];for(let e=0;e<s.size;e++){let e=new l;e.x=i.x,e.y=i.y,this.nodes.push(e)}}}function p(){if(a){o.globalCompositeOperation="source-over",o.clearRect(0,0,o.canvas.width,o.canvas.height),o.globalCompositeOperation="lighter",o.strokeStyle=n,o.lineWidth=1;for(let e,t=0;t<s.trails;t++)void 0!==d[t]&&((e=d[t]).update(),e.draw());window.requestAnimationFrame(p)}}let d=[];function m(e){e instanceof MouseEvent?(r.x=e.clientX,r.y=e.clientY):(r.x=e.touches[0].pageX,r.y=e.touches[0].pageY),e.preventDefault()}function u(e){1===e.touches.length&&(r.x=e.touches[0].pageX,r.y=e.touches[0].pageY)}function g(e){document.removeEventListener("mousemove",g),document.removeEventListener("touchstart",g),document.addEventListener("mousemove",m),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),m(e),function(){d=[];for(let e=0;e<s.trails;e++)d.push(new c({spring:.45+e/s.trails*.025}))}(),p()}function v(){o.canvas.width=window.innerWidth-20,o.canvas.height=window.innerHeight}function h(){a=!1}function f(){a||(a=!0,p())}return{cleanUp:function(){document.removeEventListener("mousemove",m),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("mousemove",g),document.removeEventListener("touchstart",g),window.removeEventListener("orientationchange",v),window.removeEventListener("resize",v),window.removeEventListener("focus",f),window.removeEventListener("blur",h)},renderTrailCursor:function(){document.addEventListener("mousemove",g),document.addEventListener("touchstart",g),window.addEventListener("orientationchange",v),window.addEventListener("resize",v),window.addEventListener("focus",f),window.addEventListener("blur",h),v()},stopAnimation:h,startAnimation:f}}({ref:t,color:e.color});return n(),()=>{i()}},[e.color]),(0,n.jsx)("canvas",{ref:t,className:e.className,style:e.style})}var d=i(3648),m=i(5235),u=i(947);function g(){let[e,t]=(0,c.useState)(0),i=(0,c.useRef)(null),o=0,{current:s}=i;s&&(o=Math.min(1,e/s.clientHeight));let r=()=>{t(window.scrollY)};return(0,c.useEffect)(()=>(document.addEventListener("scroll",r),()=>document.removeEventListener("scroll",r)),[]),(0,n.jsx)(d.E.section,{animate:{transform:"translateY(".concat(20*o,"vh)")},transition:{type:"spring",stiffness:100},ref:i,className:"pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20",children:(0,n.jsx)("div",{className:"-mt-[112px] w-full",children:(0,n.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,n.jsxs)(m.M,{children:[(0,n.jsxs)(u.Z,{duration:.6,children:[(0,n.jsx)("h1",{className:"bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text py-2 text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl xl:text-8xl",children:"Kelly Smith"}),(0,n.jsx)("span",{className:"text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl",children:"Experienced Investor with a Proven Track Record of Identifying and Backing Successful Ventures"})]},"title-main"),(0,n.jsx)(u.Z,{duration:.6,delay:.2,children:(0,n.jsxs)("div",{className:"mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl",children:[(0,n.jsx)("span",{className:"text-xl text-teal-700 dark:text-teal-300 sm:text-3xl",children:"Hi"}),", I'm",(0,n.jsxs)("span",{className:"text-teal-700 dark:text-teal-700",children:[" ","Kelly Smith"]})," ",", An Innovative Entrepreneur with a Passion for Solving Industry Challenges and Driving Growth"]})},"description")]})})})})}var v=i(1581),h=i(7809);let f=s()(()=>Promise.all([i.e(114),i.e(941),i.e(2)]).then(i.bind(i,2598)),{loadableGenerated:{webpack:()=>[2598]},ssr:!0}),x=s()(()=>Promise.all([i.e(941),i.e(125)]).then(i.bind(i,9125)),{loadableGenerated:{webpack:()=>[9125]},ssr:!0});function w(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{color:"hsla(25, 34%, 7%, 0.7)",className:"pointer-events-none fixed inset-0 -z-10 h-full w-full"}),(0,n.jsx)(l.PB,{title:"Kelly Smith",description:"Independent, Confident, Optimistic, Straightforward, Patient, Kind, Sincere, Discreet, Loyal.",canonical:h.F.siteUrl,openGraph:{url:h.F.siteUrl,title:"Kelly Smith",description:"Dive into the world of web development with Apollo. Discover a Fullstack Developer with 12 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",images:[{url:"".concat(h.F.siteUrl).concat(h.F.twitterImage),alt:"Apollo - Portfolio Image"}],siteName:h.F.siteName,type:"website"},twitter:{cardType:"summary_large_image"},additionalMetaTags:[{property:"keywords",content:"React Developer, PHP Developer, Python Develeper, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design"}]}),(0,n.jsx)(a(),{children:h.F.googleSiteVerification&&(0,n.jsx)("meta",{name:"google-site-verification",content:h.F.googleSiteVerification})}),(0,n.jsx)(g,{}),(0,n.jsx)(f,{}),(0,n.jsx)(x,{projects:v.X})]})}},7809:function(e,t,i){"use strict";i.d(t,{F:function(){return n}});let n={title:"Kelly Smith",author:"Kelly Smith",headerTitle:"Kelly Smith",description:"Experienced Investor with a Proven Track Record of Identifying and Backing Successful Ventures",language:"en-us",theme:"light",siteName:"apollo-portfolio-ten.vercel.app",siteUrl:"https://apollo-portfolio-ten.vercel.app",siteRepo:"https://github.com/PiresHagan/apollo-v2",siteLogo:"/favicon.ico",image:"/static/homepage.png",twitterImage:"/static/homepage.png",socialBanner:"/static/homepage.png",email:"mailto:kellysmith12233@gmail.com",telegram:"https://t.me/",skype:"https://join.skype.com/invite/",twitter:"https://twitter.com/Kelly777ordain",whatsapp:"https://wa.me/+18507928965",locale:"en-US",googleSiteVerification:"_YJlO90eSoye2AQOhbkRAzNbejzCGiTgAD4RNR3NtHc"}}},function(e){e.O(0,[288,774,888,179],function(){return e(e.s=6172)}),_N_E=e.O()}]);