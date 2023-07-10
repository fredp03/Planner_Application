import * as React from "react";
import { PlasmicTextInput } from "./plasmic/copy_of_best_main_a_pp/PlasmicTextInput";

function TextInput_(props, ref) {
  const { plasmicProps } = PlasmicTextInput.useBehavior(props, ref);
  return <PlasmicTextInput {...plasmicProps} />;
}

const TextInput = React.forwardRef(TextInput_);

export default Object.assign(TextInput, {
  __plumeType: "text-input"
});
