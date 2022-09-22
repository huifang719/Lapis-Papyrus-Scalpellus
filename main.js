const game={
    playerChoice: null,
    computerChoice: null
}

const choices = ["Lapis","Papyrus","Scalpellus"];
  
function computerChooses() {
    game.computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

var forPlayer = document.querySelector('#player-container')
var forComp = document.querySelector('#computer-container')

function computerDisplay() {
    if (game.computerChoice === choices[0]) {
      forComp.classList.add('lapis')
    } else if (game.computerChoice === choices[1]) {
      forComp.classList.add('papyrus')
    } else {
      forComp.classList.add('scalpellus')
    }
}

function playerDisplay() {
    if (game.playerChoice === choices[0]) {
      forPlayer.classList.add('lapis')
    } else if (game.playerChoice === choices[1]) {
      forPlayer.classList.add('papyrus')
    } else {
      forPlayer.classList.add('scalpellus')
    }
}

function resultDisappear() {
    document.querySelector('#result').textContent = ''
    forPlayer.classList.remove('lapis','papyrus','scalpellus')
    forComp.classList.remove('lapis','papyrus','scalpellus')
}
var selectLapis = document.querySelector('#lapis')
var selectPapyrus = document.querySelector('#papyrus')
var selectScalpellus = document.querySelector('#scalpellus')

selectLapis.addEventListener('click',function() {
    console.log(forPlayer.classList)
    console.log(forComp.classList)
    computerChooses()
    computerDisplay()
    game.playerChoice = choices[0] 
    playerDisplay()
    if (game.computerChoice === choices[0]) {
      document.querySelector('#result').textContent = "It's a tie!!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else if (game.computerChoice === choices[1]) {
      document.querySelector('#result').textContent = "You lose!"  
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else {
      document.querySelector('#result').textContent = "You win!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    }
  })
  
  selectPapyrus.addEventListener('click',function() {
    computerChooses()
    computerDisplay()
    game.playerChoice = choices[1]
    playerDisplay()
    if (game.computerChoice === choices[1]) {
      document.querySelector('#result').textContent = "It's a tie!!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else if (game.computerChoice === choices[2]) {
      document.querySelector('#result').textContent = "You lose!"  
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else {
      document.querySelector('#result').textContent = "You win!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    }
  })
  
  selectScalpellus.addEventListener('click',function() {
    console.log(forPlayer.classList)
    console.log(forComp.classList)
    computerChooses()
    computerDisplay()
    game.playerChoice = choices[2]
    playerDisplay()
    if (game.computerChoice === choices[2]) {
      document.querySelector('#result').textContent = "It's a tie!!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else if (game.computerChoice === choices[0]) {
      document.querySelector('#result').textContent = "You lose!"  
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    } else {
      document.querySelector('#result').textContent = "You win!"
      document.querySelector('#result').classList.add('result')
      setTimeout(resultDisappear,800)
    }
  })  


