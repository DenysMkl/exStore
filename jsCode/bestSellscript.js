
bestSellBlock = document.querySelector('.bestSell')
cardBlockOfBestGames = document.querySelector('.cardBlockBestSellers')
arrowsBestGames = document.querySelectorAll('.bestArrow')
bestSellCard = document.querySelector('.cardBlockBestSellers > .card')
let [bestSellarrowLeft, bestSellarrowRight] = arrowsBestGames
bestSellarrowRight.classList.toggle('active', bestSellBlock.offsetWidth < cardBlockOfBestGames.offsetWidth)

var counter = 0


function animationScroll(value){
    gsap.to('.cardBlockBestSellers', {
        translateX: counter * value,
        duration: 1
    })
}

function showRightArrow(blockWidth, cardWidth, count, cardBlockWidth) {
    return blockWidth + cardWidth * count  < cardBlockWidth
}

arrowsBestGames.forEach((el)=>{
    el.addEventListener('click', ()=>{
        if (el.classList.contains('left')){
            counter -= 1
        }else{
            counter += 1
        }
        animationScroll(-bestSellCard.offsetWidth)
        console.log(bestSellCard.offsetWidth)
        bestSellarrowLeft.classList.toggle('active', counter > 0)
        bestSellarrowRight.classList.toggle('active', showRightArrow(bestSellBlock.offsetWidth, bestSellCard.offsetWidth, counter, cardBlockOfBestGames.offsetWidth))
    })
})