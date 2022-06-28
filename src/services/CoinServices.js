const nodePrice = document.getElementById('price');
const url = 'https://economia.awesomeapi.com.br/last/EUR-BRL';

function append(price){
  nodePrice.innerHTML = 'R$ ' + price;
}


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let price = data.EURBRL.ask;
  append(price);
  // return price.map(function(coin) {
  //   // append(li, img);
  // })
})
.catch(function(error) {
  console.log(error);
});