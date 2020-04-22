//从服务端获取json数据
function setList() {
    var opt = {
        type: 'get',
        url: 'res/markdown4note.json',
        async: 'true',
        success: callBack,
        dataType: 'json'

    }
    $.ajax(opt);
}
//回调函数
function callBack(data) {
    console.log(JSON.stringify(data));

    //加载内容
    $(".list").html(getListHtml(data));
}

//根据内容适配iframe框架高度
function adapterHeight() {
    var ifr = document.getElementById("ifr");
    try {
        var bHeight = ifr.contentWindow.document.body.scrollHeight;
        var dHeight = ifr.contentWindow.document.documentElement.scrollHeight;
        var height = Math.min(bHeight, dHeight);
        ifr.height = height;
        // console.log(height);
    } catch (ex) {
        console.log(ex);
    }
}

//设置列表内容
function getListHtml(obj) {
    var html = '';
    for (var i in obj) {
        html += '<a href="#target' + i + '" class="list-group-item list-group-item-success" data-toggle="collapse">' +
            '<div align="center">' + '<h3>' + obj[i].subject + '</h3>' + '</div>' + '</a>' +
            '<div id="target' + i + '" class="collapse">' + '<div class="list-group">';

        for (var j in obj[i].article) {
            html += '<a target="content" href="' + obj[i].article[j].url + '" class="list-group-item list-group-item-secondary"><h6>' + obj[i].article[j].title + '</h6></a>';
        }

        html += '</div>' + '</div>';
    }
    return html;
}

$(function () {
    //动态改变iframe框架的高度
    window.setInterval(adapterHeight, 200);
    setList();

})