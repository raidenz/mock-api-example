var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "type", "lastname", "email"]
      }
    },
    "posts": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            $ref: '#/definitions/positiveInt'
          },
          "title": {
            "type": "string",
            "faker": "lorem.words"
          },
          "body": {
            "type": "string",
            "faker": "lorem.sentences"
          }
        },
        "required": ["id", "title", "body"]
      }
    }
  },
  "required": ["users", "posts"],
  "definitions": {
    "positiveInt": {
      "type": 'integer',
      "minimum": 0,
      "exclusiveMinimum": true
    }
  }
};

module.exports = schema;
