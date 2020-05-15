 $(document).ready( function(){
    $("#btn").click(function(){
        var zip = $("#zip").val();
        $.ajax({
            type: 		"GET",
            url: 		"weather.php",
            data: 		"zip="+zip,
            beforeSend: function(){
                spi=`<div class="spinner-border spinner-border-sm" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow spinner-grow-sm" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>`
                $("#B").html(spi);
                },
            error: 	 function(xhr, status, error) {
                alert( "Error Message:  \r\nNumeric code is: "  + xhr.status + " \r\nError is " + error);   },
            success: 	 function(result){
                try{
                    r = JSON.parse(result);
                }
                catch (e) {
                    res = "Invalid Zip code";
                    $("#B").html(res);
                }
                     r = JSON.parse(result);
                    res = "<br>City: "		   + r.name +  " "		 +
                    "<br>Temperature: " + r.main.temp + "&deg;C " +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "Coordinates: " + r.coord.lon + ","+r.coord.lat+
                    "<br>Weather: "+ r.weather[0].main +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "Description: " + r.weather[0].description +
                    "<br>Humidity: " + r.main.humidity +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "Wind Speed: " + r.wind.speed  +
                    "<br>Sunrise: " +(new Date(r.sys.sunrise * 1000)).toLocaleString()+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
                    "Sunset: " +(new Date(r.sys.sunset * 1000)).toLocaleString()  ;

                    $("#B").html(res);


            }
        });
    });
});
