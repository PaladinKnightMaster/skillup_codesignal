# Securing AWS Resources: An Introduction to AWS Secrets Manager, SSM, and KMS

## Introduction
Welcome to the first lesson in the course, **"AWS Secrets Management with AWS SDK for Python."** In this lesson, we delve deeper into three prime AWS Services: `AWS Secrets Manager`, `AWS Systems Manager Parameter Store (SSM)`, and `AWS Key Management Service (KMS)`. This study sets the foundation for advanced AWS services management.

## Understanding AWS Secrets Manager
The `AWS Secrets Manager` is a secrets management service that protects access to your applications, services, and IT resources. This service doesn't necessitate the upfront investment or ongoing maintenance costs of operating your own infrastructure. With Secrets Manager, you can manage, rotate, and retrieve database credentials, `API keys`, and other secrets throughout their lifecycle. This arrangement enables you to automate and securely manage the secrets used in your applications while eliminating the upfront and maintenance-heavy chores.

For more information, refer to the **AWS Secrets Manager Documentation**(https://docs.aws.amazon.com/secretsmanager/).

## Overview of AWS Systems Manager Parameter Store (SSM)
The `AWS Systems Manager Parameter Store` (**SSM**) provides secure, hierarchical storage for configuration data management and secrets management. It can store data such as passwords, database strings, `Amazon Machine Image (AMI) IDs`, and license codes as parameter values. You can then use these parameters throughout your AWS infrastructure, in your `AWS CloudFormation` templates, and during your `Systems Manager` runbook executions.

For more information, refer to the **AWS Systems Manager Parameter Store Documentation**(https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).

## Introduction to AWS Key Management Service (KMS)
The `AWS Key Management Service` (**KMS**) is a managed service that simplifies the creation and control of the cryptographic keys used to encrypt your data. The `AWS Key Management Service` is integrated with other AWS services, thus making it easier to encrypt data and manage keys.

For more information, refer to the **AWS Key Management Service Documentation**(https://docs.aws.amazon.com/kms/).

## Setting up Boto3 Clients
The provided solution code illuminates how to configure `Boto3` to work with the services we've just discussed. Let's delve deeper into this process.

```Python
import boto3

# Create default Secrets Manager client
secrets_manager_default = boto3.client('secretsmanager')

# Create default Parameter Store (SSM) client
ssm_default = boto3.client('ssm')

# Create default KMS client
kms_default = boto3.client('kms')
```

Here, we utilize the `boto3.client` method to set up "default" clients for `AWS Secrets Manager`, `SSM`, and `KMS`. These are referred to as "default" because they use the default AWS credentials present in your environment, without any specific configuration.

For scenarios when you need to customize your AWS credentials (like to interact with resources in a different AWS region or using different access keys), you can establish custom clients with a custom session.

```Python
# Create custom session
my_session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)

# Create Secrets Manager client based on this session
secrets_manager_custom = my_session.client('secretsmanager')

# Create Parameter Store (SSM) client based on this session
ssm_custom = my_session.client('ssm')

# Create KMS client based on this session
kms_custom = my_session.client('kms')
```

We first create a `boto3.Session` by providing our `aws_access_key_id`, `aws_secret_access_key`, and the `region_name`. We then initiate clients for Secrets Manager, Parameter Store (SSM), and KMS using this customized session.

## Summary and Next Steps
We started by introducing you to three vital services for managing secrets on AWS: the AWS Secrets Management, Systems Manager Parameter Store (SSM), and AWS Key Management Service (KMS). Then, we learned how to use `Boto3` to establish a client for each of these services—both with default configuration and a custom session. The knowledge gained from this lesson is essential for further exploration into secrets management. In subsequent lessons, expect a more in-depth venture into each of these AWS services. Keep an eye out and enjoy your learning!
