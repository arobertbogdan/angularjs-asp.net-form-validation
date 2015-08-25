///// <reference path="../../_all.ts" />
//module ember {
//    'use strict';
//    export class ngRegularExpression implements ng.IDirective {
//        public restrict: string = "A";
//        static $inject = ["inputValidationService"];
//        constructor(private inputValidationService: InputValidationService) {
//        }
//        public link: ng.IDirectiveLinkFn = ($scope, element: ng.IAugmentedJQuery, attr) => {
//            element.bind('blur', () => {
//                var parentFormGroup = element.closest("div.form-group");
//                var errorsContainer = parentFormGroup.find("div.errors-container");
//                this.inputValidationService.removeErrorMessage(errorsContainer, "regular-expression");
//                var regex = new RegExp(attr.ngRegularExpression);
//                console.log(regex);
//                if (!regex.test(element.val().trim()) || element.val() === undefined) {
//                    this.inputValidationService.setErrorState(parentFormGroup);
//                    this.inputValidationService.addErrorMessage(errorsContainer, "regular-expression", attr.ngRegularExpressionMessage);
//                } else {
//                    this.inputValidationService.setSuccessState(parentFormGroup);
//                }
//            });
//        }
//    }
//} 
