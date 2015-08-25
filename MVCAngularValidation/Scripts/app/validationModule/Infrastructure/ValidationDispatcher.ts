/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class ValidationDispatcher {

        private validationObjects = new Array<ValidationObject>();

        private internalValidationObject: ValidationObject;
        private internalFormKey: string;

        constructor(private inputValidationTypes) { }

        public getValidationObjects(): Array<ValidationObject> {
            return this.validationObjects;
        }

        public addValidationObject(formElement: JQuery, validationObjectId: string, validationObject: ValidationObject) {
            var formKey = formElement.attr('id');
            if (this.validationObjects[formKey] == undefined) {
                this.validationObjects[formKey] = new Array();
            }

            this.validationObjects[formKey][validationObjectId] = validationObject;
        }

        public validateInput(validationObject: ValidationObject) {
            validationObject.resetState();
            this.inputValidationTypes.validationAttributes.forEach((value) => {
                var attribute = (validationObject.getAttributes()[value.attributeName]);
                console.log(validationObject.getAttributes());
                if (attribute !== undefined) {
                    validationObject.validate(value, attribute, validationObject.getElement(), validationObject.getAttributes());
                }
            });

            this.addValidationObject(validationObject.getScope().$parent.formElement, validationObject.getElement().attr('id'), validationObject);
            validationObject.changeElementState();

            validationObject.getContinuationObjects().forEach((value) => {
                this.validateInput(value);
            });

        }

        public forForm(formElement: string) {
            this.internalFormKey = $('#' + formElement).attr('id');
            return this;
        }

        public forValidationObject(validationObjectId: string) {
            console.log(this.validationObjects);
            console.log(this.internalFormKey);
            this.internalValidationObject = this.validationObjects[this.internalFormKey][validationObjectId];
            return this;
        }  

        public continueWith(validationObjectId: string) {
            this.internalValidationObject.addContinuationValidationObjects(this.validationObjects[this.internalFormKey][validationObjectId]);
            return this;
        }
    }
}