document.addEventListener('DOMContentLoaded', function(){
  var $navigation = document.querySelector('nav');
  var $menuUl = $navigation.querySelector('.menu');
  var $links = Array.from($menuUl.querySelectorAll('a'));
  var $menuBar = $menuUl.querySelector('i');

    mobileMenu();
    window.addEventListener('resize', function(){
      mobileMenu();
    });

    console.log($navigation);

    $menuBar.addEventListener('click', function(){
      mobileMenuShowPosition();
    });

  function mobileMenu(){
    if(window.matchMedia("(min-width: 601px)").matches){
      //turn off mobile menu
      if($menuUl.classList.contains('mobile')){
        $menuUl.classList.remove('mobile');
        $links.forEach(function($element){
          $element.classList.remove('show');
        });
      }
    } else {
      //turn on mobile menu
      console.log('mobile');
      $menuUl.classList.add('mobile');
    }
  }

  function mobileMenuShowPosition(){
    $links.forEach(function($element){
      $element.classList.toggle('show');
    });
  }
});
