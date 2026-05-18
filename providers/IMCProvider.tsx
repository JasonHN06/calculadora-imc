import { useEffect, useState } from "react";
import { IMCContextValues } from "../context/IMCContext";
import { Categoria } from "../models/Categoria";

interface Props {
  children: React.ReactNode;
}

export const IMCProvider = ({ children }: Props) => {
  const [peso, setPeso] = useState(60);
  const [altura, setAltura] = useState(1.7);
  const [imc, setImc] = useState(0);
  const [categoria, setCategoria] = useState<Categoria>("Peso Normal");

  const aumentarPeso = () => {
    setPeso(peso + 1);
  };

  const disminuirPeso = () => {
    if (peso > 1) {
      setPeso(peso - 1);
    }
  };

  const aumentarAltura = () => {
    setAltura(altura + 0.01);
  };

  const disminuirAltura = () => {
    if (altura > 0.5) {
      setAltura(altura - 0.01);
    }
  };

  useEffect(() => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
    if (resultado < 18.5) {
      setCategoria("Bajo Peso");
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setCategoria("Peso Normal");
    } else if (resultado >= 25 && resultado <= 29.9) {
      setCategoria("Sobrepeso");
    } else {
      setCategoria("Obesidad");
    }
  }, [peso, altura]);

  return (
    <IMCContextValues.Provider
      value={{
        peso,
        altura,
        imc,
        categoria,
        aumentarPeso,
        disminuirPeso,
        aumentarAltura,
        disminuirAltura,
      }}
    >
      {children}
    </IMCContextValues.Provider>
  );
};
