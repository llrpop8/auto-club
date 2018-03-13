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
  let showMore = true;
  $('#btn').click(() => {
    if (showMore) {
      $('#info').slideDown(600);
      $('#btn').html('less');
      showMore = false;
    } else {
      $('#info').slideUp(600);
      $('#btn').html('more');
      showMore = true;
    }
  });
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if ((windowScroll + windowHeight) == documentHeight) {
      $(".app-inner").clone().appendTo(".apps");
    }
  })
});
