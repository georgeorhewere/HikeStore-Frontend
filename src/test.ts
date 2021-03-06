// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
// All test -- run all tests
const context = require.context('./', true, /\.spec\.ts$/);

//single test -- specify the spec file
//const context = require.context('./', true, /product.form.component.spec\.ts$/);
// And load the modules.
context.keys().map(context);
