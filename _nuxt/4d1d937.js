(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,n){var content=n(201);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("7a27455c",content,!0,{sourceMap:!1})},200:function(e,t,n){"use strict";n(192)},201:function(e,t,n){var o=n(74)(!1);o.push([e.i,"*[data-v-541b3519]{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}li[data-v-541b3519],ol[data-v-541b3519],ul[data-v-541b3519]{list-style:none}.ingredients[data-v-541b3519]{position:relative}.ingredients_select[data-v-541b3519],.ingredients_select[data-v-541b3519]:disabled{position:relative;outline:none;border:1px solid #fff;width:100%;height:30px;background-color:transparent;font-size:18px;font-weight:700;color:#fff}@media only screen and (min-width:991px){.ingredients_select[data-v-541b3519],.ingredients_select[data-v-541b3519]:disabled{height:40px}}.ingredients_select-option[data-v-541b3519]{display:none}.ingredients_list[data-v-541b3519]{position:absolute;top:30px;left:0;width:100%;background-color:#fff}.ingredients_item[data-v-541b3519]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px;color:#000}.ingredients-name[data-v-541b3519]{margin-left:10px}",""]),e.exports=o},205:function(e,t,n){"use strict";n.r(t);var o={inheritAttrs:!1,props:{value:{type:Object,require:!0,default:function(){return{img:"/images/ingredients/salmon.jpg",name:"Лосось",pricePerGram:20}}},ingredients:{type:Array,default:function(){return[{img:"#",name:"Лосось"}]}}},data:function(){return{showMenu:!1}},methods:{selectIngredient:function(e){this.$emit("input",e),this.showMenu=!this.showMenu}}},r=(n(200),n(46)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ingredients"},[n("select",e._g(e._b({staticClass:"ingredients_select",domProps:{value:e.value},on:{click:function(t){e.showMenu=!e.showMenu}}},"select",e.$attrs,!1),e.$listeners)),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"ingredients_list"},e._l(e.ingredients,(function(t,i){return n("li",{key:i,staticClass:"ingredients_item",on:{click:function(n){return e.selectIngredient(t)}}},[n("img",{staticClass:"ingredients-img",attrs:{src:t.img,alt:"Hirosaki - ингредиент"}}),e._v(" "),n("p",{staticClass:"ingredients-name"},[e._v("\n        "+e._s(t.name)+"\n      ")])])})),0)])}),[],!1,null,"541b3519",null);t.default=component.exports}}]);