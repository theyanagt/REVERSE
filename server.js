import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
    target: "http://167.172.89.37:2002/", // server tujuan
    changeOrigin: true,
    ws: true
}));

app.listen(8080, () => {
    console.log("Reverse proxy running on port 8080");
});
