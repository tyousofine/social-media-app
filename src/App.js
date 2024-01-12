import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
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
import { useEffect, useState } from "react";
import * as database from './database';
import { useDispatch } from "react-redux";
import { setPosts } from "./redux/postSlice";;





function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  // IIFE - Immediately Invoked function expression
  useEffect(() => {
    (async () => {
      const data = await database.loadPromoted();
      console.log(data);
      dispatch(setPosts(data));
      setIsLoading(false);
    })()
    // those empty () are calling the myfunction()
    // since this function won't be called anywhere else, we can omit naming it alltogether.

    // or dont do the extra set of () and do
    // myFunction()
  }, []);


  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
      <Footer />
    </>
  );
}

export default App;
