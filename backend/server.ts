import express from "express";
import http from "http";
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from "@copilotkit/runtime";
import OpenAI from "openai";

const app = express();
const OPEN_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey:
  OPEN_KEY
});
const serviceAdapter = new OpenAIAdapter({ openai });

// Define a custom route handler using `copilotRuntimeNodeHttpEndpoint`
app.use("/copilotkit", (req, res, next) => {
  const runtime = new CopilotRuntime();
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: "/copilotkit",
    runtime,
    serviceAdapter,
  });

  // Pass the Node-style request and response objects to the handler
  return handler(req as any, res as any, next);
});

// Create an HTTP server to pass Node-style request and response objects
const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/copilotkit");
});
