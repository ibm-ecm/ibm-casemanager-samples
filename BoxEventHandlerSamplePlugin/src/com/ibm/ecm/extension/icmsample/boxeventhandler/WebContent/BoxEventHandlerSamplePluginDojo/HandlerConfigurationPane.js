define([
	"dojo/_base/declare",
	"dojo/aspect",
	"dojo/_base/lang",
	"dijit/_TemplatedMixin", 
	"dijit/_WidgetsInTemplateMixin",
	"boxeventlistener/eventhandler/configuration/BaseConfigurationPane",
	"boxeventlistener/eventhandler/configuration/icm/BoxCopyToCaseConfigurationPane",
	"dojo/text!./templates/HandlerConfigurationPane.html"
], function(declare, aspect, lang, TemplatedMixin, WidgetsInTemplateMixin, BaseConfigurationPane, BoxCopyToCaseConfigurationPane, contentString) {

	/**
	 * @name BoxEventHandlerSamplePluginDojo.HandlerConfigurationPane
	 * @class Inherits the out-of-box event handler configuration pane for BoxCopyToCaseConfigurationPane. Adds additional functionality to allow users to insert
	 * 		  a Box sub-folder name they want to watch for.
	 * @augments icm.widget.boxeventhandler.BaseConfigurationPane, TemplateMixin, WidgetsIntemplateMixin
	 */
	return declare("BoxEventHandlerSamplePluginDojo.HandlerConfigurationPane", [BoxCopyToCaseConfigurationPane, TemplatedMixin, WidgetsInTemplateMixin], {
		/** @lends BoxEventHandlerSamplePluginDojo.HandlerConfigurationPane.prototype */
		templateString: contentString,
		widgetsInTemplate: true,
		
		postCreate: function() {
			this.inherited(arguments);
		},
		
		/**
		 * Overrides BoxCopyToCase Event Handler to take in folder name to watch.
		 * Returns user input for this event handler which will be sent to the mid-tier as a parameter in JSON format.
		 */
		getInput: function() {
			return {
				documentClass: this.docClassSelect.getValue(),
				solution: this.solutionSelect.getValue(),
				folderName: this.folderNameTextBox.getValue(),
				fileDocToCase: this.fileToCaseEnable.checked ? true : false
			}
		},
		
		/**
		 * Caches the parameters for the pane to use later to populate values of the parameters in the dialog.
		 * Expect input to be in this form:
		 *    {documentClass: <value>, solution: <value>, folderName: <value>, fileDocToCase: <value>}
		 */
		setInput: function(inputParam) {
			//inheriting arguments will set documentClass, solution, and fileDocToCase values first
			this.inherited(arguments);
			
			//populates the folder name that was previously defined
			var inputFolderName = inputParam.folderName ? inputParam.folderName : null;
			this.folderNameTextBox.set("value", inputFolderName);
		}
	});
});
