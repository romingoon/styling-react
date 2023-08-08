// import Theme, { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';

interface Iinverted {
  inverted?: boolean;
}

interface ISizes {
  desktop: number;
  tablet: number;
  [key: string]: number;
}

const sizes: ISizes = {
  desktop: 1024,
  tablet: 768,
};

type MediaFunction = (
  literals: TemplateStringsArray,
  ...placeholders: Array<ReturnType<typeof css>>
) => ReturnType<typeof css>;

const media: Record<string, MediaFunction> = Object.keys(sizes).reduce(
  (acc: Record<string, MediaFunction>, label: string) => {
    acc[label] = (...args: Parameters<MediaFunction>) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button<Iinverted>`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  // & 문자를 사용하여 Sass처럼 자기 자신 선택 가능
  & :hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      & :hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color='black'>
    <button>안녕하세요!</button>
    <Button inverted>테두리만</Button>
  </Box>
);

export default StyledComponent;
