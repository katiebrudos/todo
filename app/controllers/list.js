import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  	list: Ember.computed.alias('model'),

	actions: {
		addItem(){
			this.store.createRecord('list');
			this.set('list');
			this.save();
		},
		removeItem(){
			this.store.removeRecord('list');
		}
	}
});
