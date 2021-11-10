const express = require('express');
const { string } = require('joi');
const app = express();
//const utils = require('./utils/task-schema.js')

app.use(express.json());

app.post("/calc", (request, response) => {

    // width, unit_of_width
    // length, unit_of_length
    // weight, unit_of_weight
    // whether_standard

    // 0. test if all params exist

    // 0.1 width/length/weight

    if (!(request.body.hasOwnProperty('width'))) {
        response.status(400).send("the input WIDTH is missing. ");
        return;
    }

    if (!(request.body.hasOwnProperty('length'))) {
        response.status(400).send("the input LENGTH is missing. ");
        return;
    }

    if (!(request.body.hasOwnProperty('weight'))) {
        response.status(400).send("the input WEIGHT is missing. ");
        return;
    }

    // 0.2 unit_of_width/unit_of_length/unit_of_weight

    if (!(request.body.hasOwnProperty('unit_of_width'))) {
        response.status(400).send("the input UNIT_OF_WIDTH is missing. ");
        return;
    }

    if (!(request.body.hasOwnProperty('unit_of_length'))) {
        response.status(400).send("the input UNIT_OF_LENGTH is missing. ");
        return;
    }

    if (!(request.body.hasOwnProperty('unit_of_weight'))) {
        response.status(400).send("the input UNIT_OF_WEIGHT is missing. ");
        return;
    }

    // 0.3 whether_standard

    if (!(request.body.hasOwnProperty('whether_standard'))) {
        response.status(400).send("the input WHETHER_STANDARD is missing. ");
        return;
    }

    // 1. test if types of params are correct 
    
    // 1.1 width/length/weight type should be numbers

    if (!parseFloat(request.body.width)) {
        response.status(400).send("the input WIDTH is not a number. ");
        return;
    }

    if (!parseFloat(request.body.length)) {
        response.status(400).send("the input LENGTH is not a number. ");
        return;
    }

    if (!parseFloat(request.body.weight)) {
        response.status(400).send("the input WEIGHT is not a number. ");
        return;
    }

    const width = parseFloat(request.body.width);
    const length = parseFloat(request.body.length);
    const weight = parseFloat(request.body.weight);

    // 1.2 unit_of_width/unit_of_length/unit_of_weight should be strings

    if (typeof(request.body.unit_of_width) !== "string") {
        response.status(400).send("the input UNIT_OF_WIDTH is not a string. ");
        return;
    }

    if (typeof(request.body.unit_of_length) !== "string") {
        response.status(400).send("the input UNIT_OF_LENGTH is not a string. ");
        return;
    }

    if (typeof(request.body.unit_of_weight) !== "string") {
        response.status(400).send("the input UNIT_OF_WEIGHT is not a string. ");
        return;
    }
    
    // 1.3 whether_standard should be boolean

    if (!(request.body.whether_standard.toLowerCase() == "true" || request.body.whether_standard.toLowerCase() == "false" )) {
        response.status(400).send("the input WHETHER_STANDARD is not a boolean. ");
        return;
    }

    // 2 test if values of params are correct

    // 2.1 width/length/weight should be positive

    if (width <= 0) {
        response.status(400).send("the input WIDTH should be a positive value. ");
        return;
    }

    if (length <= 0) {
        response.status(400).send("the input LENGTH should be a positive value. ");
        return;
    }

    if (weight <= 0) {
        response.status(400).send("the input WEIGHT should be a positive value. ");
        return;
    }


    // 2.2 unit_of_width/unit_of_length should be "mm"/"inch",
    //     unit_of_weight should be "gram"/"ounce"

    if (!(request.body.unit_of_width == "mm" || request.body.unit_of_width == "inch")) {
        response.status(400).send("the input UNIT_OF_WIDTH should be \"mm\" or \"inch\". ");
        return;
    }

    if (!(request.body.unit_of_length == "mm" || request.body.unit_of_length == "inch")) {
        response.status(400).send("the input UNIT_OF_LENGTH should be \"mm\" or \"inch\". ");
        return;
    }

    if (!(request.body.unit_of_weight == "gram" || request.body.unit_of_weight == "ounce")) {
        response.status(400).send("the input UNIT_OF_WEIGHT should be \"gram\" or \"ounce\". ");
        return;
    }


});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));