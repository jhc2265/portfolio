const page = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Graphic Design Portfolio Layout</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #0a0a0a;
        --muted: #6b6b6b;
        --line: #d8d8d8;
        --paper: #f7f7f4;
        --white: #ffffff;
        --soft: #eeeeea;
        font-family: Inter, "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: var(--paper);
        color: var(--ink);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .shell {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 240px minmax(0, 1fr);
        border-left: 1px solid var(--line);
        border-right: 1px solid var(--line);
      }

      .sidebar {
        position: sticky;
        top: 0;
        height: 100vh;
        padding: 28px 24px;
        border-right: 1px solid var(--line);
        background: rgba(247, 247, 244, 0.92);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .brand {
        display: grid;
        gap: 18px;
      }

      .mark {
        width: 54px;
        height: 54px;
        border: 1px solid var(--ink);
        display: grid;
        place-items: center;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.02em;
      }

      .brand h1 {
        margin: 0;
        font-size: 18px;
        line-height: 1.15;
        letter-spacing: -0.01em;
      }

      .brand p,
      .side-note {
        margin: 0;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.55;
      }

      .nav {
        display: grid;
        gap: 10px;
        margin-top: 38px;
      }

      .nav a {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--line);
        padding: 10px 0;
        font-size: 13px;
      }

      .main {
        min-width: 0;
      }

      .topbar {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 34px;
        border-bottom: 1px solid var(--line);
        background: var(--paper);
      }

      .topbar span {
        font-size: 13px;
        color: var(--muted);
      }

      .topbar strong {
        font-size: 13px;
        letter-spacing: 0.08em;
      }

      section {
        border-bottom: 1px solid var(--line);
        scroll-margin-top: 32px;
      }

      .hero {
        min-height: calc(100vh - 72px);
        display: grid;
        grid-template-rows: 1fr auto;
      }

      .hero-inner {
        padding: 52px 34px 36px;
        display: grid;
        align-content: end;
        gap: 34px;
      }

      .kicker {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--muted);
        font-size: 13px;
      }

      .kicker::before {
        content: "";
        width: 42px;
        height: 1px;
        background: var(--ink);
      }

      .display {
        margin: 0;
        max-width: 980px;
        font-size: clamp(54px, 10vw, 142px);
        line-height: 0.88;
        letter-spacing: -0.06em;
        font-weight: 900;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        border-top: 1px solid var(--line);
      }

      .intro-copy,
      .stats {
        padding: 28px 34px;
      }

      .intro-copy {
        border-right: 1px solid var(--line);
      }

      .intro-copy p {
        max-width: 700px;
        margin: 0;
        font-size: clamp(18px, 2vw, 28px);
        line-height: 1.35;
        letter-spacing: -0.03em;
      }

      .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }

      .stat strong {
        display: block;
        font-size: 30px;
        letter-spacing: -0.05em;
      }

      .stat span {
        display: block;
        margin-top: 6px;
        color: var(--muted);
        font-size: 12px;
      }

      .section-head {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
        gap: 24px 40px;
        align-items: end;
        padding: 64px 34px 36px;
        border-bottom: 1px solid var(--line);
      }

      .section-head h2 {
        margin: 0;
        font-size: clamp(56px, 9vw, 140px);
        line-height: 0.86;
        letter-spacing: -0.06em;
        font-weight: 900;
        text-transform: uppercase;
      }

      .section-head p {
        margin: 0 0 10px;
        max-width: 520px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.65;
      }

      .category-strip {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid var(--line);
      }

      .category-item {
        min-height: 220px;
        padding: 28px 24px;
        border-right: 1px solid var(--line);
        background: var(--paper);
        display: grid;
        align-content: space-between;
        gap: 40px;
      }

      .category-item b {
        font-size: 13px;
        color: var(--muted);
      }

      .category-item h3 {
        margin: 0;
        font-size: clamp(28px, 4vw, 54px);
        line-height: 0.95;
        letter-spacing: -0.06em;
      }

      .category-item p {
        margin: 14px 0 0;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.55;
      }

      .projects {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }

      .project {
        min-height: 430px;
        padding: 24px;
        border-right: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        background: var(--white);
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 20px;
      }

      .project.large {
        grid-column: span 7;
      }

      .project.small {
        grid-column: span 5;
      }

      .project.wide {
        grid-column: span 12;
        min-height: 360px;
      }

      .project-top {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        color: var(--muted);
        font-size: 12px;
      }

      .visual {
        border: 1px solid var(--ink);
        background:
          linear-gradient(135deg, rgba(10,10,10,0.12) 25%, transparent 25%) 0 0 / 18px 18px,
          linear-gradient(135deg, transparent 75%, rgba(10,10,10,0.12) 75%) 0 0 / 18px 18px,
          var(--soft);
        display: grid;
        place-items: center;
        min-height: 190px;
      }

      .visual span {
        width: min(72%, 360px);
        aspect-ratio: 16 / 10;
        border: 1px solid var(--ink);
        background: var(--paper);
        display: grid;
        place-items: center;
        font-weight: 800;
        letter-spacing: -0.03em;
        font-size: clamp(28px, 5vw, 72px);
      }

      .project h3 {
        margin: 0;
        max-width: 720px;
        font-size: clamp(28px, 4vw, 62px);
        line-height: 0.95;
        letter-spacing: -0.06em;
      }

      .project-desc {
        max-width: 680px;
        margin: 14px 0 0;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.65;
      }

      .project-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .chip {
        border: 1px solid var(--ink);
        border-radius: 999px;
        padding: 7px 10px;
        font-size: 12px;
      }

      .category-list {
        display: grid;
        gap: 10px;
        margin-top: 18px;
        padding: 0;
        list-style: none;
      }

      .category-list li {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        border-top: 1px solid var(--line);
        padding-top: 10px;
        color: var(--muted);
        font-size: 13px;
      }

      .category-list b {
        color: var(--ink);
        font-weight: 700;
      }

      .about {
        display: grid;
        grid-template-columns: minmax(340px, 0.8fr) minmax(0, 1.2fr);
        min-height: calc(100vh - 72px);
      }

      .about-intro {
        padding: 42px 56px;
        border-right: 1px solid var(--line);
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 30px;
      }

      .about-title {
        margin: 0;
        font-size: clamp(84px, 14vw, 210px);
        line-height: 0.82;
        letter-spacing: -0.08em;
        font-weight: 900;
      }

      .profile-block {
        align-self: center;
        display: grid;
        grid-template-columns: minmax(160px, 240px) minmax(0, 1fr);
        gap: 28px;
        align-items: end;
      }

      .profile-photo {
        aspect-ratio: 3 / 4.15;
        border: 1px solid var(--ink);
        background:
          linear-gradient(145deg, rgba(10,10,10,0.08), transparent 48%),
          repeating-linear-gradient(90deg, rgba(10,10,10,0.08) 0 1px, transparent 1px 12px),
          var(--soft);
        display: grid;
        align-items: end;
        justify-items: center;
        padding: 16px;
        overflow: hidden;
      }

      .profile-photo span {
        width: 100%;
        border: 1px solid var(--ink);
        background: var(--paper);
        padding: 9px 10px;
        text-align: center;
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .profile-text h3 {
        margin: 0 0 8px;
        font-size: clamp(34px, 4vw, 58px);
        line-height: 1;
        letter-spacing: -0.06em;
      }

      .role {
        margin: 0 0 28px;
        font-size: 15px;
      }

      .about-headline {
        margin: 0 0 18px;
        max-width: 520px;
        font-size: clamp(24px, 3vw, 42px);
        line-height: 1.18;
        letter-spacing: -0.05em;
      }

      .about-copy {
        margin: 0;
        max-width: 520px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.75;
      }

      .about-info {
        padding: 42px 56px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 16px;
        align-content: stretch;
      }

      .info-card {
        border: 1px solid var(--ink);
        background: rgba(255, 255, 255, 0.38);
        padding: 24px;
        display: grid;
        align-content: start;
        gap: 20px;
      }

      .info-card h3 {
        margin: 0;
        display: flex;
        justify-content: space-between;
        gap: 16px;
        border-bottom: 1px solid var(--ink);
        padding-bottom: 13px;
        font-size: 22px;
        letter-spacing: -0.04em;
      }

      .info-card h3 span {
        color: var(--muted);
        font-size: 12px;
        letter-spacing: 0;
      }

      .info-card ul {
        display: grid;
        gap: 14px;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 15px;
        line-height: 1.45;
      }

      .info-card ul.dated li {
        display: grid;
        grid-template-columns: 52px 1fr;
        gap: 16px;
        align-items: baseline;
      }

      .info-card ul.dated li .yr {
        font-weight: 700;
        color: var(--ink);
      }

      .info-card ul.tools {
        grid-template-columns: repeat(2, 1fr);
        gap: 13px 18px;
      }

      .info-card ul.tools li {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .info-card ul.tools li .ic {
        flex: none;
        width: 26px;
        height: 26px;
        border-radius: 7px;
        display: grid;
        place-items: center;
        font-size: 10px;
        font-weight: 700;
        color: var(--paper);
        background: var(--ink);
        letter-spacing: 0;
      }

      .process {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }

      .step {
        padding: 28px 24px;
        min-height: 220px;
        border-right: 1px solid var(--line);
        background: var(--paper);
      }

      .step b {
        display: block;
        margin-bottom: 48px;
        font-size: 13px;
      }

      .step h3 {
        margin: 0 0 12px;
        font-size: 22px;
        letter-spacing: -0.04em;
      }

      .step p {
        margin: 0;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.55;
      }

      .contact {
        padding: 48px 34px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 24px;
        align-items: end;
      }

      .contact h2 {
        margin: 0;
        font-size: clamp(46px, 8vw, 118px);
        line-height: 0.9;
        letter-spacing: -0.06em;
      }

      .contact-links {
        display: grid;
        gap: 10px;
        min-width: 220px;
      }

      .contact-links a {
        border: 1px solid var(--ink);
        padding: 14px 16px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        background: var(--white);
      }

      @media (max-width: 980px) {
        .shell {
          grid-template-columns: 1fr;
        }

        .sidebar {
          position: static;
          height: auto;
          padding: 20px;
          border-right: 0;
          border-bottom: 1px solid var(--line);
          gap: 20px;
        }

        .nav {
          grid-template-columns: repeat(4, 1fr);
          margin-top: 14px;
        }

        .side-note {
          display: none;
        }

        .hero-grid,
        .section-head,
        .category-strip,
        .about,
        .profile-block,
        .about-info,
        .process,
        .contact {
          grid-template-columns: 1fr;
        }

        .about-intro {
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }

        .intro-copy {
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }

        .project.large,
        .project.small,
        .project.wide {
          grid-column: span 12;
        }
      }

      @media (max-width: 640px) {
        .topbar {
          height: auto;
          padding: 18px 20px;
          align-items: flex-start;
          gap: 12px;
          flex-direction: column;
        }

        .hero-inner,
        .intro-copy,
        .stats,
        .section-head,
        .about-intro,
        .about-info,
        .contact {
          padding-left: 20px;
          padding-right: 20px;
        }

        .nav {
          grid-template-columns: 1fr 1fr;
        }

        .stats {
          grid-template-columns: 1fr;
        }

        .project {
          min-height: 360px;
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <aside class="sidebar" aria-label="Portfolio navigation">
        <div>
          <div class="brand">
            <div class="mark">HC</div>
            <div>
              <h1>Hyunchae<br>Portfolio</h1>
              <p>Visual Graphic / Banner / UI·UX Design</p>
            </div>
          </div>
          <nav class="nav">
            <a href="#about"><span>About</span><span>01</span></a>
            <a href="#work"><span>Work</span><span>02</span></a>
            <a href="#contact"><span>Contact</span><span>03</span></a>
          </nav>
        </div>
        <p class="side-note">작업 분야를 3개 축으로 먼저 정리하고, 배너 작업은 계속 추가할 수 있게 확장형 아카이브로 운영합니다.</p>
      </aside>

      <main class="main">
        <header class="topbar">
          <strong>JO HYEON CHAE PORTFOLIO</strong>
          <span>Visual graphic, banner and UI·UX design archive</span>
        </header>

        <section class="hero" aria-labelledby="hero-title" data-motion="cover">
          <div class="hero-inner">
            <span class="kicker">2026 web portfolio structure</span>
            <h2 class="display" id="hero-title">Visual order for graphic, banner, and UI work.</h2>
          </div>
          <div class="hero-grid">
            <div class="intro-copy">
              <p>시각그래픽디자인, 배너디자인, UI·UX디자인을 한 웹사이트 안에서 명확하게 분류합니다. 대표 작업은 크게 보여주고, 계속 늘어나는 배너 작업은 아카이브처럼 추가할 수 있는 구조입니다.</p>
            </div>
            <div class="stats" aria-label="Portfolio summary">
              <div class="stat"><strong>03</strong><span>Main categories</span></div>
              <div class="stat"><strong>10+</strong><span>Banner drafts</span></div>
              <div class="stat"><strong>06</strong><span>Core projects</span></div>
            </div>
          </div>
        </section>

        <section id="about" data-motion="about">
          <div class="about">
            <div class="about-intro">
              <h2 class="about-title">ABOUT</h2>
              <div class="profile-block">
                <div class="profile-photo" aria-label="Profile photo placeholder">
                  <span>Profile Photo</span>
                </div>
                <div class="profile-text">
                  <h3>조현채</h3>
                  <p class="role">Visual Graphic · Banner · UI·UX Designer</p>
                  <h4 class="about-headline">일상 속 패턴을 시각 언어로 재구성하는 디자이너</h4>
                  <p class="about-copy">시각그래픽디자인, 배너디자인, UI·UX디자인을 중심으로 작업하며 정보가 자연스럽게 읽히는 구조와 시선을 끄는 비주얼 사이의 균형을 고민합니다.</p>
                </div>
              </div>
            </div>
            <div class="about-info">
              <article class="info-card" data-motion="info-card">
                <h3>info. <span>01</span></h3>
                <ul>
                  <li>조현채 (hyeon chae jo)</li>
                  <li>2003.12.15</li>
                  <li>jhc2265@gmail.com</li>
                </ul>
              </article>
              <article class="info-card" data-motion="info-card">
                <h3>education. <span>02</span></h3>
                <ul class="dated">
                  <li><span class="yr">2024</span><span>강남대학교 유니버셜아트디자인 편입</span></li>
                  <li><span class="yr">2022</span><span>시각디자인과 입학</span></li>
                  <li><span class="yr">2019</span><span>고등학교 입학</span></li>
                </ul>
              </article>
              <article class="info-card" data-motion="info-card">
                <h3>license. <span>03</span></h3>
                <ul class="dated">
                  <li><span class="yr">2026</span><span>GTQ 일러스트 1급</span></li>
                  <li><span class="yr">2022</span><span>컴퓨터그래픽스 운용기능사</span></li>
                  <li><span class="yr">2018</span><span>GTQ 포토샵 1급</span></li>
                  <li><span class="yr">2015</span><span>ICDL 자격증</span></li>
                  <li><span class="yr">2015</span><span>ITQ OA MASTER</span></li>
                </ul>
              </article>
              <article class="info-card" data-motion="info-card">
                <h3>tool. <span>04</span></h3>
                <ul class="tools">
                  <li><span class="ic">Ps</span>Photoshop</li>
                  <li><span class="ic">Ai</span>Illustrator</li>
                  <li><span class="ic">Id</span>InDesign</li>
                  <li><span class="ic">Fi</span>Figma</li>
                  <li><span class="ic">Ae</span>After Effects</li>
                  <li><span class="ic">GPT</span>ChatGPT</li>
                  <li><span class="ic">Gm</span>Gemini</li>
                  <li><span class="ic">Cl</span>Claude</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="work" data-motion="work">
          <div class="section-head">
            <h2>Work</h2>
            <p>현재 포트폴리오는 세 분야로 나누는 구성이 가장 자연스럽습니다. 첫 화면에서는 분야를 빠르게 이해시키고, 각 분야 안에서 대표 프로젝트와 확장 가능한 작업 목록을 보여줍니다.</p>
          </div>
          <div class="category-strip" aria-label="Work categories">
            <article class="category-item" data-motion="category">
              <b>01 / First impression</b>
              <div>
                <h3>UI·UX Design</h3>
                <p>기획력과 화면 구조를 먼저 보여주는 대표 섹션입니다.</p>
              </div>
            </article>
            <article class="category-item" data-motion="category">
              <b>02 / Commercial rhythm</b>
              <div>
                <h3>Banner Design</h3>
                <p>가로 스크롤, 그리드, 썸네일 전환 효과를 넣기 좋은 섹션입니다.</p>
              </div>
            </article>
            <article class="category-item" data-motion="category">
              <b>03 / Graphic identity</b>
              <div>
                <h3>Visual Graphic</h3>
                <p>포스터와 패턴 작업을 갤러리처럼 마무리하는 섹션입니다.</p>
              </div>
            </article>
          </div>
          <div class="projects">
            <article class="project large">
              <div class="project-top"><span>01 / Main Category</span><span>UI·UX Design</span></div>
              <div class="visual"><span>01</span></div>
              <div>
                <h3>오늘의 날씨</h3>
                <p class="project-desc">날씨 정보와 구독 서비스 콘텐츠 추천을 결합한 모바일 앱 디자인입니다. 날씨별 캐릭터, 유사색 기반 인터페이스, 추천 탭 구조를 통해 정보와 콘텐츠 탐색을 연결했습니다.</p>
                <div class="project-meta">
                  <span class="chip">Mobile app</span>
                  <span class="chip">Weather service</span>
                  <span class="chip">Figma</span>
                </div>
              </div>
            </article>

            <article class="project small">
              <div class="project-top"><span>02 / Main Category</span><span>Banner Design</span></div>
              <div class="visual"><span>02</span></div>
              <div>
                <h3>Banner design archive</h3>
                <p class="project-desc">이벤트, 게임, 프로모션, 커머스 배너를 모아 보여주는 확장형 섹션입니다. 앞으로 작업물이 늘어날 예정이므로 대표 배너를 상단에 배치하고, 하단에는 계속 추가 가능한 그리드 구조로 운영합니다.</p>
                <div class="project-meta">
                  <span class="chip">Event banner</span>
                  <span class="chip">Game banner</span>
                  <span class="chip">Commerce banner</span>
                  <span class="chip">More soon</span>
                </div>
              </div>
            </article>

            <article class="project small">
              <div class="project-top"><span>03 / Main Category</span><span>Visual Graphic Design</span></div>
              <div class="visual"><span>03</span></div>
              <div>
                <h3>Visual graphic works</h3>
                <p class="project-desc">포스터, 프로모션, 패턴, 타이포그래피 작업을 묶어 보여주는 시각그래픽 섹션입니다. 일상 속 반복과 패턴을 발견하고 시각 언어로 재구성하는 방향을 중심으로 정리합니다.</p>
                <div class="project-meta">
                  <span class="chip">Poster</span>
                  <span class="chip">Promotion</span>
                  <span class="chip">Pattern</span>
                  <span class="chip">Typography</span>
                </div>
              </div>
            </article>

            <article class="project large" data-motion="gallery">
              <div class="project-top"><span>04 / Selected Visual</span><span>Poster Design</span></div>
              <div class="visual"><span>04</span></div>
              <div>
                <h3>A day of sun / Algorithm</h3>
                <p class="project-desc">라라랜드 OST에서 출발한 빛과 시간의 포스터 시리즈, 그리고 일상 속 반복 행동을 픽셀과 그리드로 시각화한 포스터 작업을 함께 보여줍니다.</p>
                <div class="project-meta">
                  <span class="chip">A4 poster</span>
                  <span class="chip">A1 poster</span>
                  <span class="chip">Booklet</span>
                </div>
              </div>
            </article>

            <article class="project wide" data-motion="archive">
              <div class="project-top"><span>05 / Project List</span><span>Portfolio Index</span></div>
              <div class="visual"><span>05</span></div>
              <div>
                <h3>Project list to expand</h3>
                <p class="project-desc">현재는 폴더별 작업을 웹 포트폴리오용 목차로 정리하는 단계입니다. 완성 작업은 대표 프로젝트로, 진행 중이거나 추가 예정인 배너는 아카이브 카드로 분리하면 관리가 쉬워집니다.</p>
                <div class="project-meta">
                  <span class="chip">holo</span>
                  <span class="chip">cyberpunk 2077</span>
                  <span class="chip">enoughday</span>
                  <span class="chip">cresto</span>
                  <span class="chip">banner updates</span>
                </div>
                <ul class="category-list">
                  <li><b>Visual Graphic</b><span>a day of sun, Algorithm, Sonia Delaunay, A Rough Wave, 고양이</span></li>
                  <li><b>Banner Design</b><span>dessert, picnic, summer drink, jelly quest, kart rider, event banners</span></li>
                  <li><b>UI·UX Design</b><span>오늘의 날씨, holo app and future app projects</span></li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section class="contact" id="contact">
          <h2>Let’s build<br>the next page.</h2>
          <div class="contact-links">
            <a href="mailto:hello@example.com"><span>Email</span><span>↗</span></a>
            <a href="#"><span>Behance</span><span>↗</span></a>
            <a href="#"><span>Instagram</span><span>↗</span></a>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    void env;
    void ctx;

    if (new URL(request.url).pathname !== "/") {
      return new Response("Not found", { status: 404 });
    }

    return new Response(page, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
