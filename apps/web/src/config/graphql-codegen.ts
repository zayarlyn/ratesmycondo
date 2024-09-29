
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5050/graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
