import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		onCancel() {
			this.get('onCancel')();
		}
	}
});
