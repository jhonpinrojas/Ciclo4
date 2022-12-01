let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let bookSchema = require('../models/Pedido')


router.route('/create').post((req, res, next) => {
    bookSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/').get((req, res) => {
    bookSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/:id').get((req, res) => {
    bookSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/edit/:id').put((req, res) => {
    bookSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Student updated successfully !')
            res.json(data)
        }
    })
})


router.route('/delete/:id').delete((req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router