const Joi = require("joi");

const contactSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9]*$/)
    .required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^[0-9]*$/)
    .required(),
});

module.exports = {
  contactSchema,
};
