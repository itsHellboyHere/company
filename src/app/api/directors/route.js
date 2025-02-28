import pool from "@/lib/db";

export async function GET(request) {
    const url = new URL(request.url);
    const company_id = url.searchParams.get("company_id");

    if (!company_id) {
        return Response.json({ error: "Missing company_id" }, { status: 400 });
    }

    try {
        const result = await pool.query("SELECT * FROM directors WHERE company_id = $1", [company_id]);
        return Response.json(result.rows);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
