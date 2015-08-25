/// <reference path="../../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var ValidableForm = (function () {
            function ValidableForm(validationBootstrap, inputValidationFlowService) {
                var _this = this;
                this.validationBootstrap = validationBootstrap;
                this.inputValidationFlowService = inputValidationFlowService;
                this.restrict = "A";
                this.controller = validationModule.FormValidationController;
                this.link = function () {
                    console.log("Form link");
                    var bootstraper = _this.validationBootstrap.getBootstraper();
                    bootstraper.configValidationFLows(_this.inputValidationFlowService);
                };
            }
            ValidableForm.$inject = ["inputValidationFlowService", "validationBootstrap"];
            return ValidableForm;
        })();
        validationModule.ValidableForm = ValidableForm;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=validableform.js.map