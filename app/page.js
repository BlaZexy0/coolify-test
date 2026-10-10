const stages = [
  { number: "01", label: "Commit", detail: "Änderungen landen auf main" },
  { number: "02", label: "Build", detail: "Next.js erzeugt den Static Export" },
  { number: "03", label: "Deploy", detail: "Coolify liefert die neue Version aus" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Pipeline Pulse Startseite">
          <span className="brandMark" aria-hidden="true">P</span>
          <span>Pipeline Pulse</span>
        </a>
        <div className="navLinks">
          <a className="navLink" href="#pipeline">Status prüfen <span aria-hidden="true">↘</span></a>
          <a className="navLink navLinkHighlight" href="/release-notes/">Neue Testseite <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="orb orbOne" aria-hidden="true" />
        <div className="orb orbTwo" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow"><span className="liveDot" /> Autodeploy-Test #3 aktiv</p>
          <h1>Deine Pipeline.<br /><em>Ein klares Signal.</em></h1>
          <p className="intro">
            Wenn du diese Seite siehst, hat dein automatischer Weg vom Git-Commit
            bis zum Live-System funktioniert.
          </p>
          <div className="actions">
            <a className="primaryButton" href="#pipeline">Pipeline ansehen <span aria-hidden="true">→</span></a>
            <a className="secondaryButton" href="/release-notes/">Release Notes</a>
            <span className="buildTag">Release 03 · Next.js Static Export</span>
          </div>
        </div>

        <div className="signalCard" aria-label="Deployment Status">
          <div className="cardTopline">
            <span>Production</span>
            <span className="statusBadge">Healthy</span>
          </div>
          <div className="pulseVisual" aria-hidden="true">
            <span className="ring ringOne" />
            <span className="ring ringTwo" />
            <span className="ring ringThree" />
            <span className="core" />
          </div>
          <div className="cardFooter">
            <div><span>Branch</span><strong>main</strong></div>
            <div><span>Output</span><strong>static</strong></div>
            <div><span>State</span><strong className="successText">ready</strong></div>
          </div>
        </div>
      </section>

      <section className="pipeline" id="pipeline">
        <div className="sectionHeading">
          <p className="eyebrow">Der Weg ins Web</p>
          <h2>Drei Schritte. Ein Ergebnis.</h2>
        </div>
        <div className="stageGrid">
          {stages.map((stage, index) => (
            <article className="stage" key={stage.number}>
              <div className="stageMeta">
                <span>{stage.number}</span>
                <span className="stageIcon" aria-hidden="true">{index === 2 ? "✓" : "→"}</span>
              </div>
              <h3>{stage.label}</h3>
              <p>{stage.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Gebaut für deinen CI/CD-Test.</p>
        <p><span className="liveDot" /> System bereit</p>
      </footer>
    </main>
  );
}
