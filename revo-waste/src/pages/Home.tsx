export default function Home() {
  return (
    <div className="rw-grid cols-2">
      <section className="rw-card">
        <h2>Background</h2>
        <p>
          India generates ~1.7 lakh tonnes of municipal solid waste daily; only 54% is scientifically treated. RevoWaste enables training, decentralised monitoring, incentives and penalties, and app-based reporting to close the gaps.
        </p>
      </section>
      <section className="rw-card">
        <h2>Modules</h2>
        <ul>
          <li>Mandatory Training for citizens and workers</li>
          <li>Green Champions committees for decentralised monitoring</li>
          <li>Geo-tagged dump reporting and vehicle tracking</li>
          <li>Facilities locator and scrap shops</li>
          <li>Incentives and fines with compliance analytics</li>
        </ul>
      </section>
    </div>
  );
}
