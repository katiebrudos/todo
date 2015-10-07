import Ember from 'ember';

export default Ember.Controller.extend({

  	lists: Ember.computed.alias('model'),
	list: Ember.computed.alias('lists.firstObject'),

	actions: {
		addItem(text){
			this.store.createRecord('list', {
				text: text
			});
			this.save();

		},
		saveItem(item){
			item.save();
		},
		removeItem(){
			this.get('list').destroyRecord();
		},
		viewItems(item){
			this.set('list', item);
		}
	}
});
