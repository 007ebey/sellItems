#!/bin/bash

set -e

echo "🚀 Starting Doxora deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Pull latest code
echo -e "${BLUE}📥 Pulling latest code...${NC}"
git pull origin main || true

# Stop running containers
echo -e "${BLUE}🛑 Stopping running containers...${NC}"
docker-compose down || true

# Build new image
echo -e "${BLUE}🔨 Building Docker image...${NC}"
docker build -t doxora-app:latest .

# Start services
echo -e "${BLUE}▶️  Starting services...${NC}"
docker-compose up -d

# Wait for app to be ready
echo -e "${BLUE}⏳ Waiting for app to be ready...${NC}"
sleep 10

# Show logs
echo -e "${BLUE}📋 Recent logs:${NC}"
docker-compose logs --tail=20

# Verify deployment
if docker-compose ps | grep -q "doxora-app"; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}App is running at http://localhost${NC}"
else
    echo -e "${RED}❌ Deployment failed!${NC}"
    docker-compose logs
    exit 1
fi
