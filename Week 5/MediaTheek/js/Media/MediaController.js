/**
 * Created by tomasnagy on 21/10/14.
 */
(function () {
    var media = [],
        searchContainer,
        showQueryButton,
        btnSearch,
        searchField,
        statisticsButton,
        imagesButton,
        statButtons;

    function init() {
        loadAllMedia();
        searchContainer = document.getElementById('search');
        showQueryButton = document.getElementById("showQueryButton");
        btnSearch = document.getElementById('btnSearch');
        searchField = document.getElementById('searchfield');
        statisticsButton = document.getElementById('showStatisticsButton');
        imagesButton = document.getElementById('showImagesButton');

        btnSearch.addEventListener('click', search);
        showQueryButton.addEventListener('click', showQueryButtonClick);
        searchField.addEventListener('keyup', searchFieldKeyUp);
        statisticsButton.addEventListener('click', showStatistics);
        imagesButton.addEventListener('click', function(e)
        {
            e.preventDefault();
            if(media.length > 0) {
                showMedia(media)
            } else {
                loadAllMedia();
            }

            statButtons = document.getElementById('statButtons');
            statButtons.className = 'btn-group hidden'
        });

    }

    function loadAllMedia() {
        $.getJSON('http://localhost:63342/MediaTheek/data/media.json',
            function (data) {
                data.forEach(function (v) {
                    var m = new Media(v.Title, v.Description, v.URL, v.Category);
                    media.push(m);
                });

                showMedia(media);
            });
    }

    function showMedia(mediaArray) {
        var i,
            l = mediaArray.length,
            bobTheHtmlBuilder = '',
            m,
            mediaList;

        for (i = 0; i < l; i++) {
            m = mediaArray[i];
            bobTheHtmlBuilder += '<li class="box">';
            bobTheHtmlBuilder += '<figure>';
            bobTheHtmlBuilder += '<img src="' + m.Url + '" alt="' + m.Title + '"/>';
            bobTheHtmlBuilder += '<figcaption>' + m.Title + '</figcaption>';
            bobTheHtmlBuilder += '</figure></li>';
        }

        mediaList = document.getElementById("mediaList");
        mediaList.innerHTML = bobTheHtmlBuilder;
    };

    function showQueryButtonClick() {
        if (searchContainer.classList.contains("hidden")) {
            searchContainer.className = '';
        } else {
            searchContainer.className = 'hidden';
        }
    }

    function search(e) {
        e.preventDefault();
        var searchTerm = document.getElementById('searchfield').value,
            i,
            l = media.length,
            searchArray = [],
            deleteButton = document.getElementById('deleteButton');

        if(searchTerm === '' || searchTerm === null || searchTerm === undefined) {
            return;
        }

        for (i = 0; i < l; i++) {
            if(media[i].Title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                searchArray.push(media[i]);
            }
        }







        addSearchTerms(searchTerm);






        showMedia(searchArray);
        deleteButton.addEventListener('click', function(e) {
            e.preventDefault();
            searchTerm.value = searchField.value = '';
            showMedia(media);
        });
    }

    function searchFieldKeyUp(e) {
        e.preventDefault();
        var deleteButton = document.getElementById('deleteButton');
        if(searchField.value === '') {
            deleteButton.className = 'hidden';
        } else {
            deleteButton.className = '';
        }
    }



    init();
}());
