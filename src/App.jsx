import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddComplain,
  AddReviewer,
  Complain,
  ComplainDetails,
  Home,
  Login,
  RequestsWithoutReviewerDetails,
  SignUp,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index Component={SignUp} />
          <Route path="login" Component={Login} />
          <Route path="sign-up" Component={SignUp} />
          <Route path="complain" Component={Complain} />
          <Route path="add-complain" Component={AddComplain} />
          <Route path="add-reviewer" Component={AddReviewer} />
          <Route path="complain-details" Component={ComplainDetails} />
          <Route path="requests-without-reviewer-details" Component={RequestsWithoutReviewerDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
