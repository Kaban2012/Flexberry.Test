import { Serializer as NewClass2Serializer } from
  '../mixins/regenerated/serializers/i-i-s-test-new-class2';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(NewClass2Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
