
let namedata: string[] = ['Admir', 'Bruno', 'Fasy',];

for (let index in namedata) {
   console.log(index);
};

for (let value of namedata) {
   console.log(value);
};


for (let el in namedata) {
   console.log(el, namedata[el]);
};