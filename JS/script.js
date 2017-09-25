const IMAGES = document.querySelectorAll("img");

function makeSrcset(imgScr) {
    let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++) {
      markup[i] = imgScr + "-" + width + ".jpg" + width + "w";
      width+=400;
    }

    return markup.join();
}


for( let i = 0; i<IMAGES.length; i++) {
    let imgScr = IMAGES[i].getAttribute("src");
    imgScr = imgScr.slice(0, -8);
    let srcset = makeSrcset(imgScr);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}