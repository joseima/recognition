(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMdSURBVHhe7ZzPitRAGMQHPHnVk+4r+ADqE4i6+jIqKiL457B330TwoqKI+gLevXnw5EFEUQStGmxoPrJqtr9MKp36QcFkJt1dNd+ksyTZ3hhjjDHGGGOMMcYYY4wxxhhjTCpXoZfQF+hXgt5AWbyFhsYYK2Z7Ae1D0jyEhgK06DWUBYs7NEaLHkCS8NdCg9+h69BpqFeY7SbErMx8GZKD0xTN0ehaYFZm5vQlRzlnnNputU8P76GpYN9DY1L1uGW/8l7ZLtMojxRuf95uiVECFerXvRFzSmaNxiRNJhFzSmaNxiRNJhFzSmaNxiRNJhFzSmaNxiRNJhFzSmaNxuq/VnpjkQXpGRdEjEUWxFPWzERjkiaTiDkls0ZjkiaTiDkls0ZjkiaTiDkls0ZjPofMjKyxCVhFQXh79ai3a3fddpEFGTtltQTbddt6/5axJyUaG2uyJdiu29b7t4w9KTzs6wcSej5C6mwxdzfs+ksttLTtmrm+1Ja2XdNy6Ld8qd1OOXPiX7kYLogYLogYLogYLogYLogYLogYLogYLogYLsjMHPa/gmYmeP0pFsPXo4wxZrm0PPmxNOpbuLK5y8l1DdQFkc29poLUrKogN6BP0NntVhvnoI/Qte1WHqsqyF2IfX6F7kNlUYIxsA3XI/kGsa87UCuLnLLGPpc1xDHoEVT6/gE9he5BF6Az0B50/I/4mu/xM+7zDGKb0p59sc9W6pylbzmisUyT56En0E+ojPO/YpvHEKesLNhvoYwjRzQ2hcmT0BXoAHoOvYM+QJzSKL7mezwyuM8l6ASUzSKnLEmTE+CCiOGCiOGCCOBziBgxp2TWaEzSZBIxp2TWaEzSZBIxp2TWaEzSZBIxp2TWaEzSZBIxp2TWaEzSZBIxp2TWuEwsnwIpZuOFRm6Xz/6ljIuUhTHj/k2vICK9TCwXE6a5NS2kfBtiZsmFlOulxm9B/PX0CrMxY1lqnBcxJeGNIBrMVOYDBIc98dgi3neRhgvT8xDmvDoUYKwyn0gceuLxKGI2Xv6/CBljjDHGGGOMMcYYY4wxxhhjTAqbzW9GdzhyRc4bOQAAAABJRU5ErkJggg=="},27:function(e,t,a){e.exports=a(73)},32:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),r=a.n(s),o=(a(32),a(7)),l=a(8),c=a(10),m=a(9),u=a(11),p=a(24),h=a.n(p),d=a(16),g=a.n(d),b=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim white pa3 pointer"}," Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim white pa3 pointer"}," Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim white pa3 pointer"}," Register"))},E=(a(68),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),f=a(25),w=a.n(f),v=a(26),N=a.n(v),C=(a(69),function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(w.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:140,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{src:N.a,alt:"face",width:"100"}))))}),S=(a(70),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This magic app will detect faces in your pictures. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"center  pa4 br3 shadow-5 form"},i.a.createElement("input",{className:"f4 pa3 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 bn grow f4 link ph3 pv2 dib white bg-light-blue",onClick:a},"Detect face"))))}),y=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current rank is...")),i.a.createElement("div",{className:"white f1"},a))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://immense-spire-78048.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(i.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://immense-spire-78048.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(i.a.Component),x=(a(71),new g.a.App({apiKey:"0d9cb0c51713446e952aecbc79f4fc0b"})),j={particles:{number:{value:100,density:{enable:!0,value_area:800}}}},I={input:"",imageUrl:"",box:{},route:"signin",isSigendIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),x.models.predict(g.a.FACE_DETECT_MODEL,e.state.input).then(function(t){t&&fetch("https://immense-spire-78048.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}),e.displayFaceBox(e.calculateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"signout"===t?e.setState(I):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSigendIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{className:"particles",params:j}),i.a.createElement(b,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(C,null),i.a.createElement(y,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(S,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(E,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(A,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);r.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.cfcdc8fa.chunk.js.map