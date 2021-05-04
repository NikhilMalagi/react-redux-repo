// const arr = [0,0,1,1,1,2,3,3,3,3,4,1,7,4,6,8,9,10,9,8,6,5];

// // uniq -> asc

// function getAscArray(arr){
//     const obj = {};

//     for(let i=0;i<arr.length;i++){
//         if(!obj[arr[i]]) obj[arr[i]] = true
//     }

//     const keyArr = obj.keys()


// }

// console.log(getAscArray(arr))

const arr=[1,2,3,4,5,6,7,8,9,10,11,12];

// no - 13


function getAddCombination(arr){
    // const obj = {}
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            const sum = arr[i] + arr[j]
            if(sum === 13){
                console.log(arr[i] +", " +arr[j])
            }
        }
    }
}
// function getAddCombination2(arr){
//     // const obj = {}
//     for(let i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             const sum = arr[i] + arr[j]
//             if(sum === 13){
//                 console.log(arr[i] +", " +arr[j])
//             }
//         }
//     }
// }

getAddCombination(arr)


