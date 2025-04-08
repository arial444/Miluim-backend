#!/bin/bash

# Define the array with the names of the service folders
services=("gameService" "adminService" "gamingService" "paymentService" "taskService")  # Add more services as needed

# Define the source models directory
SOURCE_DIR="../models"

# Loop over each service in the array
for service in "${services[@]}"; do
    # Define the destination directory for models
    DEST_DIR="../${service}/api/models"
    
    # Check if the .sailsrc file exists and remove it
    if [ -f "../${service}/.sailsrc" ]; then
        rm "../${service}/.sailsrc"
        if [ $? -eq 0 ]; then
            echo "Removed .sailsrc from ${service}"
        else
            echo "Failed to remove .sailsrc from ${service}"
        fi
    else
        echo ".sailsrc not found in ${service}"
    fi
    
    # Create the destination directory if it doesn't exist
    mkdir -p "$DEST_DIR"
    if [ $? -eq 0 ]; then
        echo "Created directory $DEST_DIR"
    else
        echo "Failed to create directory $DEST_DIR"
    fi
    
    # Copy the models directory to the destination directory
    cp -r "$SOURCE_DIR"/* "$DEST_DIR"
    if [ $? -eq 0 ]; then
        echo "Copied models to ${service}/api/models"
    else
        echo "Failed to copy models to ${service}/api/models"
    fi
done

echo "All services processed."