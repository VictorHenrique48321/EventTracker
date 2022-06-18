import { selector } from "recoil";
import { filtroDeEventos, listaDeEventos } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventoFiltradosState",
  get: ({get}) => {
    const filtro = get(filtroDeEventos)
    const todosOsEventos = get(listaDeEventos)

    const eventos = todosOsEventos.filter(evento => {
      if(!filtro.data) {
        return true
      }

      const ehOMesmoDia = filtro.data.toString().slice(0, 10) === evento.inicio.toString().slice(0, 10)
      return ehOMesmoDia
    })

    return eventos

  }
})