jQuery(document).ready((function(){var e,n,o,t,i,a,r,c;$("html,body").scrollTop(0);function s(e,n){ScrollTrigger.create({trigger:$(".main-section").eq(e),start:"top top+="+n+"px",end:"center top+="+n+"px",pin:!0,onEnter:function(){},onLeaveBack:function(){l(e-1)}})}function p(n){n!==e.length&&TweenMax.staggerTo(e.eq(n).find(introTxt).toArray(),1.3,{opacity:1,y:0,ease:Power4.easeOut},.2)}function d(o){TweenMax.to(e.eq(o).find(n),.4,{opacity:1})}function l(e){t.removeClass("is-active"),i.removeClass("is-active");for(let n=0;n<=e;n++)t.eq(n).addClass("is-active"),n>0&&i.eq(n-1).addClass("is-active")}function f(n){var o=e.eq(n).find("li").length;TweenMax.to(e.eq(n).find(a),.4,{height:0,ease:Power4.easeIn});const[t,i]=[0,8];for(var c=0;c<o;c++){if(n==t||n==i)return TweenMax.staggerTo(e.eq(n).find("li").toArray(),1,{delay:.2,opacity:1,y:0,ease:Power3.easeOut},.1),TweenMax.staggerTo(e.eq(n).find(r).toArray(),1,{delay:.5,opacity:1,scale:1,ease:Power3.easeOut},.1),!1;TweenMax.staggerTo(e.eq(n).find("li").toArray(),.4,{delay:.5,opacity:1,y:0,ease:Power3.easeOut},.1),TweenMax.staggerTo(e.eq(n).find(r).toArray(),.4,{delay:.8,opacity:1,scale:1,ease:Power3.easeOut},.1)}}if($(".timeline").length>0)return e=$(".section"),introTxt=$(".intro-txt"),n=e.find(".info-wrap"),yearWrap=e.find(".year-desc-wrap"),o=n.find(".year-desc-wrap li"),r=o.find(".dot"),t=$(".timeline-nav > li"),i=$(".progress-wrap > li"),a=n.find(".line"),c=e.find(".teacher"),console.log("section",e),console.log("introTxt",introTxt),console.log("listWrap",n),console.log("yearWrap",yearWrap),console.log("yearList",o),console.log("yearListDot",r),console.log("indiCator",t),console.log("indiProgress",i),console.log("line",a),t.removeClass("is-active"),TweenMax.set(e.find(introTxt),{opacity:0,y:50}),TweenMax.set(o,{opacity:0,y:100}),TweenMax.set(r,{opacity:0,scale:0}),TweenMax.set(c,{opacity:0,y:100}),p(0),t.on("click",(function(){var n=$(this).index();let o=120;TweenMax.to($("html, body"),2,{scrollTop:e.eq(n).offset().top-o+1,ease:Power1.easeOut})})),$(".top-btn").on("click",(function(){gsap.to("html,body",1,{scrollTop:0,ease:Power2.easeInOut})})),$(window).on("scroll",(function(){$(window).scrollTop()>0?$("body").attr("data-idx",!1):$("body").attr("data-idx",1)})),void function(){gsap.registerPlugin(ScrollTrigger);let n=120;ScrollTrigger.matchMedia({"(min-width: 1024px)":function(){s(0,n),ScrollTrigger.create({trigger:e.eq(0).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(0).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(0),f(0),l(0)},onUpdate:function(n,o){TweenMax.to(i.eq(0).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(0).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(0).find(".pin-spacer").removeClass("on"),p(1)},onLeaveBack:function(){t.removeClass("is-active")}}),s(1,n),ScrollTrigger.create({trigger:e.eq(1).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(1).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(1),f(1),l(1)},onUpdate:function(n,o){TweenMax.to(i.eq(1).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(1).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(1).find(".pin-spacer").removeClass("on"),p(2)},onLeaveBack:function(){l(0)}}),s(2,n),ScrollTrigger.create({trigger:e.eq(2).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(2).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(2),f(2),l(2)},onUpdate:function(n,o){TweenMax.to(i.eq(2).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(2).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(2).find(".pin-spacer").removeClass("on"),p(3)},onLeaveBack:function(){l(1)}}),s(3,n),ScrollTrigger.create({trigger:e.eq(3).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(3).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(3),f(3),l(3)},onUpdate:function(n,o){TweenMax.to(i.eq(3).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(3).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(3).find(".pin-spacer").removeClass("on"),p(4)},onLeaveBack:function(){l(2)}}),s(4,n),ScrollTrigger.create({trigger:e.eq(4).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(4).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(4),f(4),l(4),TweenMax.to(e.eq(4).find(c),.4,{opacity:1,y:0})},onUpdate:function(n,o){TweenMax.to(i.eq(4).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(4).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(4).find(".pin-spacer").removeClass("on"),p(5)},onLeaveBack:function(){l(3)}}),s(5,n),ScrollTrigger.create({trigger:e.eq(5).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(5).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(5),f(5),l(5),TweenMax.to(e.eq(5).find(c),.4,{opacity:1,y:0})},onUpdate:function(n,o){TweenMax.to(i.eq(5).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(5).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(5).find(".pin-spacer").removeClass("on"),p(6)},onLeaveBack:function(){l(4)}}),s(6,n),ScrollTrigger.create({trigger:e.eq(6).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(6).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(6),f(6),l(6),TweenMax.to(e.eq(6).find(c),.4,{opacity:1,y:0})},onUpdate:function(n,o){TweenMax.to(i.eq(6).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(6).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(6).find(".pin-spacer").removeClass("on"),p(7)},onLeaveBack:function(){l(5)}}),s(7,n),ScrollTrigger.create({trigger:e.eq(7).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pin:e.eq(7).find(".img-wrap"),pinSpacing:!1,onEnter:function(){d(7),f(7),l(7),TweenMax.to(e.eq(7).find(c),.4,{opacity:1,y:0})},onUpdate:function(n,o){TweenMax.to(i.eq(7).find("em"),1,{delay:-.5,width:100*n.progress+"%","background-color":"#c00032"}),TweenMax.to(e.eq(7).find(".img-wrap"),2.5,{delay:.3,"background-position-x":100*n.progress+"%",ease:Power1.easeOut})},onLeave:function(){e.eq(7).find(".pin-spacer").removeClass("on")},onLeaveBack:function(){}}),o.each((function(){var e=$(this);ScrollTrigger.create({trigger:e,start:"top-=300 top+=120px",end:"bottom-=300 top+=120px",onEnter:function(){e.addClass("on active")},onLeaveBack:function(){e.removeClass("on active")}})}))},"(max-width: 1219px) and (min-width:1024px)":function(){},"(max-width:1023px)":function(){s(0,n),ScrollTrigger.create({trigger:e.eq(0).find(".img-wrap"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(0),f(0),l(0),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:0*t.eq(0).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:0*t.eq(0).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(0).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(0).find(".pin-spacer").removeClass("on"),p(1)},onLeaveBack:function(){t.removeClass("is-active")}}),s(1,n),ScrollTrigger.create({trigger:e.eq(1).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(1),f(1),l(1),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:1*t.eq(0).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:1*t.eq(0).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(1).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(1).find(".pin-spacer").removeClass("on"),p(2)},onLeaveBack:function(){l(0)}}),s(2,n),ScrollTrigger.create({trigger:e.eq(2).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(2),f(2),l(2),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:2*t.eq(2).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:2*t.eq(2).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(2).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(2).find(".pin-spacer").removeClass("on"),p(3)},onLeaveBack:function(){l(1)}}),s(3,n),ScrollTrigger.create({trigger:e.eq(3).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(3),f(3),l(3),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:3*t.eq(3).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:3*t.eq(3).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(3).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(3).find(".pin-spacer").removeClass("on"),p(4)},onLeaveBack:function(){l(2)}}),s(4,n),ScrollTrigger.create({trigger:e.eq(4).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(4),f(4),l(4),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:4*t.eq(4).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:4*t.eq(4).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(4).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(4).find(".pin-spacer").removeClass("on"),p(5)},onLeaveBack:function(){l(3)}}),s(5,n),ScrollTrigger.create({trigger:e.eq(5).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(5),f(5),l(5),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:5*t.eq(5).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:5*t.eq(5).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(5).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(5).find(".pin-spacer").removeClass("on"),p(6)},onLeaveBack:function(){l(4)}}),s(6,n),ScrollTrigger.create({trigger:e.eq(6).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(6),f(6),l(6),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:6*t.eq(6).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:6*t.eq(6).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(6).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(6).find(".pin-spacer").removeClass("on"),p(7)},onLeaveBack:function(){l(5)}}),s(7,n),ScrollTrigger.create({trigger:e.eq(7).find(".sub-section"),start:`top top+=${n}px`,end:"bottom center",pinSpacing:!1,onEnter:function(){d(7),f(7),l(7),TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:7*t.eq(7).width()})},onEnterBack:function(){TweenMax.to($(".timeline-nav-wrap"),1,{scrollLeft:7*t.eq(7).width()})},onUpdate:function(e,n){TweenMax.to(i.eq(7).find("em"),1,{delay:-.5,width:100*e.progress+"%","background-color":"#c00032"})},onLeave:function(){e.eq(7).find(".pin-spacer").removeClass("on")},onLeaveBack:function(){}}),o.each((function(){var e=$(this);ScrollTrigger.create({trigger:e,start:"top-=200 top+=120px",end:"bottom-=200 top+=120px",onEnter:function(){e.addClass("on active")},onLeaveBack:function(){e.removeClass("on active")}})}))}})}()}));