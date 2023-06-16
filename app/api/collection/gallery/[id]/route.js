import { connectToDB } from "@utils/database";
import FlashCardsCollection from "@models/FlashCardsCollection";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()
        console.log("fetching: ")
        console.log(params.id);
        const collection = await FlashCardsCollection.findById(params.id).populate('creator')
        if (!collection) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(collection), { status: 200 })
    } catch (error) {
        console.log("api/collection/[id].js error: " + error);
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 