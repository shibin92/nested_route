import Ember from 'ember';

export default Ember.Component.extend({
    showModal: false,
    init(){
        this._super(...arguments);
        this.set('email', this.get('accountDetail.email'));
    },  
    actions: {
        onNext() {
            // this.get('transitonTo')(this.get('email'));
            this.set('showModal', true);
        },
        onCancel() {
            this.set('showModal', false);
        }
    }
});
