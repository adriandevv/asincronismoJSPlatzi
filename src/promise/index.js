const promise = new Promise( (resolve,reject)=>{
    resolve('hey!');
})

const cows = 9;

const countCows = new Promise((resolve, reject)=>{
    if(cows > 10){
        resolve(`we've ${cows} cows in the farm`)
    }else{
        reject(`there isn't cows cows in the farm `)
    }
})

countCows.then(result =>{
    console.log('====================================');
    console.log(result);
    console.log('====================================');
}).catch(error =>{
    console.log('====================================');
    console.error(error);
    console.log('====================================');
}).finally(()=>{
    console.log('fullfilled')
})