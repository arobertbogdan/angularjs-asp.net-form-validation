/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class InputValidationFlowService {
        static $inject = ["formValidationService"];

        private validationDispatcher: ValidationDispatcher;

        constructor(private formValidationService: FormValidationService) {
            this.validationDispatcher = this.formValidationService.getValidationDispatcher();
        }

        public atForm(formId: string) {
            return this.validationDispatcher.forForm("TestForm");
        }
    }
}