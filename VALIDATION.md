# Validation

Verified on 24 October 2026 for the Research Interests update.

- Jekyll 3.10.0 production build: passed; seven HTML pages generated.
- Markdown, Liquid, and YAML: parsed and rendered successfully.
- Local navigation, section anchors, images, stylesheets, fonts, and PDF references: 114 references checked, no missing targets.
- Research content: three first-author published papers and five manuscripts in preparation. The original records were checked against the publication list and CV; two additional manuscript titles and their author credit, “Jeong, Y., et al.”, were supplied by the owner. Research's manuscript count is generated from the collection. Other coauthored studies are excluded from Research.
- Research order: manuscripts in preparation first, then current Gulf Stream work, 2022 warming, 2019 temperature reconstruction, and 2019 eddy research. The training/appointment timeline is last and starts with the current Ph.D. appointment.
- Published representative figures: the author-supplied graphical abstract for Jeong et al. (2019), replacing Figure 7, and Jeong et al. (2022), Figure 8. Descriptions, credits, article/DOI links, and CC BY 4.0 licenses checked against the papers and supplied image. The graphical abstract is labeled separately from numbered figures.
- Chromium layout checks for the reordered page: 320, 390, 768, and 1440 px; no horizontal overflow. Section and navigation order, first-author scope, and the bottom timeline were checked.
- Mobile menu open/close, Escape key, research section links, and the first-author publication link/filter: passed. The complete Publications page retains all seven papers.
- JavaScript syntax and `git diff --check`: passed.
- Existing CV PDF and photograph/font assets: unchanged.
- Verification limit: publisher image hosts cannot be fetched from this environment. The graphical abstract was visually identified from the image supplied in chat, but the attachment was not materialized as a local file. Its publisher PNG/thumbnail paths follow the paper's asset naming convention and could not be verified remotely; image bytes are not bundled. Actual image loading could not be verified. The loading-error fallback and original-image/article links were checked.
- Publication uses the existing main-branch GitHub Pages workflow. Its build and deployment result is checked for the published source commit.

Production build command in the prepared environment:

```sh
. /workspace/.cloud-setup/env.sh
JEKYLL_ENV=production bundle exec jekyll build --source /workspace/YubeenJ.github.io --destination /workspace/work/research-build/site
```

In a standard Ruby environment with the project's gems installed, run `JEKYLL_ENV=production bundle exec jekyll build` from the repository root.
