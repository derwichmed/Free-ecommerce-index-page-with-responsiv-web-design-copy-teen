$(function (){
   $('body > header .nav_bar .nav_item').mouseover(function (){
      $('body > header .nav_bar .nav_item > div > .sub_menu:visible').hide(); 
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('body > header .nav_bar .nav_item .sub_menu_item').mouseover(function (){
      $('body > header .nav_bar .nav_item .sub_menu_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('body').children().not('header').mouseover(function (){
      $('.sub_menu:visible').hide(); 
   });
   
   isRelevanceHidden = true;
   $('.body > div > header .relevance header').click(function (){
      if(isRelevanceHidden){
          $('.body > div > header .relevance section').show();
          isRelevanceHidden = false;
      }
        else{
            $('.body > div > header .relevance section').hide();
            isRelevanceHidden = true;
        }
          
   });
   
   isNavBarHidden = true;
   $('body > header .nav_bar > div .menu_icon').click(function (){
      if(isNavBarHidden){
          $('body > header .nav_bar > nav').css('width','0px');
          $('#mobile_nav_effect_backgroud').show();
          $('body > header .nav_bar > nav').show();
          $('body > header .nav_bar > nav').animate({
           width: '200px'
       },200);
       isNavBarHidden = false;
      } 
        else{
            $('body > header .nav_bar > nav').animate({
               width: '0px'
            },200,function (){
                $('body > header .nav_bar > nav').hide();
                $('#mobile_nav_effect_backgroud').hide();
            });
            isNavBarHidden = true;
        }
   });
});