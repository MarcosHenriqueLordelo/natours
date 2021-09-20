import styled from "styled-components";

type RowProps = {
  backgroundColor?: string;
};

const spacing = "2rem";

export const Row = styled.div<RowProps>`
  max-width: 100%;
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .col {
    float: left;

    &:not(:last-child) {
      margin-right: ${spacing};
    }
  }

  ._1of2 {
    width: calc((100% - ${spacing}) / 2);
  }

  ._1of3 {
    width: calc((100% - 2 * ${spacing}) / 3);
  }

  ._2of3 {
    width: calc(((100% - 2 * ${spacing}) / 3) * 2 + ${spacing});
  }

  ._1of4 {
    width: calc((100% - 3 * ${spacing}) / 4);
  }

  ._2of4 {
    width: calc(((100% - 3 * ${spacing}) / 4) * 2 + ${spacing});
  }

  ._3of4 {
    width: calc(((100% - 3 * ${spacing}) / 4) * 3 + ${spacing} * 2);
  }
`;
