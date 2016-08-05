jQuery(document).ready(function($) {

	//$(".headroom").headroom({
	//	"tolerance": 20,
	//	"offset": 50,
	//	"classes": {
	//		"initial": "animated",
	//		"pinned": "slideDown",
	//		"unpinned": "slideUp"
	//	}
	//});

});


$(function () {

    //点击导航菜单时选中所点的按钮
    var clickedUrl = window.location;

    //过滤一级导航菜单是否与点击的链接匹配
    var element = $('.head-nav>li.checkmenu>a').filter(function () {

        return this.href == clickedUrl || clickedUrl.href.indexOf(this.href) == 0;
    });
    //如果一级没有匹配，则说明当前点击的是二级菜单
    if (element.length == 0) {
        //匹配二级菜单
        var secondNavelement = $('.head-nav>li>ul a').filter(function () {

            return this.href == clickedUrl || clickedUrl.href.indexOf(this.href) == 0;
        });
        //选中二级菜单，及对应的一级菜单
        secondNavelement.parent().addClass('active').parent().parent().addClass("active");

    } else {
        element.parent().addClass('active');

    }

    //导航菜单收缩
    $(".head-nav>li").hover(function () {
        $(this).find("ul").show();
    }, function () {
        $(this).find("ul").hide();

    })
    
    /*返回顶部*/
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 600) {
            $("#linavtop").removeClass("navtop");
        }
        else {
            $("#linavtop").addClass("navtop");
        }
    });

})

var dynamicLoading = {
    css: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function (path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}