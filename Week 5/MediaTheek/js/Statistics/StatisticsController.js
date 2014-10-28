/**
 * Created by tomasnagy on 26/10/14.
 */
function showStatistics(e) {
    e.preventDefault();
    var searchTerms = getSearchTerms(),
        mediaList = document.getElementById('mediaList')
        search,
        statButtons;

    // hide search
    search = document.getElementById('search');
    search.className = 'hidden';
    // show buttons
    statButtons = document.getElementById('statButtons');
    statButtons.className = 'btn-group';
    // load button events

    console.log(statButtons.children[0]);

    statButtons.children[0].addEventListener('click', function() {
        showBlocks(searchTerms, mediaList);
    });

    statButtons.children[1].addEventListener('click', function() {
        setupChart(searchTerms, mediaList);
    });

    showBlocks(searchTerms, mediaList);
}

function showBlocks(searchTerms, mediaList) {
    var bobTheHtmlBuilder = '';

    searchTerms.forEach(function(item) {
        bobTheHtmlBuilder += '<li class="box">';
        bobTheHtmlBuilder += '<p>';
        bobTheHtmlBuilder += item.name;
        bobTheHtmlBuilder += '</p>';
        bobTheHtmlBuilder += '<p>';
        if (item.count > 1) {
            bobTheHtmlBuilder += item.count + ' times';
        } else {
            bobTheHtmlBuilder += item.count + ' time';
        }
        bobTheHtmlBuilder += '</p></li>';
    });

    // clear items
    mediaList.innerHTML = bobTheHtmlBuilder;
}

function setupChart( searchTerms, mediaList) {
    var bobTheHtmlBuilder = '<canvas id="myChart" width="400" height="400"></canvas>',
        data = [],
        obj,
        myNewChart;

    mediaList.innerHTML = bobTheHtmlBuilder;

    var c = $('#myChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("myChart").getContext("2d");

    // create data
    searchTerms.forEach(function(item){
        obj = {value: item.count, label: item.name, color: kevinderudder.color.randomPastelColor()};
        data.push(obj);
    });


    options = {
        animation: true
    };

    // showchart
    myNewChart = new Chart(ct).Doughnut(data, options);
}

function showChart(searchTerms, mediaList) {

}