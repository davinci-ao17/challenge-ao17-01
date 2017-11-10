var imgHolder = document.getElementById("slider");
var banner = document.getElementById("banner");

var sliderTimer = 2;
var slides = [
    "jobs/jobs-photo1.jpg",
    "jobs/jobs-photo2.jpg",
    "jobs/jobs-photo3.jpg",
    "jobs/jobs-photo4.jpg",
];
var slideCount = slides.length;

var banners = [
    "jobs/jobs-banner.jpg",
    "jobs/jobs-banner2.jpg",
    "jobs/jobs-banner3.jpg",
]

function randomizeBanner(){
    var bannersLenght = banners.length;
    var index = Math.floor(Math.random() * bannersLenght);
    banner.style.backgroundImage = "url(" + banners[index] + ")";
}
randomizeBanner();

var timer = 0;
var slideIndex = 0;
function slider(){
    if(timer >= sliderTimer){
        timer = 0;
        if(slideIndex > (slideCount-1)){
            slideIndex = 0;
        }
        imgHolder.src = "" + slides[slideIndex] + "";
        slideIndex++;
    }else{
        timer += 0.5;
    }
}

setInterval(slider, 500);