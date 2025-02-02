let images =["./img/ga.jpg", "./img/co.jpg"]

let container = document.getElementById('imageContainer');

images.forEach(function(image){
    let imgElemt= document.createElement("img")
    imgElemt.src = image
    container.appendChild(imgElemt)

})

/*
var img = document.createElement('img')
img.src = './img/ga.jpg'
document.body.appendChild(img)
*/

