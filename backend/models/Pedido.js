const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PedidoSchema = new Schema({
    Direccionrecogida: {
        type: String,
        required: true,
    },
    Ciudadrecogida: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Cedula: {
        type: Int,
        required: true,
    },
    Direccionentrega: {
        type: String,
        required: true,
    },
    Ciudadentrega: {
        type: String,
        required: true,
    },
    Fecha: {
        type: Date
    }
}, {
    collection: 'Pedidos'
})

module.exports = mongoose.model('Pedido', PedidoSchema)