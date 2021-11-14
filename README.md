# ass_b_node

## Team Member
Riad El Mahmoudy - 260853502
Glen Xu - 260767363

## Running the Application
In this directory, first install the required resources:
`npm init —y`
`npm i express`
`npm i joi`
`npm i -g nodemon`

`npm install mocha --save-dev`
`npm install chai --save-dev`
`npm install chai-http --save-dev`

If you want to run the app, do:
`nodemon index.js`
Then you can use Postman to post data to the app at port `1121`.

There are 6 required parameters to post a body. An example body is:
`{
    "length": "140",
    "width": "150",
    "weight": "30",
    "unit_of_length": "mm",
    "unit_of_width": "mm",
    "unit_of_weight": "gram"
}`
Note that the `unit_of_length` and `unit_of_width` only accepts `mm` or `inch`. `unit_of_weight` only accepts `gram` or `ounce`, not `g` or `oz`.
Note that `length`, `width` and `weight` only accepts numbers sent as strings.

If you want to run the tests, do:
`npm test`
