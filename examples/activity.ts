import { Activities, Context } from "../lib";

const activities = new Activities({
  taskQueue: "hello-world",
});

async function SayHi(
  ctx: Context,
  data: {
    Name: string;
    Age: number;
  }
): Promise<string> {
  console.log(`handler ${ctx.activityId}`);
  console.log(`handler ${data.Age}`);
  console.log(`handler ${data.Name}`);
  return `hello ${data.Name} ${data.Age}`;
}

activities.register(SayHi);

activities.start();
