const IMAGES = document.querySelectorAll("img");

for( let i = 0; i<IMAGES.length; i++) {
    let imgScr = IMAGES[i].getAttribute("src");
    imgScr = imgScr.slice(0, -8);
    console.log(imgScr);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}