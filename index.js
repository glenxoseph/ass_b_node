const express = require('express');
const { string } = require('joi');
const app = express();
//const utils = require('./utils/task-schema.js')

app.use(express.json());

app.post("/calc", (request, response) => {

    let rate = 0;

    // width, unit_of_width
    // length, unit_of_length
    // weight, unit_of_weight

    // 0. test if all params exist

    // 0.1 width/length/weight

    // if (!(request.body.hasOwnProperty('width'))) {
    //     response.status(400).send("the input WIDTH is missing. ");
    //     return;
    // }

    // if (!(request.body.hasOwnProperty('length'))) {
    //     response.status(400).send("the input LENGTH is missing. ");
    //     return;
    // }

    // if (!(request.body.hasOwnProperty('weight'))) {
    //     response.status(400).send("the input WEIGHT is missing. ");
    //     return;
    // }

    // // 0.2 unit_of_width/unit_of_length/unit_of_weight

    // if (!(request.body.hasOwnProperty('unit_of_width'))) {
    //     response.status(400).send("the input UNIT_OF_WIDTH is missing. ");
    //     return;
    // }

    // if (!(request.body.hasOwnProperty('unit_of_length'))) {
    //     response.status(400).send("the input UNIT_OF_LENGTH is missing. ");
    //     return;
    // }

    // if (!(request.body.hasOwnProperty('unit_of_weight'))) {
    //     response.status(400).send("the input UNIT_OF_WEIGHT is missing. ");
    //     return;
    // }

    // // 1. test if types of params are correct 
    
    // // 1.1 width/length/weight type should be numbers

    // if (!parseFloat(request.body.width)) {
    //     response.status(400).send("the input WIDTH is not a number. ");
    //     return;
    // }

    // if (!parseFloat(request.body.length)) {
    //     response.status(400).send("the input LENGTH is not a number. ");
    //     return;
    // }

    // if (!parseFloat(request.body.weight)) {
    //     response.status(400).send("the input WEIGHT is not a number. ");
    //     return;
    // }

    // // 1.2 unit_of_width/unit_of_length/unit_of_weight should be strings

    // if (typeof(request.body.unit_of_width) !== "string") {
    //     response.status(400).send("the input UNIT_OF_WIDTH is not a string. ");
    //     return;
    // }

    // if (typeof(request.body.unit_of_length) !== "string") {
    //     response.status(400).send("the input UNIT_OF_LENGTH is not a string. ");
    //     return;
    // }

    // if (typeof(request.body.unit_of_weight) !== "string") {
    //     response.status(400).send("the input UNIT_OF_WEIGHT is not a string. ");
    //     return;
    // }

    // // 2 test if values of params are correct

    // // 2.1 unit_of_width/unit_of_length should be "mm"/"inch",
    // //     unit_of_weight should be "gram"/"ounce"

    // if (!(request.body.unit_of_width == "mm" || request.body.unit_of_width == "inch")) {
    //     response.status(400).send("the input UNIT_OF_WIDTH should be \"mm\" or \"inch\". ");
    //     return;
    // }

    // if (!(request.body.unit_of_length == "mm" || request.body.unit_of_length == "inch")) {
    //     response.status(400).send("the input UNIT_OF_LENGTH should be \"mm\" or \"inch\". ");
    //     return;
    // }

    // if (!(request.body.unit_of_weight == "gram" || request.body.unit_of_weight == "ounce")) {
    //     response.status(400).send("the input UNIT_OF_WEIGHT should be \"gram\" or \"ounce\". ");
    //     return;
    // }

    // // 2.2 width/length/weight should be positive
    // //     width <= 270 mm
    // //     length <= 380 mm
    // //     weight <= 500 g

    // let width = parseFloat(request.body.width);

    // if (width <= 0) {
    //     response.status(400).send("the input WIDTH should be a positive value. ");
    //     return;
    // }

    // let length = parseFloat(request.body.length);

    // if (length <= 0) {
    //     response.status(400).send("the input LENGTH should be a positive value. ");
    //     return;
    // }

    // let weight = parseFloat(request.body.weight);

    // if (weight <= 0) {
    //     response.status(400).send("the input WEIGHT should be a positive value. ");
    //     return;
    // }

    // if (request.body.unit_of_width === "inch") {
    //     width = width * 25.4;
    // }

    // if (width > 270.0) {
    //     response.status(400).send("the input WIDTH exceeds the max value. ");
    //     return;
    // }

    // if (request.body.unit_of_length === "inch") {
    //     length = length * 25.4;
    // }

    // if (length > 380.0) {
    //     response.status(400).send("the input LENGTH exceeds the max value. ");
    //     return;
    // }

    // if (request.body.unit_of_weight === "ounce") {
    //     weight = weight * 28.35;
    // }

    // if (weight > 500.0) {
    //     response.status(400).send("the input WEIGHT exceeds the max value. ");
    //     return;
    // }

    // // 3 determine the rate

    // let standard = false;

    // if (width >= 90.0 && width <= 156.0 && length >= 140.0 && length <= 245.0 && weight >= 3.0 && weight <= 50.0) {
    //     standard = true;
    // }

    // if (standard == true && weight <= 30) {
    //     rate = 0.49;
    //     response.status(200).json({rate});
    //     return;
    // }

    // if (standard == true && weight > 30) {
    //     rate = 0.80;
    //     response.status(200).json({rate});
    //     return;
    // }

    // if (standard == false && weight <= 100) {
    //     rate = 0.98;
    //     response.status(200).json({rate});
    //     return;
    // }

    // if (standard == false && weight > 100) {
    //     rate = 2.40;
    //     response.status(200).json({rate});
    //     return;
    // }

});

const port = process.env.PORT || 1121;
app.listen(port, () => console.log(`listening on port ${port}...`));