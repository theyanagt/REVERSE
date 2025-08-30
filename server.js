import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
    target: "http://157.230.38.195:2001", // server tujuan
    changeOrigin: true,
    ws: true
}));

app.listen(8080, () => {
    console.log("Reverse proxy running on port 8080");
});
