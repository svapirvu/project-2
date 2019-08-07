const Joi = require('joi')

const getUserByIDschema = Joi.object().keys({
    id: Joi.number().integer()
});

module.exports = { getUserByIDschema }

const validatePathParams = (schema) => (req, res, next) {
    const result = schema.validate(req.params);
    if (result.error === null)
        next();
    else 
        res.status(400).json({});
}

router.get('/users', getAllUsers);
router.get('/users/:id', validatePathParams(getUserByIDschema), getUserByID);