import { Container, SidebarNav } from "./styles";
import LogoImg from "../../assets/imgs/LogoDash.svg";
import { NavLink } from "./Navlink";
import { FiUsers } from "react-icons/fi";
import { SidebarFooter } from "./SidebarFooter";
import { useAuth } from "../../hooks/Auth";

export default function Sidebar() {
  const { user } = useAuth();
  return (
    <Container>
      <SidebarNav>
        <img src={LogoImg} alt="Instituto Elo" />
        <NavLink href="/dashboard" to="/dashboard" icon={FiUsers}>
          Usuários
        </NavLink>
      </SidebarNav>

      <SidebarFooter
        name={user.name}
        role={user.role ? user.role : ""}
        avatar_url={"http://localhost:9000/files/" + user.avatar_url}
      />
    </Container>
  );
}
