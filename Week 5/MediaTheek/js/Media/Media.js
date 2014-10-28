/**
 * Created by tomasnagy on 21/10/14.
 */
function Media(title, description, url, category) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.category = category;
}

Media.prototype = {
    get Title() { return this.title; },
    set Title(v) { this.title = v; },

    get Description() { return this.description; },
    set Description(v) { this.description = v; },

    get Url() { return this.url; },
    set Url(v) { this.url = v; },

    get Category() { return this.category; },
    set Category(v) { this.category = v; },

    toString: function() { return this.title; }
};