(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(519)},174:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),i=a.n(o),s=(a(174),a(17)),c=a(18),r=a(20),d=a(19),u=a(21),h=(a(95),a(15)),m=function(e){function t(e){return Object(s.a)(this,t),Object(r.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"handleComplete",value:function(){console.log("\u70b9\u51fb\u5b8c\u6210\u6309\u94ae"+this.props.taskId),this.props.completeItem(this.props.taskId)}},{key:"handleDelete",value:function(){this.props.deleteItem(this.props.taskId)}},{key:"render",value:function(){return l.a.createElement("li",null,l.a.createElement(h.Panel,{title:l.a.createElement("div",{className:"itemButton",complete:this.props.complete},l.a.createElement(h.Button,{type:"success",disabled:this.props.complete,onClick:this.handleComplete.bind(this)},this.props.complete?"\u5df2\u5b8c\u6210":"\u5b8c\u6210"),l.a.createElement(h.Button,{type:"danger",onClick:this.handleDelete.bind(this)},"\u5220\u9664"))},this.props.complete?l.a.createElement("del",null,this.props.task):l.a.createElement("span",null,this.props.task)))}}]),t}(n.Component),p=function(e){function t(e){return Object(s.a)(this,t),Object(r.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.map(function(t){return l.a.createElement(m,{taskId:t.id,key:t.id,task:t.task,complete:t.complete,completeItem:e.props.completeItem,deleteItem:e.props.deleteItem})});return l.a.createElement("ul",null,t)}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"addNewItem",value:function(){var e=this.state.inputValue;e?(console.log("\u65b0\u589e\u4e00\u6761todo"),console.log(e),this.props.addNewItem(e)):alert("\u65b0\u589e\u4efb\u52a1\u4e0d\u80fd\u4e3a\u7a7a")}},{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=h.Grid.Row,t=h.Grid.Col;return l.a.createElement("div",null,l.a.createElement(e,{justify:"center"},l.a.createElement(t,{span:16},l.a.createElement(h.Input,{id:"newItem",type:"normal",placeholder:"\u8bf7\u8f93\u5165\u4e00\u6761\u5f85\u529e",style:{width:"100%"},value:this.state.inputValue,onChange:this.handleChange.bind(this)})),l.a.createElement(t,{span:4},l.a.createElement(h.Button,{type:"line",onClick:this.addNewItem.bind(this)},"\u65b0\u589e\u5f85\u529e"))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={data:[{id:"1",task:"\u505a\u4e00\u4e2aTodoList Demo",complete:!1},{id:"2",task:"\u5b66\u4e60ES6",complete:!1},{id:"3",task:"Hello React",complete:!0},{id:"4",task:"\u627e\u5de5\u4f5c",complete:!1}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleAddTodoItem",value:function(e){var t={id:this.state.data.length+1,task:e,complete:!1},a=this.state.data;a=a.concat([t]),this.setState({data:a})}},{key:"handleCompleteItem",value:function(e){console.log(e);var t=this.state.data,a=!0,n=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var s=o.value;s.id===e&&(s.complete=!0!==s.complete)}}catch(c){n=!0,l=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw l}}this.setState({data:t}),console.log(this.state.data)}},{key:"handleDeleteItem",value:function(e){var t=this.state.data;t=t.filter(function(t){return t.id!==e}),this.setState({data:t}),console.log(this.state.data)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"ToDoList"),l.a.createElement(v,{addNewItem:this.handleAddTodoItem.bind(this)}),l.a.createElement(p,{data:this.state.data,completeItem:this.handleCompleteItem.bind(this),deleteItem:this.handleDeleteItem.bind(this)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.b6aaa96b.chunk.js.map