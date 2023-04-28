//1
// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>resolve("done!"), 1000);
// });

// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>reject(new Error("Whoops!"), 1000));
// });

// promise.then(
//     result => alert(result),
//     error => alert(error)
// );


//2
// new Promise(function(resolve, reject){
//     setTimeout(()=>resolve(1), 1000);
// }).then(function(result){
//     alert(result);
//     return result * 2;
// }).then(function(result){
//     alert(result);
//     return result * 2;
// }).then(function(result){
//     alert(result);
//     return result * 2;
// });

//3
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig',
// ];

// let requests = urls.map(url => fetch(url));

// Promise.all(requests)
// .then(responses => responses.forEach(
//     response => alert(`${response.url}: ${response.status}`)
// ));

//4
// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await.response.json();

// alert(commits[0].author.login);


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
// .then(response => response.json())
// .then(commits => alert(commits[0].author.login));


//5
// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// });

// let result = await response.json();
// alert(result.message);


//6
// let controller = new AbortController();
// setTimeout(() => controller.abort(), 1000);

// try{
//     let response = await fetch('article/fetch-abort/demo/hang', {
//         signal: controller.signal
//     });
// } catch (err){
//     if(err.name == 'AbortError') {
//         alert("Перервано!");
//     } else {
//         throw err;
//     }
// }


//7
let xhr = new XMLHttpRequest();

xhr.open('GET', '/article/xmlhttprequest/example/json');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function(){
    let responseObj = xhr.response;
    alert(responseObj.message);
};