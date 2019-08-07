/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"ovly/mm/minhas_compras/test/integration/NavigationJourneyPhone",
		"ovly/mm/minhas_compras/test/integration/NotFoundJourneyPhone",
		"ovly/mm/minhas_compras/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});