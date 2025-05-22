"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../Button";
import { FormWrapper } from "../Form";
import TextField from "../TextField";

const FormSignIn = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const isFormValid =
    formData.username.trim() !== "" && formData.password.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        },
      );

      if (!res.ok) {
        const { error } = await res.json();
        toast.error(error || "Erro ao fazer login");
        return;
      }

      const { token } = await res.json();
      localStorage.setItem("session", token);

      router.push("/admin");
      toast.success("Login realizado com sucesso!");

      // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      toast.error("Erro inesperado ao tentar fazer login");
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Email ou usuário"
          type="text"
          icon={"/img/mail.svg"}
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          icon={"/img/lock.svg"}
          value={formData.password}
          onChange={handleChange}
        />
        <Button size="large" fullWidth type="submit" disabled={!isFormValid}>
          Entrar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
