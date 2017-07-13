# Image Viewer
> A quick little web application to anonymously view and share images. Not for production use.

## Installation
Clone the repo, before starting the development server:
```
yarn
yarn start
```

## Technologies
- React.js
- CSS Modules
- PostCSS
- Postgres
- ESLint (Airbnb)
- Jest

## Testing & linting
Testing and linting are run before any git commits, otherwise to run manually:
```
yarn test
yarn run lint
```

## Assumptions
Several assumptions have been made:
1. Due to being image heavy, server side rendering will introduce development complexity that provides little additional value.
1. Task is primarily frontend due to described role. Data layer is minimal.
1. Consistency is preferred over minor performance gains - prefer stateful components over pure functions.
1. Browser compatibility - modern browsers are only required.
 
## Recommendations
Due to time constraints, there are several recommendations to extend the project further.
1. Authorisation of the upload functionality to enable audit history.
1. Uploading of images should be:
    - Compressed
    - Uploaded to an S3 Bucket
    - Served via Cloudfront, cached and gzipped
