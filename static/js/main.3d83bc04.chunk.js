(this["webpackJsonpayto-solver"]=this["webpackJsonpayto-solver"]||[]).push([[0],[,,,,,,,,function(e,t){function n(e,t){if(e.length!==t.length)return!1;for(var n=e.sort(),a=t.sort(),r=0;r<n.length;r++)if(n[r]!==a[r])return!1;return!0}e.exports={doesPairMatch:n,removePair:function(e,t,a){for(var r=0;r<t.length;r++)if(t[r].pairs.some((function(t){return n(t,e)}))){var o=t[r].pairs.findIndex((function(t){return n(t,e)}));t[r].pairs.splice(o,1),a&&(t[r].lights-=1)}}}},,,function(e,t){e.exports={initialContestants:["Aasha","Amber","Basit","Brandon","Danny","Jasmine","Jenna","Jonathan","Justin","Kai","Kari","Kylie","Max","Nour","Paige","Remy"],initialMatchingCeremonies:[{week:1,lights:2,pairs:[["Aasha","Paige"],["Amber","Nour"],["Basit","Jonathan"],["Brandon","Remy"],["Danny","Kai"],["Jasmine","Jenna"],["Justin","Max"],["Kari","Kylie"]]},{week:2,lights:2,pairs:[["Aasha","Brandon"],["Amber","Nour"],["Basit","Jonathan"],["Danny","Remy"],["Jasmine","Justin"],["Jenna","Kai"],["Kari","Kylie"],["Max","Paige"]]},{week:3,lights:2,pairs:[["Aasha","Max"],["Amber","Paige"],["Basit","Remy"],["Danny","Kai"],["Jasmine","Nour"],["Jenna","Justin"],["Jonathan","Brandon"],["Kari","Kylie"]]},{week:4,lights:1,pairs:[["Aasha","Remy"],["Amber","Nour"],["Basit","Danny"],["Brandon","Jasmine"],["Jenna","Paige"],["Jonathan","Kylie"],["Justin","Max"],["Kai","Kari"]]},{week:5,lights:0,pairs:[["Aasha","Kai"],["Amber","Nour"],["Basit","Remy"],["Brandon","Max"],["Danny","Kari"],["Jasmine","Paige"],["Jenna","Kylie"],["Jonathan","Justin"]]}],initialTruthBooths:[{pair:["Justin","Nour"],correct:!1},{pair:["Brandon","Remy"],correct:!1},{pair:["Jenna","Kai"],correct:!1},{pair:["Jenna","Danny"],correct:!1},{pair:["Kari","Kylie"],correct:!1}]}},,function(e,t,n){var a=n(8).removePair;e.exports={lockInPair:function(e,t,n,r){a(e,t,!0),function(e,t){for(var n=0;n<e.length;n++)t.splice(t.indexOf(e[n]),1)}(e,r),function(e,t){for(var n=0;n<e.length;n++)for(var a=0;a<t.length;a++)for(var r=0;r<t[a].pairs.length;r++)t[a].pairs[r].includes(e[n])&&t[a].pairs.splice(r,1)}(e,t),n.push(e)}}},,,function(e,t,n){},,,,,function(e,t,n){var a=n(37).initialiseState,r=n(39).removeZeroLightsWeeks,o=n(40),i=o.areThereInvalidWeeks,l=o.checkForSolvedWeeks,c=o.addSolvedWeeksToSolution,s=n(41).addCeremonyPairToSolution,u=n(42).addContestantPairToSolution,m=n(43),h=(m.pairProbabilities,m.solutionProbabilities),d=m.remainingMatches;function f(e,t,n){for(var o=a(e,t,n);o.remainingContestants.length>0;){if(r(o.knownFalses,o.matchingCeremonies),i(o.matchingCeremonies))return!1;if(l(o.matchingCeremonies))c(o.matchingCeremonies,o.solution,o.remainingContestants);else if(o.matchingCeremonies.length>0)s(o.matchingCeremonies,o.solution,o.remainingContestants);else if(!u(o.remainingContestants,o.knownFalses,o.solution))return!1}return o.solution}e.exports={manyRuns:function(e,t,n,a){for(var r=[],o=0;o<e;o++){var i=f(t,n,a);i?r.push(i):1}var l=h(r);return{solutions:l,number:Object.keys(l).length,matches:d(r)}}}},function(e,t,n){e.exports=n(47)},,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),function(e){var t=n(5),a=n(13).lockInPair;e.exports={initialiseState:function(e,n,r){for(var o=[],i=e.slice(),l=n.reduce((function(e,n){return n.correct?[].concat(Object(t.a)(e),[n.pair]):e}),[]),c=n.reduce((function(e,n){return n.correct?e:[].concat(Object(t.a)(e),[n.pair])}),[]),s=r.map((function(e){return{lights:e.lights,pairs:Object(t.a)(e.pairs)}})),u=0;u<l.length;u++)a(l[u],s,o,i);return{remainingContestants:i,knownFalses:c,knownTrues:l,matchingCeremonies:s,solution:o}}}}.call(this,n(38)(e))},,function(e,t,n){var a=n(8).removePair;e.exports={removeZeroLightsWeeks:function(e,t){for(var n=[],r=0;r<t.length;r++)0===t[r].lights&&(t[r].pairs.forEach((function(t){return e.push(t)})),n.push(r));n.sort((function(e,t){return t-e}));for(var o=0;o<n.length;o++)t.splice(n[o],1);!function(e,t,n){for(var r=0;r<e.length;r++)a(e[r],t,n)}(e,t,!1)}}},function(e,t,n){var a=n(13).lockInPair;e.exports={addSolvedWeeksToSolution:function(e,t,n){for(var r=0;r<e.length;r++)if(e[r].lights===e[r].pairs.length)return void a(e[r].pairs[0],e,t,n)},checkForSolvedWeeks:function(e){for(var t=0;t<e.length;t++)if(e[t].lights===e[t].pairs.length)return!0},areThereInvalidWeeks:function(e){for(var t=0;t<e.length;t++)if(e[t].lights>e[t].pairs.length||e[t].lights<0)return!0}}},function(e,t,n){var a=n(13).lockInPair;e.exports={addCeremonyPairToSolution:function(e,t,n){var r=function(e){var t=function(e){return Math.floor(Math.random()*e.length)}(e);return e[t].pairs[Math.floor(Math.random()*e[t].pairs.length)]}(e);if(!r)throw e;a(r,e,t,n)}}},function(e,t,n){var a=n(8).doesPairMatch;function r(e){var t=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(t),1),t}e.exports={addContestantPairToSolution:function(e,t,n){var o=function(e,t){var n=r(e),o=e.filter((function(e){var r=[n,e];return!t.some((function(e){return a(e,r)}))}));if(0===o.length)return!1;var i=r(o);return e.splice(e.indexOf(i),1),[n,i]}(e,t);return!!o&&(n.push(o),!0)}}},function(e,t){t.pairProbabilities=function(e){return e.reduce((function(e,t){return t.reduce((function(e,t){var n=t.sort(),a="".concat(n[0],"-").concat(n[1]);return e[a]?e[a]+=1:e[a]=1,e}),e)}),{})},t.solutionProbabilities=function(e){return e.reduce((function(e,t){var n=t.reduce((function(e,t){var n=t.sort(),a="".concat(n[0],"-").concat(n[1],"/");return e.push(a),e}),[]);n.sort();var a=n.join("");return e[a]?e[a]=e[a]+1:e[a]=1,e}),{})},t.remainingMatches=function(e){return e.reduce((function(e,t){return t.reduce((function(e,t){for(var n=0;n<t.length;n++){var a=t[(n+1)%2];e[t[n]]||(e[t[n]]=new Set),e[t[n]].add(a)}return e}),e)}),{})}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),l=(n(27),n(7)),c=n(5),s=n(50),u=n(48),m=n(20),h=n(51),d=n(52);n(16);var f=function(e){return r.a.createElement(h.a.Group,{controlId:"selectPerson".concat(e.number)},r.a.createElement(h.a.Label,null,"Person ",e.number),r.a.createElement(h.a.Control,{as:"select",custom:!0,onChange:function(t){return e.children(t.target.value)}},e.contestants.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))},g=n(8);var E=function(e){var t=Object(a.useState)("Aasha"),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)("Aasha"),s=Object(l.a)(c,2),u=s[0],m=s[1],E=Object(a.useState)(!1),v=Object(l.a)(E,2),p=v[0],b=v[1],y=Object(a.useState)({samePerson:!1,hardCoded:!1}),k=Object(l.a)(y,2),C=k[0],O=k[1];return r.a.createElement("div",{className:"input-data"},r.a.createElement(h.a,{className:"m-2"},r.a.createElement("h4",null,"Add a truth booth couple"),r.a.createElement(f,{number:"1",contestants:e.contestants},i),r.a.createElement(f,{number:"2",contestants:e.contestants},m),r.a.createElement(h.a.Group,{controlId:"selectMatch"},r.a.createElement(h.a.Label,null,"Match?"),r.a.createElement(h.a.Control,{as:"select",custom:!0,onChange:function(e){var t=null;"No Match"===e.target.value?t=!1:"Perfect Match"===e.target.value&&(t=!0),b(t)}},r.a.createElement("option",null,"No Match"),r.a.createElement("option",null,"Perfect Match")))),r.a.createElement(d.a,{className:"m-2",onClick:function(){var t=[o,u],n={pair:t,correct:p};if(o===u){var a=Object.assign({},C);a.samePerson=!0,O(a)}else if(e.truthBooths.some((function(e){return Object(g.doesPairMatch)(e.pair,t)}))){var r=Object.assign({},C);r.hardCoded=!0,O(r)}else e.addTruthBooth(n),O({samePerson:!1,hardCoded:!1})}},"Add Truth Booth"),C.samePerson&&r.a.createElement("p",null,"People can't match themselves, try again"),C.hardCoded&&r.a.createElement("p",null,"Can't contradict a TV truth booth"))},v=n(49);n(31);var p=function(e){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"truth-booth"},"Truth Booth",r.a.createElement(v.a,{bordered:!0,size:"sm",className:"m-2",style:e.truthBooth.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.truthBooth.pair[0]),r.a.createElement("td",null,e.truthBooth.pair[1]))))))};n(32);var b=function(e){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"matching-ceremony"},r.a.createElement("h6",null,"Matching Ceremony"),r.a.createElement("p",null,e.matchingCeremony.lights," lights"),r.a.createElement(v.a,{bordered:!0,size:"sm",className:"m-2 matching-table",style:0===e.matchingCeremony.lights?{backgroundColor:"rgb(211, 144, 144)"}:null},r.a.createElement("tbody",null,e.matchingCeremony.pairs.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))))))};n(33);var y=function(e){return r.a.createElement(m.a,{className:"ml-2 mr-2 week"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("h5",null,"Week ",e.week))),r.a.createElement(p,{truthBooth:e.truthBooth}),r.a.createElement(b,{matchingCeremony:e.matchingCeremony}))};n(34);var k=function(e){return r.a.createElement(u.a,{className:"ml-3 mr-3 mt-2 set-data"},e.matchingCeremonies.map((function(t,n){return r.a.createElement(y,{matchingCeremony:t,week:t.week,key:t.week,truthBooth:e.truthBooths[n]})})))};n(35);var C=function(e){var t=Object(a.useState)(10),n=Object(l.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Run the simulation"),r.a.createElement(h.a,{className:"m-2"},r.a.createElement(h.a.Group,{controlId:"selectRunTimes"},r.a.createElement(h.a.Label,null,"How many runs?"),r.a.createElement(h.a.Control,{as:"select",custom:!0,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",null,"10"),r.a.createElement("option",null,"100"),r.a.createElement("option",null,"1000"),r.a.createElement("option",null,"10000"),r.a.createElement("option",null,"100000")))),r.a.createElement(d.a,{className:"m-2",onClick:function(){e.runSimulation(o)}},"Run simulation"),r.a.createElement("p",null,"Scroll down to see results")))};n(36);var O=function(e){return r.a.createElement("div",{className:"added-data"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Added Truth Booths"),r.a.createElement(v.a,{bordered:!0,size:"sm"},r.a.createElement("tbody",null,e.addedTruthBooths.map((function(t,n){return r.a.createElement("tr",{key:n,style:t.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},t.pair.map((function(e,t){return r.a.createElement("td",{key:t},e)})),r.a.createElement("td",{key:n,style:{backgroundColor:"lightskyblue"}},r.a.createElement(d.a,{id:n,onClick:function(t){return function(t){e.deletePair(t.target.id)}(t)}},"Delete")))}))))))},P=n(11),j=n(21);n(44);var B=function(e){return r.a.createElement(u.a,{className:"header mt-2 ml-3 mr-3"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,e.children)))};n(45);var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"ml-3 mr-3 mt-2 mb-3 results-detail"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h5",null,e.simulationResults.number," distinct solution",1===e.simulationResults.number?"":"s"," found by the simulator")," ",r.a.createElement("br",null),Object.keys(e.simulationResults.solutions).map((function(e,t){return r.a.createElement("div",null,t+1,": ",e," ",r.a.createElement("br",null))}))),r.a.createElement(v.a,{bordered:!0,size:"sm"},r.a.createElement("tr",null,r.a.createElement("td",null,"PERSON"),r.a.createElement("td",null,"POSSIBLE MATCHES")),r.a.createElement("tbody",null,Object.keys(e.simulationResults.matches).map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,Array.from(e.simulationResults.matches[t].values()).join("/")))}))))))};n(46);var J=function(){var e=Object(c.a)(P.initialTruthBooths),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],i=n[1],h=Object(c.a)(P.initialMatchingCeremonies),d=Object(c.a)(P.initialContestants),f=Object(a.useState)(),v=Object(l.a)(f,2),p=v[0],b=v[1];return r.a.createElement(s.a,{fluid:!0,className:"App"},r.a.createElement(B,null,"Week by week data"),r.a.createElement(k,{matchingCeremonies:h,truthBooths:e}),r.a.createElement(B,null,"Simulation"),r.a.createElement(u.a,{className:"ml-3 mr-3 mb-3"},r.a.createElement(m.a,{xs:12,sm:6,lg:4},r.a.createElement(E,{contestants:d,addTruthBooth:function(e){var t=o.findIndex((function(t){return Object(g.doesPairMatch)(t.pair,e.pair)}));if(-1===t){var n=[].concat(Object(c.a)(o),[e]);i(n)}else{var a=Object(c.a)(o);a[t].correct=e.correct,i(a)}},truthBooths:e})),r.a.createElement(m.a,{xs:12,sm:6,lg:4},r.a.createElement(O,{addedTruthBooths:o,deletePair:function(e){var t=Object(c.a)(o);t.splice(e,1),i(t)}})),r.a.createElement(m.a,{xs:12,lg:4},r.a.createElement(C,{runSimulation:function(t){var n=[].concat(Object(c.a)(e),Object(c.a)(o)),a=Object(j.manyRuns)(t,d,n,h);b(a)}}))),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,"Results"),r.a.createElement(N,{simulationResults:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.3d83bc04.chunk.js.map