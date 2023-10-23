function randomSuhu(){
    let suhu = Math.floor(Math.random() * 43) + 1;
    return suhu;
}

window.addEventListener("load", function(e){

    $("#dht11").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">DHT11</div>
                            <div class="col suhuSensor" id="suhuDHT11">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>`;
        $("#rowSuhu").append(suhuDetail);
    });

    $("#ds18b20").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">DS18B20</div>
                            <div class="col suhuSensor">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>
                            `;
        $("#rowSuhu").append(suhuDetail);
    });

    $("#lm35").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">LM35</div>
                            <div class="col suhuSensor">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>`;
        $("#rowSuhu").append(suhuDetail);
    });

    $("#ntc").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">NTC Thermistor</div>
                            <div class="col suhuSensor">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>`;
        $("#rowSuhu").append(suhuDetail);
    });

    $("#rtd").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">RTD</div>
                            <div class="col suhuSensor">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>`;
        $("#rowSuhu").append(suhuDetail);
    });

    $("#termokopel").click(function() {
        let suhuDetail = `<div class='row'>
                            <div class="col namaSensor">Termokopel</div>
                            <div class="col suhuSensor">${randomSuhu()}°C</div>
                            <div class="col-1 right-align"><i class="material-icons hideSensor">visibility_off</i></div>
                            <div class="col-1 right-align"><i class="material-icons delete">delete</i></div>
                            <hr style="margin:30px 0px 30px 0px;">
                        </div>`;
        $("#rowSuhu").append(suhuDetail);
    });

    $("div").on('click','.hideSensor',function(){

        $(this).text('visibility').removeClass('hideSensor').addClass('showSensor');
        $(this).parent('div').parent('div').find('.suhuSensor').addClass('invisible');
        return false;
    
    });

    $("div").on('click','.showSensor',function(){

        $(this).text('visibility_off').removeClass('showSensor').addClass('hideSensor');
        $(this).parent('div').parent('div').find('.suhuSensor').removeClass('invisible');
        return false;
    
    });

    $("div").on('click','.delete',function(){
        $(this).parent('div').parent('div').empty();
    });

});