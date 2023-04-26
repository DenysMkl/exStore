arrows = document.querySelectorAll('.headerArrow')
slide = document.querySelector('.slidePhotos')
bannersCount = gsap.utils.toArray('.bannerBlock').length
headPointers = gsap.utils.toArray('.headerPointers > .point')

counter = 0

function pointSwap(count, elem) {
    return elem.classList.toggle('active', headPointers.indexOf(elem) == count%bannersCount)
}

function animation(targ){
    gsap.to(targ, {
        duration: 1,
        translateX: `-${counter%bannersCount*100}%`
    })
}

swapBanners = setInterval(()=>{
    counter+=1

    animation(slide)

    headPointers.forEach(el=>{
        el.classList.toggle('active', pointSwap(counter, el))
    })

}, 5000)

arrows.forEach(elem=>{
    elem.addEventListener('click', ()=>{
        if (elem.classList.contains('mirror')){
            counter+=1
        } else{
            if (counter == 0){
                counter = bannersCount-1
            }else{
                counter-=1
            }
        }
        clearInterval(swapBanners)
        
        swapBanners = swapBanners = setInterval(()=>{
            counter+=1
        
            animation(slide)
        
            headPointers.forEach(el=>{
                el.classList.toggle('active', pointSwap(counter, el))
            })
        
        }, 5000)

        animation(slide)

        headPointers.forEach(el=>{
            el.classList.toggle('active', pointSwap(counter, el))
        })
        
    })
})