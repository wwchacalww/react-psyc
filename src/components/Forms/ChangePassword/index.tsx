import { useState } from "react";
import { FiKey } from "react-icons/fi";
import { api } from "../../../services/api";
import { Container, Input } from "./styles";

type ChangePassProps = {
  id: string;
  token: string;
  setModalOpen: (data: boolean) => void;
};

export function FormChangePassword({
  id,
  setModalOpen,
  token,
}: ChangePassProps) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  async function handleChangePass() {
    if (pass.length < 6 || pass.length > 20) {
      setError("A senha deve ter entre 6 a 20 caracteres");
    } else {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.put("users/change/password", {
        id,
        password: pass,
      });
      setModalOpen(false);
      console.log(response.data);
      setPass("");
      setModalOpen(false);
    }
  }
  return (
    <Container>
      <Input>
        <FiKey size={20} />
        <input
          type="password"
          placeholder="Digite a nova senha"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Input>
      {error && <span>* {error}</span>}

      <button onClick={handleChangePass}>Salvar</button>
    </Container>
  );
}
