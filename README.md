# MN Gentle Goodbyes

A simple React website built for MN Gentle Goodbyes LLC by Eric Patton.
The website can be accessed [here](https://mngentlegoodbyes.com), but the current version is not yet updated at this place.

## The tools

The website is built using React, create-react-app, Typescript, react-custom-scrollbars, Marked, and DOMPurify.

## Pushing to S3

First, make sure you're using the right terminal credentials by running `aws configure` and entering the access key id and secret access key.

Second, run `npm run deploy` on the terminal, which will build the project, update the version number, and sync to s3.
