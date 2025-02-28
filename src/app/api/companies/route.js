import pool from "@/lib/db";

export async function GET() {
    try {
        const result = await pool.query("SELECT * FROM companies");
        return Response.json(result.rows); // ✅ Correct way to return JSON response
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
