App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function(){
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var posts = [{
  id: '1',
  title: "テスト1",
  author: { name: "d2h" },
  date: new Date('12-27-2012'),
  excerpt: "テスト1です。",
  body: "テスト1の投稿です。長いのでいろいろと端折ります。"
}, {
  id: '2',
  title: "テスト2",
  author: { name: "d2h" },
  date: new Date('11-26-1983'),
  excerpt: "テスト2です。",
  body: "私の誕生部です。"
}];
