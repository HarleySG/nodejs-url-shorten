const { express, cors, morgan, helmet, json } = require("./dependencies");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(json());
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.json({
    message: "sg- Short urls..",
  });
});
app.get("/url/:id", (req, res) => {
  console.log("req", req.body);
  // TODO: get a short url by id
  res.json({
    message: "sg- Short urls..",
  });
});
app.post("/:id", (req, res) => {
  // TODO: redirect to url
  res.json({
    message: "sg- Short urls..",
  });
});
app.post("/url", (req, res) => {
  // TODO: get a short url by id
  res.json({
    message: "sg- Short urls..",
  });
});

module.exports = { app };
