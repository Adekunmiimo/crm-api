export async function getCustomersController(req: any, res: any) {
    try {
        const { db } = req; // Use req.db for consistency

        const result = await db.collection('customers').find().toArray();

        res.status(200).json({
            message: "Customers retrieved",
            customers: result
        });
    } catch (error) {
        console.error("Error fetching customers:", error);
        res.status(500).json({ error: error.toString() });
    }
}
