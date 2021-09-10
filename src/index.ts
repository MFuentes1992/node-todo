import app from "./server";

const port = 3002;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});