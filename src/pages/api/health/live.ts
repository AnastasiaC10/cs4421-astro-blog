import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    const uptime = process.uptime();
    console.info('liveness', '500', uptime);

    return Response.json({
        status: '500',
        uptime,
        timestamp: new Date()
    });
};