(this.webpackJsonpboggler=this.webpackJsonpboggler||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=(n(9),n(1)),l={fourByFOurDice:["AAEEGN","ABBJOO","ACHOPS","AFFKPS","AOOTTW","CIMOTU","DEILRX","DELRVY","DISTTY","EEGHNW","EEINSU","EHRTVW","EIOSST","ELRTTY",["H","I","M","N","U","Qu"],"HLNNRZ"],fiveByFiveDice:["AAAFRS","AAEEEE","AAFIRS","ADENNN","AEEEEM","AEEGMU","AEGMNN","AFIRSY","BBJKXZ","CCENST","EIILST","CEIPST","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EIIITT","EILPST","EMOTTT","ENSSSU",["Qu","In","Th","Er","He","An"],"GORRVW","IPRSYY","NOOTUW","OOOTTU"],sixBySixDice:["AAAFRS","AAEEEE","AAEEOO","AAFIRS","ABDEIO","ADENNN","AEEEEM","AEEGMU","AEGMNN","AEILMN","AEINOU","AFIRSY",["An","Er","He","In","Qu","Th"],"BBJKXZ","CCENST","CDDLNN","CEIITT","CEIPST","CFGNUY","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EHILRS","EIILST","EILPST","EIO###","EMTTTO","ENSSSU","GORRVW","HIRSTV","HOPRST","IPRSYY",["J","K","Qu","W","X","Z"],"NOOTUW","OOOTTU"]},u=(n(10),n(11),function(e){var t=e.value;return r.a.createElement("div",{className:"dice-container"},t)}),s=(n(12),function(e){var t=e.timer,n=e.setTimer,a=e.timerStart,i=e.setTimerStart,o=e.playing,c=e.setPlaying,l=e.intervalId,u=e.setIntervalId,s=e.isTimeUp,E=e.setIsTimeUp,f="counddown";return s&&(f+=" countdown__time-up"),r.a.createElement("div",{className:"timer-container"},r.a.createElement("button",{onClick:function(){if(o)o&&(c(!1),clearInterval(l),n(a),s&&E(!1));else{c(!0);var e=60*t.split(":")[0]+1*t.split(":")[1],r=setInterval((function(){if(e>0){e--;var t="0"+Math.floor(e/60)+":"+(e%60>9?e%60:"0"+e%60);n(t)}else clearInterval(l),E(!0)}),1e3);u(r)}}},o?"Reset":"Start"),r.a.createElement("div",null),o?r.a.createElement("p",{className:f},r.a.createElement("b",null,t)):r.a.createElement("select",{onChange:function(e){var t=e.target.value;n(t),i(t)},defaultValue:a},r.a.createElement("option",{vlaue:"60"},"01:00"),r.a.createElement("option",{vlaue:"90"},"01:30"),r.a.createElement("option",{vlaue:"120"},"02:00"),r.a.createElement("option",{vlaue:"180"},"03:00"),r.a.createElement("option",{vlaue:"240"},"04:00"),r.a.createElement("option",{vlaue:"300"},"05:00")))});var E=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("04:00"),E=Object(c.a)(o,2),f=E[0],v=E[1],m=Object(a.useState)("04:00"),d=Object(c.a)(m,2),p=d[0],S=d[1],h=Object(a.useState)(!1),O=Object(c.a)(h,2),g=O[0],A=O[1],T=Object(a.useState)(),b=Object(c.a)(T,2),I=b[0],N=b[1],y=Object(a.useState)(!1),D=Object(c.a)(y,2),C=D[0],R=D[1];Object(a.useEffect)((function(){i(w(l.sixBySixDice))}),[]);var w=function(e){var t=Array.from({length:e.length},(function(){return Math.floor(6*Math.random())})).map((function(t,n){return e[n][t]}));return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(t),t};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"options"},r.a.createElement("button",{onClick:function(){16===n.length?i(w(l.fourByFOurDice)):25===n.length?i(w(l.fiveByFiveDice)):i(w(l.sixBySixDice))}},"Shuffle"),r.a.createElement("button",{onClick:function(e){var t=n.map((function(e){return"#"===e||2===e.length?e:"Z"===e?"A":String.fromCharCode(e.charCodeAt(0)+1)})).join(""),a=document.createElement("textarea");document.body.appendChild(a),a.value=t,a.select(),document.execCommand("copy"),document.body.removeChild(a)}},"Copy"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.userInput.value.split(/(?=[A-Z#])/).map((function(e){return"#"===e||2===e.length?e:"A"===e?"Z":String.fromCharCode(e.charCodeAt(0)-1)}));t.length===n.length&&i(t)}},r.a.createElement("input",{id:"userInput",type:"textarea",placeholder:"Enter Code"})),r.a.createElement("select",{name:"board-size-selection",onChange:function(e){switch(e.target.value){case"fourByFOurDice":i(w(l.fourByFOurDice));break;case"fiveByFiveDice":i(w(l.fiveByFiveDice));break;case"sixBySixDice":i(w(l.sixBySixDice));break;default:i(w(l.fiveByFiveDice))}},defaultValue:"sixBySixDice"},r.a.createElement("option",{value:"fourByFOurDice"},"4x4"),r.a.createElement("option",{value:"fiveByFiveDice"},"5x5"),r.a.createElement("option",{value:"sixBySixDice"},"6x6"))),r.a.createElement(s,{timer:f,setTimer:v,timerStart:p,setTimerStart:S,playing:g,setPlaying:A,intervalId:I,setIntervalId:N,isTimeUp:C,setIsTimeUp:R}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:16===n.length?"board board__four-by-four":25===n.length?"board board__five-by-five":"board board__six-by-six"},n.map((function(e,t){return r.a.createElement(u,{key:t,value:e})}))))))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/boggler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/boggler","/service-worker.js");f?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.d2e11f54.chunk.js.map