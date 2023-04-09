use('pizza_shop')

db.createCollection('customers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customers',
      required: ['name', 'surname', 'address', 'phone_number'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'postcode', 'town', 'province'],
          properties: {
            street: {
              bsonType: 'string'
            },
            postcode: {
              bsonType: 'string'
            },
            town: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        phone_number: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('pizza_shop', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pizza_shop',
      required: ['address', 'employee'],
      properties: {
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'postcode', 'town', 'province'],
          properties: {
            street: {
              bsonType: 'string'
            },
            postcode: {
              bsonType: 'string'
            },
            town: {
              bsonType: 'string'
            },
            province: {
              bsonType: 'string'
            }
          }
        },
        employee: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['id', 'name', 'surname', 'nif', 'phone_number', 'position'],
            properties: {
              id: {
                bsonType: 'int'
              },
              name: {
                bsonType: 'string'
              },
              surname: {
                bsonType: 'string'
              },
              nif: {
                bsonType: 'string'
              },
              phone_number: {
                bsonType: 'string'
              },
              position: {
                enum: ['cook staff',
                  'delivery staff']
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('order', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'order',
      required: ['datetime', 'delivery_or_shop', 'product', 'total_price', 'customers', 'pizza_shop'],
      properties: {
        datetime: {
          bsonType: 'date'
        },
        delivery_or_shop: {
          enum: ['delivery', 'shop']
        },
        product: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['name', 'description', 'price', 'category'],
            properties: {
              name: {
                bsonType: 'string'
              },
              description: {
                bsonType: 'string'
              },
              image: {
                bsonType: 'string'
              },
              price: {
                bsonType: 'decimal'
              },
              category: {
                enum: ['pizza',
                  'burguer',
                  'drinks']
              }
            }
          }
        },
        total_price: {
          bsonType: 'decimal'
        },
        customers: {
          bsonType: 'objectId'
        },
        pizza_shop: {
          bsonType: 'objectId'
        },
        delivery: {
          bsonType: 'object',
          title: 'object',
          required: ['employee_id', 'datetiem'],
          properties: {
            employee_id: {
              bsonType: 'int'
            },
            datetiem: {
              bsonType: 'date'
            }
          }
        }
      }
    }
  }
});