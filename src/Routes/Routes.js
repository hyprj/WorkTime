import {
  React,
  Employee,
  About,
  NotFound,
  Navbar,
  Schedule,
  LoginForm,
  RegisterForm,
  Access,
  Management,
  Footer,
  Router,
  Routes,
  Route,
  Navigate,
  useAccess,
} from "./index";

export const PageRoutes = () => {
  const { data } = useAccess();
  const user = data?.user;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/me"
          element={user ? <Employee /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/management"
          element={
            user?.isManager ? <Management /> : <Navigate replace to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Access>
                <LoginForm />
              </Access>
            )
          }
        />
        <Route
          path="/register"
          element={
            <Access>
              <RegisterForm />
            </Access>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};
