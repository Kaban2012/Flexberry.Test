import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-new-class2-l');
  this.route('i-i-s-test-new-class2-e',
  { path: 'i-i-s-test-new-class2-e/:id' });
  this.route('i-i-s-test-new-class2-e.new',
  { path: 'i-i-s-test-new-class2-e/new' });
  this.route('i-i-s-test-город-l');
  this.route('i-i-s-test-город-e',
  { path: 'i-i-s-test-город-e/:id' });
  this.route('i-i-s-test-город-e.new',
  { path: 'i-i-s-test-город-e/new' });
});

export default Router;
