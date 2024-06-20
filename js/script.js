//function to convert celcius to farenheit
celciusfarenheit = () =>{
  let input = document.getElementById('inputCelcius').value;
  let hasil = (input*9/5)+32;
  document.getElementById('hasilFarenheit').value = hasil;

  if (input === '' || isNaN(input)) {
    alert('Masukkan nilai Celcius yang valid.');
    document.getElementById('hasilFarenheit').value = '';
    return;
}
}
//function to convert farenheit to celcius
farenheitcelcius = () =>{
  let input2 = document.getElementById('inputFarenheit').value;
  let hasil2 = (input2-32)*5/9;
  document.getElementById('hasilCelcius').value = hasil2;

  if (input2 === '' || isNaN(input2)) {
    alert('Masukkan nilai Farenheit yang valid.');
    document.getElementById('hasilCelcius').value = '';
    return;
}
}
//function to reserve
function myFunction() {
  var x = document.getElementById("hilang");
  var y = document.getElementById("muncul");
  if (x.style.display === "none" && y.style.display === "block") {
  x.style.display = "block";
  y.style.display = "none";
  } 
    else {
    x.style.display = "none";
    y.style.display = "block";
    document.getElementById('inputCelcius').value = '';
    document.getElementById('inputFarenheit').value = '';
    document.getElementById('inputKalkulasi').value = '';
    document.getElementById('hasilFarenheit').value = '';
    document.getElementById('hasilCelcius').value = '';
    document.getElementById('inputKalkulasi2').value = '';
    }
}

// Function to display calculation formula
function calculasiOnCel() {
  var resultCel = document.getElementById('inputCelcius').value;
  if(resultCel !== '') {
      var farValue = celciusfarenheit(parseFloat(resultCel));
      var calculationText = "Rumus untuk mengonversi suhu dari Celsius ke Fahrenheit adalah: F = (" + resultCel + " * 9/5) + 32 ";
      document.getElementById('inputKalkulasi').value = calculationText;
  }
}

function calculasiOnFar() {
  var resultFar = document.getElementById('inputFarenheit').value;
  if(resultFar !== '') {
      var celValue = farenheitcelcius(parseFloat(resultFar));
      var calculationText2 = "Rumus untuk mengonversi suhu dari Fahrenheit ke Celcius adalah: C = ("+ resultFar + " - 32) * 5/9 " ;
      document.getElementById('inputKalkulasi2').value = calculationText2;
  }
}
document.getElementById('btnKonversi').addEventListener('click', calculasiOnCel);
document.getElementById('btnKonversi2').addEventListener('click', calculasiOnFar);

//function to validate form