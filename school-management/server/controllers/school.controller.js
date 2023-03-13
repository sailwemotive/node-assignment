const express = require('express')
const router = express.Router()

// To validate id coming from client
const ObjectId = require('mongoose').Types.ObjectId


// Common convention to named modal using pascal convention i.e. camel case.
const School = require('../models/school.model')

const { generateCrudMethods } = require('../services')
const schoolCrud = generateCrudMethods(School)

const { validateDbId, raiseRecord404Error } = require('../middlewares')

router.get('/', (req, res, next) => {
    schoolCrud.getAll()
        .then(
            data => res.send(data)
        )
        .catch(
            err => next(err)
        )
})

router.get('/:id', validateDbId, (req, res, next) => {
    schoolCrud.getById(req.params.id)
        .then(
            data => {
                if (data)
                    res.send(data)
                else
                    raiseRecord404Error(req, res)

            }
        )
        .catch(
            err => next(err)
        )
})

router.post('/', (req, res, next) => {
    //req.body 
    schoolCrud.create(req.body)
        .then(
            data => res.status(201).json(data)
        )
        .catch(
            err => next(err)
        )
})

router.put('/:id', validateDbId, (req, res) => {
    schoolCrud.update(req.params.id, req.body)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res) => {
    schoolCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))

})

module.exports = router