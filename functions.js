const {Request} = require("./classes")
const { validate } = require("class-validator")

function findSomething (request) {
    //Тут какая-то логина, которую по запросу надо выполнять

    const request = new Request(request)

    return {
        param1: "Результаты 1-ой функции",
        param2: "test"
    }
};

function otherFunction(request) {
    //Тут другая функция для другого запроса

    const request = new Request(request)
    return {
        param1: "test@example.com",
        param2: 2
    }
}

async function  validateClass(object){
    let errorList = []
    await validate(object).then((errors) => {
        // errors is an array of validation errors
        if (errors.length > 0) {     
          console.log("validation failed. errors: " + errors.toString());
          errorList.push(errors);
        } else {
          console.log("validation succeed");
        }
      });
    return errorList;
}

export {findSomething, otherFunction, validateClass};