/**
 * Created by kevin on 15/08/14.
 */

var kevinderudder = {};
kevinderudder.color = (function () {
    return {
        randomPastelColor: function () {
            var r = (Math.round(Math.random() * 127) + 127).toString(16);
            var g = (Math.round(Math.random() * 127) + 127).toString(16);
            var b = (Math.round(Math.random() * 127) + 127).toString(16);
            return '#' + r + g + b;
        },
        randomColor: function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
})();
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                if (i in list) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return i;
                    }
                }
            }
            return -1;
        }
    });
}





