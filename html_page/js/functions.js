  // Scroll header fijo
  $(window).scroll(function(){
    var header = $('header');
    if ($(window).scrollTop() > 10) {
      header.addClass('--scrollFix');
    } else {
      header.removeClass('--scrollFix');
    }
  });

  // Ancla home 
  $('.js-anchor').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top - 100 }, 500);
    return false;
  });


  // Scroll Ficha Descripción mobile
  $(window).scroll(function(){   
    var headerPosition = $('header').offset().top;
    var productTabs = $('.js-tab-archive-categories');
    var singleProduct = $('.js-tab-single-product');

    if(headerPosition > 100) {
      productTabs.addClass('--scroll');
      singleProduct.addClass('--scroll'); 

    } else { 
      productTabs.removeClass('--scroll');
      singleProduct.removeClass('--scroll');  
    }
  });




$(document).ready(function() {

  // Slider Hero Home
  var swiperhero = new Swiper('.js-hero', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 700,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.js-btn-hero-next',
      prevEl: '.js-btn-hero-prev',
    },
  }); 

  // Slider Productos destacados Home
  var swiperfeatured = new Swiper('.js-slider-featured', {
    direction: 'horizontal',
    loop: false,
    speed: 900,
    spaceBetween: 20,
    slidesPerView: "auto",

    navigation: {
      nextEl: '.js-btn-slider-featured-next',
      prevEl: '.js-btn-slider-featured-prev',
    },

    pagination: {
      el: '.js-slider-featured-pagination',
      type: 'bullets',
    },
    
    
    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Slider Highlights home
  var swiperhighlights = new Swiper('.js-slider-hightlights', {
  direction: 'horizontal',
  spaceBetween: 15,
  loop: true,
  speed: 900,
  

  pagination: {
    el: '.js-slider-hightlights-pagination',
    type: 'bullets',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    
    1024: {
      slidesPerView: 3,
    },
  },
});


   // Slider Marcas home
   var swiperbrand = new Swiper('.js-slider-brand', {
    direction: 'horizontal',
    spaceBetween: 20,
    loop: true,
    speed: 900,
    slidesPerView: 1,
    
    navigation: {
      nextEl: '.js-btn-slider-brand-next',
      prevEl: '.js-btn-slider-brand-prev',
    },

    pagination: {
      el: '.js-slider-brand-pagination',
      type: 'bullets',
    },

    breakpoints: {
      480: {
        slidesPerView: 1,
      },

      640: {
        slidesPerView: 4,
      },
      
      1024: {
        slidesPerView: 6,
      },
    },
  });

  // Slider Producto
  var galleryThumbs = new Swiper('.js-carrousel-thumb', {
    spaceBetween: 10,
    slidesPerView: 5,
    loop: false,
    freeMode: true,
    loopedSlides: 0, 
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  var galleryTop = new Swiper('.js-carrousel-images', {
    spaceBetween: 10,
    loop: false,
    loopedSlides: 0, 
    navigation: {
      nextEl: '.js-carrousel-images-btn-next',
      prevEl: '.js-carrousel-images-btn-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });


  // Slider Quickview
  var swiperquickview = new Swiper('.js-carrousel-images-quickview', {
    direction: 'horizontal',
    spaceBetween: 10,
    loop: false,


    navigation: {
      nextEl: '.js-carrousel-images-btn-next',
      prevEl: '.js-carrousel-images-btn-prev',
    },
  });


  // Scroll Ficha descripcion desktop
  $(window).scroll(function(){   
    var carddescription = $('.js-product-content');
    var headerPosition = $('header').offset().top;

    if(headerPosition > 250) {
      carddescription.addClass('--sticky');

    } else { 
      carddescription.removeClass('--sticky');; 
    }
  });

  // Abrir Select
  $(".js-btn-select").click(function () {
    $(this).find("+ .select__menu").toggleClass("--active");
    $(this).find(".--arrow").toggleClass("--active");
    $(".js-select-overlay").toggleClass("--active");
  });

  // Cerrar Select overlay
  $(".js-select-overlay").click(function () {
    $(".js-btn-select").find("+ .select__menu").removeClass("--active");
    $(".js-btn-select").find(".--arrow").removeClass("--active");
    $(".js-select-overlay").removeClass("--active");
  });


   // Desplegar categorias
   $(".js-btn-categories").click(function () {
    $(this).find("+ .js-btn-categories-inner").toggleClass("--active");
    $(this).find("i").toggleClass("--active");
  });


  // Tabs Ficha Desktop
  $("#tabs-btn-queincluye").click(function () {
    $("#tabs-queincluye").addClass("--active");
    $("#tabs-acerca").removeClass("--active");
    $("#tabs-opiniones").removeClass("--active");
  });

  $("#tabs-btn-acerca").click(function () {
    $("#tabs-acerca").addClass("--active");
    $("#tabs-queincluye").removeClass("--active");
    $("#tabs-opiniones").removeClass("--active");
  });

  $("#tabs-btn-opiniones").click(function () {
    $("#tabs-opiniones").addClass("--active");
    $("#tabs-queincluye").removeClass("--active");
    $("#tabs-acerca").removeClass("--active");
  });

  // Tabs Botones Ficha Mobile
  $("#btn-mobile-fotos").click(function () {
    $(this).toggleClass("--active");
    $("#btn-mobile-descripcion").removeClass("--active");
    $("#btn-mobile-caracteristicas").removeClass("--active");
  });


  $("#btn-mobile-descripcion").click(function () {
    $(this).toggleClass("--active");
    $("#btn-mobile-fotos").removeClass("--active");
    $("#btn-mobile-caracteristicas").removeClass("--active");
  });

  $("#btn-mobile-caracteristicas").click(function () {
    $(this).toggleClass("--active");
    $("#btn-mobile-fotos").removeClass("--active");
    $("#btn-mobile-descripcion").removeClass("--active");
  });


  
  // Abrir filtros
  $(".js-btn-filters").click(function () {
    $(".js-filters").toggleClass("--active");
  });

  // Cerrar Filtros
  $(".js-btn-close-filters").click(function () {
    $(".js-filters").removeClass("--active");
  });


  // Abrir pedido
  $(".js-btn-pedido").click(function () {
    $(".js-pedido").addClass("--active"); 
    $(".js-pedido-overlay").addClass("--active"); 
  });

   // Cerrar pedido
   $(".js-btn-close-pedido").click(function () {
    $(".js-pedido").removeClass("--active");
    $(".js-pedido-overlay").removeClass("--active"); 
  });


  // Abrir Buscador
  $("#js-btn-navmenu-search").click(function () {
    $("#js-navmenu-search").toggleClass("--active"); 
    $(".js-menu-overlay").toggleClass("--active"); 
  });

  // Abrir Carrito
  $("#js-btn-navmenu-cart, .js-btn-navmenu-cart").click(function () {
    $("#js-navmenu-cart").toggleClass("--active");  
    $(".js-menu-overlay-cart").toggleClass("--active");
  });

  


  // Abrir Menu
  $("#js-btn-navmenu").click(function () {
    $("#js-navmenu").toggleClass("--active");  
    $("#js-btn-navmenu").toggleClass("--active"); 
    $("#js-btn-navmenu i").toggleClass("--active");
    $(".js-menu-overlay").toggleClass("--active");
  });

   // Cerrar con overlay
   $(".js-menu-overlay, .js-menu-overlay-cart").click(function () {
    $("#js-navmenu").removeClass("--active");  
    $("#js-btn-navmenu").removeClass("--active"); 
    $("#js-btn-navmenu i").removeClass("--active");
    $("#js-navmenu-cart").removeClass("--active");
    $("#js-navmenu-search").removeClass("--active");  
    $(".js-menu-overlay").removeClass("--active");
    $(".js-menu-overlay-cart").removeClass("--active");
    
  });


  // Abrir Submenu
  $("#js-btn-navmenu-submenu").click(function () {
    $("#js-navmenu-submenu").toggleClass("--active");  
    $("#js-btn-navmenu-submenu").toggleClass("--active"); 
  });

  // Abrir Menu mobile
  $("#js-btn-menu-mobile-nav").click(function () {
    $("#js-menu-mobile-nav").toggleClass("--active");  
  });

  // Cerrar Menu mobile
  $("#js-btn-close-menu-mobile-nav").click(function () {
    $("#js-menu-mobile-nav").removeClass("--active");  
  });


  // Abrir descuento cupon
  $("#js-btn-coupon").click(function () {
    $("#js-coupon").toggleClass("--active");
  });
  

  // Abrir Submenu mobile
  $("#js-btn-menu-mobile").click(function () {
    $("#js-menu-mobile-dropdown").toggleClass("--active");  
    $(".js-btn-navmenu-submenu").toggleClass("--active"); 
    $("#js-btn-menu-mobile i").toggleClass("--active"); 
  });


   // Mostrar listado cuadricula
   $("#btn-list-cuadricula").click(function () {
    $("#list-cuadricula").fadeIn();  
    $("#list-listado").fadeOut();
  });

  // Mostrar listado lista 
  $("#btn-list-listado").click(function () {
    $("#list-listado").fadeIn();  
    $("#list-cuadricula").fadeOut();
  });
  

  // Abrir modal metodos pago
  $(".js-btn-modal-mediospago").click(function () {
    $(".js-modal-mediospago").addClass("--active");
    $(".js-modal-mediospago .modal__inner").addClass("--active");
  });


  // Cerrar modal metodos pago
  $(".js-btn-close-modal-mediospago").click(function () {
    $(".js-modal-mediospago").removeClass("--active");
    $(".js-modal-mediospago .modal__inner").removeClass("--active");
  });


  // Abrir consultas
  $(".js-btn-modal-consultas").click(function () {
    $(".js-modal-consultas").addClass("--active");
    $(".js-modal-consultas .modal__inner").addClass("--active");
  });


  // Cerrar consultas
  $(".js-btn-close-modal-consultas").click(function () {
    $(".js-modal-consultas").removeClass("--active");
    $(".js-modal-consultas .modal__inner").removeClass("--active");
  });


  // Abrir modal quick view
  $(".js-btn-quick-view").click(function () {
    $(".js-quick-view").addClass("--active");
    $(".js-quick-view .modal__inner").addClass("--active");
  });


  // Cerrar modal quick view
  $(".js-btn-quick-view-close").click(function () {
    $(".js-quick-view").removeClass("--active");
    $(".js-quick-view .modal__inner").removeClass("--active");
  });

  // Abrir / Cerrar Accordion
  $(".js-btn-accordion").click(function () {
    $(this).find("i").toggleClass("--active");
    $(this).toggleClass("--active");
    $(this).find("+ .js-accordion").toggleClass("--active");
  });


  $(".js-btn-mode-dark").click(function () {
    $("body").toggleClass("theme--dark");
  });


  

});