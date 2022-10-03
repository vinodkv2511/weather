import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  align-items: center;
`;

export const StyledGreeting = styled.div`
  align-self: flex-start;
`;
export const StyledCurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;
export const StyledDailyForecastContainer = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
`;