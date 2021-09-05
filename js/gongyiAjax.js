$.ajax({
    url: "./data/index.php",
    dataType: "json",
    async: false,
    cache: false,
    data: {
        module: 'welfare',
        categoryId: 10000
    },
    type: "POST",
    beforSend: function() {},
    success: function(rep) {
        console.log(rep.data)
        let data = rep.data
        let html = ''
        let welfareWrap = document.getElementById('welfareWrap');
        html += `<div class="row">
            <div class="content-flex ">
                <div class="content-flex-big">
                    <img src="${data[0].imgUrl}" alt="${data[0].title}">
                </div>
                <div class="content-flex-small" style="background-color:#${data[0].bgColor};">
                    <div class="content-dec">
                        <h4 class="title">${data[0].title}</h4>
                        <time datatime="${data[0].date}" pubdate="${data[0].date}">${data[0].date}</time>
                        <i class="line"></i>
                        <a href="" class="link-more">
                            查看更多
                            <i class="iconfont icon-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`
        rep.data.forEach((item, index) => {
            if (index != 0) {
                html += `
                <div class="row">
            <div class="content-flex ">
                <div class="content-flex-big ${item.color}" style="background-color:#${item.bgColor};">
                    <div class="content-dec">
                        <h4 class="title">${item.title}</h4>
                        <time datatime="${item.date}" pubdate="${item.date} 12:00:00">${item.date}</time>
                        <i class="line"></i>
                        <p class="dec">${item.dec}</p>
                        <a href="" class="link-more">
                            查看更多
                            <i class="iconfont icon-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="content-flex-small" style="background-color:#${item.bgColor};">
                    <img src="${item.imgUrl}" alt="${item.title}">
                </div>
            </div>
        </div> `
            }
        })
        welfareWrap.innerHTML = html
    },
    complete: function() {},
    error: function() {}
});