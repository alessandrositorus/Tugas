function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Login Akun Free Fire</h1>
      <form>
        <label>Email atau Username:</label><br />
        <input type="text" placeholder="Masukkan username..." /><br /><br />
        <label>Password:</label><br />
        <input type="password" placeholder="Masukkan password..." /><br /><br />
        <button type="submit">Masuk</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Belum punya akun? Daftar langsung di dalam game Free Fire untuk mulai bermain!
      </p>
    </div>
  );
}

export default Login;
