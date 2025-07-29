import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/collapse", createProxyMiddleware({
    target: "http://api.jamespink.online",
    changeOrigin: true,
    pathRewrite: { "^/collapse": "" },
    onProxyReq(proxyReq, req, res) {
        console.log("🔁 Proxying collapse-aware request:", req.url);
    }
}));

app.listen(3000, () => {
    console.log("🌐 Collapse proxy live on http://localhost:3000");
});
