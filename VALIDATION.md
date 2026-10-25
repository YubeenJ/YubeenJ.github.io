# Validation

Verified on 24 October 2026 for the academic website updates.

- Jekyll 3.10.0 production build: passed; seven HTML pages generated.
- Markdown, Liquid, and YAML: parsed and rendered successfully.
- Local navigation, section anchors, images, stylesheets, fonts, and PDF references: 114 references checked, no missing targets.
- Research content: research themes and three first-author published papers, introduced by a bold overview covering current Gulf Stream work, methods, and broader interests. Manuscripts in preparation and the manuscript-count notice are removed from Research; all five manuscripts remain on Publications. The original records were checked against the publication list and CV; two additional manuscript titles and author credits were supplied by the owner. The near-inertial manuscript lists “Seim, H., Jeong, Y., et al.” as requested.
- Research order: overview, current Gulf Stream work, 2022 warming, 2019 temperature reconstruction, and 2019 eddy research. The training/appointment timeline is last and starts with the current Ph.D. appointment.
- Published representative figures: the author-supplied graphical abstract for Jeong et al. (2019), replacing Figure 7, and Jeong et al. (2022), Figure 8. Descriptions, credits, article/DOI links, and CC BY 4.0 licenses checked against the papers and supplied image. The graphical abstract is labeled separately from numbered figures.
- Chromium layout checks for the reordered page: 320, 390, 768, and 1440 px; no horizontal overflow. Section and navigation order, first-author scope, and the bottom timeline were checked.
- Mobile menu open/close, Escape key, research section links, and the first-author publication link/filter: passed. The complete Publications page retains all seven papers.
- JavaScript syntax and `git diff --check`: passed.
- Light/dark mode: initial device preference, saved selection across navigation/reload, keyboard toggling, live device-preference changes, cross-tab synchronization, invalid/blocked browser storage, and no-JavaScript fallback checked successfully; no JavaScript errors.
- Stylesheet and script URLs include a per-build version so a new theme rollout loads matching assets rather than cached older controls or colors.
- Theme layout: all seven pages checked in both modes at 390 and 1440 px, with additional checks at 320 and 768 px. One theme button is visible per breakpoint; the mobile header remains 74 px tall and its menu works. Body text and the CV download button meet 4.5:1 contrast. Dark-mode print output uses a light background and dark text; photographs and scientific images are not inverted.
- CV PDF: replaced with the latest uploaded seven-page PDF, byte-identical to the supplied file (SHA-256 `5d3592c052fb78277298e8fcae3174bc081e66f63ce9ea9106e0ba8e090542c4`). ASLO appears in both the web CV and PDF memberships. Shared download links include a file-version query to refresh cached copies. Photograph/font assets are unchanged.
- Verification limit: publisher image hosts cannot be fetched from this environment. The graphical abstract was visually identified from the image supplied in chat, but the attachment was not materialized as a local file. Its publisher PNG/thumbnail paths follow the paper's asset naming convention and could not be verified remotely; image bytes are not bundled. Actual image loading could not be verified. The loading-error fallback and original-image/article links were checked.
- Publication uses the existing main-branch GitHub Pages workflow. Its build and deployment result is checked for the published source commit.

Production build command in the prepared environment:

```sh
. /workspace/.cloud-setup/env.sh
JEKYLL_ENV=production bundle exec jekyll build --source /workspace/YubeenJ.github.io --destination /workspace/work/research-build/site
```

In a standard Ruby environment with the project's gems installed, run `JEKYLL_ENV=production bundle exec jekyll build` from the repository root.
