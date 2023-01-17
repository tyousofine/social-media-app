import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";



function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data sent!')
  }

  return (
    <>
      <Header />
      <Posts />
      <Footer />

      <form onSubmit={handleSubmit}>
        <button>send</button>
      </form>
    </>
  );
}

export default App;
