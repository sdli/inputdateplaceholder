### inputdateplaceholder
你可以复制以下代码，或下载dateplaceholder.js进行使用！
可以解决手机端（ios和android）web的datepicker控件加载时不显示日期的问题。

```javascript
//css内容
input[type="date"]:before{
	content: attr(placeholder);
	color:#4d4d4d;
}

//js内容
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
```
