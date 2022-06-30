const orders = [
    {
        date: '2005-05-05',
        subtotal: 5000,
        items: [
            {
            product : {
                id: 'redshoe',
                description: 'Old Red Shoe',
                price: 5000
            },
            quantity: 2
        }
        ]
    }
]



function getAllOrders(){
    return orders
}


module.exports = {
    getAllOrders
}