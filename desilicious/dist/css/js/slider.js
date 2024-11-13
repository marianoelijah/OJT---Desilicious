var slider = tns({
    container: ".homeTest__slider",
    items: 3,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive:{
      1250:{
        items: 3,
  
      },
      200: {
        items: 1,
      },
    },
  
  });
  
  
  
    /* <script type="module">
    import {tns} from './src/tiny-slider.js';
  
    var slider = tns({
      container: '.my-slider',
      items: 3,
      slideBy: 'page',
      autoplay: true
    });
    </script> */