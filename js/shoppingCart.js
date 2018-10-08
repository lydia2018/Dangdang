$("[name='checkbox']:even").attr("checked", 'true'); //选中所有奇数 
}) $("#btn4").click(function() {
    $("[name='checkbox']").each(function() { //反选 
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        } else {
            $(this).attr("checked", 'true');
        }
    })
})
})
