/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export interface IValidationBootstraper {
        configValidationFLows(validationFlowService: InputValidationFlowService): void;
    }
}