var ember;
(function (ember) {
    'use strict';
    var InputValidationFlowService = (function () {
        function InputValidationFlowService(formValidationService) {
            this.formValidationService = formValidationService;
            this.validationDispatcher = this.formValidationService.getValidationDispatcher();
        }
        InputValidationFlowService.prototype.configure = function () {
            this.validationDispatcher.forValidationObject("TestForm", "Password").continueWith("ConfirmPassword");
        };
        InputValidationFlowService.$inject = ["formValidationService"];
        return InputValidationFlowService;
    })();
    ember.InputValidationFlowService = InputValidationFlowService;
})(ember || (ember = {}));
