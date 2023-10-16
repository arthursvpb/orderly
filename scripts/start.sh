#!/bin/sh

# Start prisma
npx prisma generate --schema ./src/infra/database/prisma/schema.prisma

# Start the application
npm run start:dev
