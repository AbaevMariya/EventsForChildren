$(function() { 

//если класс .userInput в фокусе, тогда выполняем данную функцию. При помощи метода parent() находим родителя верхнего уровня, а это блок с классом .inputBox, он является родителем и добавляем для него класс .focus при помощи метода addClass().
    $(".userInput").focus(function () {
        $(this).parent().addClass("focus");
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass("focus");
        }
    });

});