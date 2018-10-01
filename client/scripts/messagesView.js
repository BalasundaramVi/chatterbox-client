var MessagesView = {

  $chats: $('#chats'),
  _messages: [],

  initialize: function() {
  },

  render: function(message) {
    var message = {
      username: message.username || 'anonymous',
      text: message.text || '[EMPTY]',
      roomname: message.roomname || 'Main Lobby'
    };
    MessagesView._messages[message.objectId] = message;
    MessagesView.renderMessage(message);
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  }

};