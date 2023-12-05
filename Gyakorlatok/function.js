/*const a =6
const b =7457

if (a>b) {console.log(a)
    
} else {console.log(b)
    
}

function masodpercperc(a) {
    return a*60
    }
console.log(masodpercperc(17))


function mindigegyelkevesebb(a) {
 let szam =[]
    if (a>0) {szam.push(-1)
    
 } else {szam.push(+1)
    
 }

 return parseInt(szam)+a

    }
console.log(mindigegyelkevesebb(0))


function triangleare(a,b) {

    return (a*b)/2
    
}
console.log(triangleare(7,4))


function agetodays(a) {
 szamitas= a*365
    return szamitas
}
console.log(agetodays(20))
*/ let pacienseklista2 = [
  (Szamanta = {
    nev: "Szamanta",
    kor: 25,
    magassag: 158,
    suly: 56,
    id: 8,
    insurance: true,
  }), // Bensedin
  (Janos = {
    nev: "János",
    kor: 37,
    magassag: 161,
    suly: 57,
    id: 9,
    insurance: true,
  }), // null
  (Illes = {
    nev: "Illés",
    kor: 75,
    magassag: 218,
    suly: 130,
    id: 10,
    insurance: false,
  }), // Brufen;
];
let korhaz = require("../Database/database2");

let pacienseklista = [];

for (let index = 0; index < korhaz.doktorok.length; index++) {
  pacienseklista.push(...korhaz.doktorok[index].paciensek);
}

function gyogyszereloszto(betegek) {
  for (let i = 0; i < betegek.length; i++) {
    console.log({ nev: betegek[i].nev });

    if (betegek[i].magassag > 175) {
      console.log("Brufen");
    }

    if (betegek[i].suly < 70 && betegek[i].kor < 30) {
      console.log("Bensedin");
    }

    if (betegek[i].suly > 100 && betegek[i].insurance === true) {
      console.log("Glucophage");
    }

    if (betegek[i].kor > 60 && betegek[i].insurance === true) {
      console.log("Diclophen");
    }

    if (
      !(
        betegek[i].magassag > 175 ||
        (betegek[i].suly < 70 && betegek[i].kor < 30) ||
        (betegek[i].suly > 100 && betegek[i].insurance === true) ||
        (betegek[i].kor > 60 && betegek[i].insurance === true)
      )
    ) {
      console.log("nincs gyogyszer");
    }
    console.log("\n");
  }
}

gyogyszereloszto(pacienseklista);
