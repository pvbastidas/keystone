var keystone = require('keystone');
var Types = keystone.Field.Types;

var Promotion = new keystone.List('Promotion');

Promotion.add({
    name: { type: String, required: true, index: true },
    description:  { type: String, required: true, index: true, initial: true },
    store: { type: Types.Relationship, ref: 'Store'},
    fecha_exp: {type: Types.Date, required: true, index: true, initial: true},
    state: {type: Types.Select, options: 'activo, inactivo', default: 'activo', index: true, require: true, initial: true, label: 'Estado'}
});

Promotion.defaultColumns = 'name, description, user_id, fecha_exp, state';
Promotion.register();
