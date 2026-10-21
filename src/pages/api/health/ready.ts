import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    console.info('readiness', '500');

    return Response.json({
        status: '500',
        timestamp: new Date()
    });
};