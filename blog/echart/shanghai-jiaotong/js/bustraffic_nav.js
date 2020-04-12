/**
 * Created by Hello_World on 2016/9/9.
 */
$$(function(){
    $$(".nav_ul li").hover(function(){
        $$(this).each(function(){
            var i = $$(this).index();
            $$(".nav_ul li").eq(i).find("div").css("background-image","url(imgs/nav_0"+(i+1)+".png)");
            $$(this).css("border-right","1px solid white");
            $$("#nav ul li:nth-child(3)").css("border-right","1px solid grey");
            $$("#nav ul li:nth-child(3) a").css("background","none");
            $$("#nav ul li:nth-child(3) a").css("color","black");
            $$("#nav ul li:nth-child(3) a div").css("background-image","url(imgs/nav_3.png)");
        })
    },function(){
        $$(this).each(function(){
            var i = $$(this).index();
            $$(".nav_ul li").eq(i).find("div").css("background-image","url(imgs/nav_"+(i+1)+".png)");
            $$(this).css("border-right","1px solid gray");
            $$("#nav ul li:nth-child(3)").css("border-right","1px solid white");
            $$("#nav ul li:nth-child(3) a").css("background","#3A97FE");
            $$("#nav ul li:nth-child(3) a").css("color","white");
            $$("#nav ul li:nth-child(3) a div").css("background-image","url(imgs/nav_03.png)");
        })
    })
})
//ÏßÂ·Õ¾µãÇÐ»»
$$(function(){
    $$(".one_line").click(function(){
        $$(".one_line_content").css("dispaly","block");
        $$(".one_site_content").css("display","none");
        $$(".one_line").addClass("danlan");
        $$(".one_site").removeClass("danlan");
    });
    $$(".one_site").click(function(){
        $$(".one_site").addClass("danlan");
        $$(".one_line").removeClass("danlan");
        $$(".one_site_content").css("display","block");
        $$(".one_line_content").css("dispaly","none");
    });
    $$(".two_line").click(function(){
        $$(".two_line").addClass("danlan");
        $$(".two_site").removeClass("danlan");
        $$(".two_site_content").css("display","none");
        $$(".two_line_content").css("dispaly","block");
    });
    $$(".two_site").click(function(){
        $$(".two_site").addClass("danlan");
        $$(".two_line").removeClass("danlan");
        $$(".two_site_content").css("display","block");
        $$(".two_line_content").css("dispaly","none");
    });
})
//$$(function(){
//    $$(".one_site_content_luborder").click(function(){
//        $$(".one_site_content_luborder").css("color","red");
//    })
//})

