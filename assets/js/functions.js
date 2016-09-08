
// back to top

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn()
    } else {
      $(".scroll-to-top").fadeOut()
    }
  });
  $(".scroll-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false
  })
});

// anchor link

anchors.options = {
  placement: 'right',
  visible: 'hover'
};
anchors.add('h2, h3, h4');


// search box

$('#SS').on('shown.bs.modal', function () {
  $('#search-input').focus()
})


// tooltip

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


// toc

$(document).ready(function() {
  $('#toc').toc();
  $("#hide").show();
  $("#show").hide();
  $('#hide').click(function(){
    $('.toc-list').hide();
    $("#hide").hide();
    $("#show").show();
  });
  $('#show').click(function(){
    $('.toc-list').show();
    $("#show").hide();
    $("#hide").show();
  });
  var checkLang = document.getElementsByTagName('html')[0].getAttribute('lang');
  if (checkLang == 'th') {
    $('#tochead').addClass('toc-head-th');
    $('#tochead').removeClass('toc-head');
    $('ul.toc-list').addClass('toc-list-th');
    $('ul.toc-list').removeClass('toc-list');
    $('ol.toc-list').addClass('toc-list-th');
    $('ol.toc-list').removeClass('toc-list');
    $('li.toc-list-item').addClass('toc-list-item-th');
    $('li.toc-list-item').removeClass('toc-list-item');
  }
});
