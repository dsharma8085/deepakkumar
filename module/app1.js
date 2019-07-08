define(["CountryView","Countries"],function(CountryView,Countries){
    var initialize=function(){
        console.log('app in now initialize');
       
    
     var countries= new Countries();
     countries.fetch().then(function(data){
         console.log(data);
         var countryView=new CountryView({collection:data});
        
 });
   
}
return {
    initialize: initialize
}
});



