var arr = [{ songName: "Husn", url: "./songs/Husn.webm", img: "./images/husn.png" },
{ songName: "Way back home", url: "./songs/WbH.webm", img: "./images/wbh.jpg" },
{ songName: "Krishna Trance", url: "./songs/Krishna Trance.webm", img: "./images/krishnatrance.jpg" },
{ songName: "Shivers", url: "./songs/Shivers.webm", img: "./images/shivers.jpg" }
]

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio();

var selectedSong = 0; //as no song is playing by default

function mainFunction() {
    var clutter = ""
    
    arr.forEach(function (elem, index) {
        clutter += `<div class="songcard" id=${index}>
    <div class="part1"> 
        <img src=${elem.img} alt="">
        <h4>${elem.songName}</h4>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    // audio.src = arr[dets.target.id].url
    selectedSong = dets.target.id //humne bar bar song lko chalane ke jagah ek var bana li
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
    flag = 1
    mainFunction() 
    audio.play()
})

var flag = 0
play.addEventListener("click", function(){
    if(flag==0){
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-mini-line"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})
forward.addEventListener("click", function(){
    if(selectedSong <= arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})
