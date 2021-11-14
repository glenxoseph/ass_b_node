let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

function expected_400_tests(name, task, text) {
    describe(name, () => {
        it("status 400", (done) => {
            chai.request('http://localhost:1121')               
                .post("/calc")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq(text);
                done();
                });
        });
    });
}

function expected_200_tests(name, task, rate) {
    describe(name, () => {
        it("status 200", (done) => {
            chai.request('http://localhost:1121')               
                .post("/calc")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property("rate").equal(rate);
                done();
                });
        });
    });
}

describe('Tasks API', () => {

    // 0. test if all params exist

    // 0.1 width/length/weight

    const test011 = {
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WIDTH does not exist", test011, "the input WIDTH is missing. ")

    const test012 = {
        width: "100",
        unit_of_width: "mm",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if LENGTH does not exist", test012, "the input LENGTH is missing. ")

    const test013 = {
        width: "10",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WEIGHT does not exist", test013, "the input WEIGHT is missing. ")

    // 0.2 unit_of_width/unit_of_length/unit_of_weight

    const test021 = {
        width: "100",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_WIDTH does not exist", test021, "the input UNIT_OF_WIDTH is missing. ")

    const test022 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_LENGTH does not exist", test022, "the input UNIT_OF_LENGTH is missing. ")

    const test023 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10"
    };

    expected_400_tests("Test if UNIT_OF_WEIGHT does not exist", test023, "the input UNIT_OF_WEIGHT is missing. ")
    
    // 1. test if types of params are correct 
    
    // 1.1 width/length/weight type should be numbers

    const test111 = {
        width: "eighty",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WIDTH is not a number", test111, "the input WIDTH is not a number. ")

    const test112 = {
        width: "100",
        unit_of_width: "mm",
        length: "eighty",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if LENGTH is not a number", test112, "the input LENGTH is not a number. ")

    const test113 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "ten",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WEIGHT is not a number", test113, "the input WEIGHT is not a number. ")

    // 1.2 unit_of_width/unit_of_length/unit_of_weight should be strings

    const test121 = {
        width: "100",
        unit_of_width: true,
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_WIDTH is not a string", test121, "the input UNIT_OF_WIDTH is not a string. ")

    const test122 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: 2,
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_LENGTH is not a string", test122, "the input UNIT_OF_LENGTH is not a string. ")

    const test123 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: false
    };

    expected_400_tests("Test if UNIT_OF_WEIGHT is not a string", test123, "the input UNIT_OF_WEIGHT is not a string. ")

    // 2 test if values of params are correct

    // 2.1 unit_of_width/unit_of_length should be "mm"/"inch",
    //     unit_of_weight should be "gram"/"ounce"

    const test211 = {
        width: "100",
        unit_of_width: "cm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_WIDTH is not \"mm\" or \"inch\"", test211, "the input UNIT_OF_WIDTH should be \"mm\" or \"inch\". ")

    const test212 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "cm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if UNIT_OF_LENGTH is not \"mm\" or \"inch\"", test212, "the input UNIT_OF_LENGTH should be \"mm\" or \"inch\". ")

    const test213 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "jin"
    };

    expected_400_tests("Test if UNIT_OF_WEIGHT is not \"gram\" or \"ounce\"", test213, "the input UNIT_OF_WEIGHT should be \"gram\" or \"ounce\". ")

    // 2.2 width/length/weight should be positive
    //     width < 270 mm
    //     length < 380 mm
    //     weight < 500 g

    const test221 = {
        width: "-100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WIDTH is negative", test221, "the input WIDTH should be a positive value. ")

    const test222 = {
        width: "100",
        unit_of_width: "mm",
        length: "-100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if LENGTH is negative", test222, "the input LENGTH should be a positive value. ")

    const test223 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "-10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WEIGHT is negative", test223, "the input WEIGHT should be a positive value. ")

    const test224 = {
        width: "271",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WIDTH exceeds 270 mm", test224, "the input WIDTH exceeds the max value. ")

    const test225 = {
        width: "10.63",
        unit_of_width: "inch",
        length: "100",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WIDTH exceeds 10.63 inch", test225, "the input WIDTH exceeds the max value. ")

    const test226 = {
        width: "100",
        unit_of_width: "mm",
        length: "381",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if LENGTH exceeds 380 mm", test226, "the input LENGTH exceeds the max value. ")

    const test227 = {
        width: "100",
        unit_of_width: "mm",
        length: "14.97",
        unit_of_length: "inch",
        weight: "10",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if LENGTH exceeds 14.97 inch", test227, "the input LENGTH exceeds the max value. ")

    const test228 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "501",
        unit_of_weight: "gram"
    };

    expected_400_tests("Test if WEIGHT exceeds 500 g", test228, "the input WEIGHT exceeds the max value. ")

    const test229 = {
        width: "100",
        unit_of_width: "mm",
        length: "100",
        unit_of_length: "mm",
        weight: "17.64",
        unit_of_weight: "ounce"
    };

    expected_400_tests("Test if WEIGHT exceeds 17.64 ounce", test229, "the input WEIGHT exceeds the max value. ")

    // 3 determine the rate

    // 3.1 standard, weight <= 30

    // 311 mm, gram

    const test311 = {
        width: "100",
        unit_of_width: "mm",
        length: "200",
        unit_of_length: "mm",
        weight: "10",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test standard envelopes with WEIGHT up to 30 gram, with mm and gram", test311, 0.49)

    // 312 inch, gram

    const test312 = {
        width: "3.94",
        unit_of_width: "inch",
        length: "7.87",
        unit_of_length: "inch",
        weight: "10",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test standard envelopes with WEIGHT up to 30 gram, with inch and gram", test312, 0.49)

    // 313 mm, ounce

    const test313 = {
        width: "100",
        unit_of_width: "mm",
        length: "200",
        unit_of_length: "mm",
        weight: "0.35",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test standard envelopes with WEIGHT up to 30 gram, with mm and ounce", test313, 0.49)

    // 314 inch, ounce

    const test314 = {
        width: "3.94",
        unit_of_width: "inch",
        length: "7.87",
        unit_of_length: "inch",
        weight: "0.35",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test standard envelopes with WEIGHT up to 30 gram, with inch and ounce", test314, 0.49)
    
    // 3.2 standard, weight > 30

    // 321 mm, gram

    const test321 = {
        width: "100",
        unit_of_width: "mm",
        length: "200",
        unit_of_length: "mm",
        weight: "40",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test standard envelopes with WEIGHT over 30 gram, with mm and gram", test321, 0.80)

    // 322 inch, gram

    const test322 = {
        width: "3.94",
        unit_of_width: "inch",
        length: "7.87",
        unit_of_length: "inch",
        weight: "40",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test standard envelopes with WEIGHT over 30 gram, with inch and gram", test322, 0.80)

    // 323 mm, ounce

    const test323 = {
        width: "100",
        unit_of_width: "mm",
        length: "200",
        unit_of_length: "mm",
        weight: "1.41",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test standard envelopes with WEIGHT over 30 gram, with mm and ounce", test323, 0.80)

    // 324 mm, ounce

    const test324 = {
        width: "3.94",
        unit_of_width: "inch",
        length: "7.87",
        unit_of_length: "inch",
        weight: "1.41",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test standard envelopes with WEIGHT over 30 gram, with inch and ounce", test324, 0.80)

    // 3.3 non-standard, weight <= 100

    // 331 mm, gram

    const test331 = {
        width: "200",
        unit_of_width: "mm",
        length: "300",
        unit_of_length: "mm",
        weight: "90",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT up to 100 gram, with mm and gram", test331, 0.98)

    // 332 inch, gram

    const test332 = {
        width: "7.87",
        unit_of_width: "inch",
        length: "11.81",
        unit_of_length: "inch",
        weight: "90",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT up to 100 gram, with inch and gram", test332, 0.98)

    // 333 mm, ounce

    const test333 = {
        width: "200",
        unit_of_width: "mm",
        length: "300",
        unit_of_length: "mm",
        weight: "3.17",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT up to 100 gram, with mm and ounce", test333, 0.98)

    // 334 inch, ounce

    const test334 = {
        width: "7.87",
        unit_of_width: "inch",
        length: "11.81",
        unit_of_length: "inch",
        weight: "3.17",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT up to 100 gram, with inch and ounce", test334, 0.98)

    // 3.4 non-standard, weight > 100

    // 341 mm, gram

    const test341 = {
        width: "200",
        unit_of_width: "mm",
        length: "300",
        unit_of_length: "mm",
        weight: "200",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT over 100 gram, with mm and gram", test341, 2.40)

    // 342 inch, gram

    const test342 = {
        width: "7.87",
        unit_of_width: "inch",
        length: "11.81",
        unit_of_length: "inch",
        weight: "200",
        unit_of_weight: "gram"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT over 100 gram, with inch and gram", test342, 2.40)

    // 343 mm, ounce

    const test343 = {
        width: "200",
        unit_of_width: "mm",
        length: "300",
        unit_of_length: "mm",
        weight: "7.05",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT over 100 gram, with mm and ounce", test343, 2.40)

    // 344 inch, ounce

    const test344 = {
        width: "7.87",
        unit_of_width: "inch",
        length: "11.81",
        unit_of_length: "inch",
        weight: "7.05",
        unit_of_weight: "ounce"
    }

    expected_200_tests("Test non standard envelopes with WEIGHT over 100 gram, with inch and ounce", test344, 2.40)

});



