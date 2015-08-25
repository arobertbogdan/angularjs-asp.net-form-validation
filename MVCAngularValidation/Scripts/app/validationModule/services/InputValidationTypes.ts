/// <reference path="../_paths.ts" />
module ember.validationModule {
    'use strict';

    export class InputValidationTypes {
        validationAttributes = [
        {
                attributeName: "validationRequired",
                options: [],
                validator($element, $options) {
                    return !($element.val().trim() === "" || $element.val() === undefined);
                }
        }, {
                attributeName: "validationMinLength",
                options: ["Min"],
                validator($element, $options) {
                    return !($element.val().trim().length < $options["Min"] || $element.val() === undefined);
                }
        }, {
                attributeName: "validationRegularExpression",
                options: ["Pattern"],
                validator($element, $options) {
                    var regex = new RegExp($options["Pattern"]);
                    if($element.val().trim() !== '')
                        return !(!regex.test($element.val().trim()) || $element.val() === undefined);
                }
        }, {
                attributeName: "validationCompare",
                options: ["Target"],
                validator($element, $options) {
                    var comparator = $('#' + $options["Target"]);
                    return !($element.val().trim() !== comparator.val().trim() || $element.val() === undefined);
                }
        }, {
                attributeName: "validationStringLength",
                options: ["Min","Max"],
                validator($element, $options) {
                    if ($options["Min"] !== undefined && $element.val().trim().length < $options["Min"])
                        return false;
                    if ($options["Max"] !== undefined && $element.val().trim().length > $options["Max"])
                        return false;
                    return true;
                }
            }
        ];
    }
}