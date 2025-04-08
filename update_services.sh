#!/bin/bash

# Define the directory where the project is located
PROJECT_DIR="/home/idfProject"

# Change to the project directory
cd "$PROJECT_DIR" || exit

# Pull the latest changes from the repository
git pull 

# Define the array with the names of the service folders
services=("idfService")  # Add more services as needed


# Loop over each service in the array
for service in "${services[@]}"; do

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

    # service name to low case
    service=$(echo "$service" | tr '[:upper:]' '[:lower:]')

    # Build docker image
    docker compose build "$service"

    # Restart the service
    docker compose up --no-deps -d "$service"
done

echo "==================================================================="
echo "=========================[ Kuubiiii ]=============================="
echo "All services processed Kubi Kubiyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
echo "==================================================================="
