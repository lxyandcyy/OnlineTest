(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213d14"],{adfa:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"exam-list"}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-title",[e._v(" 试卷列表 "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"输入查询内容","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.desserts,search:e.search},scopedSlots:e._u([{key:"item.action",fn:function(t){return[a("router-link",{attrs:{to:{path:"/exam-paper/do/"+t.item.id}}},[a("v-btn",{attrs:{color:"primary",small:""}},[e._v("开始答题")])],1)]}}])})],1)],1)},i=[],n=(a("4160"),a("b0c0"),a("159b"),{name:"ExamList",data:function(){return{subject:"语文",search:"",headers:[{text:"试卷名称",value:"name"},{text:"学科",value:"SubjectId"},{text:"截止日期(Date)",value:"endTime"},{text:"操作",value:"action"}],desserts:[]}},created:function(){this.searchList()},methods:{searchList:function(){var e=this,t=[];this.$api.PaperList().then((function(a){console.log(a),a.data.forEach((function(e,a){!0===e.isPublish&&t.push({key:a,id:e.id,SubjectId:e.SubjectId,name:e.name,endTime:e.endTime})})),e.desserts=t}))}}}),r=n,c=a("2877"),d=a("6544"),l=a.n(d),u=a("8336"),o=a("b0af"),h=a("99d9"),f=a("8fea"),m=a("2fa4"),p=a("8654"),v=Object(c["a"])(r,s,i,!1,null,null,null);t["default"]=v.exports;l()(v,{VBtn:u["a"],VCard:o["a"],VCardTitle:h["c"],VDataTable:f["a"],VSpacer:m["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-2d213d14.865206da.js.map