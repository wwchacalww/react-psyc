import { AxiosError } from "axios";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { api } from "../../services/api";
import { Container, Content, DashBody } from "./styles";
import { FiKey } from "react-icons/fi";
import { TbCameraPlus } from "react-icons/tb";
import { Modal } from "../../components/Modal";
import { UserAPIDTO } from "../../utils/dtos";
import { FormUploadAvatar } from "../../components/Forms/UploadAvatar";
import { FormChangePassword } from "../../components/Forms/ChangePassword";

type ModalFormProps = {
  title: string;
  children: ReactNode;
};
export function DashboardPage() {
  const token = localStorage.getItem("@GoIElo:token");
  const navigate = useNavigate();
  const [list, setList] = useState<UserAPIDTO[]>([]);
  const [user, setUser] = useState<UserAPIDTO>();
  const [modalForm, setModalForm] = useState<ModalFormProps>({
    title: "",
    children: <hr />,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const listUsers = useCallback(() => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api
        .get("users")
        .then((response) => {
          setList(response.data);
          return response.data;
        })
        .catch((err: AxiosError) => {
          navigate("/signin");
        });
    } else {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    listUsers();
  }, [listUsers]);

  function handleUpAvatar(user: UserAPIDTO) {
    setUser(user);
    setModalForm({
      title: user.Name,
      children: (
        <FormUploadAvatar
          user={user}
          token={token ? token : ""}
          setModalOpen={setModalOpen}
          listUsers={listUsers}
        />
      ),
    });
    setModalOpen(true);
  }

  function handleChangePassword(user: UserAPIDTO) {
    setUser(user);
    setModalForm({
      title: "Trocar senha - " + user.Name,
      children: (
        <FormChangePassword
          id={user.ID}
          setModalOpen={setModalOpen}
          token={token ? token : ""}
        />
      ),
    });
    setModalOpen(true);
  }

  console.log(list);
  return (
    <Container>
      <Content>
        <Sidebar />
        <DashBody>
          <h1>Usuários</h1>
          <table>
            <thead>
              <tr>
                <th>Nome e E-mail</th>
                <th>Cargo</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((user) => (
                  <tr key={user.ID}>
                    <td>
                      <div>
                        {user.AvatarUrl === "" ? (
                          <button onClick={() => handleUpAvatar(user)}>
                            <TbCameraPlus size={30} />
                          </button>
                        ) : (
                          <img
                            src={
                              "http://localhost:9000/files/" + user.AvatarUrl
                            }
                            alt={user.Name}
                          />
                        )}
                        <strong>
                          {user.Name} <span>{user.Email}</span>
                        </strong>
                      </div>
                    </td>
                    <td>{user.Role}</td>
                    <td>
                      <button onClick={() => handleChangePassword(user)}>
                        <FiKey size={30} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title={modalForm.title}
            children={modalForm.children}
          />
        </DashBody>
      </Content>
    </Container>
  );
}
