sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/m/MessageToast',
	'sap/m/Dialog',
	'sap/m/List',
	'sap/m/StandardListItem',
	'sap/m/Button',
	'sap/m/UploadCollectionParameter',
	'sap/ui/model/json/JSONModel'
], function(BaseController, History, MessageToast, Dialog, List, StandardListItem, Button, UploadCollectionParameter, JSONModel) {
	"use strict";

	return BaseController.extend("generated.app.controller.14771400810323996_S3", {

		onAfterRendering: function() {

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("14771400810323996_S3").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap/opu/odata/sap/ZSRM_RFX_SRV/bidderSet"));
			this.getView().setModel(oModel);

		},
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}

			}

		},
		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Header Methods~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

		//Currency F4

		currencyValueHelp: function(oEvent) {
			var dialog = new Dialog({
				title: 'Available Products',
				content: new List({
					items: {
						path: '/currencyHelpSet',
						template: new StandardListItem({
							title: "{Currency}",
							info: "{CurrencyText}"
						})
					}
				}),
				beginButton: new Button({
					text: 'Close',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}

			});				//to get access to the global model
				this.getView().addDependent(dialog);
				dialog.open();
			// var dialogName = "D4_Currency";
			// this.dialogs = this.dialogs || {};
			// var dialog = this.dialogs[dialogName];
			// var source = oEvent.getSource();
			// 	var bindingContext = source.getBindingContext();
			// 	var path = (bindingContext) ? bindingContext.getPath() : null;
			// 	var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			// 	var view;
			// 	if (!dialog) {
			// 	    view = sap.ui.xmlview({viewName: "generated.app.view." + dialogName});
			// 	    view._sOwnerId = this.getView()._sOwnerId;
			// 	    //need to set router so we can use navigation in dialogs
			// 	    view.getController().setRouter(this.oRouter);
			// 	    dialog = view.getContent()[0];
			// 	    this.dialogs[dialogName] = dialog;
			// 	}
			// dialog.open();
			// if (view) {
			//     dialog.attachAfterOpen(function () {
			//         dialog.rerender();
			//     });
			// } else {
			//     view = dialog.getParent();
			// }
			// view.setModel(model);
			// if (path) {
			//     view.bindElement(path, {});
			// }
		},

		purchasingOrgValueHelp: function(oEvent) {
			var dialogName = "D5_Porg";
			this.dialogs = this.dialogs || {};
			var dialog = this.dialogs[dialogName];
			var source = oEvent.getSource();
			var bindingContext = source.getBindingContext();
			var path = (bindingContext) ? bindingContext.getPath() : null;
			var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			var view;
			if (!dialog) {
				view = sap.ui.xmlview({
					viewName: "generated.app.view." + dialogName
				});
				view._sOwnerId = this.getView()._sOwnerId;
				//need to set router so we can use navigation in dialogs
				view.getController().setRouter(this.oRouter);
				dialog = view.getContent()[0];
				this.dialogs[dialogName] = dialog;
			}
			dialog.open();
			if (view) {
				dialog.attachAfterOpen(function() {
					dialog.rerender();
				});
			} else {
				view = dialog.getParent();
			}
			view.setModel(model);
			if (path) {
				view.bindElement(path, {});
			}
		},

		purchasingGrpValueHelp: function(oEvent) {
			var dialogName = "D6_PGrp";
			this.dialogs = this.dialogs || {};
			var dialog = this.dialogs[dialogName];
			var source = oEvent.getSource();
			var bindingContext = source.getBindingContext();
			var path = (bindingContext) ? bindingContext.getPath() : null;
			var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			var view;
			if (!dialog) {
				view = sap.ui.xmlview({
					viewName: "generated.app.view." + dialogName
				});
				view._sOwnerId = this.getView()._sOwnerId;
				//need to set router so we can use navigation in dialogs
				view.getController().setRouter(this.oRouter);
				dialog = view.getContent()[0];
				this.dialogs[dialogName] = dialog;
			}
			dialog.open();
			if (view) {
				dialog.attachAfterOpen(function() {
					dialog.rerender();
				});
			} else {
				view = dialog.getParent();
			}
			view.setModel(model);
			if (path) {
				view.bindElement(path, {});
			}
		},

		_onButtonPress1: function(oEvent) {
			var dialogName = "D2_1479394173532";
			this.dialogs = this.dialogs || {};
			var dialog = this.dialogs[dialogName];
			var source = oEvent.getSource();
			var bindingContext = source.getBindingContext();
			var path = (bindingContext) ? bindingContext.getPath() : null;
			var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			var view;
			if (!dialog) {
				view = sap.ui.xmlview({
					viewName: "generated.app.view." + dialogName
				});
				view._sOwnerId = this.getView()._sOwnerId;
				//need to set router so we can use navigation in dialogs
				view.getController().setRouter(this.oRouter);
				dialog = view.getContent()[0];
				this.dialogs[dialogName] = dialog;
			}
			dialog.open();
			if (view) {
				dialog.attachAfterOpen(function() {
					dialog.rerender();
				});
			} else {
				view = dialog.getParent();
			}
			view.setModel(model);
			if (path) {
				view.bindElement(path, {});
			}
		},
		_onButtonPress: function(oEvent) {
			var dialogName = "D1_1479379430922";
			this.dialogs = this.dialogs || {};
			var dialog = this.dialogs[dialogName];
			var source = oEvent.getSource();
			var bindingContext = source.getBindingContext();
			var path = (bindingContext) ? bindingContext.getPath() : null;
			var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			var view;
			if (!dialog) {
				view = sap.ui.xmlview({
					viewName: "generated.app.view." + dialogName
				});
				view._sOwnerId = this.getView()._sOwnerId;
				//need to set router so we can use navigation in dialogs
				view.getController().setRouter(this.oRouter);
				dialog = view.getContent()[0];
				this.dialogs[dialogName] = dialog;
			}
			dialog.open();
			if (view) {
				dialog.attachAfterOpen(function() {
					dialog.rerender();
				});
			} else {
				view = dialog.getParent();
			}
			view.setModel(model);
			if (path) {
				view.bindElement(path, {});
			}
		},

		/*---------------------------------- Attachment dialogs method-------------------------------------*/

		_onButtonPressAttachment: function(oEvent) {
			var dialogName = "D3_Attachments";
			this.dialogs = this.dialogs || {};
			var dialog = this.dialogs[dialogName];
			var source = oEvent.getSource();
			var bindingContext = source.getBindingContext();
			var path = (bindingContext) ? bindingContext.getPath() : null;
			var model = (bindingContext) ? bindingContext.getModel() : this.getView().getModel();
			var view;
			if (!dialog) {
				view = sap.ui.xmlview({
					viewName: "generated.app.view." + dialogName
				});
				view._sOwnerId = this.getView()._sOwnerId;
				//need to set router so we can use navigation in dialogs
				view.getController().setRouter(this.oRouter);
				dialog = view.getContent()[0];
				this.dialogs[dialogName] = dialog;
			}
			dialog.open();
			if (view) {
				dialog.attachAfterOpen(function() {
					dialog.rerender();
				});
			} else {
				view = dialog.getParent();
			}
			view.setModel(model);
			if (path) {
				view.bindElement(path, {});
			}
		},

		/*---------------------------------- Attachment File Uploaders method-------------------------------------*/

		onAttachmentChange: function(oEvent) {
			var oUploadCollection = oEvent.getSource();
			// Header Token
			var oCustomerHeaderToken = new UploadCollectionParameter({
				name: "x-csrf-token",
				value: "securityTokenFromModel"
			});
			oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
		},

		getAttachmentTitleText: function() {
			var aItems = this.getView().byId("UploadCollection").getItems();
			return "Uploaded (" + aItems.length + ")";
		},

		onFilenameLengthExceed: function(oEvent) {
			MessageToast.show("FilenameLengthExceed event triggered.");
		},

		onFileSizeExceed: function(oEvent) {
			MessageToast.show("FileSizeExceed event triggered.");
		},

		onUploadComplete: function(oEvent) {
			var oData = this.getView().byId("UploadCollection").getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var oItem = {};
			var sUploadedFile = oEvent.getParameter("files")[0].fileName;
			// at the moment parameter fileName is not set in IE9
			if (!sUploadedFile) {
				var aUploadedFile = (oEvent.getParameters().getSource().getProperty("value")).split(/\" "/);
				sUploadedFile = aUploadedFile[0];
			}
			oItem = {
				"documentId": jQuery.now().toString(), // generate Id,
				"fileName": sUploadedFile,
				"mimeType": "",
				"thumbnailUrl": "",
				"url": "",
				"attributes": [{
					"title": "Uploaded By",
					"text": "You"
				}, {
					"title": "Uploaded On",
					"text": new Date(jQuery.now()).toLocaleDateString()
				}, {
					"title": "File Size",
					"text": "505000"
				}]
			};

			// commented as oData not present
			//aItems.unshift(oItem);
			// this.getView().byId("UploadCollection").getModel().setData({
			// 	"items" : aItems
			// });

			// Sets the text to the label
			this.getView().byId("attachmentTitle").setText(this.getAttachmentTitleText());
			// delay the success message for to notice onChange message
			setTimeout(function() {
				MessageToast.show("UploadComplete event triggered.");
			}, 4000);
		},

		onUploadTerminated: function(oEvent) {
			// get parameter file name
			var sFileName = oEvent.getParameter("fileName");
			// get a header parameter (in case no parameter specified, the callback function getHeaderParameter returns all request headers)
			var oRequestHeaders = oEvent.getParameters().getHeaderParameter();
		},

		/*---------------------------------- Notes method-------------------------------------*/

		onPost: function(oEvent) {
			// create new entry
			var sValue = oEvent.getParameter("value");
			var oEntry = {
				Author: "Femin Gala",
				AuthorPicUrl: "http://www.dmgdelta.co.uk/wp-content/uploads/survey-clipart-1.jpg",
				Text: "sValue"
			};

			// update model
			var oModel = this.getView().getModel();
			var aEntries = oModel.getData().EntryCollection;
			aEntries.unshift(oEntry);
			oModel.setData({
				EntryCollection: aEntries
			});
		}

	});
}, /* bExport= */ true);