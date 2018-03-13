$(document).ready(() => {
  $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
  });
  $('.slider').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    groupCells: 2,
  });
  $('#btn').click(() => {
    $('#info').slideDown(600);
  });
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if ((windowScroll + windowHeight) == documentHeight) {
      $(".app-inner").clone().appendTo(".apps"); ;
    }
  })
});
