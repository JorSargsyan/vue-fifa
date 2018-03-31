var Root = new Vue({
    el:"#root",
   data: {
       dataLoaded :false,
       apiData : undefined,
       selectedCountry:undefined,
       playerDialog:false,
       selectedPlayer: undefined,
   },
   methods:{
       loadAPI : function(){
           this.$http.get("data/data.json").
           then(this.loadSuccess,this.loadError)
       },
       loadSuccess:function(response){
        this.dataLoaded= true;
        this.apiData = response.data;
        console.log(this.apiData);
       },
       loadError:function(response){
       console.log("OOPS!!There is an error loading the data")
       },
       openDialog: function(player){
             console.log(player)
            this.selectedPlayer = player;
            this.playerDialog = true;
            loadChart(player);
       }
   }
})