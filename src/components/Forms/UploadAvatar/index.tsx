import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { UserAPIDTO } from "../../../utils/dtos";

const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

const validationSchema = zod.object({
  avatar: zod
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 10MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg and .jpeg files are accepted."
    ),
});

type FormDataProps = zod.infer<typeof validationSchema>;

type UploadAvatarProps = {
  user?: UserAPIDTO;
  token?: string;
  setModalOpen: (data: boolean) => void;
  listUsers: () => void;
};

export function FormUploadAvatar({
  user,
  token,
  setModalOpen,
  listUsers,
}: UploadAvatarProps) {
  const ChangeAvatarForm = useForm<FormDataProps>({
    resolver: zodResolver(validationSchema),
  });
  const { handleSubmit, formState, register } = ChangeAvatarForm;
  console.log(formState.errors);

  async function handleChangeAvatar(data: FormDataProps) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const formData = new FormData();
    formData.append("email", user ? user.Email : "");
    formData.append("avatar", data.avatar[0]);
    await api.put("users/change/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setModalOpen(false);
    listUsers();
  }

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit(handleChangeAvatar)}
      action=""
    >
      <FormProvider {...ChangeAvatarForm}>
        <input type="file" {...register("avatar")} />
        <button type="submit">Salvar</button>
      </FormProvider>
    </form>
  );
}
