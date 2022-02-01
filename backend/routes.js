const express = require('express')
const router = express.Router()

const nedb = require('nedb')
const db = new nedb({
    filename: 'tasks.db',
    autoload: true
})


router.get('/', (req, res) => {
    db.find({}).exec((err, tasks) => {
        if(err) {
            console.log('NÃO FUNCIONOU: ${err}')
            res.status(400).json({ Erro: err})
        } else {
            res.status(200).json(tasks)
        }
    })
})

router.get('/:id', (req, res) => {
    db.findOne({ _id: req.params.id}).exec((err, task) => {
        if(err) {
            console.log('NÃO FUNCIONOU: ${err}')
            res.status(400).json({ Erro: err})
        } else {
            res.status(200).json(task)
        }
    })
})

router.post('/', (req, res) => {
    db.insert(req.body, (err, task) => {
        if(err) {
            console.log('DEU RUIM: ${err}')
            res.status(400).json({ Erro: err})
        } else {
            res.status(201).json(task)
        }
    })
})

router.patch('/:id', (req, res) => {

    db.update({ _id: req.params.id }, req.body, err => {
        if(err) {
            console.log('DEU RUIM: ${err}')
            res.status(400).json({ Erro: err})
        } else {
            res.status(200).json(req.body)
        }
    })
})

router.delete('/:id', (req, res) => {
    db.remove({ _id: req.params.id }, {}, err => {
        if(err) {
            console.log('DEU RUIM: ${err}')
            res.status(400).json({ Erro: err})
        } else {
            res.status(200).json({ Sucess: 'ID remove: ${req.params.id}'})
        }
    })
})

module.exports = router