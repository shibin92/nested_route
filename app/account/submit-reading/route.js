import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            accountDetail: Ember.Object.create({}),
            meterDetail: Ember.Object.create({})
        }
    },
    afterModel() {
        this.transitionTo('account.submit-reading.account-detail');
    } 
});
