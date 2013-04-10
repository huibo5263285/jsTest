/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-3-19
 * Time: 上午9:32
 *
 * String.format(String , [args...]|object)
 * String.prototype.format([args...]|object)
 * 字符串格式化
 */
(function () {
    //格式化字符串
    String.format = String.prototype.format = function (str, args) {
        var isStatic = !(typeof this.prototype === 'undefined');//通过静态类调用的吗？

        var isObj , reg , _str , _obj , _arr;
        _arr = [].slice.call(arguments);
        if (isStatic) {
            isObj = arguments.length === 2 && typeof args === 'object';
            isObj ? (_str = str) && (_obj = args) : (_str = _arr.shift());
        } else {
            isObj = arguments.length === 1 && typeof str === 'object';
            _str = String(this);
            isObj ? (_obj = str) : null;
        }

        if (isObj) {
            for (var key in _obj) {
                reg = new RegExp('{' + key + '}', 'g');
                _str = _str.replace(reg, _obj[key]);
            }
            return _str;
        }

        //否则以参数序列替换
        return _str.replace(/\{(\d+)\}/g, function (v, i) {
            return _arr[i];
        });
    };





    var str = "My name is {0}";
    var tmp , tmp2;
    tmp = String.format(str, 'Annie');
    tmp2 = str.format('Annie2');

    var str2 = "My name is {name}";
    var t1 , t2;
    t1 = String.format(str2, {name: 'Annie'});
    t2 = str2.format({name: 'Annie2'});

    print('源字符串：' + str);//=>  My name is small {0}
    print('模板修改：' + tmp);//=>  My name is small Annie
    print('模板修改：' + tmp2);//=>  My name is small Annie2

    print('源字符串2：' + str2);//=>  My name is small {name}
    print('模板修改2：' + t1);//=>  My name is small Annie
    print('模板修改2：' + t2);//=>  My name is small Annie2


    //选择元素
    function $(id) {
        return document.getElementById(id);
    }

    //打印信息
    function print(msg) {
        var p = document.createElement('p');
        p.innerHTML = msg;
        $('console').appendChild(p);
    }

})();
