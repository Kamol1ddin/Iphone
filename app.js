const iphone = document.querySelector('.iphone')
const iImg = document.querySelector('.iphone img')
const img = document.querySelectorAll('.iColor img')

const link = ['https://avatars.mds.yandex.net/get-mpic/4441046/img_id2634290292785675896.jpeg/orig','https://avatars.mds.yandex.net/get-mpic/2008455/img_id1913451893841947993.jpeg/orig','https://avatars.mds.yandex.net/get-mpic/4397006/img_id8361156548026851557.jpeg/orig']

img[0].addEventListener('click', () =>{
    iImg.setAttribute('src', link[0])
})
img[1].addEventListener('click', () =>{
    iImg.setAttribute('src', link[1])
})
img[2].addEventListener('click', () =>{
    iImg.setAttribute('src', link[2])
})