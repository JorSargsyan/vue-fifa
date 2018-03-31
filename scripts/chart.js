


  var getBarChartData = function(playerData){
    var key_list = ["def","dri","overall","pac","pas","phy","sho"]

    var data = [];

    for(var i=0;i<key_list.length;i++){
        data.push({
            "label":key_list[i],
            "value":playerData[key_list[i]]
        })
    }

    var playerData = [
        {
            key:"Player",
            values : data
        }
    ]

    return playerData;
  }





var loadChart  =  function (player){
   
    nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
    //   .tooltips(false)
      .showValues(true)
      .color(["#4caf50"])
  
    d3.select('#chart svg')
      .datum( getBarChartData(player))
     
      .transition().duration(500)
      .call(chart)
      ;
  
    nv.utils.windowResize(chart.update);
  
    return chart;
  });

}
    