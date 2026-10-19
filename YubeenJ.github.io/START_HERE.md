# 처음 시작하기

이 폴더가 `YubeenJ.github.io` 저장소의 **최상위(root)** 에 들어갈 홈페이지 원본입니다.
GitHub가 Markdown을 웹페이지로 변환하는 **Jekyll** 방식입니다.
평소 문구 수정에는 Python, Ruby, 터미널을 사용할 필요가 없습니다.

## 1. 파일 올리기

1. ZIP을 풀고 `YubeenJ.github.io` 폴더를 엽니다.
2. https://github.com/YubeenJ/YubeenJ.github.io 를 엽니다.
3. **Add file → Upload files**를 선택합니다.
4. 압축을 푼 폴더 **안의 파일과 폴더 전체**를 올립니다. `YubeenJ.github.io` 바깥 폴더 자체를 올리지 마세요.
5. `_config.yml`, `_layouts`, `_includes`, `_data`, `_publications`, `_manuscripts`, `assets`, `index.md`, `research.md` 등이 저장소 최상위에 있는지 확인합니다.
6. **Commit changes**를 눌러 저장합니다.

기존 `homepage` 폴더는 그대로 두어도 됩니다. 새 홈페이지는 저장소 최상위의 `index.md`를 사용합니다.
최상위에 기존 `index.html` 또는 `.nojekyll`이 있다면 새 Jekyll 사이트와 충돌하므로 먼저 별도로 보관한 뒤 제거하세요.
이번에 확인한 저장소에는 홈페이지 파일이 `homepage` 폴더 아래에 있었습니다.

## 2. GitHub Pages 켜기 — 처음 한 번만

저장소의 **Settings → Pages → Build and deployment**에서:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- **Save**

배포가 끝나면 주소는 **https://yubeenj.github.io/** 입니다.
GitHub **Actions** 탭에서 `pages build and deployment` 상태를 확인할 수 있습니다.
반영에는 수 분, 경우에 따라 약 10분이 걸릴 수 있습니다.

`_config.yml`에 이미 다음 값이 설정되어 있습니다.

```yaml
url: "https://yubeenj.github.io"
baseurl: ""
```

이 버전에는 `.nojekyll`을 추가하지 마세요. Jekyll 변환이 필요합니다.
기존 저장소에 사용자 지정 Pages Actions workflow가 있다면, 그 workflow가 새 소스를 사용하는지 먼저 확인하세요.

## 3. 평소 수정하기

예: 첫 화면 소개를 바꾸려면

1. 저장소에서 **index.md**를 누릅니다.
2. 연필 아이콘 **Edit this file**을 누릅니다.
3. 소개 문장을 바꿉니다.
4. **Preview**로 Markdown 문법을 확인합니다. 이 화면은 실제 홈페이지 디자인과 다릅니다.
5. **Commit changes**를 누릅니다.
6. GitHub Pages 빌드가 끝난 뒤 홈페이지를 새로고침합니다.

**자세한 수정 위치와 논문 추가 예시는 `EDITING.md`에 있습니다.**

## 글꼴

제목·본문·메뉴는 모두 같은 Calibri 계열입니다.
기기에 Calibri가 있으면 Calibri를 사용하고, 없으면 포함된 Carlito 웹폰트를 사용합니다.
폰트를 별도로 설치하거나 외부 폰트 서비스를 연결할 필요가 없습니다.

## 실제 배포 여부

이 파일 묶음은 업로드할 수 있는 홈페이지 소스입니다. 이 ZIP을 받은 것만으로 GitHub 저장소가 변경되거나 사이트가 배포되지는 않습니다.

## 공식 안내

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll
