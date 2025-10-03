import { createServer } from "vite";

const vite = await createServer({
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});

await vite.listen();

console.log("Vite dev server running on http://0.0.0.0:5000");
