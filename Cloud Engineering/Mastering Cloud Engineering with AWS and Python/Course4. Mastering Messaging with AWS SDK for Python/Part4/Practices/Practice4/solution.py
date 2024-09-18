# TODO: You need to write a script that satisfies the following:

# 1. Initializes a boto3 resource for AWS SNS
# 2. Creates a new SNS topic named 'MyTopic' and retrieves its ARN
# 3. Prints the ARN of the created topic
# 4. Sets a DisplayName attribute for the created topic using its ARN
# 5. Prints a success message after setting the DisplayName attribute


# TODO: You need to write a script that satisfies the following:
import boto3
# 1. Initializes a boto3 resource for AWS SNS
sns = boto3.resource('sns')
# 2. Creates a new SNS topic named 'MyTopic' and retrieves its ARN
topic = sns.create_topic(Name='MyTopic')
topic_arn = topic.arn
# 3. Prints the ARN of the created topic
print("Created SNS topic:", topic_arn)
# 4. Sets a DisplayName attribute for the created topic using its ARN
topic.set_attributes(AttributeName='DisplayName',AttributeValue=topic_arn)
# 5. Prints a success message after setting the DisplayName attribute
print("DisplayName set to:", topic.attributes.get('DisplayName'))