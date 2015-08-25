/// <reference path="../_all.ts" />
module ember {
    'use strict';

    export class ValidationBootstraper{
        constructor(private validationFlowService: InputValidationFlowService) {  }
        
        public run() {
            this.configValidationFLows(this.validationFlowService);
        }

        private configValidationFLows(validationFlowService: InputValidationFlowService) {
            validationFlowService.atForm("TestForm").forValidationObject("Password").continueWith("ConfirmPassword");
        }    
    }
}