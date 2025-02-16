//CREATE
const emergencyList = new Map([
    ['113','Police Dept'],
    ['114','Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
    ['116', ',,,'],
])

//READ values
//console.log(emergencyList.get('113'));

//Check if key is existing
const is117 = emergencyList.has('117');
//console.log(is117);

//Loop over all keys then get the values out
for (const key of emergencyList.keys()) {
    //console.log(`${key}: ${emergencyList.get(key)}`);
}

//Loop over values without using keys
for (const value of emergencyList.values()) {
    //console.log(`${value}: ${emergencyList.get(value)}`);
    //console.log(`value: ${value}`);
}

//UPDATE/ADD -> Update: value/ add: add key and value
emergencyList.set('117', 'Some thing else');
console.log(emergencyList);

//DELETE
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete('117');
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);



