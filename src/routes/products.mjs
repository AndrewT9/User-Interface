import { Router } from "express";

const router = Router();

router.get("/api/products", (req, res) => {
    res.send([
        {
            id: 1,
            productName: "Potato",
            price: 12.29,
        },
    ]);
});

export default router;