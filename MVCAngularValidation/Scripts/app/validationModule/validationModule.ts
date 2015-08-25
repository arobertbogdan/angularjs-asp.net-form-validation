/// <reference path="_paths.ts" />
module ember.validationModule {
    "use strict";

    angular.module('ember.ValidationModule', [])
        .factory('inputValidationTypes', () => new InputValidationTypes())
        .factory("formValidationService", ($rootScope, inputValidationTypes) => new FormValidationService($rootScope, inputValidationTypes))
        .factory("inputValidationFlowService", (formValidationService) => new InputValidationFlowService(formValidationService))
        .provider("validationBootstrap", ember.validationModule.ValidationBootstrap)
        .controller('FormValidationController', ember.validationModule.FormValidationController)
        .directive('validate', (validationBootstrap: ember.validationModule.ValidationBootstrap, inputValidationFlowService: InputValidationFlowService) => new ValidableForm(validationBootstrap, inputValidationFlowService))
        .directive('input', (formValidationService) => new ValidableInput(formValidationService));
}