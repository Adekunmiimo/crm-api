import { ObjectId } from "mongodb";

export async function getCustomerController(req: any, res: any) {
    try {
        const { db } = req;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Customer ID is required'});
        }

        const result = await db.collection ('customers').findOne({
            _id: new ObjectId(id)
        });


        if (!result) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({
            message: "Customer retrieved",
            customers: result
        });

    }catch (error) {
        console.error("Error fetching customer:", error);
        res.status(500).json({ error: error.toString()});
    }
}