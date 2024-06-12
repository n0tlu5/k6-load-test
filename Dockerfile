# Use the official k6 image from Docker Hub
FROM loadimpact/k6

# Set the working directory
WORKDIR /k6

# Copy the k6 script into the container
COPY scripts/load-test.js .

# Define the entry point for the container
ENTRYPOINT ["k6", "run", "load-test.js", "--out", "influxdb=http://influxdb:8086/k6"]
