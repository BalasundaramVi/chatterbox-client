var Friends = {
    _friends: {},


    toggleStatus: (friendName) => {
        if (Friends._friends[friendName] === true) {
            Friends._friends[friendName] = false;
        } else {
            Friends._friends[friendName] = true;
        }
        Friends.highlightFriends();
    },

    highlightFriends: () => {
        for (var friend in Friends._friends) {
            var classSelector = "." + friend.toString()
            if (Friends._friends[friend] === true) {
                $(_.escape(classSelector)).addClass('friend');
            } else {
                $(_.escape(classSelector)).removeClass('friend');
            }
        }
    }
};