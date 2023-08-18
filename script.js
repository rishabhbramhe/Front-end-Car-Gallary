function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
init()
function pageAnimation(){
    var tl2 = gsap.timeline()
    tl2.from("#lft",{
        y:-100,
        duration:1,
        stagger:.4
    },"same")
    tl2.from("#right",{
        y:-100,
        duration:1,
        stagger:.4
    },"same")
    tl2.from("#bottom a",{
        y:100,
        duration:1,

    },)
    tl2.to("#logo img",{
    scale:1.5,
        duration:1,
    },)
    tl2.to("#logo img",{
        scale:1,
            duration:1,
        },)
    // tl2.from("#center>h1",{
    //     left:"-125%",
    //     duration:2,
    //     letterSpacing:"150px"
    // })  
    // tl2.to("#center>h1",{
    //     color:"#ffffff",
    //     duration:.6,
    // }) 
    tl2.from("#center>button",{
        opacity:0
    }) 
   
  }

function cursor (){
  var text =document.querySelector("h1")
  var cursor= document.querySelector('#cursor')
  document.addEventListener("mousemove",function(dets){
  cursor.style.left= `${dets.x}px`,
  cursor.style.top= `${dets.y}px`
  })
  text.addEventListener('mousemove',function(){
    cursor.style.scale="3"
  })
  text.addEventListener('mouseleave',function(){
    cursor.style.scale="1"
  })
}
cursor()
  pageAnimation()

function pageOneAnimation(){
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#page1",
          scroller:"#main",
          start: "top top",
          scrub: 2,
          pin: true,
          duration:10
      }
    })

       tl.to("#lambo",{
        right:"34%"
       },"same")        
       tl.to("#t1",{
        right:"64.9%",
        rotate:"-780deg"
       },"same")    
       tl.to("#t2",{
        right:"21%",
        rotate:"-780deg"
       },"same") 


    //    tl.to("#page1",{
    //     background:"linear-gradient(to right, rgb(17, 17, 17), 50%, rgb(184, 179, 179) )",
    //     delay:.1,
    //    },"same") 

       tl.to("#lambo",{
        delay:.3,
        right:"120%"
       },"sm")
       tl.to("#t1",{
        delay:.3,
        right:"150.6%",
        rotate:"-1360deg"
       },"sm")   
       tl.to("#t2",{
        delay:.3,
        right:"107%",
        rotate:"-1360deg"
       },"sm") 
       tl.to("#center>h1",{
        letterSpacing:"100px"
         },"w")
        tl.to("#page1",{
          delay:.1,
          //  x:2000,
          height:"0%"
           },"w")  
           
           tl.to("#center>h1",{
            letterSpacing:"100px"
             },"w")  
  }
  pageOneAnimation()


  function pageTwoAnimation(){
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#page2",
          start: "top top",
          scroller:"#main",
          scrub: 2,
          pin: true,
          duration:10
      }
    })

    tl.from("#info",{
      top:"130%",
      stagger:.4
       }) 
       tl.to("#info",{
        zIndex:"9999",
        height:"100%",
        width:"100%"
         }) 
    
      // //  tl.from("#page2>img",{
      // //   y:-100,
      // // scale:0
      // //  }) 
      //  tl.to("#logo2",{
      //   opacity:0
      //  },) 
      //  tl.to("#page2>img",{
      //   delay:.1,
      //   scale:5,
      //   filter:"blur(10px)"
      //    }) 
         tl.to("#side",{
            width:"40%",
            duration:2
             },"o") 
       
             tl.to("#info",{
              zIndex:"9999",
            scale:1.1,
            duration:5,
               },"o") 
                 tl.to("#side button",{
                    height:"100%",
                    duration:2
                     },"o") 
         
          
  }
  pageTwoAnimation()




  
function pageThreeAnimation(){
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#page3",
          start: "top top",
          scroller:"#main",
          scrub: 2,
          pin: true,
          duration:10
      }
    })
                        tl.to("#info1",{
                          delay:.5,
                            opacity:1
                              })


    
  }
  pageThreeAnimation()


  function pageFourAnimation(){
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: "#page4",
          scroller:"#main",
          start: "top top",
          scrub: 2,
          pin: true,
          duration:10
      }
    })

    tl.to("#cursor",{
      opacity:0
        })
        
  tl.to("#nav",{
    opacity:0
      })
        
  }
  pageFourAnimation()





let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}



function footer(){
// var fc =document.querySelector("#fc")
// var nav =document.querySelector("#nav")
// var footer =document.querySelector("#footer")
// var p5 =document.querySelector("#page5")
// var cur =document.querySelector("#cursor")

// p5.addEventListener("mousemove", function(){
// cur.style.opacity="0"
// nav.style.opacity="0"

// })
// p5.addEventListener("mouseleave", function(){
//   cur.style.opacity="1"
//   })
  
// fc.addEventListener("mousemove", function(){
//   footer.style.height="90%"

// })
// fc.addEventListener("mouseleave", function(){
//   footer.style.height="0%"

// })
}
footer()



var tl3 = gsap.timeline()
tl3.to("#box",{
  width:"10%",
  duration:5
})
