# Validation

Verified on 24 October 2026 for the Research Interests update.

- Jekyll 3.10.0 production build: passed; seven HTML pages generated.
- Markdown, Liquid, and YAML: parsed and rendered successfully.
- Local navigation, section anchors, images, stylesheets, fonts, and PDF references: 114 references checked, no missing targets.
- Research content: three first-author published papers and three first-author manuscripts in preparation, checked against the existing publication records and CV. Other coauthored studies are excluded from Research.
- Published representative figures: Jeong et al. (2019), Figure 7, and Jeong et al. (2022), Figure 8. Publisher URLs, descriptions, credits, article/DOI links, and CC BY 4.0 licenses checked against the papers.
- Chromium layout checks: 320, 375, 390, 768, 1024, and 1440 px; no horizontal overflow or JavaScript errors.
- Mobile menu open/close, Escape key, research section links, and the first-author publication link/filter: passed. The complete Publications page retains all seven papers.
- JavaScript syntax and `git diff --check`: passed.
- Existing CV PDF and photograph/font assets: unchanged.
- Verification limit: the managed environment's outbound proxy returns HTTP 403 for publisher image hosts. Images use the verified original publisher URLs and are not bundled locally; actual image loading and appearance could not be verified. The loading-error fallback and original-image/article links were checked. Publisher availability or URL changes can affect previews.
- Publication uses the existing main-branch GitHub Pages workflow. Its build and deployment result is checked for the published source commit.

Production build command in the prepared environment:

```sh
. /workspace/.cloud-setup/env.sh
JEKYLL_ENV=production bundle exec jekyll build --source /workspace/YubeenJ.github.io --destination /workspace/work/research-build/site
```

In a standard Ruby environment with the project's gems installed, run `JEKYLL_ENV=production bundle exec jekyll build` from the repository root.
