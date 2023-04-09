db.supplier.insertOne(
    {
        name: "Gafas Total",
        address: {
            street: "Mayor",
            number: "112",
	          city: "Barcelona",
            postcode: "08120",
            country:"Espanya", 
        },
        phone: "660009996",
        fax: "935758933",
        nif: "39838389f", 
        glasses: [{
            glasses_id:1,
            brand: "Nieve",
            graduation_left_eye: new Double(+2.25),
            graduation_right_eye: new Double(+3.00),
            frame_type: "Metal",
            frame_color: "Blanco",
            lense_color: "Blanco",
            price: NumberDecimal("145.64")
        }]})
db.supplier.insertOne(
    {
        name: "Optica Perez",
        address: {
            street: "Glados",
            number: "24",
	          city: "Barcelona",
            postcode: "08120",
            country:"Espanya", 
        },
        phone: "660003334",
        fax: "935758320",
        nif: "23325325f", 
        glasses: [{
            glasses_id:2,
            brand: "Fluor",
            graduation_left_eye: new Double(+2.25),
            graduation_right_eye: new Double(+3.00),
            frame_type: "Pasta",
            frame_color: "Amarillo",
            lense_color: "Azul",
            price: NumberDecimal("219.99")
        }]})
db.customer.insertOne(
    {
        name: "Conchita Perez",
        postcode: "08110",
        phone: "613432114",
        mail: "conchitaperz@gmail.com",
        record_date: ISODate('2023-01-24'),
        recommendation_id: ObjectId(),
        sale: [{
            glasses_id: 1,
            seller_name: "Carlos Garcia",
            sale_date: new Date("2023-01-25")
        }]
})
