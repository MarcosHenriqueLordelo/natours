import React from "react";

import { Container, Input, Label, StyledInput } from "./styles";

interface PropTypes {
  id: string;
  label: string;
  selected: boolean;
  onChange: (value: string) => void;
}

const Index: React.FC<PropTypes> = ({ id, label, selected, onChange }) => {
  return (
    <Container>
      <Input
        type='radio'
        id={id}
        checked={selected}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <Label htmlFor={id}>
        <StyledInput selected={selected} />
        {label}
      </Label>
    </Container>
  );
};

export default Index;
