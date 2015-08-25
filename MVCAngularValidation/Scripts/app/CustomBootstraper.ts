/// <reference path="_all.ts" />
module ember {
    "use strict";

    export class CustomBootstraper implements validationModule.IValidationBootstraper {
        configValidationFLows(validationFlowService: validationModule.InputValidationFlowService): void {
            validationFlowService.atForm("TestForm").forValidationObject("Password").continueWith("ConfirmPassword");
        }
    }
}