(this.webpackJsonpboggler=this.webpackJsonpboggler||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),c=a.n(i),l=(a(9),a(1)),o={fourByFOurDice:["AAEEGN","ABBJOO","ACHOPS","AFFKPS","AOOTTW","CIMOTU","DEILRX","DELRVY","DISTTY","EEGHNW","EEINSU","EHRTVW","EIOSST","ELRTTY","HIMNUQu","HLNNRZ"],fiveByFiveDice:["AAAFRS","AAEEEE","AAFIRS","ADENNN","AEEEEM","AEEGMU","AEGMNN","AFIRSY","BBJKXZ","CCENST","EIILST","CEIPST","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EIIITT","EILPST","EMOTTT","ENSSSU","FIPRSY","GORRVW","IPRSYY","NOOTUW","OOOTTU"],sixBySixDice:["AAAFRS","AAEEEE","AAEEOO","AAFIRS","ABDEIO","ADENNN","AEEEEM","AEEGMU","AEGMNN","AEILMN","AEINOU","AFIRSY","AEHIQT","BBJKXZ","CCENST","CDDLNN","CEIITT","CEIPST","CFGNUY","DDHNOT","DHHLOR","DHHNOW","DHLNOR","EHILRS","EIILST","EILPST","EIO###","EMTTTO","ENSSSU","GORRVW","HIRSTV","HOPRST","IPRSYY","JKQuWXZ","NOOTUW","OOOTTU"]},E=(a(10),a(11),function(e){var t=e.value;return r.a.createElement("div",{className:"dice-container"},t)}),u=(a(12),function(e){var t=e.timer,a=e.setTimer,n=e.timerStart,i=e.setTimerStart,c=e.playing,l=e.setPlaying,o=e.intervalId,E=e.setIntervalId,u=e.isTimeUp,s=e.setIsTimeUp,m="counddown";return u&&(m+=" countdown__time-up"),r.a.createElement("div",{className:"timer-container"},r.a.createElement("button",{onClick:function(){if(c)c&&(l(!1),clearInterval(o),a(n),u&&s(!1));else{l(!0);var e=60*t.split(":")[0]+1*t.split(":")[1],r=setInterval((function(){if(e>0){e--;var t="0"+Math.floor(e/60)+":"+(e%60>9?e%60:"0"+e%60);a(t)}else clearInterval(o),s(!0)}),10);E(r)}}},c?"Reset":"Start"),r.a.createElement("div",null),c?r.a.createElement("p",{className:m},r.a.createElement("b",null,t)):r.a.createElement("select",{onChange:function(e){var t=e.target.value;a(t),i(t)},defaultValue:n},r.a.createElement("option",{vlaue:"60"},"01:00"),r.a.createElement("option",{vlaue:"90"},"01:30"),r.a.createElement("option",{vlaue:"120"},"02:00"),r.a.createElement("option",{vlaue:"180"},"03:00"),r.a.createElement("option",{vlaue:"240"},"04:00"),r.a.createElement("option",{vlaue:"300"},"05:00")))});var s=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("03:00"),s=Object(l.a)(c,2),m=s[0],O=s[1],v=Object(n.useState)("03:00"),S=Object(l.a)(v,2),f=S[0],T=S[1],I=Object(n.useState)(!1),N=Object(l.a)(I,2),A=N[0],D=N[1],b=Object(n.useState)(),d=Object(l.a)(b,2),p=d[0],y=d[1],R=Object(n.useState)(!1),B=Object(l.a)(R,2),F=B[0],H=B[1];Object(n.useEffect)((function(){i(g(o.fourByFOurDice))}),[]);var g=function(e){var t=Array.from({length:e.length},(function(){return Math.floor(5*Math.random())})).map((function(t,a){return e[a].charAt(t)}));return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(t),t};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"options"},r.a.createElement("button",{onClick:function(){16===a.length?i(g(o.fourByFOurDice)):25===a.length?i(g(o.fiveByFiveDice)):i(g(o.sixBySixDice))}},"Shuffle"),r.a.createElement("div",null),r.a.createElement("select",{name:"board-size-selection",onChange:function(e){switch(e.target.value){case"fourByFOurDice":i(g(o.fourByFOurDice));break;case"fiveByFiveDice":i(g(o.fiveByFiveDice));break;case"sixBySixDice":i(g(o.sixBySixDice));break;default:i(g(o.fourByFOurDice))}}},r.a.createElement("option",{value:"fourByFOurDice"},"4x4"),r.a.createElement("option",{value:"fiveByFiveDice"},"5x5"),r.a.createElement("option",{value:"sixBySixDice"},"6x6"))),r.a.createElement(u,{timer:m,setTimer:O,timerStart:f,setTimerStart:T,playing:A,setPlaying:D,intervalId:p,setIntervalId:y,isTimeUp:F,setIsTimeUp:H}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:16===a.length?"board board__four-by-four":25===a.length?"board board__five-by-five":"board board__six-by-six"},a.map((function(e,t){return r.a.createElement(E,{key:t,value:e})}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.4bfa80b1.chunk.js.map