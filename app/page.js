const pipelineSteps = [
  {
    id: "01",
    label: "Lokal entwickeln",
    title: "Code & Preview",
    detail: "Next.js läuft lokal, Änderungen werden direkt im Browser geprüft.",
    command: "npm run dev",
  },
  {
    id: "02",
    label: "Qualität sichern",
    title: "Static Build",
    detail: "Der Produktions-Build muss erfolgreich sein, bevor Code veröffentlicht wird.",
    command: "npm run build",
  },
  {
    id: "03",
    label: "Versionieren",
    title: "GitHub / main",
    detail: "Ein nachvollziehbarer Commit wird auf den Produktions-Branch gepusht.",
    command: "git push origin main",
  },
  {
    id: "04",
    label: "Automatisieren",
    title: "Coolify Build",
    detail: "Der Push triggert Coolify. Das Dockerfile baut ein reproduzierbares Image.",
    command: "docker build",
  },
  {
    id: "05",
    label: "Ausliefern",
    title: "Hetzner Server",
    detail: "nginx liefert die statische App aus; ein Healthcheck bestätigt die Bereitschaft.",
    command: "GET /health → 200",
  },
];

const comparisonRows = [
  {
    topic: "Kostenmodell",
    ours: "Ein planbarer Server als Basis; Ressourcen werden zwischen eigenen Diensten geteilt.",
    managed: "Plattformgebühr plus nutzungsabhängige Metriken und mögliche Add-ons.",
  },
  {
    topic: "Kontrolle",
    ours: "Docker, Reverse Proxy, Region, Datenbank und Updates liegen in unserer Hand.",
    managed: "Weniger Infrastrukturarbeit, dafür stärkere Bindung an Plattformabläufe.",
  },
  {
    topic: "Deployment",
    ours: "Git-Push → Coolify → Docker-Image → Healthcheck → Container.",
    managed: "Sehr starke Git-Integration mit automatischen Preview-URLs pro Branch oder PR.",
  },
  {
    topic: "Daten",
    ours: "Postgres kann später selbst betrieben und nach eigener Policy gesichert werden.",
    managed: "Supabase liefert Postgres, Auth, APIs, Storage und tarifabhängige Backups als Managed Service.",
  },
  {
    topic: "Verantwortung",
    ours: "Mehr Freiheit – aber auch Verantwortung für Patches, Monitoring und Restore-Tests.",
    managed: "Der Anbieter übernimmt große Teile von Infrastruktur, Betrieb und Skalierung.",
  },
];

const rolloutItems = [
  { state: "done", label: "Phase 01", title: "Lokaler Test", text: "Static Export, Dockerfile und Healthcheck stehen." },
  { state: "active", label: "Phase 02", title: "Autodeploy", text: "Pushes auf main lösen den produktiven Build aus." },
  { state: "next", label: "Phase 03", title: "Hetzner", text: "Server, Firewall, Domain, TLS und Backups einrichten." },
  { state: "next", label: "Phase 04", title: "Härtung", text: "Monitoring, Offsite-Backups und Restore-Probe ergänzen." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Pipeline Blueprint Startseite">
          <span className="brandMark" aria-hidden="true">P</span>
          <span>Pipeline Blueprint</span>
        </a>
        <div className="navLinks">
          <a className="navLink" href="#pipeline">Ablauf</a>
          <a className="navLink" href="#stack">Zielbild</a>
          <a className="navLink navLinkHighlight" href="#vergleich">Vergleich <span aria-hidden="true">↘</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroGrid" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow"><span className="liveDot" /> Architektur · Stand Oktober 2026</p>
          <h1>Vom lokalen Code<br />zum <em>eigenen Server.</em></h1>
          <p className="intro">
            Unsere CI/CD-Pipeline macht aus einem geprüften Commit automatisch ein
            reproduzierbares Deployment – heute lokal validiert, morgen auf Hetzner betrieben.
          </p>
          <div className="actions">
            <a className="primaryButton" href="#pipeline">Pipeline verstehen <span aria-hidden="true">↓</span></a>
            <a className="secondaryButton" href="#roadmap">Zum Rollout-Plan</a>
          </div>
        </div>

        <div className="architectureCard" aria-label="Übersicht der Deployment-Architektur">
          <div className="cardTopline">
            <span>Production path</span>
            <span className="statusBadge">Pipeline aktiv</span>
          </div>
          <div className="miniFlow">
            <div className="miniNode"><span>01</span><strong>Local</strong><small>Next.js</small></div>
            <span className="miniArrow" aria-hidden="true">→</span>
            <div className="miniNode"><span>02</span><strong>GitHub</strong><small>main</small></div>
            <span className="miniArrow" aria-hidden="true">→</span>
            <div className="miniNode accentNode"><span>03</span><strong>Coolify</strong><small>Docker</small></div>
          </div>
          <div className="serverRack">
            <div><span className="rackLight" /><strong>nginx</strong><small>:80 · static output</small></div>
            <div><span className="rackLight" /><strong>health</strong><small>HTTP 200</small></div>
            <div className="plannedRack"><span className="rackLight" /><strong>Hetzner</strong><small>geplante Zielumgebung</small></div>
          </div>
          <div className="cardFooter">
            <div><span>Trigger</span><strong>push / main</strong></div>
            <div><span>Artifact</span><strong>Docker image</strong></div>
            <div><span>Runtime</span><strong>nginx</strong></div>
          </div>
        </div>
      </section>

      <section className="pipelineSection" id="pipeline">
        <div className="sectionIntro">
          <p className="eyebrow">01 · Der Ablauf</p>
          <h2>Ein Weg, den jeder<br />Commit wiederholt.</h2>
          <p>Jede Station hat genau eine Aufgabe. Schlägt der Build fehl, erreicht die Änderung die Produktion nicht.</p>
        </div>
        <div className="pipelineRail">
          {pipelineSteps.map((step, index) => (
            <article className="pipelineStep" key={step.id}>
              <div className="stepNumber">{step.id}</div>
              <div className="stepBody">
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <code>{step.command}</code>
              </div>
              {index < pipelineSteps.length - 1 && <span className="railArrow" aria-hidden="true">→</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="localSection" id="local">
        <div className="terminal" aria-label="Beispiel für den lokalen Prüfablauf">
          <div className="terminalBar">
            <span /><span /><span />
            <small>local-check.ps1</small>
          </div>
          <div className="terminalBody">
            <p><b>$</b> npm run build</p>
            <p className="terminalMuted">Creating an optimized production build ...</p>
            <p className="terminalSuccess">✓ Compiled successfully</p>
            <p className="terminalSuccess">✓ Generating static pages</p>
            <p><b>$</b> docker build -t pipeline-app .</p>
            <p className="terminalMuted">[builder] Next.js → /app/out</p>
            <p className="terminalMuted">[runner] nginx:alpine</p>
            <p className="terminalSuccess">✓ image ready</p>
            <p><b>$</b> curl /health <span className="terminalSuccess">→ 200 ok</span></p>
          </div>
        </div>
        <div className="localCopy">
          <p className="eyebrow">02 · Local first</p>
          <h2>Erst beweisen.<br />Dann deployen.</h2>
          <p>
            Lokal wird derselbe Produktionspfad geprüft, den Coolify später nutzt. Das reduziert
            Unterschiede zwischen Entwicklungsrechner und Server und macht Fehler früher sichtbar.
          </p>
          <ul className="checkList">
            <li><span>✓</span> Abhängigkeiten sind durch die Lockfile reproduzierbar.</li>
            <li><span>✓</span> Next.js erzeugt einen rein statischen Export.</li>
            <li><span>✓</span> Das Multi-Stage-Dockerfile hält das Runtime-Image klein.</li>
            <li><span>✓</span> nginx liefert die Dateien aus und meldet seine Bereitschaft.</li>
          </ul>
        </div>
      </section>

      <section className="stackSection" id="stack">
        <div className="sectionIntro lightIntro">
          <p className="eyebrow">03 · Zielbild Hetzner</p>
          <h2>Ein Server.<br />Klare Zuständigkeiten.</h2>
          <p>Coolify übernimmt die Deployment-Orchestrierung. Die darunterliegende Infrastruktur bleibt transparent und portabel.</p>
        </div>
        <div className="stackDiagram">
          <div className="stackLayer publicLayer">
            <span className="layerIndex">PUBLIC</span>
            <div><strong>Domain & TLS</strong><small>HTTPS · DNS · Zertifikate</small></div>
            <div><strong>Reverse Proxy</strong><small>Routing · Security Headers</small></div>
          </div>
          <div className="stackConnector" aria-hidden="true">↓</div>
          <div className="stackLayer platformLayer">
            <span className="layerIndex">PLATFORM</span>
            <div><strong>Coolify</strong><small>Git Webhook · Build · Deploy</small></div>
            <div><strong>Docker</strong><small>Images · Container · Netzwerk</small></div>
          </div>
          <div className="stackConnector" aria-hidden="true">↓</div>
          <div className="stackLayer serviceLayer">
            <span className="layerIndex">SERVICES</span>
            <div><strong>Web App</strong><small>Next.js Export · nginx</small></div>
            <div><strong>Postgres</strong><small>optional · persistentes Volume</small></div>
            <div><strong>Backups</strong><small>Server + Offsite-Strategie</small></div>
          </div>
          <div className="stackConnector" aria-hidden="true">↓</div>
          <div className="stackLayer infraLayer">
            <span className="layerIndex">INFRA</span>
            <div><strong>Hetzner Cloud</strong><small>EU-Region · Firewall · Server</small></div>
          </div>
        </div>
        <aside className="responsibilityNote">
          <span>Wichtig</span>
          <p>Self-hosted heißt nicht „wartungsfrei“: OS-Updates, Datenbank-Backups, Monitoring und getestete Restores werden Teil unseres Betriebs.</p>
        </aside>
      </section>

      <section className="comparisonSection" id="vergleich">
        <div className="sectionIntro">
          <p className="eyebrow">04 · Make or buy</p>
          <h2>Warum nicht einfach<br />Vercel + Supabase?</h2>
          <p>
            Beide Wege sind valide. Unser Self-hosted-Ansatz priorisiert Kontrolle und planbare
            Basisinfrastruktur; der Managed-Stack priorisiert Geschwindigkeit und weniger Betriebsarbeit.
          </p>
        </div>

        <div className="comparisonTable" role="table" aria-label="Vergleich der Hosting-Ansätze">
          <div className="comparisonHeader" role="row">
            <div role="columnheader">Entscheidungspunkt</div>
            <div role="columnheader"><span className="choiceDot selfDot" /> Hetzner + Coolify</div>
            <div role="columnheader"><span className="choiceDot managedDot" /> Vercel + Supabase</div>
          </div>
          {comparisonRows.map((row) => (
            <div className="comparisonRow" role="row" key={row.topic}>
              <div role="cell"><strong>{row.topic}</strong></div>
              <div role="cell">{row.ours}</div>
              <div role="cell">{row.managed}</div>
            </div>
          ))}
        </div>

        <div className="decisionCallout">
          <p className="eyebrow">Unser Sweet Spot</p>
          <p className="decisionQuote">„Wenige, gut verstandene Dienste mit planbarer Last – und die Bereitschaft, sie selbst zu betreiben.“</p>
          <div className="decisionTags">
            <span>Kostenhoheit</span><span>Docker-portabel</span><span>EU-Infrastruktur</span><span>Volle Kontrolle</span>
          </div>
        </div>
      </section>

      <section className="roadmapSection" id="roadmap">
        <div className="sectionIntro compactIntro">
          <p className="eyebrow">05 · Rollout</p>
          <h2>Schrittweise<br />in Produktion.</h2>
        </div>
        <div className="roadmapList">
          {rolloutItems.map((item) => (
            <article className={`roadmapItem ${item.state}`} key={item.label}>
              <span className="roadmapState">{item.state === "done" ? "✓" : item.state === "active" ? "●" : "○"}</span>
              <span className="roadmapLabel">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sourcesSection">
        <p>Faktenbasis</p>
        <div className="sourceLinks">
          <a href="https://coolify.io/docs/applications/deployments/automatic-deployments" target="_blank" rel="noreferrer">Coolify Auto Deploy ↗</a>
          <a href="https://coolify.io/docs/applications/builds/dockerfile" target="_blank" rel="noreferrer">Coolify Dockerfile ↗</a>
          <a href="https://www.hetzner.com/de/cloud/" target="_blank" rel="noreferrer">Hetzner Cloud ↗</a>
          <a href="https://vercel.com/docs/git" target="_blank" rel="noreferrer">Vercel Git Deployments ↗</a>
          <a href="https://supabase.com/docs/guides/platform" target="_blank" rel="noreferrer">Supabase Platform ↗</a>
        </div>
      </section>

      <footer>
        <p>Pipeline Blueprint · Next.js + Docker + Coolify</p>
        <p><span className="liveDot" /> Dokumentation aktuell</p>
      </footer>
    </main>
  );
}
