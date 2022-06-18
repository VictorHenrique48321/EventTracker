import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../state/seletores/eventosFiltradosState"

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos