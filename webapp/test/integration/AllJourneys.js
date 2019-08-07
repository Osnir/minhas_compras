/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Headers in the list
// * All 3 Headers have at least one ToItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"ovly/mm/minhas_compras/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ovly/mm/minhas_compras/test/integration/pages/App",
	"ovly/mm/minhas_compras/test/integration/pages/Browser",
	"ovly/mm/minhas_compras/test/integration/pages/Master",
	"ovly/mm/minhas_compras/test/integration/pages/Detail",
	"ovly/mm/minhas_compras/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ovly.mm.minhas_compras.view."
	});

	sap.ui.require([
		"ovly/mm/minhas_compras/test/integration/MasterJourney",
		"ovly/mm/minhas_compras/test/integration/NavigationJourney",
		"ovly/mm/minhas_compras/test/integration/NotFoundJourney",
		"ovly/mm/minhas_compras/test/integration/BusyJourney",
		"ovly/mm/minhas_compras/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});