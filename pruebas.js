// function countHours(year, holidays){
    
//     //0 to sunday 7 to Saturday

//     const suma = holidays.reduce((acc, cur)=>{
//         let fullholiday = cur.split('/').join('-');
//         let date = new Date(`${year.toString()}-${fullholiday}`);
        
//         const day = date.getDay();
//         if(day!==0 && day!==6){
//             return acc+2
//         }
//         return acc;
//     }, 0)
//     return suma
    
// }
// const year = 2022;
// const holidays = ['01/06', '04/01', '12/25']

// //console.log(countHours(year, holidays))

// console.log(countHours(2023, ['01/06', '04/01', '12/25']))

// function fitsInOneBox(boxes) {
//     let flag =true
//     const first = [...boxes.sort((a,b)=>{
//         if(a.l===b.l){
//             flag=false;
//         }
//         return a.l-b.l
//     })];

    
//     const sec = [...boxes.sort((a,b)=>{
//         if(a.w===b.w){
//             flag=false;
//         }
//         return a.w-b.w
//     })];
    
//     const thi = [...boxes.sort((a,b)=>{
//         console.log(a.h,b.h)
//         if(a.h===b.h){
//             flag=false;
//         }
//         return a.h-b.h
//     })]
    
//     return (JSON.stringify(first) === JSON.stringify(sec) && JSON.stringify(sec) ===JSON.stringify(thi) && flag) 
    
// }

//   console.log(fitsInOneBox([
//     { l: 2, w: 2, h: 2 },
//     { l: 3, w: 3, h: 12 },
//     { l: 1, w: 1, h: 10 }
    
//   ]))

//   console.log(fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 }
//   ]))