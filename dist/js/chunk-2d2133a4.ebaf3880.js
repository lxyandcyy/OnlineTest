(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2133a4"],{ac7c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"}},[i("div",{attrs:{id:"info-form"}},[t._m(0),i("div",{staticClass:"bt"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})]),i("div",{staticClass:"bt"},[i("a-radio-group",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("a-radio",{attrs:{value:1}},[t._v("普通用户")]),i("a-radio",{attrs:{value:2}},[t._v("管理员")])],1)],1),i("div",{staticClass:"bt"},[i("button",{on:{click:function(e){return t.Submit()}}},[t._v("提交")])]),i("router-link",{staticStyle:{color:"white"},attrs:{to:"/main"}},[i("div",{staticClass:"bt"},[i("button",[t._v("返回")])])])],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("用户登录")])])}],s={data:function(){return{value:1,user_id:""}},computed:{user_type:function(){return 1===this.value?"USER":"ADMIN"}},methods:{Submit:function(){this.$store.commit("updateUser",{user_id:this.user_id,user_type:this.user_type}),this.$router.push({path:"/main/face-detect",query:{father:"login"}})}}},u=s,n=i("2877"),o=Object(n["a"])(u,a,r,!1,null,"74a882c6",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d2133a4.ebaf3880.js.map