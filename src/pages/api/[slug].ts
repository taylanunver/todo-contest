import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

export default async function slugger(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Use a slug" }));

    return;
  }
  const data = await prisma.player.findFirst({
    where: {
      username: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Slug not found" }));

    return;
  }
  res.statusCode = 200;
  const tasks = prisma.task.findMany({
    where: {
      userId: {
        equals: data.id,
      },
    },
  });
  return res.send(JSON.stringify(await tasks));
}
