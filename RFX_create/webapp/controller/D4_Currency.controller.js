sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.controller.D4_Currency", {

    onInit: function() {
    	var sServiceUrl = "/sap/opu/odata/sap/ZSRM_RFX_SRV/";
    	  var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
		  this.getView().setModel(oModel);
        this._oDialog = this.getView().getContent()[0];
    },
    onExit: function() {
        this._oDialog.destroy();
    },
    setRouter: function(oRouter) {
        this.oRouter = oRouter;
    },
	onClose: function() {
		this.getView().getContent()[0].close();
	},
	onSelect: function() {
		
		var oView = this.getView.getModel();
		this.getView().getContent()[0].close();
	}
	});
}, /* bExport= */true);