// Write your solution in this file!
const employee = {name : "Tina" , address: "543Boulevard"}

function updateEmployeeWithKeyAndValue(obj, key, value)
{
    const NewEmployeeObj={...obj}
    NewEmployeeObj[key]=value;
    return NewEmployeeObj;
}
console.log(updateEmployeeWithKeyAndValue(employee,"name", "Parker"))

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value)
{
    obj[key]=value;
    return obj;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Piers"));
console.log(employee)

function deleteFromEmployeeByKey(obj, key)
{
    const newObj={...obj}
    delete newObj[key];
    return newObj;
}

console.log(deleteFromEmployeeByKey(employee, "name"));

function destructivelyDeleteFromEmployeeByKey(obj, key)
{
    delete obj[key];
    return obj;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "address"))
