use ("pizza_shop");  
  
  db.customers.insertOne(
    {
      name: "Ivan",
      surname: "Bueno Martin",
      address: {
      street: "C/ Castells, 40",
      postcode: "08110",
      town: "Montcada",
      province: "Barcelona"
    },
    phone_number: "666000111"
  })
db.pizza_shop.insertOne(
   { 
    
    address: {
        street: "C/ Mayor 112",
        postcode: "08110",
        town: "Montcada",
        province: "Barcelona"
      },
      employee: [
        {
          id: 1,
          name: "Alba",
          surname: "Real Martin",
          nif: "9987879L",
          phone_number: "66778228",
          position: "cook staff"
        },
        {
          id: 2,
          name: "Pablo",
          surname: "Martinez",
          nif: "5550444L",
          phone_number: "666000999",
          position: "delivery staff"
        }]
    })
  db.order.insertOne({
      
      datetime:new Date("2022-01-25"),
      delivery_or_shop: "shop",
      product: [
        {
          name: "Cuatro Quesos",
          description: "Quesos variados",
          price: NumberDecimal("145.64"),
          category: "pizza"
        }
      ],
      total_price: NumberDecimal("145.64"),
      customers: ObjectId(),
      pizza_shop: ObjectId()
    })
    db.order.insertOne({
      
      datetime:new Date("2022-01-26"),
      delivery_or_shop: "delivery",
      product: [
        {
          name: "Cuatro Quesos",
          description: "Quesos variados",
          price: NumberDecimal("145.64"),
          category: "pizza"
        },
        {
          name: "BBQ",
          description: "Tomato, mozzarella, meat, gorgonzola and BBQ sauce",
          price: NumberDecimal("15.50"),
          category: "pizza"
        }
      ],
      total_price: NumberDecimal("161.14"),
      customers: ObjectId(),
      pizza_shop: ObjectId(),
      delivery: {
        employee_id: 1,
        datetiem:new Date("2022-01-26")
    }
  })