const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
d3.json(url).then((data) => {
    var names = data.names;
    d3.select('#selDataset').selectAll('option').data(names).enter().append('option').text(function (data) {
        return data;
    });
});
function optionChanged(value) {
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
        console.log(data);
        var samples = data.samples;
        var sample_values = [];
        var otu_ids = [];
        var otu_labels = [];
        var otu_ids_string = [];
    
        samples.forEach(element => {
            if (element.id === value){
                sample_values = element.sample_values;
                otu_ids = element.otu_ids;
                otu_labels = element.otu_labels;
                otu_ids.map(otu => {
                    otu_ids_string.push(`OTU ${otu}`);
                });
            }
        });    

       

    });
}

