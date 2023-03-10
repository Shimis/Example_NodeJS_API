"use strict";

const { Request, Response } = require("./classes");
const { findSomething, otherFunction, validateClass } = require("./functions");

module.exports.handler = async (event) => {
  //Сериализуем запрос

  console.log("Event: " + JSON.stringify(event));

  const eventBody = event;

  const request = new Request(eventBody);

  console.log("request: ", request);

  //Валидируем запрос, что все пришло как надо
  let requestValidCheck = await validateClass(request);

  if (requestValidCheck.length>0){
    let errorMessage = "validation failed. errors: " + requestValidCheck.toString();
    return {
      statusCode: 400,
      body: errorMessage,
    };
  }

  let response;

  //Выполняем одну из функций в зависимости от запроса
  if (request.paramRequest2 == 1) {
    try {
      response = new Response(findSomething(request));
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      response = new Response(otherFunction(request));
    } catch (err) {
      console.log(err);
    }
  }

  //Валидируем что наш респонс корректный
  let responseValidateCheck = await validateClass(response);
  if (responseValidateCheck.length>0){
    let errorMessage = "Something went wrong: " + responseValidateCheck.toString();
    return {
      statusCode: 500,
      body: errorMessage,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 2),
  };
};
