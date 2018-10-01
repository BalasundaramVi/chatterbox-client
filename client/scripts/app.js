var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((fulldata) => {
      // examine the response from the server request:
      console.log(fulldata);
      var data = fulldata.results;
      for (var i = data.length-1; i >= data.length - 30; i--) {
        MessagesView.render(data[i]);
      }
      $(".username").on('click', function(event) {
        Friends.toggleFriend($(event.target).text());
      })
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
