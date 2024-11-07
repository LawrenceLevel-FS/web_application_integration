import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({
        message: 'Successful GET',
        user: {
            name: 'WDV 4416',
            address: '123 Full Sail Uni',
            city: 'Winter Park',
            state: 'FL',
            zip: '32792',
            ccNumber: '1234567813572468',
            ssn: '55512345'
        },

    })
})

router.post('/', (req,res) => {
    const { 
        name,
        address,
        city,
        state,
        zip,
        ccNumber,
        ssn,
    } = req.body
    const user = {
        name,
        address,
        city,
        state,
        zip,
        ccNumber,
        ssn,
    }
    res.status(201).json({
        message: "Successful POST",
        user
    })
})

router.patch('/:id', (req,res) => {
    const id = req.params.id
    const { 
        name,
        address,
        city,
        state,
        zip,
        ccNumber,
        ssn,
    } = req.body
    const user = {
        _id: id,
        name,
        address,
        city,
        state,
        zip,
        ccNumber,
        ssn,
    }
    res.status(201).json({
        message: "Successful PATCH",
        user,
        metadata: {
            modifiedCount: 1,
            acknowledged: true
        }
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    res.status(201).json({
        message: "Successful DELETE",
        user: null,
        id,
        metadata: {
            modifiedCount: 1,
            acknowledged: true
        }
    })
})

module.exports = router;