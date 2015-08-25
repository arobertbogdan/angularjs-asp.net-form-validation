///// <reference path="../../_all.ts" />
//module ember {
//    'use strict';
//    /**
//     * Directive that executes an expression when the element it is applied to loses focus.
//     */
//    export class ngMinLength implements ng.IDirective {
//        public restrict: string = "A";
//        static $inject = ["inputValidationService"];
//        constructor(private inputValidationService: InputValidationService) {
//        }
//        public link: ng.IDirectiveLinkFn = ($scope, element: ng.IAugmentedJQuery, attr) => {
//            element.bind('blur', () => {
//                var parentFormGroup = element.closest("div.form-group");
//                var errorsContainer = parentFormGroup.find("div.errors-container");
//                this.inputValidationService.removeErrorMessage(errorsContainer, "min-length");
//                if (element.val().trim().length < attr.ngMinLength || element.val() === undefined) {
//                    this.inputValidationService.setErrorState(parentFormGroup);
//                    this.inputValidationService.addErrorMessage(errorsContainer, "min-length", attr.ngMinLengthMessage);
//                } else {
//                    this.inputValidationService.setSuccessState(parentFormGroup);
//                }
//            });
//        }
//    }
//} 
