///// <reference path="../../_all.ts" />
//module ember {
//    'use strict';
//    export class ngRequire implements ng.IDirective {
//        public restrict: string = "A";
//        static $inject = ["inputValidationService"];
//        constructor(private inputValidationService: InputValidationService) {
//        }
//        public link: ng.IDirectiveLinkFn = ($scope, element: ng.IAugmentedJQuery, attr) => {
//            element.bind('blur', () => {
//                    var parentFormGroup = element.closest("div.form-group");
//                    var errorsContainer = parentFormGroup.find("div.errors-container");
//                    this.inputValidationService.removeErrorMessage(errorsContainer, "require");
//                    if (element.val().trim() === "" || element.val() === undefined) {
//                        this.inputValidationService.setErrorState(parentFormGroup);
//                        this.inputValidationService.addErrorMessage(errorsContainer, "require", attr.ngRequireMessage);
//                    } else {
//                        this.inputValidationService.setSuccessState(parentFormGroup);
//                    }
//                });
//        }
//    }
//} 
