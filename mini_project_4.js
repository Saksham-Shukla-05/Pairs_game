var randomImage = ["https://images.unsplash.com/photo-1480604164043-6de5093e1675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8OTI4MDcxfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", "https://plus.unsplash.com/premium_photo-1695281399686-087a07cdc39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://plus.unsplash.com/premium_photo-1677474827200-eadd7f79c24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1695829955677-7a1223980ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1695968699604-defce4d13128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"]


var getBox = document.querySelectorAll(".box")
var hideBox = document.querySelectorAll(".box-content")
var stickPic = document.querySelectorAll(".pic")
var points = document.getElementById("mypnts")
var time = 60;
var timer = document.getElementById("timer")
var flag = 0
var pts=0
var prevClickedBox = null;
var firstClickedBox = null;

function settimer(){
    time--
    timer.innerHTML="Time left "+time
if(time>0){
    setTimeout(settimer,1000)
}
if(time<1){
    document.getElementById("gameover").innerHTML="Game-Over"
    getBox.forEach(function(gameover){
        gameover.style.pointerEvents = 'none'
    })
}
}

settimer()

getBox.forEach(function (show) {
    show.addEventListener("click", function () {
        var boxContent = show.querySelector(".box-content");
        
        if (prevClickedBox !== null && prevClickedBox !== show) {
            var prevBoxContent = prevClickedBox.querySelector(".box-content");
            prevBoxContent.style.transform = "rotateY(0deg)";
        }
        
        if (boxContent.style.transform === "rotateY(180deg)") {
            boxContent.style.transform = "rotateY(0deg)";
        } else {
            boxContent.style.transform = "rotateY(180deg)";
        }
        
        if (firstClickedBox === null) {
            firstClickedBox = show;
        } else {
            if (firstClickedBox.childNodes[1].children[1].children[0].src === show.childNodes[1].children[1].children[0].src) {
                console.log("Cards have the same src.");
                prevBoxContent.style.transform = "rotateY(180deg)";
                pts+=10
                console.log(points.innerHTML);
                setTimeout(() => {
                    points.textContent=pts
                    generateImage()
                    prevBoxContent.style.transform = "rotateY(0deg)";
                }, 1000);
            } else {
                console.log("Cards have different src.");
                pts-=5
                points.textContent=pts
            }
            firstClickedBox = null;
        }
        
        prevClickedBox = show;

    });
});




function generateImage(){
    stickPic.forEach(function (dets) {
        dets.src = (randomImage[Math.floor(Math.random() * randomImage.length)])
    })
}

generateImage()

