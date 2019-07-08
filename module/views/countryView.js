define(["backbone","jquery","underscore"],function(Backbone,$,_){
    var CountryView = Backbone.View.extend({
        el:"#myDiv",
        initialize:function(){
            console.log('initialize');
            this.render();
        },
        render:function(){
            console.log('render');
            this.$el.html(this.collection[0].name);
        }
    });
    return CountryView;
});





