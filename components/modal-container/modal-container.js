/* jshint esnext:true */

import widgetModel from 'components/widget-model';
import can from 'can';
import template from './template.stache!';
/**
 * @constructor components/modal-container.ViewModel ViewModel
 * @parent components/modal-container
 * @group components/modal-container.ViewModel.props Properties
 *
 * @description A `<modal-container />` component's ViewModel
 */
export let ViewModel = widgetModel.extend({
  /**
   * @prototype 
   */
  define: {
    /**
     * The title to display in the modal dialog
     * @property {String} components/modal-container.ViewModel.props.title
     */
    title: {
      type: 'string',
      value: 'Dialog'
    },
    /**
     * Whether or not the container is visible by default
     * @property {Boolean} components/modal-container.ViewModel.props.visible
     */
    visible: {
      type: 'boolean',
      value: true
    }
  },
  show: function(){
    can.$('#modal-' + this.attr('instanceId')).modal('show');
  },
  hide: function(){
    can.$('#modal-' + this.attr('instanceId')).modal('hide');
  }
});

export let ModalContainer = can.Component.extend({
  tag: 'modal-container',
  template: template,
  viewModel: ViewModel
});
