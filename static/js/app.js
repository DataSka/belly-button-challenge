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
    document.querySelector("#bar").innerHTML = null
    console.log('value', value)
    // Fetch the JSON data and console log it
    d3.json(url).then(function (data) {
        console.log(data);
        var samples = data.samples;
        var sample_values = [];
        var otu_ids = [];
        var otu_labels = [];
        var otu_ids_string = [];

        samples.forEach(element => {
            if (element.id === value) {
                
                sample_values = element.sample_values;
                otu_ids = element.otu_ids;
                otu_labels = element.otu_labels;
                otu_ids.map(otu => {
                    otu_ids_string.push(`OTU ${otu}`);
                });
                var data = [
                    {
                      x: otu_ids,
                      y: sample_values,
                      type: 'bar'
                      orientation: 'h'
                    }
                  ];
                  
                  Plotly.newPlot('myDiv', data);
            }];










                  
                // // Specify the chart’s dimensions, based on a bar’s height.
                // const barHeight = 25;
                // const marginTop = 30;
                // const marginRight = 0;
                // const marginBottom = 10;
                // const marginLeft = 200;
                // const width = 1000;
                // const height = Math.ceil((sample_values.length + 0.1) * barHeight) + marginTop + marginBottom;

                // Create the scales.
                // const x = d3.scaleLinear()
                //     .domain([0, d3.max(sample_values)])
                //     .range([marginLeft, width - marginRight]);

                //     const y = d3.scaleBand()
                //     .domain(otu_ids_string)
                //     .rangeRound([marginTop, height - marginBottom])
                //     .padding(0.1);
              
    

                // // Create a value format.
                // //const format = x.tickFormat(20, "%");

                // // Create the SVG container.
                // const svg = d3.create("svg")
                //     .attr("width", width)
                //     .attr("height", height)
                //     .attr("viewBox", [0, 0, width, height])
                //     .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");


                // svg.append("g")
                //     .attr("fill", "steelblue")
                //     .selectAll()
                //     .data(sample_values)
                //     .join("rect")
                //     .attr("x", x(0))
                //     //.attr("y", (d) => y(d))
                //     .attr("width", (d) => x(d))
                //     .attr("height", barHeight);

                // svg.append("g")
                //     .attr("fill", "white")
                //     .attr("text-anchor", "end")
                //     .selectAll()
                //     .data(otu_ids_string)
                //     .join("text")
                //     .attr("x", (d) => x(d))
                //     .attr("y", (d) => y(d) + y.bandwidth() / 2)
                //     .attr("dy", "0.35em")
                //     .attr("dx", -4)
                //     .text((d) => d)
                //     .call((text) => text.filter(d => x(d) - x(0) < 20) // short bars
                //         .attr("dx", +4)
                //         .attr("fill", "black")
                //         .attr("text-anchor", "start"));

                // // Create the axes.
                // svg.append("g")
                //     .attr("transform", `translate(0,${marginTop})`)
                //     .call(d3.axisTop(x).ticks(Math.ceil(sample_values.length)/4))
                //     .call(g => g.select(".domain").remove());

                // svg.append("g")
                //     .attr("transform", `translate(${marginLeft},0)`)
                //     .call(d3.axisLeft(y).tickSizeOuter(0));

                // document.querySelector("#bar").append(svg.node());

            }

        });

    });

}

