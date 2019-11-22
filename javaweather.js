 
$(document).ready(function(){
   // $("#clickbut").click(ab);
   var a;
    function ab()
       {
        var city = $("#citytext").val();        //getting city name
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+a+
                "&APPID=d22bdd8f42f4fc713ac197a8cbf0eaec",              // url and key
                type:"GET",
                datatype:"jsonp",           //data type
                success:function(data)
                {
                 console.log(data);
                    document.getElementById("feedback").innerHTML="";                     //printing feedback
                    document.getElementById("valuelabel").innerHTML=data.main.temp;         // temperature
                   document.getElementById("cloud").innerHTML=data.weather[0].main;         // cloud
                    document.getElementById("citylabel").innerHTML=data.name+" , "+data.sys.country;        //country and place
                var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";                //getting cloud image link
                document.getElementById("icon").src=icon;                                               //setting src
                //console.log(icon);

                    
                },
                error:function(val)                             // feedback when error
                {
                    document.getElementById("feedback").innerHTML="City not Found";                     //printing feedback
                }
                
            });
        }
        $("#cel").click(c);                 //calling function to show temperature
       function c()
       {
        $("#far").css("background-color", "yellow");                //setting button color
        $("#cel").css("background-color", "red");
        a="metric";
        ab();                                                               //calling main method

       }
       $("#far").click(f);
       function f()
       {
        $("#far").css("background-color", "red");
        $("#cel").css("background-color", "yellow");
        a="imperial";
        ab();
       }
        
   
});
