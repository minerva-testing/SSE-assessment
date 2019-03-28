# Senior Software Engineer Technical Assessment

Thank you for your interest in the Senior Software Engineer role at Minerva. In order to make sure that everyone we hire has a core set of competencies, we've created a coding challenge for you. You'll be building a clone of http://itsthisforthat.com but with some additional features and requirements.

### Functional Requirements

1. Your site should have 2 pages:
    - Home page:
        - Should retain all elements + functionality as the original site (unless otherwise stated below).
        - Must look visually different from the original. How you differentiate is up to you.
        - When the refresh button is clicked, the page must update the visible this / that pairing without reloading.
        - The tweet button should pre-populate the tweet body with the current this / that pairing.
    - Creation page:
        - Allows the user to submit a new this phrase or that phrase (or both at the same time).
        - Newly created this / that phrases should be available for use without reloading the page (ie. right after creation).
        - A this or that phrase can be no longer than 100 characters and no shorter than 3 characters. You must warn the user in an appropriate manner if they try to input something outside this range.
2. To meet the page requirements above, you'll need an API for your application. At minimum, your API must:
    - Have an endpoint that returns all this / that phrases.
    - Have an endpoint for creating new this / that phrases.
3. Additional API endpoints or functionality is permitted.
4. The user must be able to navigate between the two pages.
5. You must use the _exact_ same set of this + that pairings as the original site.
6. Your application must look decent on mobile, tablet, and desktop interfaces.

### Technical Requirements

1. Use a frontend JS framework to render your application. Examples of acceptable frameworks include (but are not limited to) React, Vue, and Angular.
2. Your clone should be able to run in a `development` mode when used locally and a `production` mode when it's meant to be deployed. How you optimize each mode is up to you.
3. Do not use jQuery anywhere in your application.
4. Use git while developing your application.
5. Your choice of database for your API is up to you, but you must use one.

## Bonus points if you...

1. Implement your frontend using one or more of the following libraries:
    - React (extra bonus points for not using Create React App or any other boilerplate project)
    - Redux
    - Styled components
2. Implement your API using Django and Django Rest Framework.
3. Set up server side rendering.
4. Containerize your application using Docker.
5. Go above and beyond with the styling of your clone.
6. Trasmit less than 150KB of Javascript when the client loads the page. This will be evaluated by using the Chrome Developer Tools network tab.

## Submission

1. Submit your application as either a .zip file or a link to a public Github repo.
2. Include a `README.md` file with instructions on how to set up and run your project in a `*nix` (unix-like) environment.
3. Your `README.md` should also include a paragraph or bulleted list describing your process (ie. how you built your application).
4. Include this file with your submission.