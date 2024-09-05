import styled from "styled-components";
import { colors } from "../../utils/color";

export const Tag = styled.div`
  border: 2px solid ${colors.primary};
  padding: 0.25rem;
  border-radius: 5px;
  color: ${colors.primary};
`

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 1rem;
`