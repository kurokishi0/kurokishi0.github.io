$(function(){
  $(".trmenu_1").on('click',function(){
    $(".is-open_1").slideToggle();
  });
});

$(function(){
  $(".trmenu_2").on('click',function(){
    $(".is-open_2").slideToggle();
  });
});

$(function(){
  $(".trmenu_3").on('click',function(){
    $(".is-open_3").slideToggle();
  });
});

$(function(){
  $(".trmenu_4").on('click',function(){
    $(".is-open_4").slideToggle();
  });
});

$(function(){
  $(".trmenu_5").on('click',function(){
    $(".is-open_5").slideToggle();
  });
});

$(function(){
  $(".trmenu_6").on('click',function(){
    $(".is-open_6").slideToggle();
  });
});

$(function(){
  $(".trmenu_7").on('click',function(){
    $(".is-open_7").slideToggle();
  });
});

$(function(){
  $(".trmenu_8").on('click',function(){
    $(".is-open_8").slideToggle();
  });
});

$(function(){
  $(".trmenu_9").on('click',function(){
    $(".is-open_9").slideToggle();
  });
});

$(function(){
  $(".trmenu_w").on('click',function(){
    $(".is-open_w").slideToggle();
  });
});

$(function(){
  $(".trmenu_l").on('click',function(){
    $(".is-open_l").slideToggle();
  });
});


$(function(){
    $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }

        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});
