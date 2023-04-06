//1
function compareStrings(str1, str2){
    return((str1.length > str2.length) ? 1 : ((str1.length === str2.length) ? 0 : -1));
}

//2
function upperCaseFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//3
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++)
        vowels.includes(str[i]) ? count++ : '';
    return count;
}

//4
function checkSpam(str) {
    let words = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх"];
    str = str.toLowerCase();
    for (let i = 0; i < words.length; i++)
    return (str.includes(words[i].toLowerCase()) ? true : false);
}

//5
function truncate(str, maxLength){
    return(str.length > maxLength ? (str.splice(0, maxLength - 3) + "...") : str);
}