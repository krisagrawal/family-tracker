import * as express from "express";
import {Request, Response} from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Helloworld")
})

app.listen(port, () => {
    console.log(`Running on ${port}`);
})