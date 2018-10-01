var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = _.escape($('#message').val());
    console.log(text);
    var submitMessage = {
      username: App.username,
      text: text,
      roomname: 'lobby'
    }
    Parse.create(submitMessage);
    MessagesView.render(submitMessage);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};