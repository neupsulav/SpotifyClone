let progressBar = document.getElementById('progressBar')
let audio = new Audio('songs/1.mp3')
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let songName = document.getElementById('songName')
let pausePlayBtn = document.getElementById('pausePlayBtn')
let songsList = document.getElementsByClassName('song-items')
let songsIndex = 0
let songsArray = [
    {
        id: 0,
        songName: "Warriyo - Mortals [NCS Release]",
        source: "songs/1.mp3"
    },
    {
        id: 1,
        songName: "Cielo - Huma-Huma",
        source: "songs/2.mp3"
    },
    {
        id: 2,
        songName: "DEAF KEV - Invincible [NCS Release]-320k",
        source: "songs/3.mp3"
    },
    {
        id: 3,
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        source: "songs/4.mp3"
    },
    {
        id: 4,
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        source: "songs/5.mp3"
    },
    {
        id: 5,
        songName: "Rabba - Salam-e-Ishq",
        source: "songs/6.mp3"
    },
    {
        id: 6,
        songName: "Sakhiyaan - Salam-e-Ishq",
        source: "songs/7.mp3"
    },
    {
        id: 7,
        songName: "Bhula Dena - Salam-e-Ishq",
        source: "songs/8.mp3"
    },
    {
        id: 8,
        songName: "Tumhari Kasam - Salam-e-Ishq",
        source: "songs/9.mp3"
    },
    {
        id: 9,
        songName: "Na Jaana - Salam-e-Ishq",
        source: "songs/10.mp3"
    },
]

pausePlayBtn.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play()
        pausePlayBtn.classList.remove('fa-play')
        pausePlayBtn.classList.add('fa-pause')
    } else {
        audio.pause()
        pausePlayBtn.classList.remove('fa-pause')
        pausePlayBtn.classList.add('fa-play')
    }
})

audio.addEventListener('timeupdate', () => {
    let percentage = parseInt((audio.currentTime / audio.duration) * 100)
    progressBar.value = percentage
})

progressBar.addEventListener('change', () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100
})

prevBtn.addEventListener('click', () => {
    if (songsIndex <= 0) {
        songsIndex = 9
    } else {
        songsIndex -= 1
    }

    songName.innerText = `${songsArray[songsIndex].songName}`
    audio.src = `songs/${songsIndex}.mp3`
    audio.currentTime = 0
    audio.play()
})

nextBtn.addEventListener('click', () => {
    if (songsIndex >= 9) {
        songsIndex = 0
    } else {
        songsIndex += 1
    }

    songName.innerText = `${songsArray[songsIndex].songName}`
    audio.src = `songs/${songsIndex + 1}.mp3`
    audio.currentTime = 0
    audio.play()
})

Array.from(songsList).forEach(element => {
    element.addEventListener('click', () => {
        let Index = element.id
        songName.innerText = `${songsArray[Index - 1].songName}`
        audio.src = `songs/${Index}.mp3`
        songsIndex = Index - 1
        audio.currentTime = 0

        if (audio.paused || audio.currentTime <= 0) {
            audio.play()
            pausePlayBtn.classList.remove('fa-play')
            pausePlayBtn.classList.add('fa-pause')
        } else {
            audio.pause()
            pausePlayBtn.classList.remove('fa-pause')
            pausePlayBtn.classList.add('fa-play')
        }
    })
})

