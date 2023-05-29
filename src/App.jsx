import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import RootLayout from "./layouts/RootLayout";

import Banner from "./pages/Banner";
import MobileSpecs from "./pages/MobileSpecs";
import Blogs from "./pages/Blogs";
import Reviews from "./pages/Reviews";
import GuideMe from "./pages/GuideMe";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Banner />} />
      <Route path="mobilespecs" element={<MobileSpecs />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="guideme" element={<GuideMe />} />

      <Route path="test" element={<Test />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
