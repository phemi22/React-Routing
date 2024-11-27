import About from "./About.jsx"
import Home from "./Home.jsx"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Services from "./Services.jsx"
import RootLayout from "./RootLayout.jsx"
import ServicesLayout from "./ServicesLayout.jsx"
import GeneralServices from "./GeneralServices.jsx"
import PrivateServices from "./PrivateServices.jsx"
import NotFoundPage from "./NotFoundPage.jsx"
import JobsLayout from "./JobsLayout.jsx"
import Jobs, { loader } from "./Jobs.jsx"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route 
        index
        element={<Home />}
        />

        <Route
        path="about"
        element={<About />}
        />

        {/* Services Nested Route */}
        <Route path="services" element={<ServicesLayout />}>
          <Route
          path="general"
          element={<GeneralServices />}
          />

          <Route
          path="private"
          element={<PrivateServices />}
          />
        </Route>
        {/* End of Services Nested Route */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />


        {/* Jobs Layout Nested Route */}

        <Route path="jobs" element={<JobsLayout />}>
        <Route index element={<Jobs />} loader={loader} />
        </Route>

      </Route>
  ))



  return (
    <RouterProvider router={router}/>
  )
}

export default App
