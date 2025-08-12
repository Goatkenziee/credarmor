
export default function Signup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Create Your Account</h1>
      <p>This is a demo version — no credit card required.</p>
      <form>
        <input type="text" placeholder="Name" style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }} />
        <input type="email" placeholder="Email" style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1CA9C9', color: '#fff', border: 'none', borderRadius: '8px' }}>Sign Up</button>
      </form>
    </div>
  );
}
