$(function(){
    var datePicker = $('input[type=date]');
    for(var i = 0;i<datePicker.length;i++){
        (function(i){
            datePicker[i].onfocus = function(){
                $(datePicker[i]).attr('placeholder','');
            };
            datePicker[i].onblur = function(){
                if($(datePicker[i]).val() == ''){$(datePicker[i]).attr('placeholder','Y-M-D')};
            };
        })(i);
    }
});
