/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var InputValidationFlowService = (function () {
            function InputValidationFlowService(formValidationService) {
                this.formValidationService = formValidationService;
                this.validationDispatcher = this.formValidationService.getValidationDispatcher();
            }
            InputValidationFlowService.prototype.atForm = function (formId) {
                return this.validationDispatcher.forForm("TestForm");
            };
            InputValidationFlowService.$inject = ["formValidationService"];
            return InputValidationFlowService;
        })();
        validationModule.InputValidationFlowService = InputValidationFlowService;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=inputvalidationflowservice.js.map