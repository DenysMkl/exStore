arrows = document.querySelectorAll('.headerArrow')
slide = document.querySelector('.slidePhotos')
bannersCount = gsap.utils.toArray('.bannerBlock').length
headPointers = gsap.utils.toArray('.headerPointers > .point')

counterSlide = 0

function pointSwap(count, elem) {
    return elem.classList.toggle('active', headPointers.indexOf(elem) == count%bannersCount)
}

function animation(targ){
    gsap.to(targ, {
        duration: 1,
        translateX: `-${counterSlide%bannersCount*100}%`
    })
}

swapBanners = setInterval(()=>{
    counterSlide+=1

    animation(slide)

    headPointers.forEach(el=>{
        el.classList.toggle('active', pointSwap(counterSlide, el))
    })

}, 5000)

arrows.forEach(elem=>{
    elem.addEventListener('click', ()=>{
        if (elem.classList.contains('mirror')){
            counterSlide+=1
        } else{
            if (counterSlide == 0){
                counterSlide = bannersCount-1
            }else{
                counterSlide-=1
            }
        }
        clearInterval(swapBanners)
        
        swapBanners = swapBanners = setInterval(()=>{
            counterSlide+=1
        
            animation(slide)
        
            headPointers.forEach(el=>{
                el.classList.toggle('active', pointSwap(counterSlide, el))
            })
        
        }, 5000)

        animation(slide)

        headPointers.forEach(el=>{
            el.classList.toggle('active', pointSwap(counterSlide, el))
        })
        
    })
})