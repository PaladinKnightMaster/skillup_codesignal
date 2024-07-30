import boto3

# Create a Boto3 session
session = boto3.session.Session()

# List all available services under client interface
client_services = session.get_available_services()
print("Available services with client interface:")
for service in sorted(client_services):
    print(service)

# List all available services under resource interface
resource_services = session.get_available_resources()
print("\nAvailable services with resource interface:")
for service in sorted(resource_services):
    print(service)