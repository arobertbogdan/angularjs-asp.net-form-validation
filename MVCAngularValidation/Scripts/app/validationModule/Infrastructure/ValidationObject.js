/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var ValidationObject = (function () {
            function ValidationObject($scope, $element, $attrs) {
                this.$scope = $scope;
                this.$element = $element;
                this.$attrs = $attrs;
                this.errorCount = 0;
                this.isValidated = false;
                this.errorMessages = new Array();
                this.continuationValidationObjects = new Array();
                this.parentFormGroup = this.$element.closest("div.form-group");
                this.errorsContainer = this.parentFormGroup.find("div.errors-container");
            }
            ValidationObject.prototype.resetState = function () {
                this.errorCount = 0;
                this.isValidated = false;
                this.errorMessages = new Array();
            };
            ValidationObject.prototype.validate = function (value, attribute, $element, $attrs) {
                var _this = this;
                var optionList = new Array();
                value.options.forEach(function (option) {
                    var optionValue = (_this.$attrs[value.attributeName + option]);
                    optionList[option] = optionValue;
                });
                var result = value.validator($element, optionList);
                if (result !== undefined) {
                    if (!result) {
                        this.errorCount++;
                        this.errorMessages.push(attribute);
                    }
                    this.isValidated = true;
                }
            };
            ValidationObject.prototype.changeElementState = function () {
                var _this = this;
                this.errorsContainer.children().remove();
                if (!this.isValid()) {
                    this.getErrorMessages().forEach(function (error) {
                        _this.errorsContainer.append("<p>" + error + "</p>");
                    });
                    this.parentFormGroup.removeClass("has-success").addClass("has-error");
                }
                else {
                    this.parentFormGroup.removeClass("has-error").addClass("has-success");
                }
            };
            ValidationObject.prototype.isValid = function () {
                return this.errorCount <= 0;
            };
            ValidationObject.prototype.getErrorMessages = function () {
                return this.errorMessages;
            };
            ValidationObject.prototype.addContinuationValidationObjects = function (object) {
                this.continuationValidationObjects.push(object);
            };
            ValidationObject.prototype.getScope = function () {
                return this.$scope;
            };
            ValidationObject.prototype.getAttributes = function () {
                return this.$attrs;
            };
            ValidationObject.prototype.getElement = function () {
                return this.$element;
            };
            ValidationObject.prototype.getContinuationObjects = function () {
                return this.continuationValidationObjects;
            };
            return ValidationObject;
        })();
        validationModule.ValidationObject = ValidationObject;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=validationobject.js.map