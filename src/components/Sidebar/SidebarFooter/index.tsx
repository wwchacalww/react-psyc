import { useState } from "react";
import { FiChevronDown, FiKey, FiPower } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/Auth";
import { Container, Avatar, Menu } from "./styles";

interface Props {
  name: string;
  role: string;
  avatar_url: string;
}

export function SidebarFooter({ name, role, avatar_url }: Props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
    navigate("/signin");
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Avatar>
        <img src={avatar_url} alt={name} />
        <strong>
          {name} <span>{role}</span>
        </strong>
        <button onClick={handleClick}>
          <FiChevronDown size={24} />
        </button>
      </Avatar>
      <Menu open={open}>
        <button>
          Trocar senha <FiKey size={20} />
        </button>

        <button onClick={handleSignOut}>
          Sair <FiPower size={20} />
        </button>
      </Menu>
    </Container>
  );
}
