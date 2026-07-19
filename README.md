# JO HYEON CHAE — Portfolio

시각·그래픽 디자인과 UI·UX 디자인 포트폴리오입니다.
빌드 도구 없이 동작하는 정적 사이트로, 파일을 열면 그대로 실행됩니다.

**→ [jhc2265.github.io/portfolio](https://jhc2265.github.io/portfolio/)**

---

## 프로젝트

각 프로젝트는 상세 페이지와 실제 배포된 사이트로 나뉩니다.
상세 페이지에는 기획 의도, 문제 정의, 설계 과정, 결과가 정리돼 있습니다.

| 프로젝트 | 분류 | 상세 | 라이브 |
|---|---|---|---|
| **YENE** — 좋은 제품이, 더 잘 이해되고 선택되도록 | Website Redesign · 4인 팀 | [보기](project-yene.html) | [↗](https://web5-portfolio-yene.vercel.app) |
| **HOLO** — 혼자 살지만, 함께 살아가는 일상의 시작 | UI·UX Design · 4인 팀 | [보기](project-holo.html) | [↗](https://3team-holo.vercel.app) |
| **CYBER PUNK 2077** — 나이트 시티 아카이브 | Web Design · 개인 | [보기](project-cyberpunk.html) | [↗](https://jhc2265.github.io/cyberpunk2077/) |
| **cozybrew** — 홈카페 에스프레소 브랜드 | Web Design · 개인 | [보기](project-cozybrew.html) | [↗](https://jhc2265.github.io/cozybrew/) |
| **Cresto** — 세라믹·공예 라이프스타일 브랜드 | Web Design · 개인 | [보기](project-cresto.html) | [↗](https://jhc2265.github.io/cresto/) |
| **사각사각 문구점** — 감성 문구 브랜드 | Web Design · 개인 | [보기](project-sagaksagak.html) | [↗](https://jhc2265.github.io/sagaksagak/) |
| **Camp Lium** — 숲과 호수의 아웃도어 캠핑 브랜드 | Web Design · 개인 | [보기](project-camplium.html) | [↗](https://jhc2265.github.io/camplium/) |
| **enoughday** — 오늘은 여기까지 | Web App · 개인 | [보기](project-enoughday.html) | [↗](https://jhc2265.github.io/enoughday/) |

이 밖에 배너·시각디자인 작업물은 메인 페이지의 Work 섹션에 실려 있습니다.

---

## 구성

```
index.html            메인 — About / Featured / Work / Meet me / Contact
index.js              메인 인터랙션 (갤러리, 스크롤 연출)
project-*.html        프로젝트 상세 8종

web/<프로젝트>/         프로젝트별 스크린샷·이미지
banners/              배너 디자인 32종
graphic/              시각디자인 작업물
logos/                도구 로고 (SVG)
mockup/               기기 프레임
cv/                   이력서
```

상세 페이지는 각자 `<style>`을 안에 들고 있습니다. 프로젝트마다 브랜드 색과
레이아웃이 달라 공통 스타일시트로 묶어도 얻는 게 적고, 한 페이지를 고쳐도
나머지가 영향받지 않는 편이 수정할 때 안전하기 때문입니다.

---

## 본문 조판 조절

상세 페이지의 본문 조판은 `:root`의 세 변수로 제어합니다.

```css
--body-lh: 1.85;        /* 행간 */
--body-size: 16px;      /* 글자 크기 */
--body-measure: 900px;  /* 본문 폭 */
```

한글은 어센더·디센더가 없어 같은 수치라도 라틴 문자보다 빽빽하게 읽힙니다.
그래서 일반적인 1.6보다 넉넉한 값을 씁니다.

주소 끝에 `?tune`을 붙이면 조절 패널이 열립니다.

```
project-cresto.html?tune
```

슬라이더로 값을 맞춘 뒤 **CSS 복사**를 누르면 위 세 줄이 클립보드에 담기고,
`:root`에 붙여넣으면 확정됩니다. 패널은 `?tune`이 있을 때만 실행되므로
방문자에게는 로드되지 않습니다.

---

## 기술

HTML · CSS · JavaScript (프레임워크·빌드 과정 없음)

- 반응형 — 900px 기준으로 데스크톱·모바일 레이아웃 전환
- 1440px 그리드 — 본문은 가운데 정렬, 배경과 구분선은 화면 끝까지
- `prefers-reduced-motion` 대응 — 애니메이션 최소화 설정을 존중
- 이미지는 WebP

---

## 참고

작업 원본과 시안은 저장소에 포함하지 않습니다 (`.gitignore`의 `_source/`).
완성본과 그 과정을 담은 상세 페이지만 올라가 있습니다.
