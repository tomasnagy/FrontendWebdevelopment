/**
 * Created by tomasnagy on 26/10/14.
 */
var LocalStorageItem = function(name) {
    this.name = name;
    this.count = 1;
};

LocalStorageItem.prototype = {
    get Name() { return this.name; },

    get Count() { return this.count; },

    addCount: function() { this.count++; }
};