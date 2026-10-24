# 내 홈페이지 직접 수정하기

문구는 Markdown (`.md`), 짧은 설정과 목록은 YAML (`.yml`)로 분리했습니다.
디자인 파일을 건드리지 않아도 대부분의 내용을 수정할 수 있습니다.

## 무엇을 어디서 바꾸나요?

| 바꾸려는 내용 | 파일 |
| --- | --- |
| 첫 화면 소개·한 줄 설명·배너 사진 | `index.md` |
| 연구 설명 | `research.md` |
| 논문 페이지 소개 | `publications.md` |
| Research 대표 그림·설명·출처·논문 링크 | `_data/research_figures.yml` |
| 논문 한 편 추가·수정 | `_publications/`의 개별 `.md` 파일 |
| 준비 중인 원고 | `_manuscripts/`의 개별 `.md` 파일 |
| 현장 경험·강의·멘토링·발표 | `experience.md` |
| 학력·경력·수상 이력 | `cv.md` |
| 연락처 페이지 소개·사진 | `contact.md` |
| 이름·소속·이메일·Scholar·LinkedIn·프로필 사진 경로 | `_data/profile.yml` |
| 왼쪽 메뉴 이름·순서 | `_data/navigation.yml` |
| 홈 화면 News | `_data/news.yml` |
| 홈 화면 연구 요약 | `_data/research.yml` |
| 데이터셋 목록 | `_data/datasets.yml` |
| 다운로드용 CV 원본 | `assets/files/CV_YJeong.pdf` |
| 사진 파일 | `assets/images/` |
| 글꼴·색·크기·간격 | `assets/css/style.css` |

웹페이지의 CV 설명과 PDF 파일은 별개입니다. 이력이 바뀌면 `cv.md`와 PDF를 각각 갱신하세요.
홈 화면의 짧은 연구 요약과 연구 상세 페이지도 각각 `_data/research.yml`, `research.md`에서 관리합니다.
이름·소속·이메일 같은 공통 정보는 `_data/profile.yml`을 수정하면 사이드바와 연락처 페이지에 함께 반영됩니다. 자기소개 문장에 직접 쓴 소속은 `index.md`에서도 수정하세요.

## 1. 소개·연구 문구 수정

`index.md`의 맨 위는 페이지 설정입니다.

```yaml
---
layout: home
title: Yubeen Jeong
subtitle: Understanding ocean currents through observations.
# ...
---
```

위아래 `---`는 지우지 마세요. `layout`과 `permalink`는 그대로 두고 `subtitle` 같은 문구만 수정하면 됩니다.
두 번째 `---` 아래의 문장은 일반 Markdown입니다.

```markdown
## My research

I study **Gulf Stream variability** using ocean observations.

- High-frequency radar
- Satellite altimetry
- Underwater gliders

[Google Scholar](https://scholar.google.com/)
```

`##`는 큰 소제목, `###`는 작은 소제목, `**문구**`는 굵게, `-`는 목록입니다.
줄 끝에 공백 2개를 넣으면 같은 문단 안에서 줄이 바뀝니다. 빈 줄을 넣으면 새 문단이 됩니다.

## 2. 새 논문 추가 — 파일 하나

1. GitHub에서 `_publications` 폴더를 엽니다.
2. **Add file → Create new file**.
3. 예를 들어 `2027-new-paper.md`라는 파일을 만듭니다.
4. 아래 내용을 붙여 넣고 실제 정보로 교체합니다.

```yaml
---
title: "Your new paper title"
year: 2027
authors: "Jeong, Y., Seim, H., et al."
journal: "Journal name"
details: "Volume, pages or article number"
doi: "10.xxxx/your-real-doi"
first_author: true
featured: false
---

Optional one- or two-sentence summary of the paper.
```

- `doi`에는 `https://doi.org/`를 제외한 DOI만 넣습니다. 예시는 실제 DOI로 교체하세요.
- `first_author: true`이면 제1저자 필터에 포함됩니다. 아니면 `false`.
- `featured: true`이면 홈 화면의 Selected publications에도 표시됩니다.
- 새 논문은 연도순으로 자동 정렬됩니다. 논문 수와 검색 결과도 자동 갱신됩니다.
- 아래의 요약 문단은 선택사항입니다. 필요 없으면 두 번째 `---` 아래를 비워 두세요.
- 기존 논문 수정은 해당 파일만 편집하면 됩니다.
- 아직 준비 중인 원고는 `_publications` 대신 `_manuscripts`에 넣으세요.

### 준비 중인 원고

```yaml
---
title: "Manuscript title"
authors: "Jeong, Y., et al."
status: "In preparation"
order: 4
---
```

`order`가 작은 원고부터 표시됩니다. 게재되면 `_publications`에 정식 서지정보를 추가하고 `_manuscripts`의 해당 파일은 제거하면 됩니다.

## 3. News 추가

`_data/news.yml` 맨 위에 다음과 같은 항목을 넣습니다. 적힌 순서대로 표시됩니다.

```yaml
- year: 2027
  label: "News"
  title: "Your news headline"
  text: "A short description."
  url: "https://example.com/your-actual-link"
```

링크가 없으면 `url` 줄을 생략합니다. 선정·예정인 사항은 `Selected`, `Upcoming`, `Expected` 등으로 실제 상태를 표시하세요.

## 4. 사진 교체

가장 간단한 방법은 **기존 파일과 같은 이름으로 새 사진을 올리는 것**입니다.

- 프로필: `assets/images/Yubeen_Jeong.jpg`
- 바다 배너: `assets/images/ocean2.jpg`
- 승선 사진: `assets/images/yb_cruise.jpg`
- CTD 사진: `assets/images/ctd.jpg`

실제 JPG/PNG/WebP 파일을 사용하세요. HEIC 파일의 이름만 `.jpg`로 바꾸면 브라우저에서 표시되지 않을 수 있습니다.
다른 이름을 쓰려면 해당 페이지나 `_data/profile.yml`의 경로도 함께 바꾸세요. 경로의 대소문자를 정확히 맞춰 주세요.

프로필 원형 사진의 확대·위치를 조정하려면 `assets/css/style.css`의 `.portrait img`를 수정합니다. 현재 사진에 맞춘 확대 설정이 있으므로 새 정사각형 인물 사진은 아래처럼 원래 비율로 시작해도 됩니다.

```css
.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
}
```

## 5. CV PDF 바꾸기

`assets/files/CV_YJeong.pdf`를 같은 이름의 최신 PDF로 교체합니다.
`cv.md` 내용은 자동으로 바뀌지 않으므로 함께 갱신하세요.
다른 파일명을 쓰면 `_data/profile.yml`의 `cv` 경로를 수정하면 됩니다.

## 6. 글꼴·색상 수정

`assets/css/style.css` 상단 `:root`의 설정이 기본값입니다.

```css
--font: 'Calibri', 'Carlito', 'Segoe UI', Arial, sans-serif;
--ink: #183747;
--blue: #236579;
--paper: #fbfcfc;
```

제목·본문·메뉴 모두 같은 글꼴 계열입니다. Carlito는 사이트에 포함되어 있습니다.
폰트 크기는 `body`, `h1`, `h2`, `.profile-name` 등의 규칙에서 바꿀 수 있습니다.

## 7. 수정했는데 반영되지 않을 때

1. GitHub에서 **Commit changes**까지 했는지 확인합니다.
2. 저장소 **Actions**의 Pages 빌드가 성공했는지 확인합니다.
3. 실패했다면 수정한 `.yml` 또는 `.md` 상단의 들여쓰기·따옴표·`---`를 확인합니다.
4. GitHub Pages 설정이 `main / (root)`인지 확인합니다.
5. 수 분 후 브라우저에서 강력 새로고침합니다.

YAML은 탭 대신 공백을 사용합니다. 콜론(`:`)을 포함한 문구는 `title: "Paper: a new result"`처럼 따옴표로 감싸면 안전합니다.
`true`와 `false`는 따옴표 없이 쓰세요.

## 8. 디자인 파일은 언제 수정하나요?

`_layouts/`, `_includes/`, `assets/css/`, `assets/js/`는 공통 디자인과 기능입니다.
문구나 사진만 바꿀 때는 대부분 수정할 필요가 없습니다.
레이아웃 안의 고정 제목(예: `News & milestones`, `At a glance`)을 바꾸고 싶다면 `_layouts/home.html`을 수정하면 됩니다.

## 9. 로컬에서 확인하고 싶을 때 — 선택사항

Ruby와 Bundler가 설치된 컴퓨터에서:

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`을 엽니다. `_config.yml`을 바꾼 경우 서버를 다시 시작하세요.
이 단계는 GitHub 웹사이트에서 문구를 수정하는 데 필요하지 않습니다.
