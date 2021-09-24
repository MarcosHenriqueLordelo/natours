import React from "react";

import { Container, Input, Label } from "./styles";

interface PropTypes {
  type: "text" | "email";
  id: string;
  value: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Index: React.FC<PropTypes> = ({
  value,
  label,
  id,
  onChange,
  placeholder,
  required,
  type,
}) => {
  return (
    <Container>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        id={id}
        required={required}
        onChange={({ target: { value } }) => onChange && onChange(value)}
      />

      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export default Index;
