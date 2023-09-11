import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        let body = figlet.textSync("Bsoft Limited, Welcome Bun");
      return new Response(body);
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);