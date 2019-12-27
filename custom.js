$(document).ready(function () {  

    $('.slick-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      slidesToShow: 3,
      infinite: false
    });
  
    $('.homeSlider').slick({
      autoplay: false,
      dots: true,
      infinite: true,
      arrows: false,
    });
    $('.homeSlider2').slick({
      autoplay: false,
      dots: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: "unslick"
        }
      ]
    });
    $('.js-package-carousel').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  

    var windowSize = $(window).width();
    if (windowSize >= 768) {
        $(".myClass").addClass("show");
        $(".card-link-custom").css("pointer-events","none")
    }

    $('.js-case-studies-carousel').slick({
        slidesToShow: 2.5,
        arrows: true,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2.2,
                    infinite: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.js-skeptics-speak-image-carousel').slick({
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
      infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function submitForm() {
//  var companyName = document.getElementById('companyName').value;
//  var name = document.getElementById("name").value;
//  var email = document.getElementById("email").value;
//  var mobile = document.getElementById("mobile").value;
//  var budget = document.getElementById("budget").value;
//  var domain = document.getElementById("domain").value;
//  var extraData = document.getElementById("extraData").value;
//  var radioData = document.querySelector('input[name = "radiogroup"]:checked').value;
  data = {
    "title": document.getElementById("name").value + " " + document.getElementById('companyName').value + " " +
      document.getElementById("email").value + " " + document.getElementById("mobile").value + " " +
      document.getElementById("budget").value + " " + document.getElementById("domain").value + " " +
      document.getElementById("extraData").value + " " + document.querySelector('input[name = "radiogroup"]:checked').value
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", "https://shoptrade-721b58.pipedrive.com/v1/deals?api_token=2caebcab854083c73a000e09ddc0f22e34a096ed", false);
  xmlHttp.setRequestHeader('Accept', 'application/json')
  xmlHttp.setRequestHeader('Content-Type', 'application/json')
  xmlHttp.send( JSON.stringify(data) );
}

// $(function () {
//   $('#constact_us_form').parsley().on('field:validated', function() {
//     var ok = $('.parsley-error').length === 0;
//     $('.bs-callout-info').toggleClass('hidden', !ok);
//     $('.bs-callout-warning').toggleClass('hidden', ok);
//   })
//   .on('form:submit', function() {
//     return false; // Don't submit form for this demo
//   });
// });