let timer = 0
let liked = []
let paused = 1
let int = 0
liked.push(parseInt(0))

function timerUp() {
    if (paused === 1) { return 2 }
    timer += 1
    document.getElementById('counter').innerText = timer
    if (liked.length < timer) { liked.push(0) }
    updateLikes()
    //console.log(liked)
    
}

function manualIncrease() {
    if (paused === 1) { return 2 }
    timer += 1
    document.getElementById('counter').innerText = timer
    if (liked.length < timer) { liked.push (0) }
    updateLikes()
}

function manualDecrease() {
    if (paused === 1) { return 2 }
    timer -= 1
    document.getElementById('counter').innerText = timer
    updateLikes()
}



function like() {
    if (paused === 1) { return 2 }
    liked[timer-1] += 1
    updateLikes()
}

function updateLikes() {
    document.getElementsByClassName('likes')[0].innerText=`The number ${timer} has been liked ${liked[timer-1]} time(s).`}


document.addEventListener("DOMContentLoaded", function() {
    switchTimer()
    document.getElementById('minus').addEventListener("click",manualDecrease)
    document.getElementById('plus').addEventListener("click",manualIncrease)
    document.getElementById('heart').addEventListener("click",like)
    document.getElementById('pause').addEventListener("click",switchTimer)
    document.getElementById('restart').addEventListener("click",restarter)

    document.getElementById('submit').addEventListener("click", function(e) {
        e.preventDefault()
        leaveFeedback()
    })


    //console.log(int)
    //let a = document.createElement('p')
    //a.innerText = 0
    //a.id="liked"
    //document.getElementById('counter').appendChild(a)



})

function restarter() {
    timer = 0
    document.getElementById('counter').innerText = timer
    if (paused === 1) { switchTimer() }
}

function switchTimer() {
    if (paused === 1) { 
        setInterval(timerUp,1000) 
        paused = 0
        document.getElementById('pause').innerText="Pause"
        return 0
    }
    if (paused === 0) { 
        clearInterval(1) 
        paused = 1
        document.getElementById('pause').innerText="Resume"
        return 0
    }
}

function leaveFeedback() {
    let feed = document.createElement('p')
    feed.innerText=document.getElementById('comment-input').value
    document.getElementById('comment-form').appendChild(feed)
    document.getElementById('comment-input').value = ""
}