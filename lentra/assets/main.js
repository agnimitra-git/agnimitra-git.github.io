$(document).ready(function () {
	
	$(' .accordian .acc-btn').click(function(){
		$(this).siblings('.accordian-content').toggleClass('active')
		if($(this).siblings('.accordian-content').hasClass('active')){
			$(this).parents('.acc-block').siblings('.acc-block').children('.accordian-content').removeClass('active')
		
			$(this).parents('.acc-block').siblings('.acc-block').each((i,val)=>$(val).find('.icon-acc')[0].innerText='+')
			$(this).children('.icon-acc')[0].innerText='-'
		}else{
			$(this).children('.icon-acc')[0].innerText='+'
		}
		// $(window).scrollTop($(this).offset().top-150);
	})



		
  $("#owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
  });



  $("#owl-carousel-mob").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
	});
	


// career page cultural code start here

	$("#lentra-culture .owl-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    dots: false,
		merge: true,
		responsive:true,
		navText: [
			"<span class='nav-main-slider-btn fa'><svg fill='#d2343a'><use xlink:href='images/symbol-defs.svg#icon-left'></use></svg></span>",
			"<span class='nav-main-slider-btn fa'><svg fill='#d2343a'><use xlink:href='images/symbol-defs.svg#icon-right'></use></svg></span>",
		],
		nav: true,
    responsive: {
      0: {
				items: 1,
				loop: true,
				center: true,
				slideBy: 1,

			},
		}
	});

	var imgsArr = []
	imgsArr.push($('#lentra-culture .images-container .col4'))


		
	if ($(window).width() > 768) {
		$('#lentra-culture .images-container .col4').click(function(){
			var index = jQuery.inArray( this, imgsArr[0])
			$('#lentra-culture .owl-carousel').css('display','block')
			$('#lentra-culture .images-small').css('opacity',0.5)

			var owl = $("#lentra-culture .owl-carousel");
			owl.owlCarousel();
			owl.trigger("to.owl.carousel", [index]);
		})

		$('body').click(function(e) {
			if (!$(e.target).closest('#lentra-culture .images-container').length){
				$("#lentra-culture .owl-carousel").hide();
				$('#lentra-culture .images-small').css('opacity',1)
			}
		});
	} 

	$(function() {
		let imgs = $('#lentra-culture .images-container .col4')
		imgs.slice(0, 9).show(); // select the first ten
		imgs.slice(9, imgs.length).hide()

		$("#load").click(function(e) { 

			imgs.show();
			$("#load").html('Show less')
			$("#load").toggleClass('show-more')
			if($(this).hasClass('show-more')){
				imgs.slice(0, 9).show(); // select the first ten
				imgs.slice(9, imgs.length).hide()
				$("#load").html('Load More Stories')
			}

		})
	});

		
// career page cuktural code ends here


	



  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
    if ($("nav").hasClass("active")) {
      // alert('ho')
      $(".menu-toggle").html(
        "<svg fill='#193665' class='menu-close' ><use xlink:href='images/symbol-defs.svg#icon-close'></use></svg>"
      );
    } else {
      $(".menu-toggle").html('<i class="fa fa-bars" aria-hidden="true"></i>');
    }
  });

  $("#more-success-stories").hide();
  $("#loadmore").click(function () {
    $("#more-success-stories").show();
    // $('#more-success-stories').addClass("d-md-flex");
  });
});



$("#readmore").click(function () {
	$("#mbx-readmore").show();
  // $('#more-success-stories').addClass("d-md-flex");
});


$("#digi-loan .owl-carousel").owlCarousel({
  items: 6,
  autoplay: false,
  dots: false,
  merge: true,
  nav: true,
  // navText:['<','>'],
  navText: [
    "<span class='nav-main-slider-btn fa'><svg fill='#fff'><use xlink:href='images/symbol-defs.svg#icon-left'></use></svg></span>",
    "<span class='nav-main-slider-btn fa'><svg fill='#fff'><use xlink:href='images/symbol-defs.svg#icon-right'></use></svg></span>",
  ],
  responsive: {
    0: {
      items: 2,
      dots: true,
      nav: false,
      loop: true,
      center: true,
    },

    500: {
      items: 3,
      dots: true,
      nav: false,
      loop: true,
      slideBy: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});
console.log();
// if(window.innerWidth<992){
$("li.nav-drpdwn").click(function () {
  if ($("#nav-dropdown").hasClass("show")) {
    $("#nav-dropdown").removeClass("show");
    $(".toggle-icon").addClass("fa-caret-up");
  } else {
    $("#nav-dropdown").addClass("show");
    $(".toggle-icon").removeClass("fa-caret-up").addClass("fa-caret-down");
  }
});

// Close the dropdown if the user clicks outside of it
$(document).on("click", function (event) {
  var $trigger = $(".nav-drpdwn");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $("#nav-dropdown").removeClass("show");
    $(".toggle-icon").addClass("fa-caret-up");
  }
});

$(window).resize(function () {
  if (window.innerWidth < 1200 && window.innerWidth > 992) {
    $(".centered-x-y").css("width", "185px");
  } else {
    $(".centered-x-y").css("width", "auto");
  }
});

$(document).ready(function () {
  $("#lobs .owl-carousel").owlCarousel({
    items: 3,
    autoplay: false,
    dots: false,

    // merge: true,
    // autoWidth: true,
    nav: true,
    slideBy: 3,
    navText: [
      "<span class='nav-main-slider-btn fa'><svg fill='#000'><use xlink:href='images/symbol-defs.svg#icon-left'></use></svg></span>",
      "<span class='nav-main-slider-btn fa'><svg fill='#000'><use xlink:href='images/symbol-defs.svg#icon-right'></use></svg></span>",
    ],
    responsive: {
      0: {
        items: 3,
       
        loop: true,
      },
    },
	});
	

	$("#gonogo-tech.owl-carousel").owlCarousel({
    items: 3,
    autoplay: false,
    dots: true,
    mouseDrag:false,
		merge: true,
		responsive:true,
		
		nav: false,
    responsive: {
      0: {
				items: 2,
				loop: true,
				center: true,
				slideBy: 1,

			},
			550:{
				loop: true,
				items:3,
				center: true,
				slideBy: 1,
			},
			992:{
				items: 4 ,
				slideBy: 1,

			},
			1200:{
				items: 5 ,
			},
			1375:{
				items: 6,
				dots: false,
			}
    },
	});
	
	
});


// LOBS section code starts here


function lobs(){
	if($(window).innerWidth()>=992){
		$("#lobs .tablinks").click(function () {
			let href = $(this).attr("href");
			$(this).addClass("active");
			$(this).siblings(".tablinks").removeClass("active");
			if ($(this).hasClass("active")) {
				$(href).addClass("d-block").removeClass("d-none");
				$(href).siblings(".tabcontent").addClass("d-none").removeClass("d-block");
			}
		});
		
		$(".tablinks").each(function () {
			let href = $(this).attr("href");
			if ($(this).hasClass("active")) {
				$(href).addClass("d-block").removeClass("d-none");
				$(href).siblings(".tabcontent").addClass("d-none").removeClass("d-block");
			}
		});
	}else{
		$(".tabcontent").removeClass("d-none");
	
	}
}
lobs()


$(window).resize(function(){
	lobs()
})


//for LOBS accordian

$(document).ready(function(){
	$('#lobs .lobs-accordian').click(function(){
		$(this).siblings('.accordian-content').toggleClass('active')
		if($(this).siblings('.accordian-content').hasClass('active')){
			$(this).parents('.tabcontent').siblings('.tabcontent').children('.accordian-content').removeClass('active')
			$(this).parents('.tabcontent').siblings('.tabcontent').each((i,val)=>$(val).find('.icon-acc')[0].innerText='+')
			$(this).children('span')[0].innerText='-'
		}else{
			$(this).children('span')[0].innerText='+'
		}
		$(window).scrollTop($('#lobs').offset().top);
	})
})



// LOBS section code ends here


//general accordian

		