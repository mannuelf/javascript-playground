// https://egghead.io/lessons/typescript-use-the-nullish-coalescing-operator-in-typescript

type SerializationOptions = {
  formatting?: {
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  // GOOD: Optional Chaining Operator
  const indent = options?.formatting?.getIndent?.() ?? 2;

  // BAD
  // const indent = options
  //   ? options.formatting
  //     ? options.formatting.indent
  //     : undefined
  //   : undefined;
  return JSON.stringify(value, null, indent);
}

const user = {
  name: 'Mannuel',
  surname: 'Ferreira',
};

const json = serializeJSON(user, {
  formatting: {
    // getIndent: () => 8,
  },
});

console.log(json);
