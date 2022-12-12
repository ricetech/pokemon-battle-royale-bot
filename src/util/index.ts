import { parseArgs } from "util";

const options = {
  dev: {
    type: "boolean" as const,
    short: "d",
  },
};

const args = process.argv.slice(2);

const { values } = parseArgs({ options, args });

export const ARGS_DEV = values.dev;
