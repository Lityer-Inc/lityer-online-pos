import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({error: "Unauthorized"})
        }
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: "Unauthorized: Invalid token"
                });
            }
            req.decoded = decoded;
            next();
        });
    }
    
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error'});
    }
}