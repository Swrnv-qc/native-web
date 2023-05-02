import React from "react";
import { SCSwitch } from "../../styledComponents/inputs/SCSwitch";

export default function NativeSwitch(props) {
  return <SCSwitch {...props}>{props.children}</SCSwitch>;
}
