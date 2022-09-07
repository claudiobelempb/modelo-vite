import styled, { css } from 'styled-components';

export const SignUpPageContainer = styled.div`
  ${({}) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      'brand brand brand nav nav nav'
      'desc desc desc title title title'
      'img img img email email email'
      'img img img password password password'
      'img img img submit submit submit'
      'img img img gap gap gap'
      'img img img p p p';

    gap: 2rem 3rem;
    align-items: center;
    place-content: center;
    padding: 4rem;
  `}
`;
