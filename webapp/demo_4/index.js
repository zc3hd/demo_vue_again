"use strict";!function(n,o){function e(n){}e.prototype={init:function(){var n=this;n._bind(),n._init(),console.log(1)},_bind:function(){var n=this,o={_init:function(){n._demo()},_demo:function(){var n=Vue.extend({template:"#cp_1",data:function(){return{msg:"jubu component:new_span_msg--"}},methods:{ck:function(){var n=this;console.log(n.msg)}}}),o=Vue.extend({template:"<span class='info'>{{msg}}</span>",data:function(){return{msg:"span_1"}}}),e=Vue.extend({template:"<span class='info'>{{msg}}</span>",data:function(){return{msg:"span_2"}}}),a=Vue.extend({template:"<span class='info'>{{msg}}</span>",data:function(){return{msg:"span_3"}}}),t=Vue.extend({template:"\n              <span class='info'>{{msg}}</span>\n              </br>\n              <span class='blue'>{{c_data}}</span>\n              </br>\n              <span class='blue'>{{c_obj.a}}</span>\n            ",data:function(){return{msg:"\n                i am a son component of father,\n                i recive a data from my father:\n                "}},created:function(){console.log("son_1")},beforeCompile:function(){console.log("son_2")},compiled:function(){console.log("son_3")},ready:function(){console.log("son_4")},props:{c_data:String,c_obj:Object}});new Vue({el:"#app",data:{transition_key:!1,animate_key:!1,box_2_level:0,box_2_class:"",table_name:"span_1",c_data:"i am a data of father",c_obj:{a:1}},methods:{transition:function(){var n=this;n.transition_key=!n.transition_key},animate:function(n){var o=this;switch(o.box_2_level++,6==o.box_2_level&&(o.box_2_level=1),o.box_2_level){case 1:o.box_2_class="demo_animated_box_1",console.log(1,n);break;case 2:o.box_2_class="demo_animated_box_2";break;case 3:o.box_2_class="demo_animated_box_3";break;case 4:o.box_2_class="demo_animated_box_2";break;case 5:o.box_2_class="demo_animated_box_4"}}},components:{new_span:n,span_1:o,span_2:e,span_3:a,span_son:t},created:function(){console.log(1)},beforeCompile:function(){console.log(2)},compiled:function(){console.log(3)},ready:function(){console.log(4)},beforeDestroy:function(){},destroyed:function(){}})}};for(var e in o)n[e]=o[e]}},o.Nav=e}(jQuery,window);