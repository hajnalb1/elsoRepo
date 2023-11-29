
const  korhaz = require ('../Database/database2')

let paciensek=[]
for (let index = 0; index < korhaz.doktorok.length; index++) {
   paciensek.push(...korhaz.doktorok[index].paciensek)
}

const gyogszerObjektum=[] 


const paciens=paciensek[1]

gyogszerObjektum.push({neve:paciens.nev})
    
if (parseInt(paciens.magassag)>175 ) 
gyogszerObjektum.push('Brufen')
    
if (parseInt(paciens.suly)< 70 && paciens.kor<30)     
gyogszerObjektum.push('Bensedin')
    
if (parseInt(paciens.suly)>100 && paciens.insurance===true) 
gyogszerObjektum.push('Glucophage')
    
if (paciens.kor>60 && paciens.insurance===true) 
gyogszerObjektum.push('Diclophen')

console.log(gyogszerObjektum.length)



 
console.log(gyogszerObjektum)