(this.webpackJsonpboggler=this.webpackJsonpboggler||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=(n(11),n(2)),l=n.n(c),u=n(5),s=n(1),E={fourByFOurDice:["AAEEGN","ABBJOO","ACHOPS","AFFKPS","AOOTTW","CIMOTU","DEILRX","DELRVY","DISTTY","EEGHNW","EEINSU","EHRTVW","EIOSST","ELRTTY",["H","I","M","N","U","Qu"],"HLNNRZ"],fiveByFiveDice:["AAAFRS","AAEEEE","AAFIRS","ADENNN","AEEEEM","AEEGMU","AEGMNN","AFIRSY","BBJKXZ","CCENST","EIILST","CEIPST","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EIIITT","EILPST","EMOTTT","ENSSSU",["Qu","In","Th","Er","He","An"],"GORRVW","IPRSYY","NOOTUW","OOOTTU"],sixBySixDice:["AAAFRS","AAEEEE","AAEEOO","AAFIRS","ABDEIO","ADENNN","AEEEEM","AEEGMU","AEGMNN","AEILMN","AEINOU","AFIRSY",["An","Er","He","In","Qu","Th"],"BBJKXZ","CCENST","CDDLNN","CEIITT","CEIPST","CFGNUY","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EHILRS","EIILST","EILPST","EIO###","EMTTTO","ENSSSU","GORRVW","HIRSTV","HOPRST","IPRSYY",["J","K","Qu","W","X","Z"],"NOOTUW","OOOTTU"]},f=(n(13),n(14),function(){var e=Object(a.useState)("04:00"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("04:00"),c=Object(s.a)(i,2),l=c[0],u=c[1],E=Object(a.useState)(!1),f=Object(s.a)(E,2),v=f[0],d=f[1],m=Object(a.useState)(),O=Object(s.a)(m,2),h=O[0],S=O[1],g=Object(a.useState)(!1),p=Object(s.a)(g,2),A=p[0],N=p[1],T="counddown";return A&&(T+=" countdown__time-up"),o.a.createElement("div",{className:"timer-container"},o.a.createElement("button",{onClick:function(){if(v)v&&(d(!1),clearInterval(h),r(l),A&&N(!1));else{d(!0);var e=60*n.split(":")[0]+1*n.split(":")[1],t=setInterval((function(){if(e>0){e--;var t="0"+Math.floor(e/60)+":"+(e%60>9?e%60:"0"+e%60);r(t)}else clearInterval(h),N(!0)}),1e3);S(t)}}},v?"Reset":"Start"),o.a.createElement("div",null),v?o.a.createElement("p",{className:T},o.a.createElement("b",null,n)):o.a.createElement("select",{onChange:function(e){var t=e.target.value;r(t),u(t)},defaultValue:l},o.a.createElement("option",{vlaue:"60"},"01:00"),o.a.createElement("option",{vlaue:"90"},"01:30"),o.a.createElement("option",{vlaue:"120"},"02:00"),o.a.createElement("option",{vlaue:"180"},"03:00"),o.a.createElement("option",{vlaue:"240"},"04:00"),o.a.createElement("option",{vlaue:"300"},"05:00")))});var v=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){r(i(E.sixBySixDice))}),[]);var i=function(e){var t=Array.from({length:e.length},(function(){return Math.floor(6*Math.random())})).map((function(t,n){return e[n][t]}));return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(t),t},c=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.readText();case 2:t=e.sent,(a=t.split(/(?=[A-Z#])/).map((function(e){return"#"===e||2===e.length?e:"A"===e?"Z":String.fromCharCode(e.charCodeAt(0)-1)}))).length===n.length&&r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"app-container"},o.a.createElement(f,null),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"board"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:16===n.length?"dice dice__4x4":25===n.length?"dice dice__5x5":"dice dice__6x6"},e)})))),o.a.createElement("div",{className:"options"},o.a.createElement("div",{className:"size"},o.a.createElement("button",{onClick:function(){16===n.length?r(i(E.fourByFOurDice)):25===n.length?r(i(E.fiveByFiveDice)):r(i(E.sixBySixDice))}},"Shuffle Board"),o.a.createElement("select",{name:"board-size-selection",onChange:function(e){switch(e.target.value){case"fourByFOurDice":r(i(E.fourByFOurDice));break;case"fiveByFiveDice":r(i(E.fiveByFiveDice));break;case"sixBySixDice":r(i(E.sixBySixDice));break;default:r(i(E.fiveByFiveDice))}},defaultValue:"sixBySixDice"},o.a.createElement("option",{value:"fourByFOurDice"},"4x4"),o.a.createElement("option",{value:"fiveByFiveDice"},"5x5"),o.a.createElement("option",{value:"sixBySixDice"},"6x6"))),o.a.createElement("button",{onClick:function(){var e=n.map((function(e){return"#"===e||2===e.length?e:"Z"===e?"A":String.fromCharCode(e.charCodeAt(0)+1)})).join("");navigator.clipboard.writeText(e)}},"Copy Board"),o.a.createElement("button",{onClick:c},"Enter Board"))))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/boggler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/boggler","/service-worker.js");d?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.0d0d91f1.chunk.js.map