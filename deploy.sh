#!/bin/bash

# Configuration
SERVER_USER="your-username"
SERVER_HOST="your-server-ip"
SITE_DIR="/var/www/mattmn.com"
LOCAL_BUILD_DIR="client/build"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process for mattmn.com...${NC}"

# Step 1: Build the React application
echo -e "${YELLOW}Building React application...${NC}"
cd client
npm install
npm run build
cd ..

if [ $? -ne 0 ]; then
  echo -e "\033[0;31mBuild failed! Aborting deployment.${NC}"
  exit 1
fi

echo -e "${GREEN}Build successful!${NC}"

# Step 2: Ensure the destination directory exists on the server
echo -e "${YELLOW}Checking remote directory...${NC}"
ssh $SERVER_USER@$SERVER_HOST "mkdir -p $SITE_DIR"

# Step 3: Transfer the build files to your server
echo -e "${YELLOW}Uploading files to server...${NC}"
scp -r $LOCAL_BUILD_DIR/* $SERVER_USER@$SERVER_HOST:$SITE_DIR/

if [ $? -ne 0 ]; then
  echo -e "\033[0;31mFile transfer failed! Check your connection and permissions.${NC}"
  exit 1
fi

echo -e "${GREEN}Files uploaded successfully!${NC}"

# Step 4: Set proper permissions
echo -e "${YELLOW}Setting proper permissions...${NC}"
ssh $SERVER_USER@$SERVER_HOST "sudo chown -R www-data:www-data $SITE_DIR"

# Step 5: Restart Nginx (if needed)
echo -e "${YELLOW}Restarting Nginx...${NC}"
ssh $SERVER_USER@$SERVER_HOST "sudo systemctl restart nginx"

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "Your site should now be live at: ${YELLOW}https://mattmn.com${NC}"

# Optional: Open the website in your browser
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "https://mattmn.com"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  start "https://mattmn.com"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open "https://mattmn.com"
fi
