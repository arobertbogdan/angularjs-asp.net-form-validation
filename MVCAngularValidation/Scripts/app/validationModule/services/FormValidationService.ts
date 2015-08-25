/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class FormValidationService {
        static $inject = ['$rootScope','inputValidationTypes'];

        private validationDispatcher: ValidationDispatcher;

        constructor(private $rootScope, private inputValidationTypes) {
            this.validationDispatcher = new ValidationDispatcher(this.inputValidationTypes);
        }

        public addInputValidation(formElement: JQuery, validationObjectId: string, validationObject: ValidationObject) {
            this.validationDispatcher.addValidationObject(formElement, validationObjectId, validationObject);
        }

        public validateForm(args) {
            var formValidationObjects = this.getFormValidationObjects(args.attr('id'));
            var isValid = true;
            for (var key in formValidationObjects) {
                if (formValidationObjects.hasOwnProperty(key)) {
                    var validationObject = formValidationObjects[key];



                    if (validationObject.isValidated === false) {
                        this.validationDispatcher.validateInput(validationObject);
                    }

                    if (!validationObject.isValid()) isValid = false;
                }
            }
            this.$rootScope.$emit('onFormValidationComplete', isValid);
        }

        private getFormValidationObjects(formId) {
            return this.validationDispatcher.getValidationObjects()[formId];
        }

        public getValidationDispatcher() {
            return this.validationDispatcher;
        }
    }
}