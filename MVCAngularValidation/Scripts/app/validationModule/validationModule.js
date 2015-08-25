/// <reference path="_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        "use strict";
        angular.module('ember.ValidationModule', [])
            .factory('inputValidationTypes', function () { return new validationModule.InputValidationTypes(); })
            .factory("formValidationService", function ($rootScope, inputValidationTypes) { return new validationModule.FormValidationService($rootScope, inputValidationTypes); })
            .factory("inputValidationFlowService", function (formValidationService) { return new validationModule.InputValidationFlowService(formValidationService); })
            .provider("validationBootstrap", ember.validationModule.ValidationBootstrap)
            .controller('FormValidationController', ember.validationModule.FormValidationController)
            .directive('validate', function (validationBootstrap, inputValidationFlowService) { return new validationModule.ValidableForm(validationBootstrap, inputValidationFlowService); })
            .directive('input', function (formValidationService) { return new validationModule.ValidableInput(formValidationService); });
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=validationmodule.js.map