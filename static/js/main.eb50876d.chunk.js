(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/simon-dice.11e133fe.png"},function(e,t,a){e.exports=a.p+"static/media/barking-board.97454d85.png"},function(e,t,a){e.exports=a.p+"static/media/pokedex.81244e2e.png"},function(e,t,a){e.exports=a.p+"static/media/contact-information.99969086.png"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),s=a.n(o),c=(a(18),a(4)),r=a(5),m=a(11),l=a(6),h=a(1),u=a(12),d=function(e){return i.a.createElement("canvas",{id:"canvas",className:"canvas",width:e.frame.width,height:e.frame.height})},w=a(7),f=a.n(w),v=a(8),g=a.n(v),p=a(9),b=a.n(p),E=a(10),k=a.n(E);a(19);function C(e){return Math.floor(Math.random()*e)}var T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={showCanvas:!1,showIntro:!0,showWelcome:!1,showItems:!1,canvas:{width:.9*window.innerWidth,height:.9*window.innerHeight},colors:["#FCBA04","#A50104","#C03221","#BE7C4D","#F2D0A4"]},a.draw=a.draw.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.showCanvas()}),4e3)}},{key:"showCanvas",value:function(){var e=this;this.setState({showCanvas:!0,showIntro:!1}),setTimeout((function(){e.init()}),2e3),setTimeout((function(){e.setState({showWelcome:!0})}),14e3),setTimeout((function(){e.setState({showItems:!0})}),14e3)}},{key:"init",value:function(){var e=this;window.requestAnimationFrame((function(){e.draw(4,2e3)})),setTimeout((function(){window.requestAnimationFrame((function(){e.draw(8,2e3)}))}),2e3),setTimeout((function(){window.requestAnimationFrame((function(){e.draw(16,2e3)}))}),4e3),setTimeout((function(){window.requestAnimationFrame((function(){e.draw(32,2e3)}))}),6e3),setTimeout((function(){window.requestAnimationFrame((function(){e.draw(64,2e3)}))}),8e3)}},{key:"draw",value:function(e,t){var a=this,n=setInterval((function(){var e=document.querySelector("#canvas").getContext("2d"),t=C(a.state.canvas.width),n=C(a.state.canvas.height);e.beginPath(),e.moveTo(t,n),e.lineTo(C(a.state.canvas.width),C(a.state.canvas.height)),e.lineTo(C(a.state.canvas.width),C(a.state.canvas.height)),e.fillStyle=a.state.colors[C(a.state.colors.length)],e.fill()}),500/e);setTimeout((function(){clearInterval(n)}),t)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},this.state.showIntro&&i.a.createElement("p",{className:"intro",onClick:function(){return e.showCanvas()}},"Dreams aren't dreams if you devote every waking hour on them"),this.state.showCanvas&&i.a.createElement(d,{frame:this.state.canvas}),this.state.showWelcome&&i.a.createElement("p",{className:"welcome-container"},i.a.createElement("a",{className:"welcome"},"Welcome, stranger.")),this.state.showItems&&i.a.createElement("div",{className:"item-container"},i.a.createElement("div",{className:"item itema"},i.a.createElement("a",{href:"https://classicaljo.github.io/simon-dice/",target:"_blank"},i.a.createElement("img",{src:f.a,alt:"Simon dice"}))),i.a.createElement("div",{className:"item itemb"},i.a.createElement("a",{href:"https://classicaljo.github.io/barking-board/",target:"_blank"},i.a.createElement("img",{src:g.a,alt:"Barking board"}))),i.a.createElement("div",{className:"item itemc"},i.a.createElement("a",{href:"https://classicaljo.github.io/pokedex-v1.1/",target:"_blank"},i.a.createElement("img",{src:b.a,alt:"Pokedex"}))),i.a.createElement("div",{className:"item itemd"},i.a.createElement("a",{href:"https://classicaljo.github.io/contact-information/index.html",target:"_blank"},i.a.createElement("img",{src:k.a,alt:"Contact information"})))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.eb50876d.chunk.js.map