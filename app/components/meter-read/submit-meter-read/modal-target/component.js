import Ember from 'ember';

export default Ember.Component.extend({
  modalAnimation() {
		return this.lookup('explode').call(this, {
			pick: '.modal-background',
			use: ['fade', { maxOpacity: 0.5 }]
		},{
			pick: '.modal-dialog',
			use: 'to-down'
		}
	);
  }
});
