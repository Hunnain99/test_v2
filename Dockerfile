# Use the official Nginx image as the base
FROM nginx:latest

# Copy files from the `UI` directory to Nginx's default directory
COPY ./UI /usr/share/nginx/html/

# Expose port 80 (default Nginx port)
EXPOSE 80
