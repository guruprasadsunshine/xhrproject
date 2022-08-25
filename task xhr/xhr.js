const xhr = new XMLHttpRequest();

xhr.open("Get","https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType ="json";

xhr.onload = function displayResult()
{
const countries = xhr.response;
console.log(countries.length);
for(let index in countries){
console.log(+index+1,countries[index].name.common)
}
}













