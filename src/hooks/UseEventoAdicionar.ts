import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { listaDeEventos } from "../state/atom"
import { obterId } from "../utils"


const useEventoAdicionar = () => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventos)

  return (evento: IEvento) => {

    const hoje = new Date()

    if(evento.inicio < hoje) {
      throw new Error("Evento nao podem possuir uma data inferior a atual")
    }

    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])

  }

}

export default useEventoAdicionar