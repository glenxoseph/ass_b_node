# ass_b_node

## Team Member
Riad El Mahmoudy - 260853502,<br />
Glen Xu - 260767363

## Running the Application
In this directory, first install the required resources:<br />
`npm init —y`<br />
`npm i express`<br />
`npm i joi`<br />
`npm i -g nodemon`<br />
<br />
`npm install mocha --save-dev`<br />
`npm install chai --save-dev`<br />
`npm install chai-http --save-dev`<br />
<br />
If you want to run the app, do:<br />
`nodemon index.js`<br />
Then you can use Postman to post data to the app at port `1121`.<br />
<br />
There are 6 required parameters to post a body. An example body is:<br />
`{
    "length": "140",
    "width": "150",
    "weight": "30",
    "unit_of_length": "mm",
    "unit_of_width": "mm",
    "unit_of_weight": "gram"
}`<br />
Note that the `unit_of_length` and `unit_of_width` only accepts `mm` or `inch`. `unit_of_weight` only accepts `gram` or `ounce`, not `g` or `oz`.<br />
Note that `length`, `width` and `weight` only accepts numbers sent as strings.<br />
<br />
If you want to run the tests, do:<br />
`npm test`.
