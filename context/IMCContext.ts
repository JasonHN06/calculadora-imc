import { createContext } from "react";
import { Categoria } from "../models/Categoria";

export interface IMCContextProps {
  peso: number;
  altura: number;
  imc: number;
  categoria: Categoria;
  aumentarPeso: () => void;
  disminuirPeso: () => void;
  aumentarAltura: () => void;
  disminuirAltura: () => void;
}

export const IMCContextValues = createContext({} as IMCContextProps);
