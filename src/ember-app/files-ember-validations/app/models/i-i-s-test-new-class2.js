import {
  defineNamespace,
  defineProjections,
  Model as NewClass2Mixin
} from '../mixins/regenerated/models/i-i-s-test-new-class2';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(NewClass2Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
