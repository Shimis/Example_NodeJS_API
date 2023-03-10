## Usage

### Получение данных по функции 1

endpoint: POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/

### Запрос:
```
{
    paramRequest1: String; //Текстовое поле для запроса функции 1
    @IsInt()
    paramRequest2: Number; //Некое число
}
```

### Пример запроса:
```
{
    "param1": "Some text here",
    "param2": 1
}
```

### Ответ:
```
{
  @IsEmail()
  paramResponse1: String; //Чей-то Email
  @IsInt()
  paramResponse2: Number; //Некое число
}
```

### Пример ответа:
```json
{ 
  "paramResponse1": "test@example.com",
  "paramResponse2": 2
}
```
