# 나의 여행 계획

여행지 정보를 정리해 둔 정적 웹사이트입니다. GitHub Pages에 올리면 온라인에서 볼 수 있습니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `trips.js` | **여행 데이터.** 여행을 추가하거나 고칠 때는 이 파일만 수정하면 됩니다 |
| `index.html` | 여행 목록 (카드 형태, 상태별 필터) |
| `trip.html` | 여행 상세 페이지 (`trip.html?id=여행id`) |
| `common.js`, `style.css` | 공통 함수, 디자인 |

## 여행 추가하기

`trips.js`의 `TRIPS` 배열에 있는 예시 객체를 복사해서 붙여넣고 내용을 바꾸세요.
`id`는 영문, 숫자, 하이픈만 쓰고 여행마다 다르게 정해야 합니다.

## GitHub Pages로 올리기

1. GitHub에서 새 저장소를 만듭니다 (예: `travel`).
2. 이 폴더에서 아래 명령을 실행합니다.
   ```bash
   git remote add origin https://github.com/<아이디>/travel.git
   git push -u origin main
   ```
3. 저장소에서 **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`** 를 선택하고 저장합니다.
4. 1~2분 뒤 `https://<아이디>.github.io/travel/` 에서 볼 수 있습니다.

> ⚠️ 공개 저장소의 GitHub Pages는 **누구나 볼 수 있습니다.** 예약번호, 여권번호, 숙소 주소 같은 민감한 정보는 넣지 마세요.
