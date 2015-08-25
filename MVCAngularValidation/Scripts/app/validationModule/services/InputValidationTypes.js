/// <reference path="../_paths.ts" />
var ember;
(function (ember) {
    var validationModule;
    (function (validationModule) {
        'use strict';
        var InputValidationTypes = (function () {
            function InputValidationTypes() {
                this.validationAttributes = [
                    {
                        attributeName: "validationRequired",
                        options: [],
                        validator: function ($element, $options) {
                            return !($element.val().trim() === "" || $element.val() === undefined);
                        }
                    }, {
                        attributeName: "validationMinLength",
                        options: ["Min"],
                        validator: function ($element, $options) {
                            return !($element.val().trim().length < $options["Min"] || $element.val() === undefined);
                        }
                    }, {
                        attributeName: "validationRegularExpression",
                        options: ["Pattern"],
                        validator: function ($element, $options) {
                            var regex = new RegExp($options["Pattern"]);
                            if ($element.val().trim() !== '')
                                return !(!regex.test($element.val().trim()) || $element.val() === undefined);
                        }
                    }, {
                        attributeName: "validationCompare",
                        options: ["Target"],
                        validator: function ($element, $options) {
                            var comparator = $('#' + $options["Target"]);
                            return !($element.val().trim() !== comparator.val().trim() || $element.val() === undefined);
                        }
                    }, {
                        attributeName: "validationStringLength",
                        options: ["Min", "Max"],
                        validator: function ($element, $options) {
                            if ($options["Min"] !== undefined && $element.val().trim().length < $options["Min"])
                                return false;
                            if ($options["Max"] !== undefined && $element.val().trim().length > $options["Max"])
                                return false;
                            return true;
                        }
                    }
                ];
            }
            return InputValidationTypes;
        })();
        validationModule.InputValidationTypes = InputValidationTypes;
    })(validationModule = ember.validationModule || (ember.validationModule = {}));
})(ember || (ember = {}));
//# sourceMappingURL=InputValidationTypes.js.map