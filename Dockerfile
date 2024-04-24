# Use a base image suitable for your needs
FROM alpine:latest

# Default command when the container starts
CMD ["docker-compose", "up"]
