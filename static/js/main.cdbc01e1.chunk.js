(this["webpackJsonpayto-solver"]=this["webpackJsonpayto-solver"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,n){"use strict";n.r(a),n.d(a,"copyMatchingCeremonies",(function(){return o})),n.d(a,"copyContestants",(function(){return i})),n.d(a,"copyTruthBooths",(function(){return l})),n.d(a,"initialiseState",(function(){return c}));var t=n(7),r=n(34).lockInPair;function o(e){return e.map((function(e){return{week:e.week,lights:e.lights,pairs:e.pairs.map((function(e){return{woman:e.woman,man:e.man}}))}}))}function i(e){return{women:Object(t.a)(e.women),men:Object(t.a)(e.men)}}function l(e){return e.map((function(e){return{week:e.week,woman:e.woman,man:e.man,correct:e.correct}}))}function c(e,a,n){for(var l=[],c=i(e),m=a.reduce((function(e,a){return a.correct?[].concat(Object(t.a)(e),[{woman:a.woman,man:a.man}]):e}),[]),s=a.reduce((function(e,a){return a.correct?e:[].concat(Object(t.a)(e),[{woman:a.woman,man:a.man}])}),[]),u=o(n),h=0;h<m.length;h++)r(m[h],u,l,c);return{remainingContestants:c,knownFalses:s,knownTrues:m,matchingCeremonies:u,solution:l}}},function(e,a){function n(e,a){if(e.length!==a.length)return!1;for(var n=e.sort(),t=a.sort(),r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}e.exports={doesPairMatch:n,removePair:function(e,a,t){for(var r=0;r<a.length;r++)if(a[r].pairs.some((function(a){return n(a,e)}))){var o=a[r].pairs.findIndex((function(a){return n(a,e)}));a[r].pairs.splice(o,1),t&&(a[r].lights-=1)}}}},,,function(e,a){function n(e,a){return e.woman===a.woman&&e.man===a.man}e.exports={doesPairMatch:n,removePair:function(e,a,t){for(var r=0;r<a.length;r++)if(a[r].pairs.some((function(a){return n(a,e)}))){var o=a[r].pairs.findIndex((function(a){return n(a,e)}));a[r].pairs.splice(o,1),t&&(a[r].lights-=1)}}}},,,,,,,,,,function(e,a){e.exports={initialContestants:{women:["Amber","Ashleigh","Brittany","Coleysia","Jacy","Jessica","Kayla","Paige","Shanley","Simone"],men:["Adam","Dre","Chris S.","Chris T.","Dillan","Ethan","Joey","John","Ryan","Wes"]},initialMatchingCeremonies:[{week:1,lights:2,pairs:[{woman:"Amber",man:"Ryan"},{woman:"Ashleigh",man:"Chris S."},{woman:"Brittany",man:"Adam"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"Dre"},{woman:"Jessica",man:"Chris T."},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Joey"},{woman:"Shanley",man:"Ethan"},{woman:"Simone",man:"John"}]},{week:2,lights:4,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Dre"},{woman:"Brittany",man:"Joey"},{woman:"Coleysia",man:"Wes"},{woman:"Jacy",man:"John"},{woman:"Jessica",man:"Dillan"},{woman:"Kayla",man:"Ryan"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Adam"},{woman:"Simone",man:"Chris S."}]},{week:3,lights:2,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Dre"},{woman:"Brittany",man:"Adam"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"Wes"},{woman:"Jessica",man:"John"},{woman:"Kayla",man:"Ryan"},{woman:"Paige",man:"Chris S."},{woman:"Shanley",man:"Joey"},{woman:"Simone",man:"Chris T."}]},{week:4,lights:2,pairs:[{woman:"Amber",man:"Adam"},{woman:"Ashleigh",man:"Chris T."},{woman:"Brittany",man:"Ryan"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"Joey"},{woman:"Jessica",man:"Wes"},{woman:"Kayla",man:"Ethan"},{woman:"Paige",man:"Chris S."},{woman:"Shanley",man:"John"},{woman:"Simone",man:"Dre"}]},{week:5,lights:5,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Ryan"},{woman:"Brittany",man:"Dre"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"John"},{woman:"Jessica",man:"Joey"},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Adam"},{woman:"Simone",man:"Chris S."}]},{week:6,lights:5,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Adam"},{woman:"Brittany",man:"Chris S."},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"John"},{woman:"Jessica",man:"Ryan"},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Dre"},{woman:"Simone",man:"Joey"}]},{week:7,lights:7,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Ryan"},{woman:"Brittany",man:"John"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"Chris S."},{woman:"Jessica",man:"Joey"},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Adam"},{woman:"Simone",man:"Dre"}]},{week:8,lights:8,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"Chris S."},{woman:"Brittany",man:"Joey"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"John"},{woman:"Jessica",man:"Ryan"},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Adam"},{woman:"Simone",man:"Dre"}]},{week:9,lights:10,pairs:[{woman:"Amber",man:"Ethan"},{woman:"Ashleigh",man:"John"},{woman:"Brittany",man:"Joey"},{woman:"Coleysia",man:"Dillan"},{woman:"Jacy",man:"Chris S."},{woman:"Jessica",man:"Ryan"},{woman:"Kayla",man:"Wes"},{woman:"Paige",man:"Chris T."},{woman:"Shanley",man:"Adam"},{woman:"Simone",man:"Dre"}]}],initialTruthBooths:[{week:1,woman:"Shanley",man:"Chris T.",correct:!1},{week:2,woman:"Jessica",man:"Ethan",correct:!1},{week:3,woman:"Simone",man:"John",correct:!1},{week:4,woman:"Jessica",man:"Dillan",correct:!1},{week:5,woman:"Ashleigh",man:"Dre",correct:!1},{week:5,woman:"Coleysia",man:"Dillan",correct:!0},{week:6,woman:"Paige",man:"Chris T.",correct:!0},{week:7,woman:"Kayla",man:"Ryan",correct:!1},{week:8,woman:"Kayla",man:"Wes",correct:!0},{week:9,woman:"Jacy",man:"John",correct:!1}]}},function(e,a){e.exports={initialContestants:["Aasha","Amber","Basit","Brandon","Danny","Jasmine","Jenna","Jonathan","Justin","Kai","Kari","Kylie","Max","Nour","Paige","Remy"],initialMatchingCeremonies:[{week:1,lights:2,pairs:[["Aasha","Paige"],["Amber","Nour"],["Basit","Jonathan"],["Brandon","Remy"],["Danny","Kai"],["Jasmine","Jenna"],["Justin","Max"],["Kari","Kylie"]]},{week:2,lights:2,pairs:[["Aasha","Brandon"],["Amber","Nour"],["Basit","Jonathan"],["Danny","Remy"],["Jasmine","Justin"],["Jenna","Kai"],["Kari","Kylie"],["Max","Paige"]]},{week:3,lights:2,pairs:[["Aasha","Max"],["Amber","Paige"],["Basit","Remy"],["Danny","Kai"],["Jasmine","Nour"],["Jenna","Justin"],["Jonathan","Brandon"],["Kari","Kylie"]]},{week:4,lights:1,pairs:[["Aasha","Remy"],["Amber","Nour"],["Basit","Danny"],["Brandon","Jasmine"],["Jenna","Paige"],["Jonathan","Kylie"],["Justin","Max"],["Kai","Kari"]]},{week:5,lights:0,pairs:[["Aasha","Kai"],["Amber","Nour"],["Basit","Remy"],["Brandon","Max"],["Danny","Kari"],["Jasmine","Paige"],["Jenna","Kylie"],["Jonathan","Justin"]]},{week:6,lights:3,pairs:[["Jenna","Amber"],["Basit","Jonathan"],["Jasmine","Kylie"],["Danny","Kai"],["Paige","Kari"],["Nour","Remy"],["Brandon","Aasha"],["Max","Justin"]]},{week:7,lights:3,pairs:[["Basit","Jonathan"],["Kari","Remy"],["Justin","Max"],["Kai","Jasmine"],["Kylie","Nour"],["Paige","Jenna"],["Amber","Danny"],["Brandon","Aasha"]]},{week:8,lights:3,pairs:[["Basit","Jonathan"],["Jasmine","Nour"],["Max","Justin"],["Kylie","Danny"],["Kai","Remy"],["Jenna","Kari"],["Amber","Paige"],["Brandon","Aasha"]]},{week:9,lights:6,pairs:[["Basit","Jonathan"],["Jasmine","Nour"],["Jenna","Paige"],["Brandon","Aasha"],["Danny","Kai"],["Amber","Kylie"],["Remy","Justin"],["Max","Kari"]]},{week:10,lights:8,pairs:[["Basit","Jonathan"],["Jasmine","Nour"],["Jenna","Paige"],["Brandon","Aasha"],["Danny","Kai"],["Max","Kari"],["Amber","Remy"],["Justin","Kylie"]]}],initialTruthBooths:[{week:1,pair:["Justin","Nour"],correct:!1},{week:2,pair:["Brandon","Remy"],correct:!1},{week:3,pair:["Jenna","Kai"],correct:!1},{week:4,pair:["Jenna","Danny"],correct:!1},{week:5,pair:["Kari","Kylie"],correct:!1},{week:6,pair:["Aasha","Brandon"],correct:!0},{week:7,pair:["Jasmine","Jenna"],correct:!1},{week:8,pair:["Remy","Paige"],correct:!1},{week:9,pair:["Max","Amber"],correct:!1},{week:10,pair:["Amber","Kylie"],correct:!1}]}},,,function(e,a,n){var t=n(20).removePair;e.exports={lockInPair:function(e,a,n,r){t(e,a,!0),function(e,a){a.women.splice(a.women.indexOf(e.woman),1),a.men.splice(a.men.indexOf(e.man),1)}(e,r),function(e,a){for(var n=0;n<a.length;n++){for(var t=[],r=0;r<a[n].pairs.length;r++){var o=a[n].pairs[r];o.woman!==e.woman&&o.man!==e.man||t.push(r)}t.sort((function(e,a){return a-e}));for(var i=0;i<t.length;i++)a[n].pairs.splice(t[i],1)}}(e,a),n.push(e)}}},function(e,a,n){var t=n(17).removePair;e.exports={lockInPair:function(e,a,n,r){t(e,a,!0),function(e,a){for(var n=0;n<e.length;n++)a.splice(a.indexOf(e[n]),1)}(e,r),function(e,a){for(var n=0;n<e.length;n++)for(var t=0;t<a.length;t++)for(var r=0;r<a[t].pairs.length;r++)a[t].pairs[r].includes(e[n])&&a[t].pairs.splice(r,1)}(e,a),n.push(e)}}},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,,,function(e,a,n){var t=n(16).initialiseState,r=n(69).removeZeroLightsWeeks,o=n(70),i=o.areThereInvalidWeeks,l=o.checkForSolvedWeeks,c=o.addSolvedWeeksToSolution,m=n(71).addCeremonyPairToSolution,s=n(72).addContestantPairToSolution,u=n(73),h=u.solutionProbabilities,d=u.remainingMatches;function f(e,a,n){for(var o=t(e,a,n);o.remainingContestants.women.length+o.remainingContestants.men.length>0;){if(r(o.knownFalses,o.matchingCeremonies),i(o.matchingCeremonies))return!1;if(l(o.matchingCeremonies))c(o.matchingCeremonies,o.solution,o.remainingContestants);else if(o.matchingCeremonies.length>0)m(o.matchingCeremonies,o.solution,o.remainingContestants);else if(!s(o.remainingContestants,o.knownFalses,o.solution))return!1}return o.solution}e.exports={manyRuns:function(e,a,n,t){for(var r=[],o=0;o<e;o++){var i=f(a,n,t);r.push(i)}var l=h(r);return{solutions:l,number:Object.keys(l).length,matches:d(r)}}}},function(e,a,n){var t=n(82).initialiseState,r=n(83).removeZeroLightsWeeks,o=n(84),i=o.areThereInvalidWeeks,l=o.checkForSolvedWeeks,c=o.addSolvedWeeksToSolution,m=n(85).addCeremonyPairToSolution,s=n(86).addContestantPairToSolution,u=n(87),h=u.solutionProbabilities,d=u.remainingMatches;function f(e,a,n){for(var o=t(e,a,n);o.remainingContestants.length>0;){if(r(o.knownFalses,o.matchingCeremonies),i(o.matchingCeremonies))return!1;if(l(o.matchingCeremonies))c(o.matchingCeremonies,o.solution,o.remainingContestants);else if(o.matchingCeremonies.length>0)m(o.matchingCeremonies,o.solution,o.remainingContestants);else if(!s(o.remainingContestants,o.knownFalses,o.solution))return!1}return o.solution}e.exports={manyRuns:function(e,a,n,t){for(var r=[],o=0;o<e;o++){var i=f(a,n,t);r.push(i)}var l=h(r);return{solutions:l,number:Object.keys(l).length,matches:d(r)}}}},,,,,,function(e,a,n){e.exports=n(107)},,,,,function(e,a,n){},,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){var t=n(20).removePair;e.exports={removeZeroLightsWeeks:function(e,a){for(var n=[],r=0;r<a.length;r++)0===a[r].lights&&(a[r].pairs.forEach((function(a){return e.push(a)})),n.push(r));n.sort((function(e,a){return a-e}));for(var o=0;o<n.length;o++)a.splice(n[o],1);!function(e,a,n){for(var r=0;r<e.length;r++)t(e[r],a,n)}(e,a,!1)}}},function(e,a,n){var t=n(34).lockInPair;e.exports={addSolvedWeeksToSolution:function(e,a,n){for(var r=0;r<e.length;r++)if(e[r].lights===e[r].pairs.length)return void t(e[r].pairs[0],e,a,n)},checkForSolvedWeeks:function(e){for(var a=0;a<e.length;a++)if(e[a].lights===e[a].pairs.length)return!0},areThereInvalidWeeks:function(e){for(var a=0;a<e.length;a++)if(e[a].lights>e[a].pairs.length||e[a].lights<0)return!0}}},function(e,a,n){var t=n(34).lockInPair;e.exports={addCeremonyPairToSolution:function(e,a,n){var r=function(e){var a=function(e){return Math.floor(Math.random()*e.length)}(e);return e[a].pairs[Math.floor(Math.random()*e[a].pairs.length)]}(e);if(!r)throw e;t(r,e,a,n)}}},function(e,a,n){var t=n(20).doesPairMatch;function r(e){var a=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(a),1),a}e.exports={addContestantPairToSolution:function(e,a,n){var o=function(e,a){var n=r(e.women);if(0===e.men.filter((function(e){var r={woman:n,man:e};return!a.some((function(e){return t(e,r)}))})).length)return!1;var o=r(e.men);return{woman:n,man:o}}(e,a);return!!o&&(n.push(o),!0)}}},function(e,a){a.pairProbabilities=function(e){return e.reduce((function(e,a){return a.reduce((function(e,a){var n="".concat(a.woman,"-").concat(a.man);return e[n]?e[n]+=1:e[n]=1,e}),e)}),{})},a.solutionProbabilities=function(e){return e.reduce((function(e,a){var n=a.reduce((function(e,a){var n="".concat(a.woman,"-").concat(a.man,"/");return e.push(n),e}),[]);n.sort();var t=n.join("");return e[t]?e[t]=e[t]+1:e[t]=1,e}),{})},a.remainingMatches=function(e){return e.reduce((function(e,a){return a.reduce((function(e,a){return e[a.woman]||(e[a.woman]=new Set),e[a.woman].add(a.man),e[a.man]||(e[a.man]=new Set),e[a.man].add(a.woman),e}),e)}),{})}},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a),n.d(a,"initialiseState",(function(){return o}));var t=n(7),r=n(35).lockInPair;function o(e,a,n){for(var o=[],i=e.slice(),l=a.reduce((function(e,a){return a.correct?[].concat(Object(t.a)(e),[a.pair]):e}),[]),c=a.reduce((function(e,a){return a.correct?e:[].concat(Object(t.a)(e),[a.pair])}),[]),m=n.map((function(e){return{lights:e.lights,pairs:Object(t.a)(e.pairs)}})),s=0;s<l.length;s++)r(l[s],m,o,i);return{remainingContestants:i,knownFalses:c,knownTrues:l,matchingCeremonies:m,solution:o}}},function(e,a,n){var t=n(17).removePair;e.exports={removeZeroLightsWeeks:function(e,a){for(var n=[],r=0;r<a.length;r++)0===a[r].lights&&(a[r].pairs.forEach((function(a){return e.push(a)})),n.push(r));n.sort((function(e,a){return a-e}));for(var o=0;o<n.length;o++)a.splice(n[o],1);!function(e,a,n){for(var r=0;r<e.length;r++)t(e[r],a,n)}(e,a,!1)}}},function(e,a,n){var t=n(35).lockInPair;e.exports={addSolvedWeeksToSolution:function(e,a,n){for(var r=0;r<e.length;r++)if(e[r].lights===e[r].pairs.length)return void t(e[r].pairs[0],e,a,n)},checkForSolvedWeeks:function(e){for(var a=0;a<e.length;a++)if(e[a].lights===e[a].pairs.length)return!0},areThereInvalidWeeks:function(e){for(var a=0;a<e.length;a++)if(e[a].lights>e[a].pairs.length||e[a].lights<0)return!0}}},function(e,a,n){var t=n(35).lockInPair;e.exports={addCeremonyPairToSolution:function(e,a,n){var r=function(e){var a=function(e){return Math.floor(Math.random()*e.length)}(e);return e[a].pairs[Math.floor(Math.random()*e[a].pairs.length)]}(e);if(!r)throw e;t(r,e,a,n)}}},function(e,a,n){var t=n(17).doesPairMatch;function r(e){var a=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(a),1),a}e.exports={addContestantPairToSolution:function(e,a,n){var o=function(e,a){var n=r(e),o=e.filter((function(e){var r=[n,e];return!a.some((function(e){return t(e,r)}))}));if(0===o.length)return!1;var i=r(o);return e.splice(e.indexOf(i),1),[n,i]}(e,a);return!!o&&(n.push(o),!0)}}},function(e,a){a.pairProbabilities=function(e){return e.reduce((function(e,a){return a.reduce((function(e,a){var n=a.sort(),t="".concat(n[0],"-").concat(n[1]);return e[t]?e[t]+=1:e[t]=1,e}),e)}),{})},a.solutionProbabilities=function(e){return e.reduce((function(e,a){var n=a.reduce((function(e,a){var n=a.sort(),t="".concat(n[0],"-").concat(n[1],"/");return e.push(t),e}),[]);n.sort();var t=n.join("");return e[t]?e[t]=e[t]+1:e[t]=1,e}),{})},a.remainingMatches=function(e){return e.reduce((function(e,a){return a.reduce((function(e,a){for(var n=0;n<a.length;n++){var t=a[(n+1)%2];e[a[n]]||(e[a[n]]=new Set),e[a[n]].add(t)}return e}),e)}),{})}},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){var t={"./1.jpg":99,"./2.jpg":100,"./3.jpg":101,"./4.jpg":102,"./5.jpg":103,"./6.jpg":104,"./7.jpg":105,"./8.jpg":106};function r(e){var a=o(e);return n(a)}function o(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=98},function(e,a,n){e.exports=n.p+"static/media/1.a25aaed7.jpg"},function(e,a,n){e.exports=n.p+"static/media/2.9e563561.jpg"},function(e,a,n){e.exports=n.p+"static/media/3.543939ba.jpg"},function(e,a,n){e.exports=n.p+"static/media/4.04a24f1a.jpg"},function(e,a,n){e.exports=n.p+"static/media/5.cb023be8.jpg"},function(e,a,n){e.exports=n.p+"static/media/6.a2cdcd21.jpg"},function(e,a,n){e.exports=n.p+"static/media/7.697d925a.jpg"},function(e,a,n){e.exports=n.p+"static/media/8.e1254f76.jpg"},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(19),i=n.n(o),l=(n(60),n(113)),c=n(18),m=n(8),s=n(7),u=n(6),h=n(110),d=n(47),f=n(115),g=n(109);n(41);var E=function(e){return r.a.createElement(f.a.Group,{controlId:"select".concat(e.gender,"}")},r.a.createElement(f.a.Label,null,e.gender),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(a){return e.children(a.target.value)}},"Woman"===e.gender?e.contestants.women.map((function(e,a){return r.a.createElement("option",{key:a},e)})):e.contestants.men.map((function(e,a){return r.a.createElement("option",{key:a},e)}))))};var w=function(e){var a=Object(t.useState)("Amber"),n=Object(u.a)(a,2),o=n[0],i=n[1],l=Object(t.useState)("Adam"),c=Object(u.a)(l,2),m=c[0],s=c[1],h=Object(t.useState)(!1),d=Object(u.a)(h,2),w=d[0],p=d[1],v=Object(t.useState)({samePerson:!1,hardCoded:!1}),y=Object(u.a)(v,2),k=y[0],b=y[1];return r.a.createElement("div",{className:"input-data"},r.a.createElement(f.a,{className:"m-2"},r.a.createElement("h4",null,"Add a truth booth couple"),r.a.createElement(E,{gender:"Woman",contestants:e.contestants},i),r.a.createElement(E,{gender:"Man",contestants:e.contestants},s),r.a.createElement(f.a.Group,{controlId:"selectMatch"},r.a.createElement(f.a.Label,null,"Match?"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(e){var a=null;"No Match"===e.target.value?a=!1:"Perfect Match"===e.target.value&&(a=!0),p(a)}},r.a.createElement("option",null,"No Match"),r.a.createElement("option",null,"Perfect Match")))),r.a.createElement(g.a,{className:"m-2",onClick:function(){var a={woman:o,man:m,correct:w};e.addTruthBooth(a),b({samePerson:!1,hardCoded:!1})}},"Add Truth Booth"),k.samePerson&&r.a.createElement("p",null,"People can't match themselves, try again"),k.hardCoded&&r.a.createElement("p",null,"Can't contradict a TV truth booth"))},p=n(111);n(64);var v=function(e){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"truth-booth"},"Truth Booth",r.a.createElement(p.a,{bordered:!0,size:"sm",className:"m-2"},r.a.createElement("tbody",null,e.truthBooth.map((function(e){return r.a.createElement("tr",{style:e.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},r.a.createElement("td",null,e.woman),r.a.createElement("td",null,e.man))}))))))};n(65);var y=function(e){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"matching-ceremony"},r.a.createElement("h6",null,"Matching Ceremony"),r.a.createElement("p",null,e.matchingCeremony.lights," lights"),r.a.createElement(p.a,{bordered:!0,size:"sm",className:"m-2 matching-table",style:0===e.matchingCeremony.lights?{backgroundColor:"rgb(211, 144, 144)"}:null},r.a.createElement("tbody",null,e.matchingCeremony.pairs.map((function(e,a){return r.a.createElement("tr",{key:"row".concat(a)},r.a.createElement("td",{key:"woman".concat(a)},e.woman),r.a.createElement("td",{key:"man".concat(a)},e.man))}))))))};n(66);var k=function(e){return r.a.createElement(d.a,{className:"ml-2 mr-2 week"},r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h5",null,"Week ",e.week))),r.a.createElement(v,{truthBooth:e.truthBooth}),r.a.createElement(y,{matchingCeremony:e.matchingCeremony}))};n(42);var b=function(e){return r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 p-2 set-data"},r.a.createElement(f.a.Group,{controlId:"Choose week"},r.a.createElement(f.a.Label,null,"Choose Week"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(a){return e.setWeek(a.target.options.selectedIndex)}},["At the start","After week 1","After week 2","After week 3","After week 4","After week 5","After week 6","After week 7","After week 8","After week 9","After week 10"].map((function(e,a){return r.a.createElement("option",{key:a},e)})))))};var C=function(e){var a=e.matchingCeremonies.filter((function(a){return a.week<=e.week}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{week:e.week,setWeek:e.setWeek}),r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 set-data"},a.map((function(a,n){return r.a.createElement(k,{matchingCeremony:a,week:a.week,key:a.week,truthBooth:e.truthBooths.filter((function(e){return e.week===a.week}))})}))))};n(67);var S=function(e){var a=Object(t.useState)(10),n=Object(u.a)(a,2),o=n[0],i=n[1];return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Run the simulation"),r.a.createElement(f.a,{className:"m-2"},r.a.createElement(f.a.Group,{controlId:"selectRunTimes"},r.a.createElement(f.a.Label,null,"How many runs?"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",null,"10"),r.a.createElement("option",null,"100"),r.a.createElement("option",null,"1000"),r.a.createElement("option",null,"10000"),r.a.createElement("option",null,"100000")))),r.a.createElement(g.a,{className:"m-2",onClick:function(){e.runSimulation(o)}},"Run simulation"),r.a.createElement("p",null,"Scroll down to see results")))};n(68);var A=function(e){return r.a.createElement("div",{className:"added-data"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Added Truth Booths"),r.a.createElement(p.a,{bordered:!0,size:"sm"},r.a.createElement("tbody",null,e.addedTruthBooths.map((function(a,n){return r.a.createElement("tr",{key:"row".concat(n),style:a.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},r.a.createElement("td",{key:"woman".concat(n)},a.woman),r.a.createElement("td",{key:"man".concat(n)},a.man),r.a.createElement("td",{key:"delete".concat(n),style:{backgroundColor:"lightskyblue"}},r.a.createElement(g.a,{id:n,onClick:function(a){return function(a){e.deletePair(a.target.id)}(a)}},"Delete")))}))))))},J=n(30),j=n(48);n(74);var O=function(e){return r.a.createElement(h.a,{className:"header mt-2 ml-3 mr-3"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,e.children)))},P=n(20);n(75);var B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 mb-3 results-detail"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h5",null,e.simulationResults.number," distinct solution",1===e.simulationResults.number?"":"s"," found by the simulator")," ",r.a.createElement("br",null),Object.keys(e.simulationResults.solutions).map((function(e,a){return r.a.createElement("div",null,a+1,": ",e," ",r.a.createElement("br",null))}))),r.a.createElement(p.a,{bordered:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"PERSON"),r.a.createElement("td",null,"POSSIBLE MATCHES"))),r.a.createElement("tbody",null,Object.keys(e.simulationResults.matches).map((function(a){return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,Array.from(e.simulationResults.matches[a].values()).join("/")))}))))))},N=n(16),T=n(112);n(76);var x=function(e){return r.a.createElement(T.a,{className:"my-5 p-4 page-header"},r.a.createElement("h1",null,"Season ",e.season))};var M=function(){var e=Object(N.copyTruthBooths)(J.initialTruthBooths),a=Object(t.useState)([]),n=Object(u.a)(a,2),o=n[0],i=n[1],c=Object(N.copyMatchingCeremonies)(J.initialMatchingCeremonies),m=Object(N.copyContestants)(J.initialContestants),f=Object(t.useState)(),g=Object(u.a)(f,2),E=g[0],p=g[1],v=Object(t.useState)(0),y=Object(u.a)(v,2),k=y[0],b=y[1];return r.a.createElement(l.a,{fluid:!0,className:"App"},r.a.createElement(x,{season:1}),r.a.createElement(O,null,"Week by week data"),r.a.createElement(C,{matchingCeremonies:c,truthBooths:e,week:k,setWeek:b}),r.a.createElement(O,null,"Simulation"),r.a.createElement(h.a,{className:"ml-3 mr-3 mb-3"},r.a.createElement(d.a,{xs:12,sm:6,lg:4},r.a.createElement(w,{contestants:m,addTruthBooth:function(e){var a=o.findIndex((function(a){return Object(P.doesPairMatch)(a,e)}));if(-1===a){var n=Object(N.copyTruthBooths)(o);n.push(e),i(n)}else{var t=Object(N.copyTruthBooths)(o);t[a].correct=e.correct,i(t)}},truthBooths:e,week:k})),r.a.createElement(d.a,{xs:12,sm:6,lg:4},r.a.createElement(A,{addedTruthBooths:o,deletePair:function(e){var a=Object(N.copyTruthBooths)(o);a.splice(e,1),i(a)}})),r.a.createElement(d.a,{xs:12,lg:4},r.a.createElement(S,{runSimulation:function(a){var n=[].concat(Object(s.a)(e.filter((function(e){return e.week<=k}))),Object(s.a)(o)),t=Object(s.a)(c.filter((function(e){return e.week<=k}))),r=Object(j.manyRuns)(a,m,n,t);p(r)}}))),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,"Results"),r.a.createElement(B,{simulationResults:E})))};n(43);var R=function(e){return r.a.createElement(f.a.Group,{controlId:"selectPerson".concat(e.number)},r.a.createElement(f.a.Label,null,"Person ",e.number),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(a){return e.children(a.target.value)}},e.contestants.map((function(e,a){return r.a.createElement("option",{key:a},e)}))))},K=n(17);var W=function(e){var a=Object(t.useState)("Aasha"),n=Object(u.a)(a,2),o=n[0],i=n[1],l=Object(t.useState)("Aasha"),c=Object(u.a)(l,2),m=c[0],s=c[1],h=Object(t.useState)(!1),d=Object(u.a)(h,2),E=d[0],w=d[1],p=Object(t.useState)({samePerson:!1,hardCoded:!1}),v=Object(u.a)(p,2),y=v[0],k=v[1];return r.a.createElement("div",{className:"input-data"},r.a.createElement(f.a,{className:"m-2"},r.a.createElement("h4",null,"Add a truth booth couple"),r.a.createElement(R,{number:"1",contestants:e.contestants},i),r.a.createElement(R,{number:"2",contestants:e.contestants},s),r.a.createElement(f.a.Group,{controlId:"selectMatch"},r.a.createElement(f.a.Label,null,"Match?"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(e){var a=null;"No Match"===e.target.value?a=!1:"Perfect Match"===e.target.value&&(a=!0),w(a)}},r.a.createElement("option",null,"No Match"),r.a.createElement("option",null,"Perfect Match")))),r.a.createElement(g.a,{className:"m-2",onClick:function(){var a=[o,m],n={pair:a,correct:E},t=e.truthBooths.filter((function(a){return a.week<=e.week}));if(o===m){var r=Object.assign({},y);r.samePerson=!0,k(r)}else if(t.some((function(e){return Object(K.doesPairMatch)(e.pair,a)}))){var i=Object.assign({},y);i.hardCoded=!0,k(i)}else e.addTruthBooth(n),k({samePerson:!1,hardCoded:!1})}},"Add Truth Booth"),y.samePerson&&r.a.createElement("p",null,"People can't match themselves, try again"),y.hardCoded&&r.a.createElement("p",null,"Can't contradict a TV truth booth"))};n(77);var D=function(e){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"truth-booth"},"Truth Booth",r.a.createElement(p.a,{bordered:!0,size:"sm",className:"m-2",style:e.truthBooth.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.truthBooth.pair[0]),r.a.createElement("td",null,e.truthBooth.pair[1]))))))};n(78);var I=function(e){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"matching-ceremony"},r.a.createElement("h6",null,"Matching Ceremony"),r.a.createElement("p",null,e.matchingCeremony.lights," lights"),r.a.createElement(p.a,{bordered:!0,size:"sm",className:"m-2 matching-table",style:0===e.matchingCeremony.lights?{backgroundColor:"rgb(211, 144, 144)"}:null},r.a.createElement("tbody",null,e.matchingCeremony.pairs.map((function(e,a){return r.a.createElement("tr",{key:a},e.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))))};n(79);var F=function(e){return r.a.createElement(d.a,{className:"ml-2 mr-2 week"},r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h5",null,"Week ",e.week))),r.a.createElement(D,{truthBooth:e.truthBooth}),r.a.createElement(I,{matchingCeremony:e.matchingCeremony}))};n(44);var L=function(e){return r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 p-2 set-data"},r.a.createElement(f.a.Group,{controlId:"Choose week"},r.a.createElement(f.a.Label,null,"Choose Week"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(a){return e.setWeek(a.target.options.selectedIndex)}},["At the start","After week 1","After week 2","After week 3","After week 4","After week 5","After week 6","After week 7","After week 8","After week 9","After week 10"].map((function(e,a){return r.a.createElement("option",{key:a},e)})))))};var z=function(e){var a=e.matchingCeremonies.filter((function(a){return a.week<=e.week}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{week:e.week,setWeek:e.setWeek}),r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 set-data"},a.map((function(a,n){return r.a.createElement(F,{matchingCeremony:a,week:a.week,key:a.week,truthBooth:e.truthBooths[n]})}))))};n(80);var G=function(e){var a=Object(t.useState)(10),n=Object(u.a)(a,2),o=n[0],i=n[1];return r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Run the simulation"),r.a.createElement(f.a,{className:"m-2"},r.a.createElement(f.a.Group,{controlId:"selectRunTimes"},r.a.createElement(f.a.Label,null,"How many runs?"),r.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",null,"10"),r.a.createElement("option",null,"100"),r.a.createElement("option",null,"1000"),r.a.createElement("option",null,"10000"),r.a.createElement("option",null,"100000")))),r.a.createElement(g.a,{className:"m-2",onClick:function(){e.runSimulation(o)}},"Run simulation"),r.a.createElement("p",null,"Scroll down to see results")))};n(81);var Y=function(e){return r.a.createElement("div",{className:"added-data"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,"Added Truth Booths"),r.a.createElement(p.a,{bordered:!0,size:"sm"},r.a.createElement("tbody",null,e.addedTruthBooths.map((function(a,n){return r.a.createElement("tr",{key:n,style:a.correct?{backgroundColor:"rgb(142, 216, 142)"}:{backgroundColor:"rgb(211, 144, 144)"}},a.pair.map((function(e,a){return r.a.createElement("td",{key:a},e)})),r.a.createElement("td",{key:n,style:{backgroundColor:"lightskyblue"}},r.a.createElement(g.a,{id:n,onClick:function(a){return function(a){e.deletePair(a.target.id)}(a)}},"Delete")))}))))))},H=n(31),Z=n(49);n(88);var V=function(e){return r.a.createElement(h.a,{className:"header mt-2 ml-3 mr-3"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h4",null,e.children)))};n(89);var U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"ml-3 mr-3 mt-2 mb-3 results-detail"},r.a.createElement("div",{className:"m-2"},r.a.createElement("h5",null,e.simulationResults.number," distinct solution",1===e.simulationResults.number?"":"s"," found by the simulator")," ",r.a.createElement("br",null),Object.keys(e.simulationResults.solutions).map((function(e,a){return r.a.createElement("div",null,a+1,": ",e," ",r.a.createElement("br",null))}))),r.a.createElement(p.a,{bordered:!0,size:"sm"},r.a.createElement("tr",null,r.a.createElement("td",null,"PERSON"),r.a.createElement("td",null,"POSSIBLE MATCHES")),r.a.createElement("tbody",null,Object.keys(e.simulationResults.matches).map((function(a){return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,Array.from(e.simulationResults.matches[a].values()).join("/")))}))))))};n(90);var _=function(e){return r.a.createElement(T.a,{className:"my-5 p-4 page-header"},r.a.createElement("h1",null,"Season ",e.season))};var $=function(){var e=Object(s.a)(H.initialTruthBooths),a=Object(t.useState)([]),n=Object(u.a)(a,2),o=n[0],i=n[1],c=Object(s.a)(H.initialMatchingCeremonies),m=Object(s.a)(H.initialContestants),f=Object(t.useState)(),g=Object(u.a)(f,2),E=g[0],w=g[1],p=Object(t.useState)(0),v=Object(u.a)(p,2),y=v[0],k=v[1];return r.a.createElement(l.a,{fluid:!0,className:"App"},r.a.createElement(_,{season:8}),r.a.createElement(V,null,"Week by week data"),r.a.createElement(z,{matchingCeremonies:c,truthBooths:e,week:y,setWeek:k}),r.a.createElement(V,null,"Simulation"),r.a.createElement(h.a,{className:"ml-3 mr-3 mb-3"},r.a.createElement(d.a,{xs:12,sm:6,lg:4},r.a.createElement(W,{contestants:m,addTruthBooth:function(e){var a=o.findIndex((function(a){return Object(K.doesPairMatch)(a.pair,e.pair)}));if(-1===a){var n=[].concat(Object(s.a)(o),[e]);i(n)}else{var t=Object(s.a)(o);t[a].correct=e.correct,i(t)}},truthBooths:e,week:y})),r.a.createElement(d.a,{xs:12,sm:6,lg:4},r.a.createElement(Y,{addedTruthBooths:o,deletePair:function(e){var a=Object(s.a)(o);a.splice(e,1),i(a)}})),r.a.createElement(d.a,{xs:12,lg:4},r.a.createElement(G,{runSimulation:function(a){var n=[].concat(Object(s.a)(e.filter((function(e){return e.week<=y}))),Object(s.a)(o)),t=Object(s.a)(c.filter((function(e){return e.week<=y}))),r=Object(Z.manyRuns)(a,m,n,t);w(r)}}))),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null,"Results"),r.a.createElement(U,{simulationResults:E})))},q=n(116),Q=n(117);n(91);var X=function(e){var a=Object(t.useState)(!1),n=Object(u.a)(a,2),o=n[0],i=n[1];return r.a.createElement(q.a,{className:"navbar--AYTO",expand:"sm",fixed:"top",expanded:o},r.a.createElement(q.a.Brand,{className:"brand--AYTO"},"Are You The One"),r.a.createElement(q.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return i(!o&&"expanded")}}),r.a.createElement(q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{onClick:function(){return i(!1)}},r.a.createElement(c.b,{className:"px-3 navlink--AYTO",to:"/"},"Home"),e.seasons.map((function(a){return r.a.createElement(c.b,{key:a,className:"px-3 navlink--AYTO ".concat(e.activeSeasons.includes(a)?"":"disabled-link"),to:"/season".concat(a)},"Season ",a)})))))},ee=(n(95),n(96),n(114));n(97);var ae=function(e){return r.a.createElement(d.a,{className:"m-2"},r.a.createElement(c.b,{className:"season-link ".concat(e.activeSeasons.includes(e.season)?"":"disabled-link"),to:"/season".concat(e.season)},"Season ",e.season,r.a.createElement(ee.a,{src:n(98)("./".concat(e.season,".jpg")),rounded:!0,fluid:!0,className:"group"})))};var ne=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:"my-5 p-4"},r.a.createElement("h1",null,"Are You The One Simulator"),r.a.createElement("p",null),r.a.createElement("p",null,"This is a simulator to use when watching MTV's Are You The One"),r.a.createElement("p",null,"Would you follow your heart or follow the lights?")),r.a.createElement(l.a,{fluid:!0},r.a.createElement(h.a,null,e.seasons.map((function(a){return r.a.createElement(ae,{season:a,activeSeasons:e.activeSeasons})})))))};var te=function(){var e=[1,2,3,4,5,6,7,8],a=[1,8];return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(X,{seasons:e,activeSeasons:a}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/season1"},r.a.createElement(l.a,{fluid:!0},r.a.createElement(M,null))),r.a.createElement(m.a,{path:"/season8"},r.a.createElement(l.a,{fluid:!0},r.a.createElement($,null))),r.a.createElement(m.a,{path:"/"},r.a.createElement(l.a,{fluid:!0},r.a.createElement(ne,{seasons:e,activeSeasons:a}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.cdbc01e1.chunk.js.map