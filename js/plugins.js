// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

//js/mylib/jquery.tipsy.min.js
(function(a){a.fn.tipsy=function(b){b=a.extend({},a.fn.tipsy.defaults,b);return this.each(function(){var c=a.fn.tipsy.elementOptions(this,b);a(this).hover(function(){a.data(this,"cancel.tipsy",true);var d=a.data(this,"active.tipsy");if(!d){d=a('<div class="tipsy"><div class="tipsy-inner"/></div>');d.css({position:"absolute",zIndex:10000});a.data(this,"active.tipsy",d)}if(a(this).attr("title")||typeof(a(this).attr("data-tooltip-title"))!="string"){a(this).attr("data-tooltip-title",a(this).attr("title")||"").removeAttr("title")}var f;if(typeof c.title=="string"){f=a(this).attr(c.title=="title"?"data-tooltip-title":c.title)}else{if(typeof c.title=="function"){f=c.title.call(this)}}d.find(".tipsy-inner")[c.html?"html":"text"](f||c.fallback);var i=a.extend({},a(this).offset(),{width:this.offsetWidth,height:this.offsetHeight});d.get(0).className="tipsy";d.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var e=d[0].offsetWidth,h=d[0].offsetHeight;var g=(typeof c.gravity=="function")?c.gravity.call(this):c.gravity;switch(g.charAt(0)){case"n":d.css({top:i.top+i.height,left:i.left+i.width/2-e/2}).addClass("tipsy-north");break;case"s":d.css({top:i.top-h,left:i.left+i.width/2-e/2}).addClass("tipsy-south");break;case"e":d.css({top:i.top+i.height/2-h/2,left:i.left-e}).addClass("tipsy-east");break;case"w":d.css({top:i.top+i.height/2-h/2,left:i.left+i.width}).addClass("tipsy-west");break}if(c.fade){d.css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:0.8})}else{d.css({visibility:"visible"})}},function(){a.data(this,"cancel.tipsy",false);var d=this;setTimeout(function(){if(a.data(this,"cancel.tipsy")){return}var e=a.data(d,"active.tipsy");if(c.fade){e.stop().fadeOut(function(){a(this).remove()})}else{e.remove()}},100)})})};a.fn.tipsy.elementOptions=function(c,b){return a.metadata?a.extend({},b,a(c).metadata()):b};a.fn.tipsy.defaults={fade:false,fallback:"",gravity:"n",html:false,title:"title"};a.fn.tipsy.autoNS=function(){return a(this).offset().top>(a(document).scrollTop()+a(window).height()/2)?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>(a(document).scrollLeft()+a(window).width()/2)?"e":"w"}})(jQuery);

