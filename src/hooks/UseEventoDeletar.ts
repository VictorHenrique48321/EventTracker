import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { listaDeEventos } from "../state/atom"


const useEventoDeletar = () => {

  const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventos)

  return (evento: IEvento) => {

    setListaDeEvento((listaAntiga) => [
      ...listaAntiga.filter(evt => evento.id !== evt.id)
    ])

  }

}


export default useEventoDeletar