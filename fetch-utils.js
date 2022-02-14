const SUPABASE_URL = `https://rkwuoifoqjtdyuamlqbt.supabase.co`;
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd3VvaWZvcWp0ZHl1YW1scWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE2MTAsImV4cCI6MTk1OTkxNzYxMH0.0bzW8RqDL090ne0FvaYqJLDBsUCtpfGm0oN6I-xwziw`;

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDonutShops() {
    const resp = await client.from('doughnut-shops').select('*');
    return checkError(resp);
}

export async function getDonutShop(id) {
    const resp = await client.from('doughnut-shops').select('*').eq('id', id).single();
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}