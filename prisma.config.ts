import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: 'postgresql://postgres:PMGjftIyPCsNpfoluXVTrITZHBvMJZlo@autorack.proxy.rlwy.net:21955/railway',
  },
});