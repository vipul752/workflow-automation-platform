import { PrismaClient } from "@prisma/client";
import express from "express";
import "dotenv/config";

const client = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const { userId, zapId } = req.params;

  const body = req.body;

  //store in db as a trigger

  await client.$transaction(async (tx: any) => {
    const run = await client.zapRun.create({
      data: {
        zapId: zapId,
        metadata: body,
      },
    });

    await client.zapRunOutbox.create({
      data: {
        zapRunId: run.id,
      },
    });
  });

  res.status(200).json({ message: "Hook received and stored successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
