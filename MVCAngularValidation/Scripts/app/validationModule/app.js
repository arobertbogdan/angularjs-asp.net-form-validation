/// <reference path="_all.ts" />
var ember;
(function (ember) {
    "use strict";
    var emberMvc = angular.module('angularMvc', [])
        .factory('inputValidationTypes', function () { return new ember.InputValidationTypes(); })
        .factory("inputValidationService", function (inputValidationTypes, formValidationService) { return new ember.InputValidationService(inputValidationTypes, formValidationService); })
        .factory("formValidationService", function ($rootScope, inputValidationTypes) { return new ember.FormValidationService($rootScope, inputValidationTypes); })
        .factory("inputValidationFlowService", function (formValidationService) { return new ember.InputValidationFlowService(formValidationService); })
        .controller('FormController', ember.FormController)
        .directive('input', function (inputValidationService) { return new ember.ValidableInput(inputValidationService); })
        .directive('form', function (inputValidationFlowService) { return new ember.ValidableForm(inputValidationFlowService); });
})(ember || (ember = {}));
