export default function logRequests(req, res, next) {
    const { method, url, headers } = req;
    const timestamp = new Date().toISOString();

    // Extract additional useful information for enhanced logging
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Log request details in a structured and informative format
    console.log(
        // Proceed to the next middleware or route handler
        next();

    // Optionally, log the response status code when the response finishes
    res.on('finish', () => {
        console.log(
            `[${timestamp}] ${method} ${url} - Status: ${res.statusCode}`
        );
    });
}
