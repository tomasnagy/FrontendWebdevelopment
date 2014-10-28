/**
 * Created by tomasnagy on 26/10/14.
 */
function addSearchTerms(searchTerm) {
    var searchTerms,
        storageName = 'searchTerms',
        index;


    function isInLocalStorage(element, index, array) {
        if(element.name === searchTerm) {
            return true;
        }
        return false;
    }


    if(localStorage.getItem(storageName) === null) {
        searchTerms = [];
        searchTerms.push(new LocalStorageItem(searchTerm));
        localStorage.setItem(storageName, JSON.stringify(searchTerms));
    } else {
        searchTerms = JSON.parse(localStorage.getItem(storageName));

        if(searchTerms.findIndex(isInLocalStorage) === -1) {
            searchTerms.push(new LocalStorageItem(searchTerm));
            localStorage.setItem(storageName, JSON.stringify(searchTerms));
        } else {
            index = searchTerms.findIndex(isInLocalStorage);
            LocalStorageItem.prototype.addCount.call(searchTerms[index]);
            localStorage.setItem(storageName, JSON.stringify(searchTerms))
        }
    }

}

function getSearchTerms() {
    return JSON.parse(localStorage.getItem('searchTerms'));
}
