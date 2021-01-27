
var addetion = prompt('how do you want your coffee today?');
var noOfCups=prompt('how many cups do you want?')
var greeting;

if (noOfCups > 1 && noOfCups < 3) {
  greeting = 'Congrats you have 15% discount!';
} else if (noOfCups > 3 && noOfCups < 6) {
  greeting = 'You just earned 25% discount on your order!';
} else if (noOfCups >= 7 && noOfCups < 10) {
  greeting = 'Congrats you have 50% discount and a Bagle with each cup :)';
} else {
  greeting = 'somthing wrong with your order!!!';
}

document.write(greeting);
document.getElementById('orderDetail').innerText=addetion
confirm('number of cups:' + noOfCups)