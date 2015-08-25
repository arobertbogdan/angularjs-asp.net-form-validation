/// <reference path="../_paths.ts" />
module ember.validationModule {
    "use strict";

    export interface IValidationProviderService {
        getBootstraper(): IValidationBootstraper;
    }
 
    export class ValidationBootstrap implements ng.IServiceProvider {
        private validationBootstraper;
 
        public setBootstraper(bootstraper: IValidationBootstraper) {
            this.validationBootstraper = bootstraper;
        }
 
        public $get(): IValidationProviderService {
            return {
                getBootstraper: () => { return this.validationBootstraper; }
            };
        }
    }
}