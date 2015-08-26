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
    triggers: {
      'click': 'done'
    }
  });

  var TodoListView = Marionette.CompositeView.extend({
    childView: TodoItemView,
    childViewContainer: 'ul',
    template: "#todo-list",
    ui: {
      myInput: '#myInput'
    },
    events: {
      'click #button': 'add'
    },
    childEvents: {
      'done': 'done'
    },
    templateHelpers: function(){
      return {
        todosLength: this.collection.length
      };
    },
    add: function(){
      var input = this.ui.myInput.val();
      console.log(input);
      this.collection.add({name: this.ui.myInput.val()});
      this.render();
    },
    done: function(child){
      this.collection.remove(child.model);
      this.render();
    }
  });

  Todo.addInitializer(function(){
    var todos = [];
    var collection = new TodoCollection(todos);
    App.mainRegion.show(new TodoListView({ collection: collection }));
  });
});

$(document).ready(function(){
  App.start();
});
