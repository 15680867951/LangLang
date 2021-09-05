loadingMsg({
    message: '加载中'
});
//朗朗口腔start
$.ajax({
    url: "./data/index.php",
    dataType: "json",
    async: false,
    cache: false,
    data: {
        categoryId: 123456
    },
    type: "POST",
    beforSend: function() {},
    success: function(rep) {
        let infoListWrap = document.getElementById('infoListWrap');
        if (!rep.data || rep.data.length === 0) {
            loadingMsg({
                message: '当前数据为空'
            });
            return false
        }
        let ul = '<ul class="clearfix">'
        rep.data.forEach(item => {
            ul += `<figure>
                    <a href="newsDetail.php?id=${item.id}">
                    <img src="${item.imgUrl}" alt="${item.title}">
                    <figcaption>${item.title}</figcaption>
                    <p>${item.dec}</p>
                    </a>
                 </figure>`
        })
        ul += '</ul>'

        infoListWrap.innerHTML = ul;

    },
    complete: function() {},
    error: function() {}
});