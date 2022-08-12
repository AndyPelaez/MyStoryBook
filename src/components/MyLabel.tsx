import "./mylabel.css";

export interface MyLabelProps {
  /**
   *Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   *Este es el tamaño de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   *Este es el tamaño de la etiqueta
   */
  allCaps: boolean;
  /**
   *Este es el color de la etiqueta
   */
  color: "primary" | "secondary" | "terciary";
  /**
   *Este es el color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps,
  color,
  fontColor,
}: MyLabelProps) => {
  const text = allCaps && label ? label.toUpperCase() : label;

  return <span className={`label ${size} text-${color}`} style={{color:fontColor}}>{text} </span>;
};
