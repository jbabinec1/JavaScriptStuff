var api_key = "38c31f7a0bb41814033982a44731529c";


$(function(){
   var loc; 
  
  $.getJSON('http://ipinfo.io', function(d){
    
    loc = d.loc.split(",");   
     
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
               + loc [0] + '&lon=' + loc[1] +  '&APPID=' + api_key, function(wd){
      var fTemp; 
      var kTemp;
      var cTemp; 
      var tempSwap = true; 
      
      
              var currentLocation = wd.name;
              var currentWeather = wd.weather[0].description;
              
              var currentTemp = wd.main.temp;
      var high = wd.main.temp_max;
      var low = wd.main.temp_min; 
    var windSpeed = wd.wind.speed;
      
  fTemp = (currentTemp*(9/5)-45.967).toFixed(2);
        
        cTemp =  (kTemp - 273).toFixed(2);
      
   $('#currentLocation').html(currentLocation);
      $("#currentWeather").html(currentWeather);
      
      $("#fTemp").html(fTemp + "&#8457;");
      
      $("#fTemp").click(function (){
        if(tempSwap===false) {
          $("#fTemp").html(cTemp + "&#x2103;" );
          tempSwap = true; 
        }
        else {
          $("#fTemp").html(fTemp);
          tempSwap = false; 
        }
      }); 
      
    windSpeed = (2.237 * (windSpeed)).toFixed(1);  $("#windSpeed").html(windSpeed + "mph");
    
      if (fTemp<17) {
      
  $("h2").prepend('<div> <img src =http://openweathermap.org/img/w/10d.png></div>');   
      
      }
      
      else if(fTemp>18){
        
      $("h2").prepend('<div> <img src =http://openweathermap.org/img/w/01d.png></div>');  }
    });
});
}); 