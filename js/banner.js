let slideWrap = document.getElementById('slide-wrap')
// 获取内容区
let slideContent = slideWrap.getElementsByClassName('slide-content')[0];
// 获取li类数组
let liItem = slideContent.getElementsByTagName('li');
//获取底部导航类数组
let aItem = slideWrap.getElementsByClassName('slide-nav')[0].getElementsByTagName('a');
//左右按钮
let nextButton = slideWrap.getElementsByClassName('slide-next')[0];
let prevButton = slideWrap.getElementsByClassName('slide-prev')[0];
//当前的索引
let currentIndex = 0;
//滚动开关标记
let flag = false
//标记定时器
let flagTimer = null
//自动播放定时器
let autoTimer = null
//获取浏览器视图宽度
let viewWidth = document.documentElement.clientWidth;
//设置内容区宽度
slideContent.style.width = viewWidth * liItem.length + 'px';
//设置每个元素宽度
for(let i = 0;i<liItem.length;i++){
    liItem[i].style.width = viewWidth+'px';
}
//设置底部高光按钮
for(let i=0;i<aItem.length;i++){
    aItem[i].onclick=function(){
        currentIndex=i
        slide(i)
    }
}
//执行自动播放
autoPlay()
slideWrap.onmouseenter = function(){
    clearInterval(autoTimer)
}
slideWrap.onmouseleave = function(){
    autoPlay()
}
//nextButton事件
nextButton.onclick = function(){
    if(flag){return false}
    flag = true
    next()
}
//prevButton事件
prevButton.onclick = function(){
    if(flag){return false}
    flag = true
    prev()
}
//自动播放
function autoPlay(){
    autoTimer = setInterval(function(){
        next()
    },3000)
}
//next
function next(){
    currentIndex++
    if(currentIndex == aItem.length){
        currentIndex = 0
    }
    slide(currentIndex)
}
//prev
function prev(){
    currentIndex--
    if(currentIndex <0){
        currentIndex = aItem.length - 1
    }
    slide(currentIndex)
}
//分页按钮高光切换
function toogleHigh(){
    for(let k = 0;k<aItem.length;k++){
        aItem[k].className=''
    }
    aItem[currentIndex].className='current'
}

//设置偏移，滚动
function slide(number){
    let left = number*viewWidth;
    slideContent.style.left=-left+'px'
    //开启定时器
    flagTimer = setTimeout(function(){
        flag=false
        clearTimeout(flagTimer)
    },500)
    toogleHigh()
}
