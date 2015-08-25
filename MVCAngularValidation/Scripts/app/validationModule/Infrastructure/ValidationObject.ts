/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class ValidationObject {
        private errorCount;
        private errorMessages: Array<String>;
        private continuationValidationObjects: Array<ValidationObject>;
        private isValidated;
        private parentFormGroup;
        private errorsContainer;


        constructor(private $scope, private $element, private $attrs) {
            this.errorCount = 0;
            this.isValidated = false;
            this.errorMessages = new Array();
            this.continuationValidationObjects = new Array();

            this.parentFormGroup = this.$element.closest("div.form-group");
            this.errorsContainer = this.parentFormGroup.find("div.errors-container");
        }

        public resetState() {
            this.errorCount = 0;
            this.isValidated = false;
            this.errorMessages = new Array();
        }

        public validate(value, attribute, $element, $attrs) {
            var optionList = new Array();
            value.options.forEach((option) => {
                var optionValue = (this.$attrs[value.attributeName + option]);
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
        }

        public changeElementState() {
            this.errorsContainer.children().remove();

            if (!this.isValid()) {
                this.getErrorMessages().forEach((error) => {
                    this.errorsContainer.append("<p>" + error + "</p>");
                });
                this.parentFormGroup.removeClass("has-success").addClass("has-error");

            } else {
                this.parentFormGroup.removeClass("has-error").addClass("has-success");
            }
        }

        public isValid(): Boolean {
            return this.errorCount <= 0;
        }
        public getErrorMessages(): Array<String> {
            return this.errorMessages;
        }

        public addContinuationValidationObjects(object: ValidationObject) {
            this.continuationValidationObjects.push(object);
        }

        public getScope() {
            return this.$scope;
        }

        public getAttributes() {
            return this.$attrs;
        }

        public getElement() {
            return this.$element;
        }

        public getContinuationObjects() {
            return this.continuationValidationObjects;
        }
    }
}