const getBtn = document.getElementById('getBtn');
const get404Btn = document.getElementById('get404Btn');
const get200Btn = document.getElementById('get200Btn');
const postBtn = document.getElementById('postBtn');
const estadoRequest = document.getElementById('estadoRequest');


function httpRequest(metodo, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(metodo, url);
    xhr.onload = function() {
        console.log(xhr.status);
        var responseData = xhr.response;
        console.log(responseData);
    }
    xhr.onreadystatechange = function() {
        if (xhr.status == 200) {
            estadoRequest.innerHTML = 'yay!';
        }
        if (xhr.status = 404) {
            estadoRequest.innerHTML = ''
        }
    }
    xhr.send();
}


function getData() {
    httpRequest('GET', 'https://reqres.in/api/users?page=2')
}

function get404() {
    httpRequest('GET', 'https://reqres.in/api/users/23')
}

function get200() {
    httpRequest('GET', 'https://reqres.in/api/users/12')
}

function postData() {
    httpRequest('POST', 'https://reqres.in/api/users/', {
        name: "Morpheus",
        job: "leader"
    })
}
getBtn.addEventListener('click', getData);
get404Btn.addEventListener('click', get404);
get200Btn.addEventListener('click', get200);
postBtn.addEventListener('click', postData)