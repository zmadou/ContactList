import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
  }
`;

export const Container = styled.main`
  max-width: 960px;
  margin: 32px auto;
  padding: 0 16px;
`;

export const Card = styled.section`
  background: #0b1220;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,.25);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #334155;
  background: #0a0f1d;
  color: #e2e8f0;
  outline: none;
  &:focus { border-color: #22d3ee; box-shadow: 0 0 0 3px rgba(34,211,238,.2); }
`;

export const Button = styled.button<{variant?: 'ghost' | 'solid' }>`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid ${({variant}) => variant === 'ghost' ? '#334155' : '#22d3ee'};
  background: ${({variant}) => variant === 'ghost' ? 'transparent' : '#0a0f1d'};
  color: #e2e8f0;
  cursor: pointer;
  transition: transform .05s ease;
  &:active { transform: translateY(1px); }
  &:hover { filter: brightness(1.05); }
`;
