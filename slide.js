var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event){
        var button = event.target
        var index = nextIndex(button)
        showImage(index)
        showIndicator(index)
    })
}

var 定时播放 = function(){
    var button = e('.gua-slide-button.gua-right')
    setInterval(function(){
        button.click()
    }, 3000)
}

var nextIndex = function(button) {
    var slide = button.parentElement
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)
    var offset = parseInt(button.dataset.next)
    var index = (numberOfImgs + activeIndex + offset) % numberOfImgs
    slide.dataset.active = index
    return index
}

var showImage = function(index) {
    var nextSelector = '#id-guaimage-' + String(index)
    var className = 'gua-active'
    removeClassAll(className)
    var img = e(nextSelector)
    img.classList.add(className)
}

var showIndicator = function(index) {
    var nextSelector = '#id-indi-' + String(index)
    var className = 'gua-white'
    removeClassAll(className)
    var indi = e(nextSelector)
    indi.classList.add(className)
}

bindEventSlide()
定时播放()
