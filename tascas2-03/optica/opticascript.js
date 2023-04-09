use ('optica')

db.createCollection('supplier', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'supplier',
        required: ['name', 'address', 'phone', 'fax', 'nif', 'glasses'],
        properties: {
          name: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'object',
            title: 'object',
            required: ['street', 'number', 'city', 'postcode', 'country'],
            properties: {
              street: {
                bsonType: 'string'
              },
              number: {
                bsonType: 'string'
              },
              city: {
                bsonType: 'string'
              },
              postcode: {
                bsonType: 'string'
              },
              country: {
                bsonType: 'string'
              }
            }
          },
          phone: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          glasses: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['glasses_id', 'brand', 'graduation_left_eye', 'graduation_right_eye', 'frame_type', 'frame_color', 'lense_color', 'price'],
              properties: {
                glasses_id: {
                  bsonType: 'int'
                },
                brand: {
                  bsonType: 'string'
                },
                graduation_left_eye: {
                  bsonType: 'double'
                },
                graduation_right_eye: {
                  bsonType: 'double'
                },
                frame_type: {
                  bsonType: 'string'
                },
                frame_color: {
                  bsonType: 'string'
                },
                lense_color: {
                  bsonType: 'string'
                },
                price: {
                  bsonType: 'decimal'
                }
              }
            }
          }
        }
      }
    }
  });
  db.createCollection('customer', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'customer',
        required: ['name', 'postcode', 'phone', 'mail', 'record_date', 'sale'],
        properties: {
          name: {
            bsonType: 'string'
          },
          postcode: {
            bsonType: 'string'
          },
          phone: {
            bsonType: 'string'
          },
          mail: {
            bsonType: 'string'
          },
          record_date: {
            bsonType: 'date'
          },
          recommendation_id: {
            bsonType: 'objectId'
          },
          sale: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['glasses_id', 'seller_name', 'sale_date'],
              properties: {
                glasses_id: {
                  bsonType: 'int'
                },
                seller_name: {
                  bsonType: 'string'
                },
                sale_date: {
                  bsonType: 'date'
                }
              }
            }
          }
        }
      }
    }
  });
