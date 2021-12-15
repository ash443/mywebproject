let ImagesArray = ["./images/bridge-4636745_1920.jpg ","./images/lucerne-4285441_1920.jpg","./images/lucerne-4340262_1920.jpg"];

let ImagesArray2 = ["./images/mountain-425134_1920.jpg","./images/zermatt-3304666_1920.jpg","./images/train-62849_1280.jpg"];

let ImagesArray3 = ["./images/switzerland-interlaken-hoheweg.jpg ","./images/interlaken_lake_thun.jpg","./images/switzerland-interlaken-top-attractions-hike-schynige-platte-trails.jpg"];

let ImagesArray4 = ["./images/switzerland-zurich-top-attractions-bahnhofstrasse-bahnfof.jpg ","./images/zurich-opera-house-2213766_1920.jpg","./images/zurich-bridge-6631572_1920.jpg","./images/christmas-1928599_1920.jpg"];




// automatic slide to display the images
let ImageNumber = 0;
let difference = ImagesArray.length -1;

let delay = 2000; // 2 seconds

let a = 1

setInterval("ChangeImages(-1)", delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction)
{//begin function
    
    ImageNumber = ImageNumber + direction;

    if(ImageNumber > difference)
    {
        ImageNumber = 0;
    }

    if(ImageNumber < 0)
    {
        ImageNumber = difference;
    }
    
    document.getElementById('slideshow').src = ImagesArray[ImageNumber];
    document.getElementById('slideshow2').src = ImagesArray2[ImageNumber];
    document.getElementById('slideshow3').src = ImagesArray3[ImageNumber];
    document.getElementById('slideshow4').src = ImagesArray4[ImageNumber];

}