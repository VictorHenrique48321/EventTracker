import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltro } from "../interfaces/IFiltro";
import { eventosAsync } from "./seletores/eventosAsync";

export const listaDeEventos = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltro>({
  key: "filtroDeEventosState",
  default: {}
})