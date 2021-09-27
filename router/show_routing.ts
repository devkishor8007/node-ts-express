import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, data: { "name": "TS - Open Source ", "appear": 2012, "advantages": "fast,easy and check error on Compile Time" } });
});

router.post('/', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, data: "Added Data " });
});

router.put('/:id', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, data: "update successfully" });
});

router.delete('/:id', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, data: "delete successfully" });
});

module.exports = router;