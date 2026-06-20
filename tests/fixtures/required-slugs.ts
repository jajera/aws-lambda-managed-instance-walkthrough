export const REQUIRED_SLUGS = [
  "index",
  "overview",
  "overview/concepts",
  "overview/concepts/capacity-providers",
  "overview/concepts/scaling",
  "overview/concepts/security",
  "overview/concepts/operator-role",
  "overview/concepts/execution-environment",
  "overview/concepts/version-publishing",
  "overview/concepts/networking",
  "overview/concepts/monitoring",
  "overview/concepts/quotas",
  "overview/concepts/reference",
  "foundations",
  "foundations/prerequisites",
  "foundations/prerequisites/aws-account",
  "foundations/prerequisites/iam-identity-center",
  "foundations/prerequisites/aws-cli",
  "foundations/prerequisites/terraform",
  "foundations/prerequisites/git",
  "foundations/prerequisites/what-else",
  "walkthrough",
  "walkthrough/networking",
  "walkthrough/lmi",
  "walkthrough/lambda",
] as const;

export const REQUIRED_ASSET_FILES = [
  "walkthrough/networking-vpc-ipv4-traffic.svg",
  "walkthrough/lambda-invocation-triggers.svg",
  "overview/how-it-works-3-steps.svg",
  "overview/execution-environment-default-vs-lmi.svg",
  "overview/capacity-provider-responsibility-boundary.svg",
] as const;

export const REQUIRED_PUBLIC_FILES = ["favicon.svg"] as const;
