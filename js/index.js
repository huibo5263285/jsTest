/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-3-19
 * Time: 上午9:32
 * To change this template use File | Settings | File Templates.
 */
(function () {
    String.prototype.formatter = function (obj) {
        var result = this;
        if (typeof obj === 'object' && arguments.length === 1) {
            alert(1);
            for (var key in obj) {
                var reg = new RegExp("({" + key + "})" , 'g');
                result.replace(reg, obj[key]);
            }
        } else {
            for (var i = 0, l = arguments.length; i < l; i++) {
                result.replace('{' + i + '}', arguments[i]);
            }
        }
        return String(result);
    };

    var str = "abc{name},{id}";

    console.log(str.formatter({name:"xiaobai","id":"123"}));

})();
