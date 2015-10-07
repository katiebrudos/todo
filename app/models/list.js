import DS from 'ember-data';

export default DS.Model.extend({
	
	name: DS.attr('string', { defaultValue: 'item1.0'}),
	text: DS.attr('string', {defaultValue: 'This is a to-do item'}),
	done: DS.attr('boolean' , {defaultValue: false})
	
  
});
