# Image Viewer
> A quick little web application to anonymously view and share images. Not for production use.

## Installation
Clone the repo, before starting the development server:
```
yarn
yarn start
```

## Technologies
- JavaScript (ES2015+)
- React.js + Redux.js
- CSS Modules + PostCSS
- ESLint + Airbnb config
- Jest + Enzyme

## Testing & linting
Testing and linting are run before any git commits, otherwise to run manually:
```
yarn test
yarn run lint
```

## Assumptions
Several assumptions have been made:
1. Due to being image heavy, server side rendering will introduce development complexity that provides little additional value.
1. Task is primarily frontend due to described role.
1. Consistency is preferred over minor performance gains - prefer stateful components over pure functions.
1. Browser compatibility - modern browsers are only required.

## Recommendations
Due to time constraints, there are several recommendations to extend the project further.
1. Using a server to handle uploads, server side validation, authorisation, etc.
1. Storing records in a database, rather than on the client side. Generate appropriate server side IDs instead of client side.
For scaleability, the front-end should not hit the database directly, however through a cache layer such as Redis, populated by a push technology (eg. Kafka).
This also gives us the flexibility of using GraphQL subscriptions to subscribe to potential changes.
1. Authorisation of the upload functionality to enable audit history.
1. If there is consideration to perform uploads of images, they should be:
    - Compressed
    - Uploaded to an S3 Bucket
    - Served via Cloudfront, cached and gzipped
1. Include E2E tests / snapshot tests, in addition to component unit testing.
1. Further governance by including Flow (at the cost of readability).
