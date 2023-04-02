import ReactModal from "react-modal";
import { Header, ModalBody } from "./styles";
import { FiX } from "react-icons/fi";
import { ModalPropsDTO } from "../../utils/dtos";

export function Modal({
  modalOpen,
  setModalOpen,
  children,
  title = "",
}: ModalPropsDTO) {
  return (
    <ReactModal
      isOpen={modalOpen}
      ariaHideApp={false}
      style={{
        content: {
          borderRadius: "10px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "760px",
        },
      }}
    >
      <Header>
        <strong>{title}</strong>
        <button onClick={() => setModalOpen(false)}>
          <FiX size={20} />
        </button>
      </Header>
      <ModalBody>{children}</ModalBody>
    </ReactModal>
  );
}
