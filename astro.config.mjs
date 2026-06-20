import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeVintage from "starlight-theme-vintage";
import Icons from "unplugin-icons/vite";

const siteBase = "/aws-lambda-managed-instance-walkthrough";

const prereqRedirect = (slug) => ({
  status: 301,
  destination: `${siteBase}/foundations/prerequisites/${slug}`,
});

export default defineConfig({
  site: "https://jajera.github.io",
  base: siteBase,
  redirects: {
    "/walkthrough/prerequisites": {
      status: 301,
      destination: `${siteBase}/foundations/prerequisites`,
    },
    "/walkthrough/prerequisites/aws-account": prereqRedirect("aws-account"),
    "/walkthrough/prerequisites/iam-identity-center": prereqRedirect("iam-identity-center"),
    "/walkthrough/prerequisites/aws-cli": prereqRedirect("aws-cli"),
    "/walkthrough/prerequisites/terraform": prereqRedirect("terraform"),
    "/walkthrough/prerequisites/git": prereqRedirect("git"),
    "/walkthrough/prerequisites/what-else": prereqRedirect("what-else"),
  },
  vite: {
    plugins: [Icons({ compiler: "astro" })],
  },
  integrations: [
    starlight({
      title: "AWS Lambda Managed Instances Walkthrough",
      favicon: "/favicon.svg",
      description:
        "Terraform-first walkthrough for AWS Lambda Managed Instances — capacity provider, VPC, and how LMI differs from default Lambda.",
      plugins: [starlightThemeVintage()],
      customCss: ["./src/styles/splash-overrides.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jajera/aws-lambda-managed-instance-walkthrough",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/jajera/aws-lambda-managed-instance-walkthrough/edit/main/",
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Getting started",
          collapsed: false,
          badge: { text: "Start here", variant: "tip" },
          items: [{ slug: "overview" }],
        },
        {
          label: "LMI fundamentals",
          collapsed: false,
          items: [
            { slug: "overview/concepts" },
            { slug: "overview/concepts/capacity-providers" },
            { slug: "overview/concepts/scaling" },
            { slug: "overview/concepts/security" },
            { slug: "overview/concepts/operator-role" },
            { slug: "overview/concepts/execution-environment" },
            { slug: "overview/concepts/version-publishing" },
            { slug: "overview/concepts/networking" },
            { slug: "overview/concepts/monitoring" },
            { slug: "overview/concepts/quotas" },
            { slug: "overview/concepts/reference" },
          ],
        },
        {
          label: "Foundations",
          collapsed: false,
          badge: { text: "Before labs", variant: "note" },
          items: [
            { slug: "foundations" },
            { slug: "foundations/prerequisites" },
            { slug: "foundations/prerequisites/aws-account" },
            { slug: "foundations/prerequisites/iam-identity-center" },
            { slug: "foundations/prerequisites/aws-cli" },
            { slug: "foundations/prerequisites/terraform" },
            { slug: "foundations/prerequisites/git" },
            { slug: "foundations/prerequisites/what-else" },
          ],
        },
        {
          label: "Walkthrough",
          collapsed: false,
          badge: { text: "Hands-on", variant: "note" },
          items: [
            { slug: "walkthrough" },
            { slug: "walkthrough/networking" },
            { slug: "walkthrough/lmi" },
            { slug: "walkthrough/lambda" },
            // { slug: 'iam' },
            // { slug: 'capacity-provider' },
            // { slug: 'lambda' },
            // { slug: 'demo' },
            // { slug: 'demo/handler' },
            // { slug: 'demo/loki' },
            // { slug: 'demo/grafana' },
          ],
        },
        // {
        //   label: 'Observability',
        //   collapsed: true,
        //   items: [
        //     { slug: 'observability' },
        //   ],
        // },
        // {
        //   label: 'Appendix',
        //   collapsed: true,
        //   items: [
        //     { slug: 'appendix' },
        //   ],
        // },
      ],
    }),
  ],
});
