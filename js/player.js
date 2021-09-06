
/*
Player Music  Pure Javascript (ES6 included)  
Author : Waled Kamal Fikrey
Copyrighted Code (Free Used)
*/

// Global Varibales

let playBTN = document.querySelector(".playStopButton");

let DurationTXT = document.querySelector(".DurationTXT");

let CurrentTXT = document.querySelector(".CurrentTXT");

let MyRange = document.querySelector(".MyRange");

let songName = document.querySelector(".songName");

let Author = document.querySelector(".Author");

let Playlist = document.querySelector(".playList ul")

// initialisation Varibales

let mp3Player = document.querySelector(".myAudio");

let myAudioArray = Array.from(document.querySelectorAll("li"));

var Myindex = 0;

// Play Music when be clicked in music List
myAudioArray.forEach(element => {
    element.addEventListener("click", function () {
        if (element.hasAttribute("clicked")) {
            console.log("already clicked");
            Myindex = this.getAttribute("index");
        } else {
            this.setAttribute("clicked", true);
            Myindex++;
            this.setAttribute("index",Myindex);
        }
        for (i = 0; i < myAudioArray.length; i++) {
            myAudioArray[i].classList.remove("active");
        }
        this.classList.add("active");
        MyNewphoto = this.getAttribute("url");
        playBTN.style.backgroundImage = `url(${MyNewphoto})`;
        MyNewSRC = this.getAttribute("src");
        MyNewAuthor = this.getAttribute("author");
        MyNewName = this.innerText;
        songName.innerText = MyNewName;
        Author.innerText = MyNewAuthor;
        mp3Player.setAttribute("src", MyNewSRC);
        setTimeout(() => {
            MyRange.setAttribute("max", mp3Player.duration);
            if (Math.floor(mp3Player.duration / 60) < 10) {
                var zeroD = "0";
            } else {
                var zeroD = "";
            }
            DurationTXT.innerHTML = `${zeroD}${Math.floor(
                mp3Player.duration / 60
            )}:${Math.floor(mp3Player.duration % 60)}`;
        }, 100)
        document.querySelector(".playStopButton").innerHTML =
            "<i id ='play' class='far fa-pause-circle icon play'></i>";
        mp3Player.play();
    })
});

// playFirstMusic in list (Deafult)
mp3Player.setAttribute("src", myAudioArray[0].getAttribute("src"));
songName.innerText = myAudioArray[0].innerText;
Author.innerText = myAudioArray[0].getAttribute("author");
MyPlayerDurationMinutes = Math.floor(mp3Player.duration / 60);

// Check if sound is Finish (change the icon to paused)
mp3Player.addEventListener("ended", () => {
    document.querySelector(".playStopButton").innerHTML =
        "<i id ='play' class='far fa-play-circle icon play'></i>";

        mySond = myAudioArray[Myindex];
    //
    for (i = 0; i < myAudioArray.length; i++) {
        myAudioArray[i].classList.remove("active");
    }
    if (mySond.hasAttribute("clicked")) {
        console.log("already clicked");
        Myindex = mySond.getAttribute("index");
    } else {
        mySond.setAttribute("clicked", true);
        Myindex++;
        mySond.setAttribute("index",Myindex);
    }
    mySond.classList.add("active");
    MyNewphoto = mySond.getAttribute("url");
    playBTN.style.backgroundImage = `url(${MyNewphoto})`;
    MyNewSRC = mySond.getAttribute("src");
    MyNewAuthor = mySond.getAttribute("author");
    MyNewName = mySond.innerText;
    songName.innerText = MyNewName;
    Author.innerText = MyNewAuthor;
    mp3Player.setAttribute("src", MyNewSRC);
    setTimeout(() => {
        MyRange.setAttribute("max", mp3Player.duration);
        if (Math.floor(mp3Player.duration / 60) < 10) {
            var zeroD = "0";
        } else {
            var zeroD = "";
        }
        DurationTXT.innerHTML = `${zeroD}${Math.floor(
            mp3Player.duration / 60
        )}:${Math.floor(mp3Player.duration % 60)}`;
    }, 100)
    document.querySelector(".playStopButton").innerHTML =
        "<i id ='play' class='far fa-pause-circle icon play'></i>";
    mp3Player.play();

})

// change MusicTime postion 

MyRange.addEventListener("change", () => {
    mp3Player.currentTime = MyRange.value;
});

// play & stop MediaPlayey
playBTN.addEventListener("click", () => {

    if (Math.floor(mp3Player.duration / 60) < 10) {
        var zeroD = "0";
    } else {
        var zeroD = "";
    }
    DurationTXT.innerHTML = `${zeroD}${Math.floor(
        mp3Player.duration / 60
    )}:${Math.floor(mp3Player.duration % 60)}`;
    MyRange.setAttribute("max", mp3Player.duration);
    if (mp3Player.paused) {
        mp3Player.play();
        document.querySelector(".playStopButton").innerHTML =
            "<i id ='play' class='far fa-pause-circle icon play'></i>";
    } else {
        mp3Player.pause();
        document.querySelector(".playStopButton").innerHTML =
            "<i id ='play' class='far fa-play-circle icon play'></i>";
    }
});

// update MediaPlayer info 

mp3Player.addEventListener("timeupdate", () => {

    MyRange.value = mp3Player.currentTime;

    if (Math.floor(mp3Player.currentTime % 60 < 10)) {
        var X0 = "0";
    } else {
        X0 = "";
    }

    if (Math.floor(mp3Player.currentTime / 60 < 10)) {
        var X1 = "0";
    } else {
        X1 = "";
    }

    CurrentTXT.innerHTML = `${X1}${Math.floor(
        mp3Player.currentTime / 60
    )}:${X0}${Math.floor(mp3Player.currentTime % 60)}`;
});

// keyDown (Stop by Space KEY) Controlos 

document.addEventListener("keypress", function (e) {
    if (e.keyCode === 32) {
        if (mp3Player.paused) {
            mp3Player.play();
            document.querySelector(".playStopButton").innerHTML =
                "<i id ='play' class='far fa-pause-circle icon play'></i>";
        } else {
            mp3Player.pause();
            document.querySelector(".playStopButton").innerHTML =
                "<i id ='play' class='far fa-play-circle icon play'></i>";
        }
    }
})

document.querySelector("#Volume").addEventListener("change",function(){
    mp3Player.volume = this.value;
})