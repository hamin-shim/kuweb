import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ marginTop: "30px" }}>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
