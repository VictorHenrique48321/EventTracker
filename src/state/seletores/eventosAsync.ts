import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {

    const resposta = await fetch("http://localhost:5000/eventos")
    const eventosJson: IEvento[] = await resposta.json()

    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})