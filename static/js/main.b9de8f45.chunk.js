(this.webpackJsonpbasic_c_sharp=this.webpackJsonpbasic_c_sharp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/intro.324413e0.JPG"},101:function(e,t,a){e.exports=a.p+"static/media/vari.5af6bd5e.JPG"},102:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/intro.00e7d4ea.mp4"},124:function(e,t,a){e.exports=a.p+"static/media/vid2.eac7b9fe.mp4"},125:function(e,t,a){e.exports=a.p+"static/media/vid3.7a55f7b2.mp4"},126:function(e,t,a){e.exports=a.p+"static/media/vid4.4cf6fedb.mp4"},127:function(e,t,a){e.exports=a.p+"static/media/vid5.8fd8371e.mp4"},128:function(e,t,a){},130:function(e,t,a){(function(e){e.pageNumber=0,e.QuizState=!1,e.quizDetails=[{questionNumber:1,question:"1. Which command is used to display text to the screen, while leaving the cursor on the same line?",answers:[{label:"Console.Write()",id:"questionOne_1",value:"yes",name:"questionOne"},{label:"Console.WriteLine()",id:"questionOne_2",value:"no",name:"questionOne"},{label:"console.write()",id:"questionOne_3",value:"maybe",name:"questionOne"},{label:"Console.ReadLine()",id:"questionOne_4",value:"sometimes",name:"questionOne"}]},{questionNumber:2,question:"2. Which variable type should be used to contain words?",answers:[{label:"char",id:"questionTwo_1",value:"",name:"questionTwo"},{label:"int",id:"questionTwo_2",value:"",name:"questionTwo"},{label:"string",id:"questionTwo_3",value:"",name:"questionTwo"},{label:"double",id:"questionTwo_4",value:"",name:"questionTwo"}]},{questionNumber:3,question:"3. A void method can return a value",answers:[{label:"true",id:"questionThree_1",value:"",name:"questionThree"},{label:"false",id:"questionThree_2",value:"",name:"questionThree"}]},{questionNumber:4,question:"4. How should a public class, called Player be called?",answers:[{label:"player = new Player();",id:"questionFour_1",value:"",name:"questionFour"},{label:"Player player = New Player()",id:"questionFour_2",value:"",name:"questionFour"},{label:"String player = new Player();",id:"questionFour_3",value:"",name:"questionFour"},{label:"Player player = new Player();",id:"questionFour_4",value:"",name:"questionFour"}]},{questionNumber:5,question:"5. What line of code would NOT cause an error",answers:[{label:"string name = Console.ReadKey();",id:"questionFive_1",value:"",name:"questionFive"},{label:"string name = Console.ReadKey(); ",id:"questionFive_2",value:"",name:"questionFive"},{label:"string name = Console.ReadLine();",id:"questionFive_3",value:"",name:"questionFive"},{label:"string name = Console.readLine();",id:"questionFive_4",value:"",name:"questionFive"}]}]}).call(this,a(29))},131:function(e,t,a){"use strict";a.r(t);a(85);var n=a(0),i=a.n(n),o=a(32),s=a.n(o),l=a(81),r=a(13),c=a(14),u=a(16),m=a(15),d=a(8),p=a(133),h=a(24),g=(a(90),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(h.a)(n)),n.state={collapsed:!0},n}return Object(c.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"title-header"},i.a.createElement("h1",null,"Basic C# Tutorial")))}}]),a}(n.Component));g.displayName=g.name;var v=a(26),f=a.n(v),b=a(34),w=a(22),E=a(25);function y(e){return console.log("you have selected : ",e.LinkNumber),{type:"PAGE_SELECTED",payload:e}}a(96);var q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={tiles:{}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.populateTileData()}},{key:"render",value:function(){var e=this;return this.props.cliplist?i.a.createElement("div",null,i.a.createElement("div",{className:"sideBar-body"},i.a.createElement("h3",null,"Lessons"),i.a.createElement("ul",null,Object.keys(this.props.cliplist).map((function(t){return i.a.createElement("li",{key:"tile_"+t,onClick:function(){return e.props.userSelectPage(e.props.cliplist[t])}},i.a.createElement("div",{className:"tile"},i.a.createElement("img",{alt:e.props.cliplist[t].SideBarTitle+" Image",src:a(36)("./"+e.props.cliplist[t].BothThumbImage+".JPG"),width:"90%"}),i.a.createElement("a",{href:"#"},i.a.createElement("h5",null,e.props.cliplist[t].SideBarTitle)),i.a.createElement("p",null,e.props.cliplist[t].SideBarDescription)))}))))):i.a.createElement("div",null,i.a.createElement("div",{className:"sideBar-body"},i.a.createElement("h3",null,"Lessons"),i.a.createElement("ul",null,i.a.createElement("h1",null,"Loading Failed"))))}},{key:"populateTileData",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({tiles:this.props.cliplist,loading:!1,userSelectPage:this.props.userSelectPage});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(n.Component);q.displayName=q.name;var N=q=Object(E.b)((function(e){return{cliplist:e.cliplist}}),(function(e){return Object(w.bindActionCreators)({userSelectPage:y},e)}))(q),P=a(79),T=(a(102),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={percentage:0},n.updateProgress=n.updateProgress.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"updateProgress",value:function(){100!==this.state.percentage&&this.setState({percentage:this.state.percentage+20})}},{key:"render",value:function(){return 100===this.state.percentage?i.a.createElement("div",null,i.a.createElement("h2",{className:"Progress-title"},"Tutorial Completed"),i.a.createElement(k,{percentage:this.state.percentage}),i.a.createElement(P.a,null)):i.a.createElement("div",null,i.a.createElement("h2",{className:"Progress-title"},"Progress"),i.a.createElement(k,{percentage:this.state.percentage}),i.a.createElement("button",{className:"progressButton",onClick:this.updateProgress},"Completed Lesson"))}}]),a}(i.a.Component)),k=function(e){return i.a.createElement("div",{className:"progressBar"},i.a.createElement(O,{percentage:e.percentage}))},O=function(e){return i.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})},B=a(44),I=(a(122),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={page:{}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.populatePageData()}},{key:"render",value:function(){return this.props.page.download?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(B.Player,{className:"img-fluid",playsInline:!0,poster:a(36)("./"+this.props.page.BothThumbImage+".JPG"),src:a(77)("./"+this.props.page.PageVideo+".mp4")}))),i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,this.props.page.PageTitle)),i.a.createElement("div",{className:"mainParagraph"},i.a.createElement("p",null,this.props.page.PageText)),i.a.createElement("a",{href:"https://visualstudio.microsoft.com/downloads/"},"Download Visual Studio")):i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(B.Player,{className:"img-fluid",playsInline:!0,poster:a(36)("./"+this.props.page.BothThumbImage+".JPG"),src:a(77)("./"+this.props.page.PageVideo+".mp4")}))),i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,this.props.page.PageTitle)),i.a.createElement("div",{className:"mainParagraph"},i.a.createElement("p",null,this.props.page.PageText)))}},{key:"populatePageData",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({page:this.props.page});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(n.Component));I.displayName=I.name;var _=Object(E.b)((function(e){return{page:e.activePage}}))(I),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"mainWeb-body"},i.a.createElement(p.a,{className:"block"},i.a.createElement(g,null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12 main-body"},i.a.createElement(_,null),i.a.createElement(T,null)),i.a.createElement("div",{className:"col-lg-3  col-md-3 col-sm-12 navigationSideBar"},i.a.createElement(N,null)))))}}]),a}(n.Component);C.displayName=C.name;a(128);var j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(C,null,i.a.createElement(d.a,{exact:!0,path:"/",component:_}))}}]),a}(n.Component);j.displayName=j.name;var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(130);var L=Object(w.combineReducers)({cliplist:function(){return[{LinkNumber:1,SideBarTitle:"Installation",SideBarDescription:"This tutorial will show the user how to install Microsoft Visual Studio On their computer.",BothThumbImage:"intro",PageVideo:"intro",PageTitle:"Introduction and installation",PageText:"Welcome to an introduction into C-Sharp Basic Programming. Once you have completed these tutorials, you will have a basic knowledge of how this programming language works. Variables, classes, and methods will all be covered in these tutorials. This first lesson will show you what you need to get started. Please click the 'Completed Lesson' button after completing this lesson.",download:"https://visualstudio.microsoft.com/downloads/"},{LinkNumber:2,SideBarTitle:"Hello World",SideBarDescription:"An introduction to the Visual Studio Software and how to run a C# Hello-World application.",BothThumbImage:"hello",PageVideo:"vid2",PageTitle:"Hello World Application",PageText:"In this lesson we will create a basic Hello World programme, we will cover how to display content to the console and demonstrate how to take and use input data from the users. Please click the 'Completed Lesson' button after completing this lesson."},{LinkNumber:3,SideBarTitle:"Variables",SideBarDescription:"In this tutorial, we will be working with different variable types.",BothThumbImage:"vari",PageVideo:"vid3",PageTitle:"Variables - Picking the Right One!",PageText:"This lesson, we will be looking at the different variable types, what data they can hold, and how input data should be converted to match their data type. Please click the 'Completed Lesson' button after completing this lesson."},{LinkNumber:4,SideBarTitle:"Classes",SideBarDescription:"A quick introduction into objects and how to call different classes.",BothThumbImage:"classes",PageVideo:"vid4",PageTitle:"C# Classes and How to Call Them!",PageText:"During this lesson, we will be creating a new class. We will be going over how to call that class, why it is important to make the class public and how to call the same class multiple times. Please click the 'Completed Lesson' button after completing this lesson."},{LinkNumber:5,SideBarTitle:"My First Application",SideBarDescription:"This lesson will use what you have learnt, to build your first application.",BothThumbImage:"first",PageVideo:"vid5",PageTitle:"Creation of a C# Console Application",PageText:"In this lesson, we will be putting everything we have learned into a single application to make a basic adventure game. We will also take a like at while loops, If statements and switch cases. Please click the 'Completed Lesson' button after completing this lesson."}]},activePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE_SELECTED":case"START_QUIZ":return t.payload}return e.LinkNumber=1,e.PageVideo="intro",e.BothThumbImage="intro",e.PageTitle="Introduction and installation",e.PageText="Welcome to an introduction into C-Sharp Basic Programming. Once you have completed these tutorials, you will have a basic knowledge of how this programming language works. Variables, classes, and methods will all be covered in these tutorials. This first lesson will show you what you need to get started. Please click the 'Completed Lesson' button after completing this lesson.",e.download="https://visualstudio.microsoft.com/downloads/",e}}),x=document.getElementById("root"),D=Object(w.createStore)(L);s.a.render(i.a.createElement(E.a,{store:D},i.a.createElement(l.a,null,i.a.createElement(j,null))),x),function(){if("serviceWorker"in navigator){if(new URL("/CBLE-CSharp",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/CBLE-CSharp","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):F(e)}))}}()},36:function(e,t,a){var n={"./classes.JPG":97,"./first.JPG":98,"./hello.JPG":99,"./intro.JPG":100,"./vari.JPG":101};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=36},48:function(e,t,a){},77:function(e,t,a){var n={"./intro.mp4":123,"./vid2.mp4":124,"./vid3.mp4":125,"./vid4.mp4":126,"./vid5.mp4":127};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=77},79:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u}));var n=a(13),i=a(14),o=a(16),s=a(15),l=a(0),r=a.n(l),c=a(80),u=(a(48),function(t){Object(o.a)(l,t);var a=Object(s.a)(l);function l(t){var i;return Object(n.a)(this,l),(i=a.call(this,t)).handelSubmit=function(){var e=0,t=document.getElementById("questionOne_1").checked,a=document.getElementById("questionTwo_3").checked,n=document.getElementById("questionThree_2").checked,i=document.getElementById("questionFour_4").checked,o=document.getElementById("questionFive_3").checked;t?(e++,document.getElementById("questionOne_1").className+=" isCorrect"):(document.getElementById("questionOne_1").className+=" isCorrect",document.getElementById("questionOne_2").className+=" isIncorrect",document.getElementById("questionOne_3").className+=" isIncorrect",document.getElementById("questionOne_4").className+=" isIncorrect"),a?(e++,document.getElementById("questionTwo_3").className+=" isCorrect"):(document.getElementById("questionTwo_3").className+=" isCorrect",document.getElementById("questionTwo_2").className+=" isIncorrect",document.getElementById("questionTwo_1").className+=" isIncorrect",document.getElementById("questionTwo_4").className+=" isIncorrect"),n?(e++,document.getElementById("questionThree_2").className+=" isCorrect"):(document.getElementById("questionThree_2").className+=" isCorrect",document.getElementById("questionThree_1").className+=" isIncorrect"),i?(e++,document.getElementById("questionFour_4").className+=" isCorrect"):(document.getElementById("questionFour_4").className+=" isCorrect",document.getElementById("questionFour_3").className+=" isIncorrect",document.getElementById("questionFour_1").className+=" isIncorrect",document.getElementById("questionFour_2").className+=" isIncorrect"),o?(e++,document.getElementById("questionFive_3").className+=" isCorrect"):(document.getElementById("questionFive_3").className+=" isCorrect",document.getElementById("questionFive_1").className+=" isIncorrect",document.getElementById("questionFive_2").className+=" isIncorrect",document.getElementById("questionFive_4").className+=" isIncorrect"),alert("You managed to get "+e+" out of 5 correct. \n\nPlease Return to Canvas")},i.state={QuizData:e.quizDetails},i}return Object(i.a)(l,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"updateProgress",value:function(){100!==this.state.percentage&&this.setState({percentage:this.state.percentage+20})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handelSubmit},r.a.createElement("div",{className:"formTile"},r.a.createElement("h1",null,"Recap Quiz"),r.a.createElement("ul",null,Object.keys(this.state.QuizData).map((function(t){return r.a.createElement("li",{key:"question_"+t},r.a.createElement("p",null,e.state.QuizData[t].question),r.a.createElement(c.a,{options:e.state.QuizData[t].answers}))}))))),r.a.createElement("button",{type:"submit",className:"submitButton",onClick:this.handelSubmit},"Submit"))}}]),l}(r.a.Component))}).call(this,a(29))},80:function(e,t,a){"use strict";var n=a(82),i=a(83),o=a(0),s=a.n(o),l=(a(48),function(e){var t=e.options,a=(Object(i.a)(e,["options"]),Object(o.useState)("")),l=Object(n.a)(a,2),r=(l[0],l[1]),c=function(e){r(e.target.value)},u=t.map((function(e,t){return s.a.createElement("div",{key:t,className:"radio-group"},s.a.createElement("input",{name:e.name,className:"option-input radio",type:"radio",id:e.id,"data-testid":e.id,value:e.value,onChange:c}),s.a.createElement("label",{htmlFor:e.id},e.label))}));return s.a.createElement("div",null,u)});l.defaultProps={heading:null,subtitle:null},t.a=l},84:function(e,t,a){e.exports=a(131)},90:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){e.exports=a.p+"static/media/classes.5347d20f.JPG"},98:function(e,t,a){e.exports=a.p+"static/media/first.5a773009.JPG"},99:function(e,t,a){e.exports=a.p+"static/media/hello.053684c4.JPG"}},[[84,1,2]]]);
//# sourceMappingURL=main.b9de8f45.chunk.js.map