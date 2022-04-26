import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState("false");

  return (
    <div>
      <h2>Kenzie Hub</h2>
      <div>
        <p>Login</p>
        <form>
          <label> Email</label>
          <input />
          <label>Senha</label>
          <input type={showPassword ? "text" : "password"} />
          <button>Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <button>Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
