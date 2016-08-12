(function() {
    'use strict';

    describe('User', function() {
        it('Tests abc', function() {
            var model = onReady();
            console.log(model);
            expect(model.events.length).to.equal(0);
        });
    });
})();
