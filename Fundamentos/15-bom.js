//Browser Object Model (BOM)
//Window: el objeto window representa la ventana que contiene un documento DOM

//Navigator - método del BOM
let browser,
  userAgent = navigator.userAgent;

if (userAgent.indexOf('Chrome') > -1) {
  browser = 'Google Chrome';
} else if (userAgent.indexOf('Safari') > -1) {
  browser = 'Apple Safari';
} else if (userAgent.indexOf('Firefox') > -1) {
  browser = 'Mozilla Firefox';
}
alert(`Usted está usando ${browser}`);

//Location
location.reload(); //Recargar la página
location.assign('https://google.com'); //Redireccionar a página
location.replace('https://google.com'); //Redireccionar a página. Con esta puedo volver atrás, con assign no.
location.search('');

//Mandar datos a nueva página
function sendData(data) {
  location.search = data;
}

sendData('Hola');

//History
history.go(1); //Nos movemos adelante en el historial
history.go(-1); //Nos movemos atrás en el historial
