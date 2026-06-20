# aws-lambda-managed-instance-walkthrough

Documentation site for **AWS Lambda Managed Instances (LMI)**: VPC layout, capacity providers, IAM, and how the pieces fit together. The site pairs with the Terraform modules and examples in **[terraform-aws-lambda-managed-instance](https://github.com/jajera/terraform-aws-lambda-managed-instance)**—including **`examples/waf-loki`** (WAF logs → S3 → Node.js 24 LMI function → Loki/Grafana) referenced from the demo sections.

Built with [Astro Starlight](https://starlight.astro.build).

## Quick start

**Node.js** `>= 18.20.8` (see `.nvmrc` for the project’s preferred version).

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:4321`). Edits under `src/content/docs/` hot-reload.

### Build and preview

| Command                                | Use                                                         |
| -------------------------------------- | ----------------------------------------------------------- |
| `npm run dev`                          | Local authoring with live reload                            |
| `npm run build` then `npm run preview` | Production build from `dist/` (matches GitHub Pages output) |

## Deploy (GitHub Pages)

1. **Settings → Pages → Build and deployment:** set **Source** to **GitHub Actions**.
2. Push to **`main`** (or run **Deploy to GitHub Pages** manually) to build and publish via `.github/workflows/deploy.yml`.
3. `astro.config.mjs` defines `site` and `base` for this repository; adjust if you fork to a different path.

## Project structure

| Path                | Role                                                  |
| ------------------- | ----------------------------------------------------- |
| `astro.config.mjs`  | Astro / Starlight (site URL, `base`, theme, sidebar)  |
| `src/content/docs/` | Markdown and MDX pages; filesystem drives the sidebar |
| `public/`           | Static assets (e.g. favicon)                          |
| `.cursor/rules/`    | Authoring conventions for editors and AI assistants   |

## License

MIT — see [LICENSE](LICENSE).
