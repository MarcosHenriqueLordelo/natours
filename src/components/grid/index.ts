import styled from "styled-components";

type RowProps = {
  backgroundColor?: string;
};

const spacing = "4rem";

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

  @media (max-width: 900px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }

  .col {
    float: left;

    &:not(:last-child) {
      margin-right: ${spacing};

      @media (max-width: 900px) {
        margin-right: 0 !important;
      }
    }
  }

  ._1of2 {
    width: calc((100% - ${spacing}) / 2);

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }

  ._1of3 {
    width: calc((100% - 2 * ${spacing}) / 3);

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }

  ._2of3 {
    width: calc(((100% - 2 * ${spacing}) / 3) * 2 + ${spacing});

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }

  ._1of4 {
    width: calc((100% - 3 * ${spacing}) / 4);

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }

  ._2of4 {
    width: calc(((100% - 3 * ${spacing}) / 4) * 2 + ${spacing});

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }

  ._3of4 {
    width: calc(((100% - 3 * ${spacing}) / 4) * 3 + ${spacing} * 2);

    @media (max-width: 900px) {
      width: 100% !important;
      margin-bottom: 3rem;
    }
  }
`;
