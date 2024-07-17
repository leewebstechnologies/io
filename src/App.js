import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Income from "./pages/income/Income";
import Work from "./pages/work/Work";
import Business from "./pages/business/Business";
import Management from "./pages/management/Management";
import Marketing from "./pages/marketing/Marketing";
import Posts from "./pages/posts/Posts";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="income" element={<Income />} />
            <Route path="work" element={<Work />} />
            <Route path="business" element={<Business />} />
            <Route path="management" element={<Management />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="posts" element={<Posts />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
    </>
  );
}

export default App;
