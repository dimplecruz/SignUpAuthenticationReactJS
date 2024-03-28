import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordConfirmText, setPasswordConfirmText] = useState("");
  const [rememberChecked, setRememberChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (email) {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setEmailText(isValid ? "" : "Please enter a valid email address.");
    } else {
      setEmailText("");
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      if (password.length <= 8) {
        setPasswordText("Password is Weak");
      } else if (password.length <= 15) {
        setPasswordText("Password is Moderate");
      } else {
        setPasswordText("Password is Strong");
      }
    } else {
      setPasswordText("");
    }
  }, [password]);

  useEffect(() => {
    if (passwordConfirm) {
      setPasswordConfirmText(passwordConfirm === password ? "" : "Password do not match!");
    } else {
      setPasswordConfirmText("");
    }
  }, [passwordConfirm, password]);

  return (
    <div className="App-header">
      <form className="flex w-80 flex-col gap-4">
      <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#f05e93', fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>Sign Up Account</h1>
        </div>
        <div>
          <div className="mb-2 block" style={{ borderColor: "#e74694" }}>
            <Label htmlFor="email1" value="User Email" />
          </div>
          <TextInput 
            id="email1" 
            type="email" 
            required 
            color="gray" 
            helperText={emailText}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{ borderColor: emailText ? "#e74694" : "gray" }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput 
            id="password1" 
            type={showPassword ? 'text' : 'password'} 
            required 
            color="gray"
            helperText={passwordText}
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            style={{ borderColor: passwordText ? "#e74694" : "gray" }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Confirm Password" />
          </div>
          <TextInput 
            id="password2" 
            type={showPassword ? 'text' : 'password'} 
            required 
            color="gray"
            helperText={passwordConfirmText}
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)} 
            style={{ borderColor: passwordConfirmText ? "#e74694" : "gray" }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberChecked}
            onChange={() => setRememberChecked(!rememberChecked)}
            style={{ borderColor: "#e74694" }}
          />
          <Label htmlFor="remember">Privacy and Policy</Label>
        </div>
        <div className="flex justify-end items-center">
          <div className="ml-2" onClick={() => setShowPassword(!showPassword)}>
            <Button className="bg-pink-500" style={{ marginRight: "25px" }}>{showPassword ? "Hide" : "Show"}</Button>
          </div>
          <Button type="submit" className="custom-button" style={{ backgroundColor: "#e74694" }}>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
