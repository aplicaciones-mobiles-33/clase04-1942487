const getBtn = document.getElementById('getBtn');
const get404Btn = document.getElementById('get404Btn');
const get200Btn = document.getElementById('get200Btn');
const postBtn = document.getElementById('postBtn');

const estadoRequest = document.getElementById('estadoRequest');
const imgResponse = document.getElementById('imgResponse');

const responseData = document.getElementById('responseData');



function httpRequest(metodo, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(metodo, url);
    
    xhr.onload = function() {
         console.log(xhr.status);
        var responseData = xhr.response;
        console.log(responseData); 
               
    }

    xhr.onreadystatechange = function() {
        if(xhr.status == 200) { //success
            estadoRequest.innerHTML = 'yay!';
            imgResponse.src = '';

            popuplateData(responseData);
            
        }
        if(xhr.status == 404) {
            imgResponse.style.display = 'block';
            imgResponse.src = 'https://media4.giphy.com/media/6uGhT1O4sxpi8/giphy.gif?cid=ecf05e474pmqx13sz4j8dhslg7uln77prv50gapw5tlf1icm&rid=giphy.gif&ct=g';
            estadoRequest.innerHTML = 'Oops! '
        }
    }


    xhr.send();
}


function popuplateData(datos) {
    console.log(datos);
    var usuarios = datos.data; // crea arreglo con datos de usuarios


    

    for(var i = 0; i < usuarios.length; i++){
        console.log(datos[i]);
        //crea elementos
        var newUserDiv = document.createElement('div');
        var userNameTag = document.createElement('p');
        var userEmail = document.createElement('p');
        var imgTag = document.createElement('img');
    
        //añade clases a elementos creatos
        userEmail.classList.add('email');
        userNameTag.classList.add('nombre');
        newUserDiv.classList.add('response');
        imgTag.classList.add('avatar');
        


        //asignar valores a los elementos creados 

        newUserDiv.appendChild(userNameTag);
        newUserDiv.appendChild(userEmail);
        newUserDiv.appendChild(imgTag);

        responseData.appendChild(newUserDiv);
    }
}

function getData() {
   httpRequest('GET', 'https://reqres.in/api/users?page=2');
}
function get404() {
    httpRequest('GET', 'https://reqres.in/api/users/23');
}
function get200(){
    httpRequest('GET', 'https://reqres.in/api/users/12');
}
function postData(){
    httpRequest('POST', 'https://reqres.in/api/users', {
        name: "morpheus", 
        job: "leader"
    })
}


getBtn.addEventListener('click', getData);
get404Btn.addEventListener('click', get404);
get200Btn.addEventListener('click', get200);
postBtn.addEventListener('click', postData);
