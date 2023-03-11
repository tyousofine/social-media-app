import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostFormPage from "./pages/PostFormPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsMissionPage from "./pages/AboutUsPage/Mission";
import AboutUsPrivacyPage from "./pages/AboutUsPage/Privacy";
import AboutUsIntroPage from "./pages/AboutUsPage/Introduction";
import PostItemPage from "./pages/PostItemPage";
import NotFoundPage from "./pages/NotFountPage";
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>

        <Route path='/posts' element={<PostListPage />}></Route>
        <Route path='/posts/add' element={<PostFormPage />}></Route>
        <Route path='/posts/:id' element={<PostItemPage />}> </Route>

        <Route path='/preferences' element={<PreferencesPage />}></Route>
        <Route path='/about' element={<AboutUsPage />}>
          {/* WHY? - concatentaion didn't work for me here.  */}

          <Route path='' element={<AboutUsIntroPage />}></Route>
          <Route path='policy' element={<AboutUsPrivacyPage />}></Route>
          <Route path='mission' element={<AboutUsMissionPage />}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
