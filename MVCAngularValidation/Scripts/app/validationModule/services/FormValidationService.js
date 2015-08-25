/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var FormValidationService = (function () {
            function FormValidationService($rootScope, inputValidationTypes) {
                this.$rootScope = $rootScope;
                this.inputValidationTypes = inputValidationTypes;
                this.validationDispatcher = new validationModule.ValidationDispatcher(this.inputValidationTypes);
            }
            FormValidationService.prototype.addInputValidation = function (formElement, validationObjectId, validationObject) {
                this.validationDispatcher.addValidationObject(formElement, validationObjectId, validationObject);
            };
            FormValidationService.prototype.validateForm = function (args) {
                var formValidationObjects = this.getFormValidationObjects(args.attr('id'));
                var isValid = true;
                for (var key in formValidationObjects) {
                    if (formValidationObjects.hasOwnProperty(key)) {
                        var validationObject = formValidationObjects[key];
                        if (validationObject.isValidated === false) {
                            this.validationDispatcher.validateInput(validationObject);
                        }
                        if (!validationObject.isValid())
                            isValid = false;
                    }
                }
                this.$rootScope.$emit('onFormValidationComplete', isValid);
            };
            FormValidationService.prototype.getFormValidationObjects = function (formId) {
                return this.validationDispatcher.getValidationObjects()[formId];
            };
            FormValidationService.prototype.getValidationDispatcher = function () {
                return this.validationDispatcher;
            };
            FormValidationService.$inject = ['$rootScope', 'inputValidationTypes'];
            return FormValidationService;
        })();
        validationModule.FormValidationService = FormValidationService;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=formvalidationservice.js.map