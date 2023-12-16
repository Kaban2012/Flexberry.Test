import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestNewClass2LForm from './forms/i-i-s-test-new-class2-l';
import IISTestГородLForm from './forms/i-i-s-test-город-l';
import IISTestNewClass2EForm from './forms/i-i-s-test-new-class2-e';
import IISTestГородEForm from './forms/i-i-s-test-город-e';
import IISTestNewClass2Model from './models/i-i-s-test-new-class2';
import IISTestГородModel from './models/i-i-s-test-город';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-new-class2': IISTestNewClass2Model,
    'i-i-s-test-город': IISTestГородModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-test-new-class2-l': {
            caption: 'New class2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-new-class2-l': IISTestNewClass2LForm,
    'i-i-s-test-город-l': IISTestГородLForm,
    'i-i-s-test-new-class2-e': IISTestNewClass2EForm,
    'i-i-s-test-город-e': IISTestГородEForm
  },

});

export default translations;
