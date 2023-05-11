import React, { useCallback } from "react";
import { EvilPhonenumberInput } from "../stencil-generated";

interface EvilPhonenumberProps {
  id?: string;
  name?: string;
  onChange: (value: any) => void;
}
export const EvilPhonenumber = ({
  onChange,
  id,
  name,
}: EvilPhonenumberProps) => {
  const onChangeHandler = useCallback((ev: any) => {
    console.log("onChangeHandler", onChange, ev);
    onChange && onChange(ev);
  }, []);

  return (
    <EvilPhonenumberInput
      id={id}
      name={name}
      debug={true}
      onValueChange={onChangeHandler}
    ></EvilPhonenumberInput>
  );
};
