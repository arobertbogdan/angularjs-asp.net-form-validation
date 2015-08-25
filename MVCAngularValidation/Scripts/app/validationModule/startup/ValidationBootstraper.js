/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var ValidationBootstraper = (function () {
            function ValidationBootstraper(validationFlowService) {
                this.validationFlowService = validationFlowService;
            }
            ValidationBootstraper.prototype.run = function () {
                this.configValidationFLows(this.validationFlowService);
            };
            ValidationBootstraper.prototype.configValidationFLows = function (validationFlowService) {
            };
            return ValidationBootstraper;
        })();
        validationModule.ValidationBootstraper = ValidationBootstraper;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
