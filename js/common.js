function loadingMsg(data){
    let wrap=document.getElementById('infoListWrap');
    wrap.innerHTML=`<div class="loading-wait">
                        <p>${data.message}</p
                        <div class="rotate">
                            <i class="iconfont icon-jiazai"></i>
                        </div>                
                    </div>`
}
