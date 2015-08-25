/// <reference path="../_all.ts" />
var ember;
(function (ember) {
    'use strict';
    var ValidationBootstraper = (function () {
        function ValidationBootstraper(validationFlowService) {
            this.validationFlowService = validationFlowService;
        }
        ValidationBootstraper.prototype.run = function () {
            this.configValidationFLows(this.validationFlowService);
        };
        ValidationBootstraper.prototype.configValidationFLows = function (validationFlowService) {
            validationFlowService.atForm("TestForm").forValidationObject("Password").continueWith("ConfirmPassword");
        };
        return ValidationBootstraper;
    })();
    ember.ValidationBootstraper = ValidationBootstraper;
})(ember || (ember = {}));
//# sourceMappingURL=bootstraper.js.map