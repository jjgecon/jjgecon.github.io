// JS for expanding/collapsing abstract sections in research.html
$(document).ready(function() {
  $('.abstract-toggle-btn').on('click', function() {
    var target = $(this).attr('data-target');
    $(target).slideToggle(200);
    var btnText = $(this).text().trim();
    if (btnText === 'Abstract') {
      $(this).text('Hide Abstract');
    } else {
      $(this).text('Abstract');
    }
  });
});
