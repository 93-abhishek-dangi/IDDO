{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script> */}

$(document).ready(function(){

  
// $(window).scroll(function(){

//   let top=$(this).scrollTop();
  
//   if( top>=500){
//     $(".top").fadeIn();
//   }
//   else{
//     $(".top").fadeOut();
//   }


  //    $("body").css({
  //      "background-position-y":(top-2*top)/10
  //  });

//  });


  $(".accordion a").click(function(e){
    e.preventDefault();
    if( $(this).hasClass("active")==false ){
      $(".accordion a").removeClass("active");
      $(this).addClass("active");
      $(".accordion p").slideUp();
      $(this).next("p").slideDown();
    }
});


  $("nav ul li a").click(function(e){
    e.preventDefault();
    let id=$(this).attr("href");
    let top=$(id).offset().top;
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
    $("html,body").animate({scrollTop:top-70})
  });

});




//....Go to top button
let Go = document.querySelector(".top");
//....When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if( document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    document.querySelector(".top").style.display = "block";
  }
  else{
    document.querySelector(".top").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

//..... Slider...
let slideIndex = 1;

showSlide(slideIndex);
//...............control.............
  function currentSlide(n){
    showSlide( slideIndex=n);
  }
function showSlide(n){
   let i;
   let slides = document.getElementsByClassName("review");
   let dots = document.getElementsByClassName("dot");
   if(n>slides.length){
    slideIndex=1
   }
if(n<1){
  slideIndex = slides.length;
  slides[i].className = slides[i].className.replace("active", "");

}
for( i=0; i < slides.length; i++){
  slides[i].style.display="none"
}
for(i=0; i<dots.length; i++){
  dots[i].className = dots[i].className.replace("active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
///.............slider end...........


//..........chart...........
//.........chart-1....
const ctx1= document.querySelector(".chart1");
    new Chart( ctx1,{
      type : 'doughnut',
      data:{
        // labels:['LG','Sony','Samsung','Voat'],
        datasets:[{
          
          data:[75,25],
          backgroundColor:["#ca3c3c","transparent",],

          borderWidth:0.1,
        }]
      },
     
    })
//....................chart-2....
const ctx2= document.querySelector(".chart2");
    new Chart( ctx2,{
      type : 'doughnut',
      data:{
      
        datasets:[{
          
          data:[25,75],
          backgroundColor:["#ca3c3c","transparent",],

          borderWidth:0.1,
        }]
      },
     
    })

    //....................chart-3....
const ctx3= document.querySelector(".chart3");
new Chart( ctx3,{
  type : 'doughnut',
  data:{
         datasets:[{
        data:[75,25],
        backgroundColor:["#ca3c3c","transparent",],
        borderWidth:0.1,
      }]
     },
   })

    //....................chart-4....
    const ctx4= document.querySelector(".chart4");
    new Chart( ctx4,{
      type : 'doughnut',
      data:{
             datasets:[{
            data:[50,50],
            backgroundColor:["#ca3c3c","transparent",],
            borderWidth:0.1,                                            //"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
          }]
         },
       })
//...........................................................................


//.............form- Validation.............



document.querySelector('.email').addEventListener("input",function(e){

  let email = document.querySelector(".email").value;
  // let pattern = /^[A-Za-z._]{3,}@{A-Za-z}{3,}[.]{1}[A-Za-z]{2,6}$/;
  var pattern=/^[a-z0-9]{1}[a-z0-9._]{0,}\@[a-z0-9]{1}[a-z0-9-]{1,}\.[a-z]{2}[a-zA-Z.]{0,}$/i; 
    if(pattern.test(email)){
      e.preventDefault();
      document.querySelector(".errr").textContent="This is  valid email";
      document.querySelector(".errr").style="color:green";
      
    }
    else{e.preventDefault();
      document.querySelector(".errr").textContent="This is not valid email";
            document.querySelector(".errr").style="color:yellow";
        }
      
    });

    
document.querySelector('.mail').addEventListener("input",function(e){

  let email = document.querySelector(".mail").value;
  // let pattern = /^[A-Za-z._]{3,}@{A-Za-z}{3,}[.]{1}[A-Za-z]{2,6}$/;
  var pattern=/^[a-z0-9]{1}[a-z0-9._]{0,}\@[a-z0-9]{1}[a-z0-9-]{1,}\.[a-z]{2}[a-zA-Z.]{0,}$/i; 
    if(pattern.test(email)){
      
      document.querySelector(".err").textContent="This is  valid email";
      document.querySelector(".err").style="color:green";
      
    }
    else{
      document.querySelector(".err").textContent="This is not valid email";
            document.querySelector(".err").style="color:red";
        }
      
    });

    
$(document).ready(function(){
$(".collapsible").click(function(e){
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).next(".content-1").slideToggle()
});

$(".mob button").click(function () {
  $(this).toggleClass("open");
  $(".collapse").slideToggle();
})
});
 let video = document.querySelector("#myvideo");
 let button = document.querySelector(".button");
 let videoText = document.querySelector('.text');
 let bg_box = document.querySelector(".bg-box");
 let stop_btn = document.querySelector(".stop-btn");
 function playVid() { 
  video.play(); 
  
  button.style.display = "none";
   
   videoText.style.display = "none";
  
  bg_box .style.background ="transparent";
 
  stop_btn.style.display = "block"
} 

function pauseVid(){
  video.pause();
  button.style.display = "block";
   
   videoText.style.display = "block";
   
  bg_box .style.background ="rgba(102,102,102,0.5)";
 
  stop_btn.style.display = "none"

}


//...........data aos.........
AOS.init();











