const { app } = require("./express");

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Listen port http://localhost:${port}`);
});
