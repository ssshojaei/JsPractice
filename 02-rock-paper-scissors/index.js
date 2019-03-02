const cpScore = document.getElementById('cpScore')
const userScore = document.getElementById('userScore')
const showResult = document.getElementById('result')
let counter = {user: 0, computer: 0}

const pushBtn = object => {
    const list = ['rock', 'paper', 'scissors']
    const rnd = Math.floor(Math.random() * 3)
    const comp = list[rnd]
    const user = object.innerHTML
    console.log(`
        user: ${user}
        computer: ${comp}
    `)
    if (comp == user) {
        showResult.innerHTML = 'equal'
        console.log('equal')
    }
    else if (comp == list[0] && user == list[1] //c => rock => u => paper => user wen
            || comp == list[1] && user == list[2] //c => paper => u => scissors => user wen
            || comp == list[2] && user == list[0]) { //c => scissors => u => rock => user wen
               showResult.innerHTML = 'user wens!'
                console.log('user wens!')
                counter.user += 1
                userScore.innerHTML = counter.user
            }
            else {
                showResult.innerHTML = 'computer wens!'
                console.log('computer wens!')
                counter.computer += 1
                cpScore.innerHTML = counter.computer
            }
    if(counter.computer > 2){
        alert ('computer wen!')
    }
    else if(counter.user > 2){
        alert ('user wen!')
    }
}