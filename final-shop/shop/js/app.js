$(function(){
    $(".remove-bar").on("click",function(){
      $(this).addClass("d-none")
      $(".rmv-ico").removeClass("d-none")
      $(".menu").removeClass("menuActive")
    })
    $(".rmv-ico").on("click",function(){
      $(this).addClass("d-none")
      $(".menu").addClass("menuActive")
  
      $(".remove-bar").removeClass("d-none")
    })
  })