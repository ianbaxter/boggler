(this.webpackJsonpboggler=this.webpackJsonpboggler||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(11),n(2)),l=n.n(c),u=n(5),s=n(1),E={fourByFOurDice:["AAEEGN","ABBJOO","ACHOPS","AFFKPS","AOOTTW","CIMOTU","DEILRX","DELRVY","DISTTY","EEGHNW","EEINSU","EHRTVW","EIOSST","ELRTTY",["H","I","M","N","U","Qu"],"HLNNRZ"],fiveByFiveDice:["AAAFRS","AAEEEE","AAFIRS","ADENNN","AEEEEM","AEEGMU","AEGMNN","AFIRSY","BBJKXZ","CCENST","EIILST","CEIPST","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EIIITT","EILPST","EMOTTT","ENSSSU",["Qu","In","Th","Er","He","An"],"GORRVW","IPRSYY","NOOTUW","OOOTTU"],sixBySixDice:["AAAFRS","AAEEEE","AAEEOO","AAFIRS","ABDEIO","ADENNN","AEEEEM","AEEGMU","AEGMNN","AEILMN","AEINOU","AFIRSY",["An","Er","He","In","Qu","Th"],"BBJKXZ","CCENST","CDDLNN","CEIITT","CEIPST","CFGNUY","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EHILRS","EIILST","EILPST","EIO###","EMTTTO","ENSSSU","GORRVW","HIRSTV","HOPRST","IPRSYY",["J","K","Qu","W","X","Z"],"NOOTUW","OOOTTU"]},f=(n(13),n(14),function(){var e=Object(a.useState)("04:00"),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)("04:00"),c=Object(s.a)(i,2),l=c[0],u=c[1],E=Object(a.useState)(!1),f=Object(s.a)(E,2),v=f[0],d=f[1],m=Object(a.useState)(),O=Object(s.a)(m,2),h=O[0],S=O[1],g=Object(a.useState)(!1),p=Object(s.a)(g,2),A=p[0],N=p[1],T="counddown";return A&&(T+=" countdown__time-up"),r.a.createElement("div",{className:"timer-container"},r.a.createElement("button",{onClick:function(){if(v)v&&(d(!1),clearInterval(h),o(l),A&&N(!1));else{d(!0);var e=60*n.split(":")[0]+1*n.split(":")[1],t=setInterval((function(){if(e>0){e--;var t="0"+Math.floor(e/60)+":"+(e%60>9?e%60:"0"+e%60);o(t)}else clearInterval(h),N(!0)}),1e3);S(t)}}},v?"Reset":"Start"),r.a.createElement("div",null),v?r.a.createElement("p",{className:T},r.a.createElement("b",null,n)):r.a.createElement("select",{onChange:function(e){var t=e.target.value;o(t),u(t)},defaultValue:l},r.a.createElement("option",{vlaue:"60"},"01:00"),r.a.createElement("option",{vlaue:"90"},"01:30"),r.a.createElement("option",{vlaue:"120"},"02:00"),r.a.createElement("option",{vlaue:"180"},"03:00"),r.a.createElement("option",{vlaue:"240"},"04:00"),r.a.createElement("option",{vlaue:"300"},"05:00")))});var v=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){o(i(E.sixBySixDice))}),[]);var i=function(e){var t=Array.from({length:e.length},(function(){return Math.floor(6*Math.random())})).map((function(t,n){return e[n][t]}));return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(t),t},c=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.readText();case 2:t=e.sent,(a=t.split(/(?=[A-Z#])/).map((function(e){return"#"===e||2===e.length?e:"A"===e?"Z":String.fromCharCode(e.charCodeAt(0)-1)}))).length===n.length&&o(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement(f,null),r.a.createElement("div",{className:"board-container"},r.a.createElement("div",{className:"board"},n.map((function(e,t){return r.a.createElement("div",{key:t,className:16===n.length?"dice dice__4x4":25===n.length?"dice dice__5x5":"dice dice__6x6"},e)})))),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"size"},r.a.createElement("button",{onClick:function(){16===n.length?o(i(E.fourByFOurDice)):25===n.length?o(i(E.fiveByFiveDice)):o(i(E.sixBySixDice))}},"Shuffle Board"),r.a.createElement("select",{name:"board-size-selection",onChange:function(e){switch(e.target.value){case"fourByFOurDice":o(i(E.fourByFOurDice));break;case"fiveByFiveDice":o(i(E.fiveByFiveDice));break;case"sixBySixDice":o(i(E.sixBySixDice));break;default:o(i(E.fiveByFiveDice))}},defaultValue:"sixBySixDice"},r.a.createElement("option",{value:"fourByFOurDice"},"4x4"),r.a.createElement("option",{value:"fiveByFiveDice"},"5x5"),r.a.createElement("option",{value:"sixBySixDice"},"6x6"))),r.a.createElement("button",{onClick:function(){var e=n.map((function(e){return"#"===e||2===e.length?e:"Z"===e?"A":String.fromCharCode(e.charCodeAt(0)+1)})).join("");navigator.clipboard.writeText(e)}},"Copy Board"),r.a.createElement("button",{onClick:c},"Enter Board"))))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/boggler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/boggler","/service-worker.js");d?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.d21828f0.chunk.js.map