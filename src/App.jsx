import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Welcome from './components/Welcome/Welcome';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Uylar from './pages/Uylar/Uylar';
import Kutubxona from './pages/Kutubxona/Kutubxona';
import Ishlar from './pages/Ishlar/Ishlar';
import Barklar from './pages/Barklar/Barklar';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './pages/Profile/Profile';
import CreateListing from './pages/CreateListing/CreateListing';
import EditListing from './pages/EditListing/EditListing';
import Listing from './pages/Listing/Listing';
import SingleHomePage from './pages/SingleHomePage/SingleHomePage';
import SingleJobPage from './pages/SingleJobPage/SingleJobPage';
import SingleLiblaryPage from './pages/SingleLiblaryPage/SingleLiblaryPage';
import SingleBarkPage from './pages/SingleBarkPage/SingleBarkPage';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/uylar" element={<Uylar />}></Route>
          <Route path="/kutubxonalar" element={<Kutubxona />}></Route>
          <Route path="/ishlar" element={<Ishlar />}></Route>
          <Route path="/barklar" element={<Barklar />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/uylar/:id" element={<SingleHomePage />}></Route>
          <Route path="/ishlar/:id" element={<SingleJobPage />}></Route>
          <Route
            path="/kutubxonalar/:id"
            element={<SingleLiblaryPage />}
          ></Route>
          <Route path="/barklar/:id" element={<SingleBarkPage />}></Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
          <Route path="create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/offers" element={<Offers />}></Route> */}
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
