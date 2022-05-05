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
  const { savedUser } = useAccess();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/me"
          element={savedUser ? <Employee /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/management"
          element={
            savedUser?.isManager ? (
              <Management />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            savedUser ? (
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
