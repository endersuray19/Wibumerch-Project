import express, { Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware, getAuth } from '@clerk/express'

const app = express();
app.use(clerkMiddleware())
app.use(
    cors({
    origin: ['http://localhost:3002','http://localhost:3003'],
    credentials: true,
}));
app.get('/', (req:Request, res:Response) => {
    res.json('Hello from Product Service!');
});
app.get('/health', (req:Request, res:Response) => {
    return res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now()

    })
});
app.get('/test', (req, res) => {
    const auth = getAuth(req);
    const userId = auth.userId;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log(auth);
    res.json({message:'Hello from Product Service!'});
});
app.listen(8000,()=>{
    console.log('Product Service is running on port 8000');
});
