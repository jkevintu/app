(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/project-gamersensei.af37db80.png"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce.13298c72.png"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/default-project-pic.d5428f73.png"},,function(e,t,a){e.exports=a.p+"static/media/project-gamersensei-0.273326e5.png"},function(e,t,a){e.exports=a.p+"static/media/project-gamersensei-1.fc759191.png"},function(e,t,a){e.exports=a.p+"static/media/project-gamersensei-2.8b334ed6.png"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce-booking-desktop.32120f34.jpg"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce-booking-mobile.739ab316.jpg"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce-3.a6d7cda7.jpg"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce-4.d531bed7.png"},function(e,t,a){e.exports=a.p+"static/media/project-quikforce-5.6c12b1e2.png"},function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Montserrat-Regular.ee653992.ttf"},function(e,t,a){e.exports=a.p+"static/media/Montserrat-Bold.ade91f47.ttf"},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(22),o=a.n(l),r=(a(38),a(11)),m=a(1),c=a(14),s={display:"flex",color:"white",textDecoration:"none",lineHeight:"24px",fontSize:"calc(10px + 1vmin)",padding:"0 20px"},u={textDecoration:"underline"},d=function(e,t){var a=Object.assign({},s);return t.hover&&Object.assign(a,u),a},p=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1];function r(e){o(e)}return n.a.createElement("a",{href:e.href,style:d(0,{hover:l}),onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},n.a.createElement("div",null,e.children))},E={width:"100%",padding:"14px 0",display:"flex",flexDirection:"row",justifyContent:"flex-end",position:"absolute",zIndex:10},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{href:"/app/#about"},"about"),n.a.createElement(p,{href:"/app/#work"},"work"),n.a.createElement(p,{href:"/app/#designs"},"designs"))},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{href:"/app"},"X"))};function h(e){return n.a.createElement("header",{className:"header",style:E},function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?g():f()}(e.isHomePage))}var v={width:"100%",padding:"14px 0",display:"flex",flexDirection:"row",justifyContent:"flex-start",position:"relative",backgroundColor:"#252525",color:"#ccc"},b=function(e){return n.a.createElement("div",{style:v},n.a.createElement("div",{style:{maxWidth:"1080px",margin:"0 auto"}},"\xa9 2020 Kevin Tu"))};function q(e){return n.a.createElement("div",{className:"layout"},n.a.createElement(h,{isHomePage:!0}),e.children,n.a.createElement(b,null))}a(39);var N={minHeight:"100vh"},w={height:"670px",maxHeight:"75vh",color:"white"},x={position:"absolute",zIndex:1,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",textShadow:"1px 1px #888"},k=function(e){var t=e.isHomePage?N:w;return Object.assign({position:"absolute"},x,t)},y=function(e){var t=e.isHomePage?N:w;return Object.assign({},t,L(e))},L=function(e){var t={},a="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat";return e.heroImgUrl&&(a="url(".concat(e.heroImgUrl,") center center / cover")),t.background=a,t};function U(e){return n.a.createElement("div",{className:"hero"},n.a.createElement("div",{style:k(e)},e.children),n.a.createElement("div",{style:y(e)}))}a(40);var j=function(e){var t=e.className,a="section "+(void 0===t?"":t);return n.a.createElement("div",{id:e.sectionId,className:a},e.children)},S=(a(41),a(23)),A=a.n(S),I=function(e){if(e.hover)return"hover"},T=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1];function m(e){o(e)}return n.a.createElement("div",{className:"image-item",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},n.a.createElement(r.b,{to:e.url||"#"},n.a.createElement("div",{className:"image-item-name-wrapper"},e.name,function(e){if(e.subName)return n.a.createElement("div",{className:"image-item-subname"},e.subName)}(e)),!e.imgSrc&&n.a.createElement("div",{style:{background:"#000",objectFit:"fill",width:"100%",height:"100%",position:"absolute",zIndex:1,opacity:.4}}),n.a.createElement("img",{className:I({hover:l}),src:e.imgSrc||A.a,alt:e.name})))},P=function(){return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),null},O=a(12),R=a.n(O),D=a(13),M=a.n(D),H=[{id:0,hidden:!1,name:"Sensei Search 2.0",subName:"GamerSensei",url:"/app/gamer-sensei-ecommerce",imgSrc:R.a},{id:1,name:"Quikforce",subName:"On-Demand moving service",url:"/app/quikforce",imgSrc:M.a},{id:2,hidden:!0,name:"508 Compliance",subName:"Liaison",url:"/app/508-compliance"},{id:3,hidden:!0,name:"Pothole Sonar",subName:"",url:"/app/gamer-sensei-ecommerce"}],Q=[{id:1,name:"Brand",subName:"Logos, posters",url:"/app/logos"},{id:2,name:"Marketing",subName:"booklets, banners",url:"/app/marketing-content"},{id:3,hidden:!0,name:"UI / UX",subName:"Wireframes",url:"/app/wireframes"}];function W(){return n.a.createElement(q,null,n.a.createElement(P,null),n.a.createElement(U,{isHomePage:!0},n.a.createElement("code",{style:{padding:"0 40px"}},"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.")),n.a.createElement(j,{sectionId:"about"},n.a.createElement("h2",null,"About"),n.a.createElement("code",null,n.a.createElement("strong",null,"J.Kevin Tu"),n.a.createElement("br",null),"Frontend Developer / Consultant",n.a.createElement("br",null),"-----------------------------------",n.a.createElement("br",null),"HTML/CSS",n.a.createElement("br",null),"Javascript (Vue, React, Angular)",n.a.createElement("br",null),"UI/UX/Branding (Photoshop, Sktech)",n.a.createElement("br",null),"SEO, SEM, Google Analytics",n.a.createElement("br",null),"508 Compliance",n.a.createElement("br",null)),n.a.createElement("p",{className:"about-links"},n.a.createElement("a",{href:"mailto:ktu@jkevintu.com"},"ktu@jkevintu.com"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.linkedin.com/in/jkevintu"},">> linkedin"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/jkevintu"},">> Github"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://stackoverflow.com/users/527376/ktu"},">> Stackoverflow"))),n.a.createElement(j,null,n.a.createElement("hr",null)),n.a.createElement(j,{sectionId:"work"},n.a.createElement("h2",null,"Work"),n.a.createElement("div",{className:"section-items"},H.map((function(e){return e.hidden?null:n.a.createElement(T,{key:e.id,name:e.name,subName:e.subName,url:e.url,imgSrc:e.imgSrc})})))),n.a.createElement(j,null,n.a.createElement("hr",null)),n.a.createElement(j,{sectionId:"designs"},n.a.createElement("h2",null,"Designs"),n.a.createElement("div",{className:"section-items"},Q.map((function(e){return e.hidden?null:n.a.createElement(T,{key:e.id,name:e.name,subName:e.subName,url:e.url,imgSrc:e.imgSrc})})))))}function C(e){return n.a.createElement("div",{className:"project-layout"},n.a.createElement(h,{isHomePage:!1}),e.children,n.a.createElement(b,null))}var F=a(7);a(47);function z(e){return n.a.createElement("div",{className:Object(F.a)("section-project-desc",e.className)},e.children,function(e){return e.linkText&&e.linkUrl?n.a.createElement("div",{className:"section-project-desc-button-wrapper"},n.a.createElement("a",{href:e.linkUrl,rel:"noopener noreferer"},n.a.createElement("button",{className:"section-project-desc-button"},e.linkText))):null}(e))}a(48);function B(e){return n.a.createElement("div",{className:"section-profile-card"},e.children)}a(49);var G={textAlign:"center",fontSize:"0.6em",color:"#444"};function V(e){return n.a.createElement("div",{className:Object(F.a)("section-profile-image",e.className)},n.a.createElement("img",{alt:e.name,src:e.imgURL}),e.name&&e.captionShow&&n.a.createElement("div",{style:G},e.name))}a(50);function Y(e){return n.a.createElement("div",{className:"section-project-wrapper"},e.children)}a(51);function J(e){return n.a.createElement("div",{className:Object(F.a)("section-profile-detail",e.className)},e.children)}function K(e){return n.a.createElement(C,null,n.a.createElement(P,null),n.a.createElement(U,{isHomePage:!1,heroImgUrl:null},n.a.createElement("h1",null,"Project Title"),n.a.createElement("sub",null,"Company Name // 2019 - Present")),n.a.createElement(j,{className:"flex"},n.a.createElement(z,{className:"large",linkText:"Download App",linkUrl:"https://google.com"},n.a.createElement("p",{className:"project-major-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),n.a.createElement(z,{className:"small"},n.a.createElement("div",{className:"desc-wrapper"},n.a.createElement("div",{className:"desc-title"},"Role"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit",n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Time Frame"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Technologies"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),n.a.createElement(j,{className:"video noPaddingTop noPaddingMobile"},n.a.createElement("iframe",{title:"video",width:"100%",height:"630px",src:"https://www.youtube.com/embed/Y8-Q4h_LGSM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.a.createElement("div",{className:"section-wrapper dark"},n.a.createElement(j,{className:"dark flex"},n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Problem"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Thinking"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Result"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),n.a.createElement(j,null,n.a.createElement(V,{name:"Image: before & after",imgURL:"https://via.placeholder.com/1200x550?text=Image:%20Before%20and%20After"}),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"))),n.a.createElement(Y,null,n.a.createElement(V,{name:"Structure",imgURL:"https://via.placeholder.com/1200x550?text=Structure"})),n.a.createElement(Y,null,n.a.createElement(V,{name:"Image: Landing page + customozie & shop",imgURL:"https://via.placeholder.com/1200x550?text=Image: Landing page + customozie"})),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"))),n.a.createElement(Y,null,n.a.createElement("iframe",{title:"video",width:"100%",height:"630px",src:"https://www.youtube.com/embed/Y8-Q4h_LGSM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")))))}var _=a(25),X=a.n(_),Z=a(26),$=a.n(Z),ee=a(27),te=a.n(ee);function ae(e){return n.a.createElement(C,null,n.a.createElement(P,null),n.a.createElement(U,{isHomePage:!1,heroImgUrl:R.a},n.a.createElement("h1",null,"Sensei Search 2.0"),n.a.createElement("sub",null,"GamerSensei // 2016 - 2017")),n.a.createElement(j,{className:"flex"},n.a.createElement(z,{className:"large",linkText:"Launch Website",linkUrl:"https://gamersensei.com/senseis/searches"},n.a.createElement("p",{className:"project-major-desc"},"Our goal was to deliver new ecommerce shopping experience to students when shopping for coaches")),n.a.createElement(z,{className:"small"},n.a.createElement("div",{className:"desc-wrapper"},n.a.createElement("div",{className:"desc-title"},"Role"),n.a.createElement("div",{className:"desc-content"},"Web consultant / Sr.Frontend Engineer",n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Time Frame"),n.a.createElement("div",{className:"desc-content"},"Sep 2016 - Oct 2017"),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Technologies"),n.a.createElement("div",{className:"desc-content"},"AngularJS / Ruby on Rails")))),n.a.createElement(j,null,n.a.createElement(V,{name:"Gamesensei website on a Mac monitor",imgURL:X.a})),n.a.createElement("div",{className:"section-wrapper dark"},n.a.createElement(j,{className:"dark flex"},n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Problem"),n.a.createElement("div",{className:"section-profile-subtitle"},"How to build ecommerce service from scrath?"),n.a.createElement("div",{className:"section-profile-content"},"In order to deliver the full experience we are comparing ourselves with mature product like Amazon or Walmart, there was a huge gap between the final product and mockup")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Thinking"),n.a.createElement("div",{className:"section-profile-subtitle"},"Resources and Milestone"),n.a.createElement("div",{className:"section-profile-content"},"Thought we know what the end product look like, there are things need to clarify: ",n.a.createElement("i",null,'"How can we break down the problem? How do we define clear timelines?"'),"  ... The goal is the business side knows when to jump in and make suggestion and improvement without false expectations")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Solution"),n.a.createElement("div",{className:"section-profile-subtitle"},"Built from working prototype to Minimum Viable Product"),n.a.createElement("div",{className:"section-profile-content"},"After the analysis we trim the mockup and come up with a proposal that only core functions were left, also we create stories and prioritize them with business so we know at what stage that our MVP is testable or releasable")))),n.a.createElement(j,null,n.a.createElement(V,{name:"Before and after the mockup change",imgURL:$.a}),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Define the scope of a usable prototype with existing and upcoming features"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"When business side and designers are building something brand new, it's common to throw-in too many features at the same time. It's reasonable that product person having the end goal of the product in mind, however it will become a giant monster if try to break up stories from it."),n.a.createElement("p",null,"For teams that used to work in a bigger size of company, it's easy to have the mindset: 'Things only releasable when every features are done'. This often makes the project size too big, hard to develop and very hard to test."),n.a.createElement("p",null,'To break down the features into smaller and digestible chunks, a very important principle to ask ourselves : "What doe users want?" and "What service can we provide them at the moment?"'),n.a.createElement("p",null,'For example, at the very beginning the API was only capable of return list of coaches using only by name of the game, that gave us a good foundation of: "What are the best tower we can build base on the tecnologies we have?"'))),n.a.createElement(Y,null,n.a.createElement(V,{name:"Feature analysis",captionShow:!0,imgURL:te.a})),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},'Identify "Core features" or "Good to have"'),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"However we have to keep in mind that identify what are the low haning fruits might be simple, but that doesn't mean we have to implemet all of them."),n.a.createElement("p",null,"When doing prototyping it's easy to fall in the pitfall when business think this is ",n.a.createElement("i",null,'"Easy to to"'),". Not only the development time has cost, it also can impact if the product make sense in the middle of development.")))))}var ie=a(28),ne=a.n(ie),le=a(29),oe=a.n(le),re=a(30),me=a.n(re),ce=a(31),se=a.n(ce),ue=a(32),de=a.n(ue);function pe(e){return n.a.createElement(C,null,n.a.createElement(P,null),n.a.createElement(U,{isHomePage:!1,heroImgUrl:M.a},n.a.createElement("h1",null,"Quikforce"),n.a.createElement("sub",null,"On-Demand moving service")),n.a.createElement(j,{className:"flex"},n.a.createElement(z,{className:"large",linkText:"Open Website",linkUrl:"https://bluepanda007.herokuapp.com/"},n.a.createElement("p",{className:"project-major-desc"},"Our goal was to build an O2O platform that makes moving no longer stressful and painful")),n.a.createElement(z,{className:"small"},n.a.createElement("div",{className:"desc-wrapper"},n.a.createElement("div",{className:"desc-title"},"Role"),n.a.createElement("div",{className:"desc-content"},"Co-founder, CTO"),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Time Frame"),n.a.createElement("div",{className:"desc-content"},"Sep 2015 - Sep 2016"),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Technologies"),n.a.createElement("div",{className:"desc-content"},"AngularJS, Python, Firebase, Stripe")))),n.a.createElement(j,{className:"flex"},n.a.createElement(V,{name:"Quikforce website on desktop",imgURL:ne.a})),n.a.createElement("div",{className:"section-wrapper dark"},n.a.createElement(j,{className:"dark flex"},n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Problem"),n.a.createElement("div",{className:"section-profile-subtitle"},"Moving is painful"),n.a.createElement("div",{className:"section-profile-content"},"Prior the moving, movers will send a guy to estimate how long is the moving and send you a quote, however the quote is not final and can be changed due to many reasons. Also,  many movers still only accept cash payments")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Thinking"),n.a.createElement("div",{className:"section-profile-subtitle"},"How to resolve user's pain points using technologies?"),n.a.createElement("div",{className:"section-profile-content"},"For movers, the major factor that affect total moving cost is by",n.a.createElement("i",null,"Time"),", but a lot of the movers chose to not disclose this information. The lack of transparenncy and uncertainty often makes movees uncomfortable and unhappy about the total moving experience")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Solution"),n.a.createElement("div",{className:"section-profile-subtitle"},"One-stop-shop for both movers and movees"),n.a.createElement("div",{className:"section-profile-content"},"We built and provide an online quoting and scheduling software for people who want to move, also we created a portal for movers to accept / manage their moving schedules")))),n.a.createElement(j,null,n.a.createElement(V,{name:"Moving estimate and booking software",imgURL:de.a}),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Adpatie and adjust from suggestions from real customers"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"It is almost impossible to learn about moving industry if sitting at home, before the product launch we need to find the partners that are interested working with us and learn how does the current moving workflow looks like."),n.a.createElement("p",null,"After went on 100+ moves, we collect feedbacks and suggesiton from actual cusomters and movers, and improve our product from their feedback. "),n.a.createElement("p",null,"We end have having 200+ moves, over 100k revenues within 3 months."))),n.a.createElement(Y,null,n.a.createElement(V,{name:"Mover's dashboard",imgURL:se.a})),n.a.createElement(Y,null,n.a.createElement(V,{name:"Quikforce website on mobile",imgURL:oe.a})),n.a.createElement(Y,null,n.a.createElement("iframe",{title:"video",width:"100%",height:"630px",src:"https://www.youtube.com/embed/TzWd8Vgsabw",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),n.a.createElement(Y,null,n.a.createElement(V,{name:"Quikforce moving",imgURL:me.a}))))}function Ee(e){return n.a.createElement(C,null,n.a.createElement(P,null),n.a.createElement(U,{isHomePage:!1},n.a.createElement("h1",null,"Liaison"),n.a.createElement("sub",null,"508 Compliance")),n.a.createElement(j,{className:"flex"},n.a.createElement(z,{className:"large"},n.a.createElement("p",{className:"project-major-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),n.a.createElement(z,{className:"small"},n.a.createElement("div",{className:"desc-wrapper"},n.a.createElement("div",{className:"desc-title"},"Role"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit",n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Time Frame"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),n.a.createElement("br",null),n.a.createElement("div",{className:"desc-title"},"Technologies"),n.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),n.a.createElement(j,{className:"video noPaddingTop noPaddingMobile"},n.a.createElement("iframe",{title:"video",width:"100%",height:"630px",src:"https://www.youtube.com/embed/Y8-Q4h_LGSM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.a.createElement("div",{className:"section-wrapper dark"},n.a.createElement(j,{className:"dark flex"},n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Problem"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Thinking"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement(B,null,n.a.createElement("div",{className:"section-profile-title"},"Result"),n.a.createElement("div",{className:"section-profile-subtitle"},"Lorem ipsum dolor sit amet"),n.a.createElement("div",{className:"section-profile-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),n.a.createElement(j,null,n.a.createElement(V,{name:"Image: before & after",imgURL:"https://via.placeholder.com/1200x550?text=Image:%20Before%20and%20After"}),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"))),n.a.createElement(Y,null,n.a.createElement(V,{name:"Structure",imgURL:"https://via.placeholder.com/1200x550?text=Structure"})),n.a.createElement(Y,null,n.a.createElement(V,{name:"Image: Landing page + customozie & shop",imgURL:"https://via.placeholder.com/1200x550?text=Image: Landing page + customozie"})),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"))),n.a.createElement(Y,null,n.a.createElement("iframe",{title:"video",width:"100%",height:"630px",src:"https://www.youtube.com/embed/Y8-Q4h_LGSM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.a.createElement(Y,null,n.a.createElement(J,{className:"title"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"),n.a.createElement(J,{className:"content"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",null,"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")))))}var ge=function(){return n.a.createElement(r.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/app/gamer-sensei-ecommerce",component:ae}),n.a.createElement(m.a,{path:"/app/quikforce",component:pe}),n.a.createElement(m.a,{path:"/app/project-template",component:K}),n.a.createElement(m.a,{path:"/app/508-compliance",component:Ee}),n.a.createElement(m.a,{path:"/app",component:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52),a(83),a(84);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.9c469469.chunk.js.map