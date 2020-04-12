/**
 * Created by Hello_World on 2016/10/12.
 */
$$(function(){
    function setOut(){
        $$("body,html").animate({scrollTop:235},500);
    }
    setTimeout(setOut,1000);

    $$('#address').html('<div class="address_web"><div class="address_left"><h6>网站主管单位：上海市城乡建设和交通发展研究院</h6><h6>2017上海交通信息中心 沪ICP备：11003425号-3| Copyright © 2017  <a href="webstated.html"  style="color: red;">网站声明</a></h6><h6><img style="position: relative;top: -3px;margin-right: 2px;" src="imgs/beian.png"> <span><a  href="http://beian.miit.gov.cn" target="_blank" style="color: white;font-size: 12px;">沪公网安备  31010402002204号</a></span></h6></div> <div class="address_right"><h6>上海交通出行网版权所有,未经许可严禁复制或镜像 </h6><h6>为达到更好的浏览效果,本网站建议您使用IE9.0及以上主流浏览器</h6></div> <div style="position: absolute;top:9px;right: 3px;"><a href="http://bszs.conac.cn/sitename?method=show&id=55A7BDC6B69706D7E053022819ACB3D4" target="_blank"><img src="imgs/blue.png"></a></div>  </div>')
})

$$(".one_map_overaotu").click(function(){
    $$(".one_minder").css("display","block");
    $$(".one_map").css("height","553px");
})
$$(".one_line_content_overaotu").click(function(){
    $$(".one_minder").css("display","block");
    $$(".one_map").css("height","553px");
})
$$(".three_map_huancheng").click(function(e){
    $$(".three_minder").css("display","block");
    var height = 0 | 0;
    Array.prototype.slice.call($$(".three_map").siblings()).forEach(function(v){ height += v.clientHeight });
    $$(".three_map").css("height", $$(".three_map").parent().height() - height  + "px");
})
document.onkeydown = function() {
    if (event.keyCode == 9) {  //如果是其它键，换上相应在ascii 码即可。
        return false;
    }
}

//屏蔽被iframe
if(top != self){ 
 location.href = "about:blank"; 
} 
