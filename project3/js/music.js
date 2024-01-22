$(function(){




    let allMusic = [
        {
            title: `The 1st mini Album
            [공감]`,
            name: "ROSE",
            artist: "디오",
            img: "music-tap1",
            audio: "music1"
        },
        {
            title : `Single Album`,
            name : "별 떨어진다 (I Do)",
            artist : "디오",
            img : "music-tap2",
            audio : "music2"
        },
        {
            title : `The 2nd mini Album
            [기대]`,
            name : "Somebody",
            artist : "디오",
            img : "music-tap3",
            audio : "music3"
        },
    ]

    // musictab 설정
    const musicWrap = document.querySelector(".musictab");
    const musicImg = musicWrap.querySelector(".musictab .album img");
    const musicName = musicWrap.querySelector(".songtit .mTit h4");
    const musicTitle = musicWrap.querySelector(".musictab .title p");
    const musicAudio = musicWrap.querySelector(".inter .playbar .bar audio");
    const musicPlay = musicWrap.querySelector(".inter .playbtn #playp");
    const musicPrevBtn = musicWrap.querySelector(".inter .playbtn .fa-backward");
    const musicNextBtn = musicWrap.querySelector(".inter .playbtn .fa-forward");
    const musicProgress = musicWrap.querySelector(".inter .playbar");
    const musicProgressBar = musicProgress.querySelector(".inter .playbar .bar");
    const musicProgressCurrent = musicProgress.querySelector(".inter .playbar .time .start");
    const musicProgressDuration = musicProgress.querySelector(".inter .playbar .time .end");


    let musicIndex = 1;


    // 음악 재생
    function loadMusic(num){
        musicImg.src = `img/${allMusic[num - 1].img}.png`;
        musicImg.alt = `${allMusic[num - 1].img}`;
        musicName.innerText = allMusic[num - 1].name;
        musicTitle.innerText = allMusic[num - 1].title;
        musicAudio.src = `music/${allMusic[num - 1].audio}.mp3`;
    }

    // 플레이 버튼
    function playMusic() {
        musicWrap.classList.add("paused");
        musicPlay.classList.remove("fa-play");
        musicPlay.classList.add("fa-pause");
        musicPlay.setAttribute("title", "일시정지");
        musicAudio.play();
        
    }

    // 일시정지 버튼
    function pauseMusic() {
        musicWrap.classList.remove("paused");
        musicPlay.classList.remove("fa-pause");
        musicPlay.classList.add("fa-play");
        musicPlay.setAttribute("title", "재생");
        musicAudio.pause();
    }

    // 이전 곡 듣기 버튼
    function prevMusic(){
        musicIndex--;
        musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }

    // 다음 곡 듣기 버튼
    function nextMusic(){
        musicIndex++;
        musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }

    // 뮤직 진행바
    musicAudio.addEventListener("timeupdate", (e)=>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let progressWidth = (currentTime/duration) * 100;
        musicProgressBar.style.width = `${progressWidth}%`;

        musicAudio.addEventListener("loadeddata", ()=>{
            let audioDuration = musicAudio.duration;
            let totalMin = Math.floor(audioDuration / 60);
            let totalSec = Math.floor(audioDuration % 60);
            if (totalSec < 10) totalSec = `0${totalSec}`;

            musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
        })

        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if (currentSec < 10) currentSec = `0${currentSec}`;
        musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
    })

    // 진행 버튼
    musicProgress.addEventListener("click", e=>{
        let progressWidth = musicProgress.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = musicAudio.duration;
        
        musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
        playMusic();
    })

    // 재생/일시정지
    musicPlay.addEventListener("click", ()=>{
        const isMusicPaused = musicWrap.classList.contains("paused");
        isMusicPaused ? pauseMusic() : playMusic();
    })

    musicPrevBtn.addEventListener("click", ()=>{
        prevMusic();
    });
    musicNextBtn.addEventListener("click", ()=>{
        nextMusic();
    });

    // 'ended' 노래한곡 끝나면 다음 곡을 자동으로 재생
    musicAudio.addEventListener("ended", () => {
        nextMusic();
    });

})