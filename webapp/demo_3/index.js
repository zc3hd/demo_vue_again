"use strict";!function(n,i){function t(n){}t.prototype={init:function(){var n=this;n._bind(),n._init()},_bind:function(){var n=this,i={_init:function(){n._demo()},_demo:function(){Vue.directive("red",function(){this.el.style.backgroundColor="red"});new Vue({el:"#app",data:{infos:["你好，你在哪里？","他是谁，他又在上面地方","你和他的关系怎么样","现在的时间是什么时候","我也是这个时间"]},obj:{name:"c"},methods:{add:function(){}},beforeDestroy:function(){},destroyed:function(){}})}};for(var t in i)n[t]=i[t]}},i.Nav=t}(jQuery,window);