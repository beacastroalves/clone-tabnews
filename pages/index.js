function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "16px",
      }}
    >
      <h1
        style={{
          maxWidth: "380px",
          margin: "auto",
          marginTop: "64px",
          textAlign: "center",
        }}
      >
        O amor não é só olhar um para o outro, é também olhar juntos na mesma
        direção.
      </h1>
      <h2 style={{ maxWidth: "100%", marginTop: "24px", textAlign: "center" }}>
        Feliz <small>(quase)</small> 2 anos e 2 meses.
      </h2>
    </div>
  );
}

export default Home;
