import CreateArea from './components/createArea/CreateArea';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Note from './components/note/Note';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateArea />
      <Note title="test title" content="test content"/>
      <Footer />
    </div>
  );
}

export default App;
