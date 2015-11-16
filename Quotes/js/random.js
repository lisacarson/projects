$(document).ready(function() {
  quotes();


function quotes() {

  var Quote = ["People assume that time is a strict progression of cause to effect, but *actually* from a non-linear, non-subjective viewpoint - it's more like a big ball of wibbly wobbly... time-y wimey... stuff.", "You want weapons? We're in a library. Books are the best weapon in the world. This room's the greatest arsenal we could have. Arm yourself!", "We're all stories, in the end.", "One may tolerate a world of demons for the sake of an angel.", "You know, the very powerful and the very stupid have one thing in common: they don't alter their views to fit the facts; they alter the facts to fit their views.", "I am and always will be the optimist, the hoper of far-flung hopes and the dreamer of improblable dreams.", "As we learn about each other, so we learn about ourselves.", "Kathy Nightingale:  What's good about sad?   Sally Sparrow:  It's happy for deep people.", " I love humans. Always seeing patterns in things that aren’t there.", "The universe is big. It's vast and complicated and ridiculous. And sometimes—very rarely—impossible things just happen and we call them miracles."];



randomQuote = Quote[Math.floor(Math.random()*Quote.length)];
$('.doctor').text(randomQuote);
 }

$("#button").on("click", function () {
  quotes();
});
});
