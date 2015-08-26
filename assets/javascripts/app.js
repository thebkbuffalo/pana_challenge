var App = new Marionette.Application();

App.addRegions({
  "mainRegion": "#main"
});

App.module("Todo", function(Todo, App, Backbone, Marionette, $, _){
  var TodoItem = Backbone.Model.extend({});

  var TodoCollection = Backbone.Collection.extend({
    model: TodoItem
  });

  var TodoItemView = Marionette.ItemView.extend({
    template: "#todo-item",
    tagName: "li",
  });

  var TodoListView = Marionette.CompositeView.extend({
    childView: TodoItemView,
    childViewContainer: 'ul',
    template: "#todo-list",
    ui: {
      myInput: '#myInput'
    }
  });

  Todo.addInitializer(function(){
    var todos = [];
    var collection = new TodoCollection(todos);
    App.mainRegion.show(new TodoListView({ collection: collection }));
  });
});
