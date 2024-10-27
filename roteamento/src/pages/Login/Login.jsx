import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginFake = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    navigate('/app'); // Redireciona para a rota principal
  }

  // pedi pro gpt fazer esse css apenas para ter algo apresentavel
  return (
    <div
      className="login-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Tela de Login Fake</h2>
      <form
        onSubmit={loginFake}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#f9f9f9',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor="username" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Usuário:</label>
          <input
            type="text"
            id="username"
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Senha:</label>
          <input
            type="password"
            id="password"
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
