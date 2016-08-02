jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

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

})