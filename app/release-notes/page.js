export const metadata = {
  title: "Release Notes | Pipeline Pulse",
  description: "Die neue Testseite für den zweiten automatischen Deployment-Lauf.",
};

const changes = [
  "Neue statische Route erfolgreich hinzugefügt",
  "Navigation auf der Startseite erweitert",
  "Responsive Darstellung für Mobilgeräte",
  "Bereit für den nächsten Coolify-Build",
];

export default function ReleaseNotes() {
  return (
    <main className="releasePage">
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="/" aria-label="Zurück zur Startseite">
          <span className="brandMark" aria-hidden="true">P</span>
          <span>Pipeline Pulse</span>
        </a>
        <a className="navLink" href="/">Zur Startseite <span aria-hidden="true">↖</span></a>
      </nav>

      <section className="releaseHero">
        <p className="eyebrow"><span className="liveDot" /> Autodeploy-Test #2</p>
        <h1>Neue Route.<br /><em>Neues Deployment.</em></h1>
        <p className="releaseLead">
          Diese Seite gab es im ersten Release noch nicht. Wenn sie live erreichbar
          ist, wurde die aktuelle Änderung automatisch gebaut und veröffentlicht.
        </p>
      </section>

      <section className="releasePanel" aria-labelledby="changes-heading">
        <div className="releasePanelInner">
          <div className="releaseStamp" aria-hidden="true"><strong>02</strong></div>
          <div className="releaseContent">
            <p className="eyebrow">Release Check</p>
            <h2 id="changes-heading">Was sich geändert hat</h2>
            <ul className="changeList">
              {changes.map((change) => (
                <li key={change}><span className="checkMark" aria-hidden="true">✓</span>{change}</li>
              ))}
            </ul>
            <a className="backLink" href="/">← Pipeline-Übersicht</a>
          </div>
        </div>
      </section>

      <footer>
        <p>Release 02 · Autodeploy-Test</p>
        <p><span className="liveDot" /> Änderung erkannt</p>
      </footer>
    </main>
  );
}
