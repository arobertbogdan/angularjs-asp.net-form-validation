/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export interface FormControllerScope extends ng.IScope {
        vm: ember.validationModule.FormValidationController;
        formElement: JQuery;
    }
}