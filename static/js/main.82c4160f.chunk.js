(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/default-project-pic.d5428f73.png"},25:function(e,t,a){e.exports=a(72)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/Montserrat-Regular.ee653992.ttf"},71:function(e,t,a){e.exports=a.p+"static/media/Montserrat-Bold.ade91f47.ttf"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(30),a(13)),s=a(1),i=a(6),m=a(7),u=a(9),p=a(8),d={display:"flex",color:"white",textDecoration:"none",lineHeight:"24px",fontSize:"calc(10px + 1vmin)",padding:"0 20px"},E={textDecoration:"underline"},h=function(e,t){var a=Object.assign({},d);return t.hover&&Object.assign(a,E),a},g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hover:!1},n.props=e,n}return Object(m.a)(a,[{key:"toggleHover",value:function(e){this.setState({hover:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("a",{href:this.props.href,style:h(this.props,this.state),onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)}},r.a.createElement("div",null,this.props.children))}}]),a}(r.a.Component),v={width:"100%",padding:"14px 0",display:"flex",flexDirection:"row",justifyContent:"flex-end",position:"absolute"},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"/app#about"},"about"),r.a.createElement(g,{href:"/app#projects"},"projects"),r.a.createElement(g,{href:"/app#designs"},"designs"))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{href:"/app"},"X"))};function A(e){return r.a.createElement("header",{className:"header",style:v},function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?f():b()}(e.isHomePage))}function N(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(A,{isHomePage:!0}),e.children)}var j={minHeight:"100vh",background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"},k=function(e){var t="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat";return e&&(t="url(".concat(e,") center center / cover")),{height:"670px",maxHeight:"75vh",background:t,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",textShadow:"1px 1px #888"}},w={padding:"0 40px"};function x(e){return r.a.createElement("div",null,r.a.createElement("div",{style:e.isHomePage?j:k(e.heroImgUrl)},e.isHomePage?r.a.createElement("code",{style:w},"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them."):e.children))}a(31);var O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).state={hover:!1},n.props=e;var r=e.className,l=void 0===r?"":r;return n.classes="section "+l,n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.sectionId,className:this.classes},this.props.children)}}]),a}(r.a.Component),S=(a(32),a(23)),y=a.n(S),I=function(e){if(e.hover)return"hover"},C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hover:!1},n.props=e,n}return Object(m.a)(a,[{key:"toggleHover",value:function(e){this.setState({hover:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"image-item",onMouseEnter:function(){return e.toggleHover(!0)},onMouseLeave:function(){return e.toggleHover(!1)}},r.a.createElement(o.b,{to:this.props.url||"#"},r.a.createElement("div",{className:"image-item-name-wrapper"},this.props.name,function(e){if(e.subName)return r.a.createElement("div",{className:"image-item-subname"},e.subName)}(this.props)),r.a.createElement("img",{className:I(this.state),src:this.props.imgSrc||y.a,alt:this.props.name})))}}]),a}(r.a.Component),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),console.log("bbb")}},{key:"render",value:function(){return null}}]),a}(r.a.Component);function L(){return r.a.createElement(N,null,r.a.createElement(H,null),r.a.createElement(x,{isHomePage:!0}),r.a.createElement(O,{sectionId:"about"},r.a.createElement("h2",null,"About"),r.a.createElement("code",null,r.a.createElement("strong",null,"J.Kevin Tu"),r.a.createElement("br",null),"Frontend Developer / Consultant",r.a.createElement("br",null),"-----------------------------------",r.a.createElement("br",null),"HTML/CSS",r.a.createElement("br",null),"Javascript (Vue, React, Angular)",r.a.createElement("br",null),"UI/UX/Branding (Photoshop, Sktech)",r.a.createElement("br",null),"SEO, SEM, Google Analytics",r.a.createElement("br",null),"508 Compliance",r.a.createElement("br",null)),r.a.createElement("p",{className:"about-links"},r.a.createElement("a",{href:"mailto:ktu@jkevintu.com"},"ktu@jkevintu.com"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/jkevintu"},">> linkedin"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/jkevintu"},">> Github"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://stackoverflow.com/users/527376/ktu"},">> Stackoverflow"))),r.a.createElement(O,null,r.a.createElement("hr",null)),r.a.createElement(O,{sectionId:"projects"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",{className:"section-items"},r.a.createElement(C,{name:"Gamer Sensei",subName:"ecommerce",url:"/app/gamer-sensei"}),r.a.createElement(C,{name:"Liaison",subName:"508 Compliance",url:"/app/508-compliance"}))),r.a.createElement(O,null,r.a.createElement("hr",null)),r.a.createElement(O,{sectionId:"designs"},r.a.createElement("h2",null,"Designs"),r.a.createElement("div",{className:"section-items"},r.a.createElement(C,{name:"Posters",url:"/app/posters"}),r.a.createElement(C,{name:"Event Banner",url:"/app/event-banner"}))))}function P(e){return r.a.createElement("div",{className:"project-layout"},r.a.createElement(A,{isHomePage:!1}),e.children)}a(38);function B(e){return r.a.createElement("div",{className:"section-project-desc"},e.children,function(e){return e.linkText&&e.linkUrl?r.a.createElement("div",{className:"section-project-desc-button-wrapper"},r.a.createElement("a",{href:e.linkUrl,target:"_blank"},r.a.createElement("button",{className:"section-project-desc-button"},e.linkText))):null}(e))}function M(e){return r.a.createElement(P,null,r.a.createElement(H,null),r.a.createElement(x,{isHomePage:!1},r.a.createElement("h1",null,"Gamer Sensei"),r.a.createElement("sub",null,"ecommerce platform redesign")),r.a.createElement(O,{className:"flex"},r.a.createElement(B,{linkText:"Launch Website",linkUrl:"https://gamersensei.com/senseis/searches"},r.a.createElement("p",{className:"project-major-desc"},"Next generation eSports coaching: design and reimagine ecommerce experience")),r.a.createElement(B,null,r.a.createElement("div",{className:"desc-wrapper"},r.a.createElement("div",{className:"desc-title"},"Role"),r.a.createElement("div",{className:"desc-content"},"Web consultant / Sr.Frontend Engineer",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Time Frame"),r.a.createElement("div",{className:"desc-content"},"Sep 2016 - Oct 2017"),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Languages"),r.a.createElement("div",{className:"desc-content"},"AngularJS / Ruby on Rails")))))}function U(e){return r.a.createElement(P,null,r.a.createElement(H,null),r.a.createElement(x,{isHomePage:!1},r.a.createElement("h1",null,"Liaison"),r.a.createElement("sub",null,"508 Compliance")),r.a.createElement(O,{className:"flex"},r.a.createElement(B,null,r.a.createElement("p",{className:"project-major-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),r.a.createElement(B,null,r.a.createElement("div",{className:"desc-wrapper"},r.a.createElement("div",{className:"desc-title"},"Role"),r.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Time Frame"),r.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),r.a.createElement("br",null),r.a.createElement("div",{className:"desc-title"},"Languages"),r.a.createElement("div",{className:"desc-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))))}var D=function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/app/gamer-sensei",component:M}),r.a.createElement(s.a,{path:"/app/508-compliance",component:U}),r.a.createElement(s.a,{path:"/app",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39),a(70),a(71);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.82c4160f.chunk.js.map