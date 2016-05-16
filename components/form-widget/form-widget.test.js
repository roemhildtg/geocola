import { ViewModel } from './form-widget';
import q from 'steal-qunit';

import { Connection } from 'test/data/connection';

let vm;

q.module('components/form-widget.ViewModel', {
  beforeEach: function() {
    vm = new ViewModel({});
  },
  afterEach: function() {
    vm = null;
  }
});

test('objectId set()', assert => {
  let done = assert.async();
  let id = 1;
  vm.attr({
    connection: Connection,
    objectId: id
  });
  vm.attr('promise').then(function() {
    assert.equal(vm.attr('formObject.id'), id, 'formObject should be retrieved correctly');
    done();
  });
});

test('fetchObject(con, id)', assert => {
  let id = 1;
  let done = assert.async();
  let promise = vm.fetchObject(Connection, id);
  promise.then(function(item) {
    assert.equal(vm.attr('formObject.id'), id, 'form object should be loaded asynchronously');
    done();
  });
});

test('submitForm()', assert => {
  let done = assert.async();
  let object = { test: 'hello' };
  vm.attr('formObject', object);

  vm.on('submit', function(ev, item) {
    assert.deepEqual(item.attr(), object, 'item dispatched from submit event should be the object');
    done();
  });
  vm.submitForm();
});

test('setField(field, domElement, event, value)', assert => {
  let object = { test: 'hello' };
  vm.attr('formObject', object);

  vm.setField('test', null, null, 'dummy');
  assert.deepEqual(vm.attr('formObject').attr(), object, 'setting a field value should change the formObject');
});

test('cancelForm()', assert => {
  let done = assert.async();

  vm.on('cancel', function() {
    assert.equal(1, 1, 'cancel event should be dispatched');
    done();
  });
  vm.cancelForm();
});
