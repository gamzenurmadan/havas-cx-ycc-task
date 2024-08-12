import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import { AuthProvider } from './context/AuthContext';

function App() {
  
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />}/>
              <Route path="/otp-validate" element={<OtpPage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
