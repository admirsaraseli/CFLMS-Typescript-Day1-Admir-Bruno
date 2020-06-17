var table = [1,2,3,4,5,6,7,8,9,10];

let val = '';
for (let i = 0; i < 10; i++) {

  for (let j = 0; j < 10; j++) {
    val += `${table[i]} * ${table[j]} = ${table[i]*table[j]} <br> `; 
  }
  
  val += '<hr>';
}

document.getElementById('result').innerHTML = val;