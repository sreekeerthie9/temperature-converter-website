document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearform;

function tempConvert(){

    var fahrenheit=document.getElementById("fahrenheit").value;
    var celcius=document.getElementById("celcius").value;
    var kelvin=document.getElementById("kelvin").value;
    if (fahrenheit != ''){
        celcius= (parseFloat(fahrenheit)-32)/1.8;
        kelvin=(parseFloat(fahrenheit)+459.67)/1.8;
    }
    else if (kelvin != ''){
        fahrenheit=(parseFloat(kelvin)*1.8)-459.67;
        celcius=parseFloat(kelvin)-273.15;
    }
    else{
        fahrenheit=(parseFloat(celcius)*1.8)+32;
        kelvin=parseFloat(celcius)+273.15;
    }

    document.getElementById('fahrenheit').value= parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celcius').value= parseFloat(celcius).toFixed(1);
    document.getElementById('kelvin').value= parseFloat(kelvin).toFixed(1);
}

function clearform(){
    document.getElementById('fahrenheit').value='';
    document.getElementById('celcius').value='';
    document.getElementById('kelvin').value='';
}