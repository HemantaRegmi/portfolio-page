export async function GET() {
  const healthcheck = Response.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
  return healthcheck;
}
