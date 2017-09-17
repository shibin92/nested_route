import Ember from 'ember';

export default Ember.Route.extend({      
    actions: {
        transitonTo(value) {
            let currentModel = this.modelFor(this.routeName);
            
            Ember.set(currentModel, 'accountDetail.email', value);
            this.transitionTo('account.submit-reading.meter-detail');
        }
    }
});
