var App = new Marionette.Application();

App.addRegions({
  "mainRegion": "#main"
});

App.module("Todo", function(Todo, App, Backbone, Marionette, $, _){
  var TodoItem = Backbone.Model.extend({});

  var TodoCollection = Backbone.Collection.extend({
    model: TodoItem
  });
});
