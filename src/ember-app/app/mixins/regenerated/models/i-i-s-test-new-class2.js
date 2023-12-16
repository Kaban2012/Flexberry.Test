import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  воЭтажей: DS.attr('number'),
  номер: DS.attr('string'),
  город: DS.belongsTo('i-i-s-test-город', { inverse: null, async: false })
});

export let ValidationRules = {
  воЭтажей: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.воЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass2E', 'i-i-s-test-new-class2', {
    номер: attr('Номер', { index: 0 }),
    город: belongsTo('i-i-s-test-город', 'Город', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-test-new-class2', {
    номер: attr('Номер', { index: 0 }),
    город: belongsTo('i-i-s-test-город', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
