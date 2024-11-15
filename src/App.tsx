
import { AppProduct } from "./components/AppProduct/AppProduct";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { MIPrimerComponent } from "./components/MiPrimerComponent/MiPrimerContent";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      { /*<MIPrimerComponent
        text={"Texto desde propiedades"}
        color="red"
        fontSize={5}
      />
      <ComponentCounter />
      <ComponentUseEffect />*/ }
      { /*<FormComponent /> */}
      <AppProduct />
    </div>
  );
};