// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appBaseUrl: 'http://localhost:4200/',
  clientId: '3f7f6e60-ea48-4813-ba99-c42ba29d2dd7',
  clientSecret: '799a9e85-22ff-437d-8d8b-1f4782464791',
  IAMUrl: 'http://iam.omar.com',
  foldersUrl: 'http://grafana.omar.com:90/api/folders',
  dashboardsUrl: 'http://grafana.omar.com:90/api/search',
  apiKey:
    'eyJrIjoiMW1IbjQ0ejJrN2phZHc0OFJtQlpGU0w0aTNPVDVNTzQiLCJuIjoidGVzdC1rZXkyIiwiaWQiOjF9',
  grafanaUrl: 'http://grafana.omar.com:90'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
