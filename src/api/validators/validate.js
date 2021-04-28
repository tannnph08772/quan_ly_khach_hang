const Joi = require('@hapi/joi')

const validateBody = (schema) => {
    return (req, res, next) => {
        const validatorResult = schema.validate(req.body)

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.body = validatorResult.value
            next()
        }
    }
}
const validateParam = (schema, name) => {
    return (req, res, next) => {
        const validatorResult = schema.validate({ param: req.params[name] })

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.params[name] = req.params[name]
            next()
        }
    }
}
const schemas = {
    idSchema: Joi.object().keys({
        param: Joi.string().required()
    }),

    userSchema: Joi.object().keys({
        name: Joi.string().trim().min(3).required(),
        username: Joi.string().trim().min(4).required(),
        password: Joi.string().trim().min(6).required(),
        email: Joi.string(),
        phone: Joi.string().trim().regex(/((09|03|07|08|05)+([0-9]{8})\b)/).required(),
        birthday: Joi.required(),
        sex: Joi.required(),
        address: Joi.string().trim().min(2).required(),
        demands: Joi.string().trim().min(2).required(),
        province: Joi.string().trim().min(2).required(),
        district: Joi.string().trim().min(2).required(),
        ward: Joi.string().trim().min(2).required()
    }),
}

module.exports = {
    validateBody,
    validateParam,
    schemas
}