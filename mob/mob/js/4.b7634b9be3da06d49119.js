webpackJsonp([4],{ogbC:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Cz8s"),s=e("aozt"),c=e.n(s),r={data:function(){return{totalPage:5,crrPage:1,newList:[]}},methods:{toDeali:function(t){this.$router.push("/newsDetali/"+t)},changePage:function(t){var a=this;0==t?this.crrPage>1&&(this.crrPage--,c.a.get(href+"/api/post?&page="+this.crrPage+"&limit=6").then(function(t){a.newList=t.data.list,a.totalPage=Math.ceil(t.data.count/6),a.crrPage=t.data.current})):1==t&&this.crrPage>=1&&this.crrPage<this.totalPage&&(this.crrPage++,c.a.get(href+"/api/post?&page="+this.crrPage+"&limit=6").then(function(t){a.newList=t.data.list,a.totalPage=Math.ceil(t.data.count/6),a.crrPage=t.data.current})),document.documentElement.scrollTop=0,document.body.scrollTop=0,window.pageYOffset=0}},mounted:function(){var t=this;c.a.get(href+"/api/post?&page=1&limit=6").then(function(a){t.newList=a.data.list,t.totalPage=Math.ceil(a.data.count/6),t.crrPage=a.data.current})},components:{Header:i.a}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Warper"},[e("Header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"newList Warper bb"},[e("ul",{},t._l(t.newList,function(a,i){return e("li",{on:{click:function(e){t.toDeali(a.id)}}},[e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:a.cover_src?a.cover_src:"/mob/img/M_pic6.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(a.created_at?a.created_at:""))])]),t._v(" "),e("p",{staticClass:"title"},[t._v(t._s(a.title?a.title:""))]),t._v(" "),e("button",[t._v("阅读文章")])])})),t._v(" "),e("div",{staticClass:"changepage"},[1==t.crrPage?e("div",{staticClass:"Left bb grey"},[t._v("← 上一页 ")]):t._e(),t._v(" "),1!=t.crrPage?e("div",{staticClass:"Left bb white",on:{click:function(a){t.changePage(0)}}},[t._v("← 上一页 ")]):t._e(),t._v(" "),t.crrPage==t.totalPage?e("div",{staticClass:"Right bb grey"},[t._v("下一页  →")]):t._e(),t._v(" "),t.crrPage!=t.totalPage?e("div",{staticClass:"Right bb white",on:{click:function(a){t.changePage(1)}}},[t._v("下一页  →")]):t._e()])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"TopBack Warper bb "},[a("div",{staticClass:"topback"},[a("div",{staticClass:"shadowText"},[a("div",{staticClass:"back"},[this._v("最新资讯")]),this._v(" "),a("div",{staticClass:"forword fwb"},[this._v("最新资讯")])]),this._v(" "),a("p",{staticClass:"exp center"},[this._v("行业一手消息，最先知道")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"Warper center"},[a("p",[this._v(" ©2014成都子奇科技有限公司 蜀ICP备13026114号-7")])])}]};var o=e("C7Lr")(r,n,!1,function(t){e("qdPy")},"data-v-14199533",null);a.default=o.exports},qdPy:function(t,a){}});
//# sourceMappingURL=4.b7634b9be3da06d49119.js.map