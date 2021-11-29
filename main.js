jQuery(document).ready(function() {
  $('html,body').scrollTop(0);

  var section;
  var listWrap;
  var infoDot, yearList, indiCator, indiProgress, line, yearListDot, teachers;
  let headerHeights = {
    desktop: 120
  }

  function init() {
    section = $('.section');
    introTxt = $('.intro-txt');
    listWrap = section.find('.info-wrap');
    yearWrap = section.find('.year-desc-wrap');
    yearList = listWrap.find('.year-desc-wrap li');
    yearListDot = yearList.find('.dot');
    indiCator = $('.timeline-nav > li');
    indiProgress = $('.progress-wrap > li');
    line = listWrap.find('.line');
    teachers = section.find('.teacher');

    console.log('section', section);
    console.log('introTxt', introTxt);
    console.log('listWrap', listWrap);
    console.log('yearWrap', yearWrap);
    console.log('yearList', yearList);
    console.log('yearListDot', yearListDot);
    console.log('indiCator', indiCator);
    console.log('indiProgress', indiProgress);
    console.log('line', line);

    setTween();
    bindEvents();
    sectionTrigger();
  }

  function setTween() {
    indiCator.removeClass('is-active');

    // intro box
    TweenMax.set(section.find(introTxt), {
      opacity: 0,
      y: 50
    });
    // section list
    TweenMax.set(yearList, {
      opacity: 0,
      y: 100
    });
    //yearList bullet
    TweenMax.set(yearListDot, {
      opacity: 0,
      scale: 0
    });
    // teacher
    TweenMax.set(teachers, {
      opacity: 0,
      y: 100
    });
  }

  function bindEvents() {
    setIntroTextAni(0);

    indiCator.on('click', function () {
      var idx = $(this).index();
      let topContHeight = 120;

      TweenMax.to($('html, body'), 2, {
        scrollTop: section.eq(idx).offset().top - topContHeight + 1,
        ease: Power1.easeOut
      });
    });

    $('.top-btn').on("click", function () {
      gsap.to("html,body", 1, {
        scrollTop: 0,
        ease: Power2.easeInOut
      })
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0) {
        $("body").attr("data-idx", false);
      } else {
        $("body").attr("data-idx", 1);
      }
    })
  }

  function sectionInit(_idx, _headerTop) {
    ScrollTrigger.create({
      trigger: $('.main-section').eq(_idx),
      start: "top top+=" + _headerTop + "px",
      end: "center top+=" + _headerTop + "px",
      pin: true,
      
      onEnter: function () {
        // setIndicator(_idx);
      },
      onLeaveBack: function () {
        setIndicator(_idx-1)
      },
    })
  }

  function setIntroTextAni(_index) {
    if (_index === section.length) return;
    TweenMax.staggerTo(section.eq(_index).find(introTxt).toArray(), 1.3, {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut
    }, .2);
  }

  function setInfoListAni(_index) {
    TweenMax.to(section.eq(_index).find(listWrap), 0.4, {
      opacity: 1
    });
  }

  //bottom Indicator
  function setIndicator(_index) {
    indiCator.removeClass('is-active');
    indiProgress.removeClass('is-active');
    for (let i = 0; i <= _index; i++) {
      indiCator.eq(i).addClass('is-active');
      if (i > 0) {
        indiProgress.eq(i - 1).addClass('is-active');
      }
    }
  }

  //yearlist animation
  function setYearListAni(_index) {
    var listLength = section.eq(_index).find('li').length;

    TweenMax.to(section.eq(_index).find(line), .4, {
      height: 0,
      ease: Power4.easeIn
    });
    const [first, last] = [0, 8];
    for (var i = 0; i < listLength; i++) {
      if (_index == first || _index == last) {
        TweenMax.staggerTo(section.eq(_index).find('li').toArray(), 1, {
          delay: .2,
          opacity: 1,
          y: 0,
          ease: Power3.easeOut
        }, .1);
        TweenMax.staggerTo(section.eq(_index).find(yearListDot).toArray(), 1, {
          delay: .5,
          opacity: 1,
          scale: 1,
          ease: Power3.easeOut
        }, .1);

        return false;
      }
      TweenMax.staggerTo(section.eq(_index).find('li').toArray(), 0.4, {
        delay: .5,
        opacity: 1,
        y: 0,
        ease: Power3.easeOut
      }, .1);
      TweenMax.staggerTo(section.eq(_index).find(yearListDot).toArray(), 0.4, {
        delay: .8,
        opacity: 1,
        scale: 1,
        ease: Power3.easeOut
      }, .1);
    }
  }

  //년도 별 트리거
  function sectionTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    let topContHeight = 120;
    ScrollTrigger.matchMedia({
      //pc
      "(min-width: 1024px)": function () {
        var idx = 0;

        sectionInit(0, topContHeight);
        var year1922 = ScrollTrigger.create({
          trigger: section.eq(0).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(0).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(0);
            setYearListAni(0);
            setIndicator(0);
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(0).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(0).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(0).find('.pin-spacer').removeClass('on');
            setIntroTextAni(1);
          },
          onLeaveBack: function () {
            indiCator.removeClass('is-active');
          }
        });

        sectionInit(1, topContHeight);
        var year1950 = ScrollTrigger.create({
          trigger: section.eq(1).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(1).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(1);
            setYearListAni(1);
            setIndicator(1);
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(1).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(1).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(1).find('.pin-spacer').removeClass('on');
            setIntroTextAni(2);
          },
          onLeaveBack: function () {
            setIndicator(0);
          }
        });

        sectionInit(2, topContHeight);
        var year1970 = ScrollTrigger.create({
          trigger: section.eq(2).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(2).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(2);
            setYearListAni(2);
            setIndicator(2);
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(2).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(2).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(2).find('.pin-spacer').removeClass('on');
            setIntroTextAni(3);
          },
          onLeaveBack: function () {
            setIndicator(1);
          }
        });

        sectionInit(3, topContHeight);
        var year1996 = ScrollTrigger.create({
          trigger: section.eq(3).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(3).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(3);
            setYearListAni(3);
            setIndicator(3);
            
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(3).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(3).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(3).find('.pin-spacer').removeClass('on');
            setIntroTextAni(4);
          },
          onLeaveBack: function () {
            setIndicator(2);
          }
        });

        sectionInit(4, topContHeight);
        var year2009 = ScrollTrigger.create({
          trigger: section.eq(4).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(4).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(4);
            setYearListAni(4);
            setIndicator(4);
            TweenMax.to(section.eq(4).find(teachers), 0.4, {
              opacity: 1,
              y: 0
            });
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(4).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(4).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(4).find('.pin-spacer').removeClass('on');
            setIntroTextAni(5);
          },
          onLeaveBack: function () {
            setIndicator(3);
          }
        });

        sectionInit(5, topContHeight);
        var year2011 = ScrollTrigger.create({
          trigger: section.eq(5).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(5).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(5);
            setYearListAni(5);
            setIndicator(5);
            TweenMax.to(section.eq(5).find(teachers), 0.4, {
              opacity: 1,
              y: 0
            });
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(5).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(5).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(5).find('.pin-spacer').removeClass('on');
            setIntroTextAni(6);
          },
          onLeaveBack: function () {
            setIndicator(4);
          }
        });

        sectionInit(6, topContHeight);
        var year2016 = ScrollTrigger.create({
          trigger: section.eq(6).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(6).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(6);
            setYearListAni(6);
            setIndicator(6);
            TweenMax.to(section.eq(6).find(teachers), 0.4, {
              opacity: 1,
              y: 0
            });
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(6).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(6).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(6).find('.pin-spacer').removeClass('on');
            setIntroTextAni(7);
          },
          onLeaveBack: function () {
            setIndicator(5);
          }
        });

        sectionInit(7, topContHeight);
        var year2022 = ScrollTrigger.create({
          trigger: section.eq(7).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pin: section.eq(7).find('.img-wrap'),
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(7);
            setYearListAni(7);
            setIndicator(7);
            TweenMax.to(section.eq(7).find(teachers), 0.4, {
              opacity: 1,
              y: 0
            });
            // ScrollTrigger.refresh();
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(7).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
            TweenMax.to(section.eq(7).find('.img-wrap'), 2.5, {
              delay: .3,
              'background-position-x': self.progress * 100 + '%',
              ease: Power1.easeOut
            });
          },
          onLeave: function () {
            section.eq(7).find('.pin-spacer').removeClass('on');
            // setIntroTextAni(8);
          },
          onLeaveBack: function () {
          }
        });

        yearList.each(function () {
          var $this = $(this);
          ScrollTrigger.create({
            trigger: $this,
            start: "top-=300 top+=" + "120px",
            end: "bottom-=300 top+=" + "120px",
            onEnter: function () {
              $this.addClass('on active');
            },
            onLeaveBack: function () {
              $this.removeClass('on active');
            }
          })
        });
      },
      // tablet
      "(max-width: 1219px) and (min-width:1024px)": function () {
      },
      //mobile
      "(max-width:1023px)": function () {
        var idx = 0;

        sectionInit(0, topContHeight);
        var year1922 = ScrollTrigger.create({
          trigger: section.eq(0).find('.img-wrap'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',          
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(0);
            setYearListAni(0);
            setIndicator(0);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(0).width() * 0
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(0).width() * 0
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(0).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(0).find('.pin-spacer').removeClass('on');
            setIntroTextAni(1);
          },
          onLeaveBack: function () {
            indiCator.removeClass('is-active');
          }
        });

        sectionInit(1, topContHeight);
        var year1950 = ScrollTrigger.create({
          trigger: section.eq(1).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(1);
            setYearListAni(1);
            setIndicator(1);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(0).width() * 1
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(0).width() * 1
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(1).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(1).find('.pin-spacer').removeClass('on');
            setIntroTextAni(2);
          },
          onLeaveBack: function () {
            setIndicator(0);
          }
        });

        sectionInit(2, topContHeight);
        var year1970 = ScrollTrigger.create({
          trigger: section.eq(2).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(2);
            setYearListAni(2);
            setIndicator(2);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(2).width() * 2
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(2).width() * 2
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(2).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(2).find('.pin-spacer').removeClass('on');
            setIntroTextAni(3);
          },
          onLeaveBack: function () {
            setIndicator(1);
          }
        });

        sectionInit(3, topContHeight);
        var year1996 = ScrollTrigger.create({
          trigger: section.eq(3).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(3);
            setYearListAni(3);
            setIndicator(3);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(3).width() * 3
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(3).width() * 3
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(3).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(3).find('.pin-spacer').removeClass('on');
            setIntroTextAni(4);
          },
          onLeaveBack: function () {
            setIndicator(2);
          }
        });

        sectionInit(4, topContHeight);
        var year2009 = ScrollTrigger.create({
          trigger: section.eq(4).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(4);
            setYearListAni(4);
            setIndicator(4);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(4).width() * 4
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(4).width() * 4
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(4).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(4).find('.pin-spacer').removeClass('on');
            setIntroTextAni(5);
          },
          onLeaveBack: function () {
            setIndicator(3);
          }
        });

        sectionInit(5, topContHeight);
        var year2011 = ScrollTrigger.create({
          trigger: section.eq(5).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(5);
            setYearListAni(5);
            setIndicator(5);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(5).width() * 5
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(5).width() * 5
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(5).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(5).find('.pin-spacer').removeClass('on');
            setIntroTextAni(6);
          },
          onLeaveBack: function () {
            setIndicator(4);
          }
        });

        sectionInit(6, topContHeight);
        var year2016 = ScrollTrigger.create({
          trigger: section.eq(6).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(6);
            setYearListAni(6);
            setIndicator(6);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(6).width() * 6
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(6).width() * 6
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(6).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(6).find('.pin-spacer').removeClass('on');
            setIntroTextAni(7);
          },
          onLeaveBack: function () {
            setIndicator(5);
          }
        });

        sectionInit(7, topContHeight);
        var year2022 = ScrollTrigger.create({
          trigger: section.eq(7).find('.sub-section'),
          start: `top top+=${topContHeight}px`,
          end: 'bottom center',
          pinSpacing: false,
          onEnter: function () {
            setInfoListAni(7);
            setYearListAni(7);
            setIndicator(7);
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(7).width() * 7
            });
          },
          onEnterBack: function () {
            TweenMax.to($('.timeline-nav-wrap'), 1, {
              scrollLeft: indiCator.eq(7).width() * 7
            });
          },
          onUpdate: function (self, progress) {
            TweenMax.to(indiProgress.eq(7).find('em'), 1, {
              delay: -.5,
              width: self.progress * 100 + '%',
              'background-color': '#c00032'
            });
          },
          onLeave: function () {
            section.eq(7).find('.pin-spacer').removeClass('on');
            // setIntroTextAni(8);
          },
          onLeaveBack: function () {
          }
        });

        yearList.each(function () {
          var $this = $(this);
          ScrollTrigger.create({
            trigger: $this,
            start: "top-=200 top+=" + "120px",
            end: "bottom-=200 top+=" + "120px",
            onEnter: function () {
              $this.addClass('on active');
            },
            onLeaveBack: function () {
              $this.removeClass('on active');
            }
          })
        });
      }
    });
  }

  if ($('.timeline').length > 0) {
    return init();
  }
});