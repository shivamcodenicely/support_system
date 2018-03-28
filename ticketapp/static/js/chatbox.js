$('.uk-button').on('click', function (){
  $('.uk-section').toggleClass('uk-dark uk-light');

  $('.uk-container > .uk-card').toggleClass('uk-card-default uk-card-secondary');

  $('html').toggleClass('uk-background-muted uk-background-secondary');
});

//# sourceURL=pen.js