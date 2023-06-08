document.addEventListener('DOMContentLoaded', () => {
    let countDown
    let audio = document.createElement('audio')
    audio.volume = 0.1;
    audio.setAttribute("src", 'assets/timeout.mp3')
    
    document.querySelector('body').appendChild(audio)


    const startButton = document.createElement('button')
    startButton.innerText = 'Start'
    document.querySelector('.buttons').appendChild(startButton)
    startButton.addEventListener('click', timer)

    const stopButton = document.createElement('button')
    stopButton.innerText = 'Stop'
    document.querySelector('.buttons').appendChild(stopButton)
    stopButton.addEventListener('click', () => {
      clearInterval(countDown)
      audio.pause()
    })

    const resetButton = document.createElement('button')
    resetButton.innerText = 'Reset'
    document.querySelector('.buttons').appendChild(resetButton)
    resetButton.addEventListener('click', reset)


    /* ============ input for clocks ================= */
    const minute = document.createElement('input')
    minute.setAttribute('type', 'text')
    minute.value = 20
    document.querySelector('.input').appendChild(minute)
    minute.style.width = "20px"

    const sec = document.createElement('input')
    sec.setAttribute('type', 'text')
    sec.value = 00
    document.querySelector('.input').appendChild(sec)
    sec.style.width = '20px'
    // timeInput.setAttribute("zIndex", 2)
    // timeInput.setAttribute('position', 'absloute')

    let countdownMin;
    let countdownSec;

    // start will be triggered when clicking start
    function timer() {
      if (typeof Number(minute.value) !== "number" || typeof Number(sec.value) !== "number") return;
      // we'll have variables to store our current input values
      countdownMin = Number(minute.value);
      countdownSec = Number(sec.value);
        
      countDown = setInterval(() => {
            if(sec.value == 0 && minute.value == 0)
            {
                audio.play()
                clearInterval(countDown)
            }
            else if(sec.value >= 1) {
              sec.value = --countdownSec
            }
            
            else if (sec.value < 1) {
                countdownSec = sec.value = 59
                // countdownSec = 59
                countdownMin = minute.value = --countdownMin
                // countdownMin = minute.value
            }
            
      }, 1000)
      countDown();
      
      // stop()
      // {
      //   console.log('stopping hopefully')
      //   clearInterval(countDown)
      //   countDown = null;
      // }
      // decrement sec by 1 every 1000ms
        // when sec goes below 00 decrement minute
        // reset sec value to 59 after 1 second
        // if min === 0 and we hit 0
        // pop an alert, play sound
    }

    // when click reset
    function reset() {
      clearInterval(countDown)
      countdownMin = minute.value = 20
      countdownSec = sec.value = 0
      audio.pause()
    }
    
  // what is primary functionality = > pomodoro timer
    // what are the features?
      // user can set their own pomodoro time
        // the actual timer can be edited (00:00 default 20:00)
      // user can set their own rest time
      // during rest time
        // display palate cleanser


        // have button to cancel rest time  
        
      // when rest time ends
        // have button confirming rest time has ended
          // button resets the clock to user configured rest time
          // restarts clock immediately

      // has options page
})