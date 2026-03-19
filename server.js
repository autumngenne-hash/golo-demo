const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>GOLO Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body { font-family: Arial; text-align: center; padding: 40px; }
          .card { background: #f5f5f5; padding: 20px; border-radius: 10px; }
          button { padding: 10px 20px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>🚀 GOLO Delivery Demo</h1>
        <div class="card">
          <p>Order: Cheeseburger 🍔</p>
          <p>Status: <b id="status">Preparing</b></p>
          <button onclick="update()">Next Step</button>
        </div>

        <script>
          const steps = ["Preparing", "Ready", "Picked Up", "On the Way", "Delivered"];
          let i = 0;
          function update() {
            i = (i + 1) % steps.length;
            document.getElementById("status").innerText = steps[i];
          }
        </script>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running");
});
