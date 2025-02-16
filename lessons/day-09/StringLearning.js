// Slash
let str = '   Day la   bai hoc \'hay\'';
//console.log(str);

//Length
//console.log(`Length: ${str.length}`)

//CharArt -> Lay ra ky tu
//console.log(str.charAt(0));

//Print each character
for (let index = 0; index < str.length; index++) {
    //console.log(str.charAt(index));
}

// Trim: eliminate spaces -> không thay đổi trực tiếp trên chuỗi gốc, se clone tra chuoi khac
let trimStr = str.trim();
//console.log(trimStr);

//Replace
let targetStr = 'tMomi mnay gmap mnmhamu 7MH';
let decodedStr = targetStr.replaceAll("m", "");
//console.log(decodedStr);

//Regex: tim tat ca chu "m"
let regexStr = targetStr.replace(/m/gi, ""); // g: global, i: in hoa hoac in thuong
//console.log(regexStr);

let uiStr = '200mins';
//([a-z]/gi, "") -> Lay tay tat ca chu tu a -> z va chu hoa hoac chu thuong
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "") //shift + 6: ^, /[^0-9]/g:khong phai so thi se loai bo
//console.log(uiStrWithNum + 1);

// +, concat() - concatenating
let firstString = 'Hello';
let SecondString = ', I am Ai';
let combinedString = firstString.concat(SecondString).concat('??') + ' ^-^';
//console.log(combinedString);

//Sub string: cat de lay 1 phan tu chuoi
let strToBeCut = 'Learning Js';
console.log(strToBeCut);

//Inclusive
let startIndex = 0;

// Exclusive
let endIndex = 5;

let substring = strToBeCut.substring(startIndex, endIndex);
console.log(`substring: ${substring}`);

//Split -> cut string
console.log(strToBeCut.split('ing'));
