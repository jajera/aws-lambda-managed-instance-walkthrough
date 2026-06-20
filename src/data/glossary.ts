export const glossary: Record<string, string> = {
  aws: "Amazon Web Services — the cloud platform used throughout this walkthrough.",
  az: "Availability Zone — an isolated data-centre location within an AWS region used for high availability.",
  cidr: "Classless Inter-Domain Routing — the IP address range notation (e.g. 10.0.0.0/16) used to define VPC and subnet sizes.",
  cli: "Command Line Interface — a text-based interface used to interact with systems and tools by running commands in a terminal.",
  "capacity-provider":
    "Lambda Capacity Provider — an EC2-backed compute resource pool (subnets, security groups, operator role) that Lambda Managed Instances functions run on instead of shared Lambda infrastructure.",
  ec2: "Elastic Compute Cloud — the AWS virtual machine service that underpins Lambda Managed Instances.",
  firecracker:
    "Firecracker — AWS microVM technology used by default Lambda on shared infrastructure to isolate execution environments.",
  grafana:
    "Grafana — an open-source observability platform for visualising metrics and logs; used with Loki in this walkthrough.",
  iam: "Identity and Access Management — the AWS service that controls permissions and roles for all resources.",
  "iam-identity-center":
    "IAM Identity Center — AWS service for centralised workforce access, SSO, and short-lived credentials to AWS accounts (formerly AWS SSO).",
  igw: "Internet Gateway — the VPC attachment that enables public subnets to communicate with the internet.",
  lambda:
    "AWS Lambda — a serverless compute service that runs code in response to events without provisioning servers.",
  loki: "Grafana Loki — a log aggregation system that stores logs as compressed streams indexed by labels, designed to work with Grafana.",
  oidc: "OpenID Connect — an identity layer on OAuth 2.0; some tools use OIDC with IAM Identity Center for temporary AWS credentials without long-lived keys.",
  logql:
    "LogQL — the Grafana Loki query language, similar to PromQL, used to filter and aggregate log streams by label and content.",
  "managed-instances":
    "Lambda Managed Instances — a Lambda execution mode where functions run on dedicated EC2-backed instances in your VPC, providing higher concurrency (up to 64 req/vCPU), more memory (up to 32 GiB), and predictable resource isolation.",
  nat: "NAT Gateway — allows instances in private subnets to reach the internet without being directly reachable from it.",
  nodejs:
    "Node.js — the JavaScript runtime used for the Lambda handler in this walkthrough (version 24.x, async/await only).",
  s3: "Amazon S3 — an object storage service used to store WAF access logs and deliver them to Lambda for processing.",
  sg: "Security Group — a stateful virtual firewall that controls inbound and outbound traffic for EC2 and Lambda instances.",
  sso: "Single sign-on — one login flow to access multiple applications; IAM Identity Center provides SSO into the AWS console and CLI.",
  subnet:
    "Subnet — a segment of a VPC CIDR block in a single Availability Zone; Lambda Managed Instances run in private subnets.",
  terraform:
    "Terraform — the infrastructure-as-code tool used to create and manage all AWS resources in this walkthrough.",
  vpc: "Virtual Private Cloud — an isolated, private network in AWS where your Lambda Managed Instances and related resources run.",
  waf: "AWS Web Application Firewall — a managed firewall service that filters HTTP/S traffic; its access logs are the input to the demo pipeline.",
  "web-acl":
    "Web ACL — a Web Application Firewall access control list; a named set of rules that WAF evaluates against incoming requests.",
};
