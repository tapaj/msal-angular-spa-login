/**
 * This file contains authentication parameters. These parameters are used to initialize Angular and MSAL Angular
 * configurations in app.module.ts file.
 */

import { LogLevel, Configuration, BrowserCacheLocation } from "@azure/msal-browser";

// TODO: Find out which exact user agent Trident corresponds to
// Snippet to identify if the user agent being used to access the Angular application is Internet Explorer.
const isIE = window.navigator.userAgent.indexOf("MSIE") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

// TODO: Try loading the clientId and tenantId from environment.ts file and test the results
// Creating the configuration object to be passed to MSAL instance on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "1798ee95-2785-497c-968c-5039f445f4d3",                                               // It's the application ID found in the AAD app registration portal
        authority: "https://login.microsoftonline.com/f6ade426-d677-42f6-a9c6-efc4eaac270f",            // Defaults to https://login.microsoftonline.com/common if not provided
        redirectUri: "http://localhost:4200",                                                           // Needs to be registered in the app registration portal
        postLogoutRedirectUri: "http://localhost:4200",
        navigateToLoginRequestUrl: true                                                                 // If this is set to true, app will navigate back to the original request location before processing auth code response
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,                                               // Configures cache location. Session storage is more secure, but local storage gives you SSO between tabs
        storeAuthStateInCookie: isIE                                                                    // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}