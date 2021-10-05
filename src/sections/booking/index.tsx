import React, { useState } from "react";
import { useTheme } from "styled-components";

import {
  Container,
  Content,
  FormContainer,
  Form,
  RadioGroup,
  Space,
} from "./styles";

// Components
import { Row } from "../../components/grid";
import TextField from "../../components/textField";
import HeaderLabel from "../../components/headerLabel";
import RadioButton from "../../components/radioButton";
import MyButton from "../../components/myButton";

const Index: React.FC = () => {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");

  return (
    <Container>
      <Row>
        <Content>
          <FormContainer>
            <HeaderLabel>start booking now</HeaderLabel>
            <Form>
              <TextField
                type='text'
                placeholder='Full Name'
                label='Full Name'
                value={name}
                onChange={setName}
                id='name'
                required
              />
              <TextField
                type='email'
                placeholder='Email address'
                label='Email address'
                value={email}
                onChange={setEmail}
                id='email'
                required
              />
              <RadioGroup>
                <RadioButton
                  id='small'
                  label='Small tour group'
                  selected={group === "small"}
                  onChange={(value) => value === "on" && setGroup("small")}
                />
              </RadioGroup>
              <RadioGroup>
                <RadioButton
                  id='large'
                  label='Large tour group'
                  selected={group === "large"}
                  onChange={(value) => value === "on" && setGroup("large")}
                />
              </RadioGroup>
              <Space />
              <MyButton
                label='Next step &rarr;'
                backgroundColor={theme.colors.main.lightGreen}
                textColor={theme.colors.font.white}
              />
            </Form>
          </FormContainer>
        </Content>
      </Row>
    </Container>
  );
};

export default Index;
