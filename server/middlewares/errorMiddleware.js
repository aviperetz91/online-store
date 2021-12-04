export const urlNotFound = (req, res, next) => {
    const error = new Error(`${req.originalUrl} Not Found`);
    res.status(404);
    next(error);
};

export const errorHandler = (err, req, res, next) => {
    res.status(res.statusCode);
    res.json({
        message: err.message,
    });
};
