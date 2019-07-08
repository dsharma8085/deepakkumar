require.config({
    paths:{
        app:"app1",
        jquery:"lib/jquery",
        underscore:"lib/underscore",
        backbone:"lib/backbone",
        CountryView:"views/countryView",
        Countries:"collection/countries"
    }
});

define(["app"],function(App){
    App.initialize();
});