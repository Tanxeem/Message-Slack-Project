import { StatusCodes } from "http-status-codes";

import { customErrorResponse } from "../utils/common/responseObject.js";


export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            console.log("validation errorinzod validator", error)
            res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse( {
                message: 'validation Error',
                explanation: ''
            }))
        }
    }
}