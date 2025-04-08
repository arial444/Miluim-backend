#!/bin/bash

# Define the directory where the project is located
PROJECT_DIR="/home/gaming-platform-backend"

# Change to the project directory
cd "$PROJECT_DIR" || exit

# Pull the latest changes from the repository
git pull 

# Define the array with the names of the service folders
services=("gameService" "adminService" "gamingService" "paymentService" "taskService" "dataService")  # Add more services as needed

# Define the source models directory
SOURCE_DIR="/home/gaming-platform-backend/models"

# Loop over each service in the array
for service in "${services[@]}"; do
    # Define the destination directory for models
    DEST_DIR="/${PROJECT_DIR}/${service}/api/models"
    
    # Check if the .sailsrc file exists and remove it
    if [ -f "${PROJECT_DIR}/${service}/.sailsrc" ]; then
        rm "${PROJECT_DIR}/${service}/.sailsrc"
        if [ $? -eq 0 ]; then
            echo "Removed .sailsrc from ${service}"
        else
            echo "Failed to remove .sailsrc from ${service}"
        fi
    else
        echo ".sailsrc not found in ${service}"
    fi

    # Check if service is taskService
    DEST_TEMPLATE="/${PROJECT_DIR}/${service}/api/templates"
    SOURCE_TEMPLATE="/home/gaming-platform-backend/taskService/api/templates"
    if [ "$service" = "taskService" ]; then 
        # Create the destination directory if it doesn't exist
        mkdir -p "$DEST_TEMPLATE"
        if [ $? -eq 0 ]; then
            echo "Created directory $DEST_TEMPLATE"
        else
            echo "Failed to create directory $DEST_TEMPLATE"
        fi
        
        # Remove the existing models in the destination directory
        # rm -rf "$DEST_TEMPLATE"/*

        # Copy the models directory to the destination directory
        cp -r "$SOURCE_TEMPLATE"/* "$DEST_TEMPLATE"
        if [ $? -eq 0 ]; then
            echo "Copied models to ${service}/api/templates"
        else
            echo "Failed to copy models to ${service}/api/templates"
        fi
    fi
    
    # Create the destination directory if it doesn't exist
    mkdir -p "$DEST_DIR"
    if [ $? -eq 0 ]; then
        echo "Created directory $DEST_DIR"
    else
        echo "Failed to create directory $DEST_DIR"
    fi
    
    # Remove the existing models in the destination directory
    rm -rf "$DEST_DIR"/*

    # Copy the models directory to the destination directory
    cp -r "$SOURCE_DIR"/* "$DEST_DIR"
    if [ $? -eq 0 ]; then
        echo "Copied models to ${service}/api/models"
    else
        echo "Failed to copy models to ${service}/api/models"
    fi

    # service name to low case
    service=$(echo "$service" | tr '[:upper:]' '[:lower:]')

    # Build docker image
    docker compose build "$service"

    # Restart the service
    docker compose up --no-deps -d "$service"
done

# Update seperately for the socketService

docker compose build socketservice
docker compose up --no-deps -d socketservice

echo "All services processed."