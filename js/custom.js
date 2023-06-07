$(document).ready(function() {
    $("#news-slider,#news-sliders").owlCarousel({
      items : 1,
      itemsDesktop:[1199,1],
      itemsDesktopSmall:[980,1],
      itemsMobile : [767,1],
      pagination:true,
      navigation:false,
      navigationText:["",""],
      autoPlay:false
    });
  });

  $(document).ready(function () {
    $(".nav_search").click(function () {
      $("#navbarSupportedContent").toggleClass("close");
    });
  });

  $(document).ready(function () {
    $(".nav_close_button").click(function () {
      $("#navbarSupportedContent").toggleClass("close1");
      $("#navbarSupportedContent").removeClass("close");
    });
  });

  $(document).ready(function () {
    $(".our_prof_mains").removeClass("bottom_details");
    var cards=document.querySelectorAll(".our_prof_mains")
    console.log(cards);
    for(i=0;i<cards.length;i++){
        cards[i].addEventListener("click",function(){
            $(this).toggleClass("bottom_details")
        })
    }
  });
  

  $(document).ready(function() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('box-hover');
      } else {
        $('.navbar').removeClass('box-hover');
      }
    });
  });

  // Dropdown toggle
  // $(document).ready(function() {
  // $(".dropdown-toggle").click(function(){
  //   $(this).toggleClass("show-head");
  //   $(this).siblings(".dropdown-menu").toggleClass("show");
  // })
  // });

// nav dropdown
    $('.main-dropdown').click( function() {
        $(this).toggleClass("show-head");
        $(this).parent().siblings().find(".main-dropdown").removeClass("show-head");

        $(this).siblings(".dropdown-menu").toggleClass("show");
        $(this).parent().siblings().find(".dropdown-menu").removeClass('show');
        
    
        $(this).parent().siblings().find(".sub-dropdown").removeClass("show-head1");
        $(this).parent().siblings().find(".sub-dropdown").find(".dropdown-menu1").removeClass("show");
  });
  
  $('.sub-dropdown').click( function() {
    $(this).toggleClass("show-head1");
    $(this).siblings().removeClass("show-head1");

      $(this).find(".dropdown-menu1").toggleClass("show");
      $(this).siblings().find(".dropdown-menu1").removeClass('show');
});

// number scroll

var a = 0;
$(document).scroll(function(e) {

  var oTop = $('.scrolling').offset().top -window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counting').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-n');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// Loyalty prev next
var navItems = document.getElementsByClassName("tab-pane");
var navUl = document.getElementById("navUl");

var navLink = navUl.getElementsByClassName("nav-link");
console.log(navLink);
var count = 0;
function dot(index){
  console.log(index);
  count==index
}
function next() {
  count++;
  console.log(count);

  for (i = 0; i < navItems.length; i++) {
    for (j = 0; j < navLink.length; j++) {
      navItems[i].classList.remove("show", "active");
      navLink[j].classList.remove("active");

      if (count >= navItems.length) {
        count = navItems.length - 1;
        navItems[count].classList.add("show", "active")
        navLink[count].classList.add("active");
      }
      navItems[count].classList.add("show", "active");
      navLink[count].classList.add("active");
    }
  }
}
function prev() {
  count--;
  console.log(count);
  for (i = 0; i < navItems.length; i++) {
    for (j = 0; j < navLink.length; j++) {
      navItems[i].classList.remove("show", "active");
      navLink[j].classList.remove("active");
      if (count <= 0) {
        count = 0;
        navItems[count].classList.add("show", "active")
        navLink[count].classList.add("active");
      }
      navItems[count].classList.add("show", "active");
      navLink[count].classList.add("active");
    }
  }
}