var quotes = [
'You must do the things you think you cannot do. - Eleanor Roosevelt',
 'What we think, we become. - Buddha',
  'Always do your best. -some guy',
  'Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt' ] 

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length)); 
  
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  
}
  
  
  
  
  
