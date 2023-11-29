const lista = [
    'a' ,
    'b' ,
    'c' ,
    'd' ,

]
const egy = 1 ;


const ember1 = {
    magassag: '13 cm' ,
};

const ember2 = {
    magassag: '15 cm' ,
}
let paciense= [ember1,ember2];







const doktor = {
    neve:'guszi',
    paciensek,
}
const korhaz = {
    neve:'korhaz',
    doktorok: 
    [doktor]
}



const korhazrossz={
    neve:'szarhaz',
    doktorok:[
        {neve:'guszi',
        paciensek:[
            {
                neve:'Bence',
                Magassaga:'170 cm',
                Sulya:'70 kg',
                Id:'2' ,
            },
            {neve:'Kaco',
            Magassaga:'170 cm',
    Sulya:'70 kg',
    Id:'2' ,
            },
        ]
    }, {neve:'peti' ,
        paciensek: [
            {
                neve:'Mari',
                Magassaga:'170 cm',
                Sulya:'70 kg',
                Id:'2' ,
            },
            {neve:'Cicok',
            Magassaga:'170 cm',
            Sulya:'70 kg',
            Id:'2' ,}
        ]
}
    ]
        
    
}

console.log(korhazrossz.doktorok[0].paciensek[0].neve);

























