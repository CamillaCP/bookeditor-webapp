import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { MainPage } from './components/pages/MainPage';
import { BookListPage } from './components/pages/BookListPage';
import { BookDetailPage } from './components/pages/BookDetailPage';
import { Messages } from './components/Messages';
import { Footer } from './components/Footer';

/* A seconda del valore assunto dalla variabile path, viene stampata una differente Component */
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<BookDetailPage />} />
          <Route path="books" element={<BookListPage />} />
        </Routes>
        <Messages />
      <Footer />
    </Router>
  );
}

export default App;
