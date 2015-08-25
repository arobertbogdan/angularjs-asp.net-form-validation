/// <reference path="../../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class ValidableForm implements ng.IDirective {
        public restrict: string = "A";
        public controller = FormValidationController;

        static $inject = ["inputValidationFlowService","validationBootstrap"];

        constructor(private validationBootstrap, private inputValidationFlowService: InputValidationFlowService) {
        }
        public link: ng.IDirectiveLinkFn = () => {
            console.log("Form link");
            var bootstraper = this.validationBootstrap.getBootstraper();
            bootstraper.configValidationFLows(this.inputValidationFlowService);
        }
    }
}