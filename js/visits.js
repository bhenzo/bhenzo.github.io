//Pequeño contador de visitas que hice servido en heroku
let hitVisit = (location) => {
    if (!location){
        console.log("contador de visitas: ingrese location");
        return ;
    }
    $.ajax({
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        url: "//bhenzo.herokuapp.com?location="+location,
        success: function(jsondata){
            console.log("Visita registrada")
           
        },
        error: function(){
            console.log("error en registrador de visitas")
        }
     })
}