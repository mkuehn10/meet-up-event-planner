$(function() {
    var User = function(user) {
        var self = this;

        self.name = user.name;
        self.email = user.email;
        self.password = user.password;
        self.optionalInfo = user.optionalInfo;
    };

    var Event = function(event) {
        var self = this;

        self.name = event.name;
        self.type = event.type;
        self.host = event.host;
        self.startDate = event.startDate;
        self.startTime = event.startTime;
        self.endDate = event.endDate;
        self.endTime = event.endTime;
        self.guestList = event.guestList;
        self.location = event.location;
        self.optionalMessage = event.optionalMessage;
    };

    var ViewModel = function() {
        var self = this;

        self.user = ko.observable(new User(staticUser));
        self.events = ko.observable([]);
        self.loggedIn = ko.observable(false);

        staticEvents.forEach(function(event) {
            self.events().push(new Event(event));
        });

        self.submitUserForm = function(formElement) {
            //console.log(formElement);
            var $formElement = $(formElement);
            self.user(new User({
                name: $formElement.find('#name').val(),
                email: $formElement.find('#email').val(),
                password: $formElement.find('#password').val(),
                optionalInfo: {

                }
            }));
            $formElement.hide();
            self.loggedIn(true);
        }
    };

    ko.applyBindings(new ViewModel());
});

