
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#F4F7FA', color: '#0D1B2A', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>CredArmor</h1>
        <p>Credit disputes that work — powered by AI.</p>
      </header>
      <section style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>How It Works</h2>
        <ol>
          <li>Upload your credit report (SmartCredit, IdentityIQ, Experian)</li>
          <li>AI scans & generates lawyer-grade dispute letters</li>
          <li>Send via certified mail with tracking</li>
        </ol>
        <a href="/signup" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#1CA9C9', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>Start Free Scan</a>
      </section>
    </div>
  );
}
