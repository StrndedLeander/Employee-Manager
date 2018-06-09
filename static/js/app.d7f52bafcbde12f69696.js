webpackJsonp([1],{"0Xi9":function(e,t){},"5oFI":function(e,t){},"5pjh":function(e,t){},Drc2:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n={name:"App",components:{Navbar:i("lfLh").default}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var s=i("VU/8")(n,o,!1,function(e){i("5oFI")},null,null).exports,l=i("/ocq"),r=i("kxiW"),p=i.n(r),d=(i("881v"),p.a.initializeApp({apiKey:"AIzaSyBDADX6XCnBMS3H3QQbryXjMU48LaWMIXE",authDomain:"vuefs-prod-cfc1a.firebaseapp.com",databaseURL:"https://vuefs-prod-cfc1a.firebaseio.com",projectId:"vuefs-prod-cfc1a",storageBucket:"vuefs-prod-cfc1a.appspot.com",messagingSenderId:"220185369088"}));p.a.firestore().settings({timestampsInSnapshots:!0});var c=d.firestore(),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)})})},methods:{}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+" : "+e._s(t.name)+"\n      "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn",attrs:{id:"new-btn"}},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]};var v=i("VU/8")(m,u,!1,function(e){i("yosl")},null,null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),e._v(" "),i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee ID#")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v("Department")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Position")])])]),e._v(" "),i("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]};var y=i("VU/8")(_,f,!1,function(e){i("0Xi9")},null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-employee"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),e._v(" "),i("li",{staticClass:"colelction-item"},[e._v("Employee ID#:"+e._s(e.employee_id))]),e._v(" "),i("li",{staticClass:"colelction-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),i("li",{staticClass:"colelction-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),i("router-link",{staticClass:"btn green",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[e._v("Edit")]),e._v(" "),i("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),i("div",{staticClass:"fixed-action-btn",attrs:{id:"edit-btn"}},[i("router-link",{staticClass:"btn-floating btn-large green",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]};var g=i("VU/8")(h,b,!1,function(e){i("YZR+")},null,null).exports,C={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:"",disabled:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),null==e.employee_id?i("label",[e._v("Employee ID#")]):e._e()])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),null==e.name?i("label",[e._v("Name")]):e._e()])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),null==e.dept?i("label",[e._v("Department")]):e._e()])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),null==e.position?i("label",[e._v("Position")]):e._e()])]),e._v(" "),i("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]};var E=i("VU/8")(C,w,!1,function(e){i("f7RF")},null,null).exports;a.a.use(l.a);var x=new l.a({mode:"history",routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:y},{path:"/:employee_id",name:"view-employee",component:g},{path:"/edit/:employee_id",name:"edit-employee",component:E}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},OsMm:function(e,t,i){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]};t.a=a},"YZR+":function(e,t){},f7RF:function(e,t){},lfLh:function(e,t,i){"use strict";var a=i("Drc2"),n=i.n(a),o=i("OsMm");var s=function(e){i("5pjh")},l=i("VU/8")(n.a,o.a,!1,s,"data-v-4517eba1",null);t.default=l.exports},yosl:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d7f52bafcbde12f69696.js.map