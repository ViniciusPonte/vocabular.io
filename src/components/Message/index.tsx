import React from "react";
import { useSnackbar } from "notistack";

export const Message = ({ message, variant }) => {
  const { enqueueSnackbar } = useSnackbar();
  const mensagem = enqueueSnackbar(message, { variant });
  return <div style={{ display: "none" }}>{mensagem}</div>;
};
