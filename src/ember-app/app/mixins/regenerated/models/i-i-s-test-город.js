import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  площадь: DS.attr('number')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-test-город.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-test-город.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-test-город', {
    наименование: attr('Наименование', { index: 0 }),
    площадь: attr('Площадь', { index: 1 })
  });

  modelClass.defineProjection('ГородL', 'i-i-s-test-город', {
    наименование: attr('Наименование', { index: 0 }),
    площадь: attr('Площадь', { index: 1 })
  });
};
