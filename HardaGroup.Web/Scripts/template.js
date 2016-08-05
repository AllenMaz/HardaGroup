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

    //��������˵�ʱѡ������İ�ť
    var clickedUrl = window.location;

    //����һ�������˵��Ƿ�����������ƥ��
    var element = $('.head-nav>li.checkmenu>a').filter(function () {

        return this.href == clickedUrl || clickedUrl.href.indexOf(this.href) == 0;
    });
    //���һ��û��ƥ�䣬��˵����ǰ������Ƕ����˵�
    if (element.length == 0) {
        //ƥ������˵�
        var secondNavelement = $('.head-nav>li>ul a').filter(function () {

            return this.href == clickedUrl || clickedUrl.href.indexOf(this.href) == 0;
        });
        //ѡ�ж����˵�������Ӧ��һ���˵�
        secondNavelement.parent().addClass('active').parent().parent().addClass("active");

    } else {
        element.parent().addClass('active');

    }

    //�����˵�����
    $(".head-nav>li").hover(function () {
        $(this).find("ul").show();
    }, function () {
        $(this).find("ul").hide();

    })
    
    /*���ض���*/
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