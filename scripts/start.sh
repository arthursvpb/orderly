#!/bin/sh

# Start prisma
prisma generate --schema ./src/infra/database/prisma/schema.prisma

# Start the application
npm run start:dev
