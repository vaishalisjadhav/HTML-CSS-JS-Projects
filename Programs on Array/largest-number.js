const marks = [10,20,30,40,50]
let largest = marks[0]
for(const num of marks)
{
    if(num > largest){
        largest = num
    }
}
console.log(largest)