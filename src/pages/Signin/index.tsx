import { AnimeContainer, Background, Container, Content } from "./styles";
import logoImg from "../../assets/imgs/LogoBlue.svg";
import { Input } from "../../components/Input";
import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/Auth";
import { useState } from "react";
import jwtDecode from "jwt-decode";

interface User {
  name: string;
  email: string;
  avatar_url?: string;
  role?: string;
}

const validationSchema = zod.object({
  email: zod.string().email("Email inválido"),
  password: zod
    .string()
    .min(5, "A senha deve ter no mínimo 5 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
});

type FormData = zod.infer<typeof validationSchema>;

export function Signin() {
  const SignForm = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });
  const [error, setError] = useState(false);

  const { signIn } = useAuth();
  const { handleSubmit, reset } = SignForm;
  const navigate = useNavigate();
  async function handleSignIn(data: FormData) {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
      const token = localStorage.getItem("@GoIElo:token");
      if (token) {
        const user = jwtDecode<User>(token);
        if (user.role === "Admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
      reset();
    } catch (err) {
      setError(true);
      reset();
      return err;
    }
  }

  return (
    <Container>
      <Content>
        <AnimeContainer>
          <img src={logoImg} alt="Instituto Elo" />
          <form onSubmit={handleSubmit(handleSignIn)} action="">
            <h1>Faça seu login</h1>
            <FormProvider {...SignForm}>
              <Input icon={FiMail} placeholder="E-mail" name="email" />
              <Input
                icon={FiLock}
                name={"password"}
                type="password"
                placeholder="Senha"
              />
              {error && <span>Confira seu email e senha</span>}

              <Button type="submit">Entrar</Button>
              <Link to="/">Esqueci minha senha</Link>
            </FormProvider>
          </form>
        </AnimeContainer>
      </Content>
      <Background />
    </Container>
  );
}
