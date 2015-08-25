/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var ValidationDispatcher = (function () {
            function ValidationDispatcher(inputValidationTypes) {
                this.inputValidationTypes = inputValidationTypes;
                this.validationObjects = new Array();
            }
            ValidationDispatcher.prototype.getValidationObjects = function () {
                return this.validationObjects;
            };
            ValidationDispatcher.prototype.addValidationObject = function (formElement, validationObjectId, validationObject) {
                var formKey = formElement.attr('id');
                if (this.validationObjects[formKey] == undefined) {
                    this.validationObjects[formKey] = new Array();
                }
                this.validationObjects[formKey][validationObjectId] = validationObject;
            };
            ValidationDispatcher.prototype.validateInput = function (validationObject) {
                var _this = this;
                validationObject.resetState();
                this.inputValidationTypes.validationAttributes.forEach(function (value) {
                    var attribute = (validationObject.getAttributes()[value.attributeName]);
                    console.log(validationObject.getAttributes());
                    if (attribute !== undefined) {
                        validationObject.validate(value, attribute, validationObject.getElement(), validationObject.getAttributes());
                    }
                });
                this.addValidationObject(validationObject.getScope().$parent.formElement, validationObject.getElement().attr('id'), validationObject);
                validationObject.changeElementState();
                validationObject.getContinuationObjects().forEach(function (value) {
                    _this.validateInput(value);
                });
            };
            ValidationDispatcher.prototype.forForm = function (formElement) {
                this.internalFormKey = $('#' + formElement).attr('id');
                return this;
            };
            ValidationDispatcher.prototype.forValidationObject = function (validationObjectId) {
                console.log(this.validationObjects);
                console.log(this.internalFormKey);
                this.internalValidationObject = this.validationObjects[this.internalFormKey][validationObjectId];
                return this;
            };
            ValidationDispatcher.prototype.continueWith = function (validationObjectId) {
                this.internalValidationObject.addContinuationValidationObjects(this.validationObjects[this.internalFormKey][validationObjectId]);
                return this;
            };
            return ValidationDispatcher;
        })();
        validationModule.ValidationDispatcher = ValidationDispatcher;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=validationdispatcher.js.map