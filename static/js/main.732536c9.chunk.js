(this["webpackJsonpcourse-scheduler-starter"]=this["webpackJsonpcourse-scheduler-starter"]||[]).push([[0],{20:function(e,t,r){},44:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),c=r(19),a=r.n(c),i=(r(43),r(44),r(12)),o=r(6),u=r(7),l=r(10),h=r(9),b=r(8),j=(r(20),r(38)),d=r(35),m=r(1),p=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"removeFromCart",value:function(){this.props.remove(this.props.courseNumber,this.props.sectionNumber,this.props.subsectionNumber)}},{key:"render",value:function(){var e=this.props.data,t=e.number;return e.inCart?Object(m.jsxs)("div",{className:"Subsection",children:[Object(m.jsxs)("span",{className:"Subsection-Number",children:["Subsection Number: ",t]}),Object(m.jsx)("button",{onClick:this.removeFromCart,children:"Remove Subsection"})]}):null}}]),r}(s.Component),v=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"removeFromCart",value:function(){this.props.remove(this.props.courseNumber,this.props.sectionNumber,null)}},{key:"getSubsections",value:function(){for(var e=[],t=0,r=Object.values(this.props.data.subsections);t<r.length;t++){var s=r[t];s.inCart&&e.push(Object(m.jsx)("li",{className:"Section-Subsection",children:Object(m.jsx)(p,{data:s,remove:this.props.remove,courseNumber:this.props.courseNumber,sectionNumber:this.props.sectionNumber,subsectionNumber:s.number})}))}return e.length||e.push(Object(m.jsx)("li",{children:"None"})),e}},{key:"render",value:function(){var e=this.props.data,t=e.number;return e.inCart?Object(m.jsxs)("div",{className:"Section",children:[Object(m.jsxs)("span",{className:"Section-Number",children:["Section Number: ",t]}),Object(m.jsx)("button",{onClick:this.removeFromCart,children:"Remove Section"}),Object(m.jsx)("ul",{children:Object(m.jsxs)("li",{className:"Section-Subsections",children:[Object(m.jsx)("span",{children:"Added Subsections"}),Object(m.jsx)("ul",{children:this.getSubsections()})]})})]}):null}}]),r}(s.Component),f=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getSections",value:function(){for(var e=[],t=0,r=Object.values(this.props.sections);t<r.length;t++){var s=r[t];s.inCart&&e.push(Object(m.jsx)("li",{children:Object(m.jsx)(v,{data:s,remove:this.props.remove,courseNumber:this.props.courseNumber,sectionNumber:s.number})}))}return e.length||e.push(Object(m.jsx)("li",{children:"None"})),e}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"SectionArea",children:Object(m.jsx)("ul",{className:"SectionArea-SectionList",children:this.getSections()})})}}]),r}(s.Component),O=f,C=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"removeFromCart",value:function(){this.props.remove(this.props.courseNumber,null,null)}},{key:"render",value:function(){var e=this.props.data;if(0===e.length||!e.inCart)return null;var t=e.name,r=e.number,s=e.credits,n=e.sections;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{children:[r,": ",t," | (",s," Cr.)"]}),Object(m.jsx)("button",{onClick:this.removeFromCart,children:"Remove Course"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("h5",{children:"Added Sections:"}),Object(m.jsx)(O,{sections:n,remove:this.props.remove,courseNumber:this.props.courseNumber})]})]})}}]),r}(s.Component),x=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getCourses",value:function(){for(var e=[],t=0,r=Object.values(this.props.allCourses);t<r.length;t++){var s=r[t];s.inCart&&e.push(Object(m.jsx)(C,{courseNumber:s.number,remove:this.props.remove,data:s}))}return e.length||e.push(Object(m.jsx)("li",{children:"Empty Cart"})),e}},{key:"render",value:function(){return console.log(this.props.allCourses),Object(m.jsx)("div",{children:this.getCourses()})}}]),r}(s.Component),y=x,g=r(32),N=r(17),S=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"filterByCredits",value:function(e,t,r){var s=[];return t&&r&&t>r?e:t||r?(t?(s=e.filter((function(e){return e.credits>=t})),r&&(s=s.filter((function(e){return e.credits<=r})))):r&&(s=e.filter((function(e){return e.credits<=r}))),s):e}},{key:"filterBySubject",value:function(e,t){var r=e;if(t){if("All"===t)return r;r=e.filter((function(e){return e.subject===t}))}return r}},{key:"filterBySearchTerm",value:function(e,t){var r=e;if(t){t=t.trim(),r=[];var s,n=Object(i.a)(e);try{for(n.s();!(s=n.n()).done;){var c,a=s.value,o=Object(i.a)(a.keywords);try{for(o.s();!(c=o.n()).done;){var u=c.value;if((u=u.trim())===t||u.includes(t)){r.unshift(a);break}}}catch(l){o.e(l)}finally{o.f()}}}catch(l){n.e(l)}finally{n.f()}}return r}},{key:"searchAndFilter",value:function(e,t,r,s,n){var c=e;return c=this.filterByCredits(c,s,n),c=this.filterBySubject(c,r),c=this.filterBySearchTerm(c,t)}}]),e}(),k=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).searchAndFilter=new S,s.subject=n.a.createRef(),s.minimumCredits=n.a.createRef(),s.maximumCredits=n.a.createRef(),s.search=n.a.createRef(),s}return Object(u.a)(r,[{key:"setCourses",value:function(){this.props.setCourses(this.searchAndFilter.searchAndFilter(this.props.courses,this.search.current.value,this.subject.current.value,this.minimumCredits.current.value,this.maximumCredits.current.value))}},{key:"handleCreditsKeyDown",value:function(e){-1===["0","1","2","3","4","5","6","7","8","9","Backspace","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab"].indexOf(e.key)&&e.preventDefault()}},{key:"getSubjectOptions",value:function(){var e,t=[],r=Object(i.a)(this.props.subjects);try{for(r.s();!(e=r.n()).done;){var s=e.value;t.push(Object(m.jsx)("option",{children:s},s))}}catch(n){r.e(n)}finally{r.f()}return t}},{key:"render",value:function(){var e=this;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(g.a,{style:{width:"calc(20vw - 5px)",marginLeft:"5px",height:"calc(100vh - 10px)",position:"fixed"},children:Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)(g.a.Title,{children:"Search and Filter"}),Object(m.jsxs)(N.a,{children:[Object(m.jsxs)(N.a.Group,{controlId:"formKeywords",onChange:function(){return e.setCourses()},style:{width:"100%"},children:[Object(m.jsx)(N.a.Label,{children:"Search"}),Object(m.jsx)(N.a.Control,{type:"text",placeholder:"Search",autoComplete:"off",ref:this.search})]}),Object(m.jsxs)(N.a.Group,{controlId:"formSubject",children:[Object(m.jsx)(N.a.Label,{children:"Subject"}),Object(m.jsx)(N.a.Control,{as:"select",ref:this.subject,onChange:function(){return e.setCourses()},children:this.getSubjectOptions()})]}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(m.jsxs)(N.a.Group,{controlId:"minimumCredits",onChange:function(){return e.setCourses()},onKeyDown:function(t){return e.handleCreditsKeyDown(t)},children:[Object(m.jsx)(N.a.Label,{children:"Credits"}),Object(m.jsx)(N.a.Control,{type:"text",placeholder:"minimum",autoComplete:"off",ref:this.minimumCredits})]}),Object(m.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",marginTop:"38px"},children:"to"}),Object(m.jsx)(N.a.Group,{controlId:"maximumCredits",style:{marginTop:"32px"},onChange:function(){return e.setCourses()},onKeyDown:function(t){return e.handleCreditsKeyDown(t)},children:Object(m.jsx)(N.a.Control,{type:"text",placeholder:"maximum",autoComplete:"off",ref:this.maximumCredits})})]})]})]})})})}}]),r}(n.a.Component),w=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).addToCart=s.addToCart.bind(Object(l.a)(s)),s.removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"addToCart",value:function(){this.props.add(this.props.courseNumber,this.props.sectionNumber,this.props.data.number)}},{key:"removeFromCart",value:function(){this.props.remove(this.props.courseNumber,this.props.sectionNumber,this.props.data.number)}},{key:"getTimes",value:function(){for(var e=this,t=[],r=function(){var r=n[s];Object.keys(e.props.data.time).map((function(e,s){t.push(Object(m.jsx)("li",{className:"Subsection-Timeslot",children:e.toString()+": "+r}))}))},s=0,n=Object.values(this.props.data.time);s<n.length;s++)r();return t}},{key:"render",value:function(){var e=this.props.data,t=e.location,r=e.number;return Object(m.jsxs)("div",{className:"Subsection",children:[Object(m.jsxs)("span",{className:"Subsection-Number",children:["Number: ",r]}),Object(m.jsx)("button",{onClick:this.addToCart,children:"Add Subsection"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{className:"Subsection-Location",children:["Location: ",t]}),Object(m.jsxs)("li",{className:"Subsection-Times",children:[Object(m.jsx)("span",{children:"Times:"}),Object(m.jsx)("ul",{children:this.getTimes()})]})]})]})}}]),r}(n.a.Component),T=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).addToCart=s.addToCart.bind(Object(l.a)(s)),s.removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"addToCart",value:function(){this.props.add(this.props.courseNumber,this.props.data.number,null)}},{key:"removeFromCart",value:function(){this.props.remove(this.props.courseNumber,this.props.data.number,null)}},{key:"getSubsections",value:function(){for(var e=[],t=0,r=Object.values(this.props.data.subsections);t<r.length;t++){var s=r[t];e.push(Object(m.jsx)("li",{className:"Section-Subsection",children:Object(m.jsx)(w,{data:s,courseNumber:this.props.courseNumber,sectionNumber:this.props.data.number,add:this.props.add,remove:this.props.remove})}))}return e.length||e.push(Object(m.jsx)("li",{children:"None"})),e}},{key:"getTimes",value:function(){for(var e=this,t=[],r=function(){var r=n[s];Object.keys(e.props.data.time).map((function(e,s){t.push(Object(m.jsx)("li",{className:"Section-Timeslot",children:e.toString()+": "+r}))}))},s=0,n=Object.values(this.props.data.time);s<n.length;s++)r();return t}},{key:"render",value:function(){var e=this.props.data,t=e.instructor,r=e.location,s=e.number;return Object(m.jsxs)("div",{className:"Section",children:[Object(m.jsxs)("span",{className:"Section-Number",children:["Number: ",s]}),Object(m.jsx)("button",{onClick:this.addToCart,children:"Add Section"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{className:"Section-Instructor",children:["Instructor: ",t]}),Object(m.jsxs)("li",{className:"Section-Location",children:["Location: ",r]}),Object(m.jsxs)("li",{className:"Section-Times",children:[Object(m.jsx)("span",{children:"Times:"}),Object(m.jsx)("ul",{children:this.getTimes()})]}),Object(m.jsxs)("li",{className:"Section-Subsections",children:[Object(m.jsx)("span",{children:"Subsections:"}),Object(m.jsx)("ul",{children:this.getSubsections()})]})]})]})}}]),r}(n.a.Component),F=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getSections",value:function(){for(var e=[],t=0,r=Object.values(this.props.sections);t<r.length;t++){var s=r[t];e.push(Object(m.jsx)("li",{children:Object(m.jsx)(T,{data:s,courseNumber:this.props.courseNumber,sectionNumber:s.number,add:this.props.add,remove:this.props.remove})}))}return e}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"SectionArea",children:Object(m.jsx)("ul",{className:"SectionArea-SectionList",children:this.getSections()})})}}]),r}(s.Component),A=F,D=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).addToCart=s.addToCart.bind(Object(l.a)(s)),s.removeFromCart=s.removeFromCart.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"getRequisites",value:function(){var e=this.props.data.requisites;if(0===e.length)return"None";var t="";return e.map((function(r,s){return t="("+r.map((function(e,t){return t!==r.length-1?e+" OR ":e})).join("")+")",s!==e.length-1?t+" AND ":t})),t}},{key:"addToCart",value:function(){this.props.add(this.props.data.number,null,null)}},{key:"removeFromCart",value:function(){this.props.remove(this.props.data.number,null,null)}},{key:"render",value:function(){var e=this.props.data;if(0===e.length)return null;var t=e.credits,r=e.number,s=e.name,n=e.description,c=e.subject,a=e.keywords,i=this.getRequisites(),o=e.sections;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h4",{children:[r,": ",s," | (",t," Cr.)"]}),Object(m.jsx)("button",{onClick:this.addToCart,children:"Add Course"}),Object(m.jsxs)("p",{className:"Course-Subject",children:["Subject:  ",Object(m.jsx)("span",{className:"Course-SubjectValue",children:c})]}),Object(m.jsxs)("p",{className:"Course-Description",children:["Description: ",Object(m.jsx)("span",{className:"Course-DescriptionValue",children:n})]}),Object(m.jsxs)("p",{className:"Course-Keywords",children:["Keywords: ",Object(m.jsx)("span",{classname:"Course-KeywordsValue",children:a.map((function(e,t){return t!==a.length-1?e+", ":e}))})]}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:Object(m.jsx)("h5",{children:"Requisites: "})}),i]}),Object(m.jsx)("h5",{children:"Sections:"}),Object(m.jsx)(A,{sections:o,add:this.props.add,remove:this.props.remove,courseNumber:r})]})]})}}]),r}(n.a.Component),L=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getCourses",value:function(){for(var e=[],t=0,r=Object.values(this.props.data);t<r.length;t++){var s=r[t];e.push(Object(m.jsx)(D,{data:s,add:this.props.add,remove:this.props.remove},s.name))}return e}},{key:"render",value:function(){return Object(m.jsx)("div",{style:{margin:"5px"},children:this.getCourses()})}}]),r}(n.a.Component),R=L,K="https://cs571.cs.wisc.edu/api/react/classes",B=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).state={allCourses:[],filteredCourses:[],subjects:[],cartContents:[]},s.addToCartContents=s.addToCartContents.bind(Object(l.a)(s)),s.removeFromCartContents=s.removeFromCartContents.bind(Object(l.a)(s)),s}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch(K).then((function(e){return e.json()})).then((function(t){return e.setState({allCourses:t,filteredCourses:t,subjects:e.getSubjects(t),cartContents:e.getCartContents(t)})}))}},{key:"getCartContents",value:function(e){for(var t=[],r=0,s=Object.values(e);r<s.length;r++){var n,c=s[r],a={number:c.number,name:c.name,description:c.description,inCart:!1,requisites:c.requisites,subject:c.subject,credits:c.credits,keywords:c.keywords,sections:[]},o=Object(i.a)(c.sections);try{for(o.s();!(n=o.n()).done;){var u,l=n.value,h={number:l.number,inCart:!1,subsections:[],instructor:l.instructor,location:l.location,time:l.time},b=Object(i.a)(l.subsections);try{for(b.s();!(u=b.n()).done;){var j=u.value,d={number:j.number,inCart:!1,location:j.location,time:j.time};h.subsections.push(d)}}catch(m){b.e(m)}finally{b.f()}a.sections.push(h)}}catch(m){o.e(m)}finally{o.f()}t.push(a)}return console.log(t),t}},{key:"addToCartContents",value:function(e,t,r){if(e){for(var s=[],n=0,c=Object.values(this.state.cartContents);n<c.length;n++){var a=c[n];if(a.number===e){a.inCart=!0;var o=[];if(t){var u,l=Object(i.a)(a.sections);try{for(l.s();!(u=l.n()).done;){var h=u.value;if(h.number===t){h.inCart=!0;var b,j=[],d=Object(i.a)(h.subsections);try{for(d.s();!(b=d.n()).done;){var m=b.value;r?m.number===r&&(m.inCart=!0):m.inCart=!0,j.push(m)}}catch(g){d.e(g)}finally{d.f()}h.subsections=j}o.push(h)}}catch(g){l.e(g)}finally{l.f()}}else{var p,v=Object(i.a)(a.sections);try{for(v.s();!(p=v.n()).done;){var f=p.value;f.inCart=!0;var O,C=[],x=Object(i.a)(f.subsections);try{for(x.s();!(O=x.n()).done;){var y=O.value;y.inCart=!0,C.push(y)}}catch(g){x.e(g)}finally{x.f()}f.subsections=C,o.push(f)}}catch(g){v.e(g)}finally{v.f()}}a.sections=o}s.push(a)}console.log(s),this.setState({cartContents:s})}}},{key:"removeFromCartContents",value:function(e,t,r){if(e){for(var s=[],n=0,c=Object.values(this.state.cartContents);n<c.length;n++){var a=c[n];if(a.number===e){var o=[];if(t){var u,l=Object(i.a)(a.sections);try{for(l.s();!(u=l.n()).done;){var h=u.value;if(h.number===t)if(r){var b,j=[],d=Object(i.a)(h.subsections);try{for(d.s();!(b=d.n()).done;){var m=b.value;m.number===r&&(m.inCart=!1),j.push(m)}}catch(D){d.e(D)}finally{d.f()}o.push(h)}else{h.inCart=!1;var p,v=[],f=Object(i.a)(h.subsections);try{for(f.s();!(p=f.n()).done;){var O=p.value;O.inCart=!1,v.push(O)}}catch(D){f.e(D)}finally{f.f()}h.subsections=v,o.push(h)}else{var C,x=[],y=Object(i.a)(h.subsections);try{for(y.s();!(C=y.n()).done;){var g=C.value;g.number===r&&(g.inCart=!1),x.push(g)}}catch(D){y.e(D)}finally{y.f()}h.subsections=x,o.push(h)}}}catch(D){l.e(D)}finally{l.f()}}else{a.inCart=!1;var N,S=Object(i.a)(a.sections);try{for(S.s();!(N=S.n()).done;){var k=N.value;k.inCart=!1;var w,T=[],F=Object(i.a)(k.subsections);try{for(F.s();!(w=F.n()).done;){var A=w.value;A.inCart=!1,T.push(A)}}catch(D){F.e(D)}finally{F.f()}k.subsections=T,o.push(k)}}catch(D){S.e(D)}finally{S.f()}}a.sections=o}s.push(a)}console.log(s),this.setState({cartContents:s})}}},{key:"getSubjects",value:function(e){var t=[];t.push("All");for(var r=0,s=Object.values(e);r<s.length;r++){var n=s[r];-1===t.indexOf(n.subject)&&t.push(n.subject)}return t}},{key:"setCourses",value:function(e){this.setState({filteredCourses:e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j.a,{defaultActiveKey:"search",style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white"},children:[Object(m.jsxs)(d.a,{eventKey:"search",title:"Search",style:{paddingTop:"5vh"},children:[Object(m.jsx)(k,{setCourses:function(t){return e.setCourses(t)},courses:this.state.allCourses,subjects:this.state.subjects}),Object(m.jsx)("div",{style:{marginLeft:"20vw"},children:Object(m.jsx)(R,{data:this.state.filteredCourses,allData:this.state.allCourses,cartMode:!1,cartContents:this.state.cartContents,add:this.addToCartContents,remove:this.removeFromCartContents})})]}),Object(m.jsx)(d.a,{eventKey:"cart",title:"Cart",style:{paddingTop:"5vh"},children:Object(m.jsx)("div",{style:{marginLeft:"5vw",marginTop:"5vh"},children:Object(m.jsx)(y,{allCourses:this.state.cartContents,remove:this.removeFromCartContents})})})]})})}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(B,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.732536c9.chunk.js.map