(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=n(7),s=n(5),l=n(14),u=n(15),h=(n(26),n(1)),d=n(2),p=n(4),E=n(3),m=(n(27),n(28),n(29),function(e){Object(p.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:"https://robohash.org/".concat(this.props.id,"=?size=200x200"),alt:"Robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,this.props.name),a.a.createElement("p",null,this.props.email)))}}]),n}(a.a.Component)),b=function(e){Object(p.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"cards--container"},this.props.robots.map((function(e){return a.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})})))}}]),n}(a.a.Component),f=(n(30),function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{type:"search",placeholder:"Search for Robots",onChange:t}))}),O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"90vh"}},e.children)},v=function(e){Object(p.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops, that's not good :S"):this.props.children}}]),n}(a.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRoots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("h1",null,"RoboFriends"),a.a.createElement(f,{searchChange:n})),a.a.createElement("main",null,a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(b,{robots:c})))))}}]),n}(a.a.Component),j=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRoots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(g),y={searchField:""},R={isPending:!1,robots:[],error:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(l.createLogger)(),C=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(s.d)(C,Object(s.a)(u.a,S));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:_},a.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.309f3ce6.chunk.js.map