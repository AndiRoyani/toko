import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: 'postgresql://postgres:CemBjaiUXyPPnkOnhdOukHSogvvejFLe@viaduct.proxy.rlwy.net:46750/railway',
  },
});