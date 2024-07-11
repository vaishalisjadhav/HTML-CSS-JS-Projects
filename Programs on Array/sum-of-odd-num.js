const numbers = [5,8,10,20,7,13]
let sum = 0
for (let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1){
        sum+= numbers[i]
    }
}
console.log(`Sum is ${sum}`)