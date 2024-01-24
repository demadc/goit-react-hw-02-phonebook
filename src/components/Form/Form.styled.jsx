import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 300px;

  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  margin: 0 auto;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: ${p => p.theme.borders.none};
  outline: none;
  border-radius: 8px;

  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: ${p => p.theme.colors.muted};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.accent};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
  }

  :active {
    color: ${p => p.theme.colors.accent};
    box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
  }
`;
