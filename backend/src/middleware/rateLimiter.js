import ratelimit from '../config/upstash.js';

const rateLimiter = async(req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        //aqui o contador é compartilhado entre todos os usuários, então se um usuário fizer muitas requisições, todos serão afetados. Para limitar por usuário, você pode usar o IP do usuário ou algum identificador único.
        if (!success) {
            return res.status(429).json({ message: "Too many requests" });
        }
        next();
    } catch (error) {
        console.error("Error in rate limiter:", error);
        next(error); // Pass the error to the next middleware
    }
}

export default rateLimiter;