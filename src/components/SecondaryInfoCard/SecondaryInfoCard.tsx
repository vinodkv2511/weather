import { FunctionComponent } from "react";
import InfoDisplay from "../InfoDisplay/InfoDisplay";
import { StyledSecondaryInfoCard } from "./SecondaryInfoCard.styles";
import { SecondaryInfoCardProps } from "./SecondaryInfoCard.types";


const SecondaryInfoCard: FunctionComponent<SecondaryInfoCardProps> = ({data}) => {

  return <StyledSecondaryInfoCard>
    {data.map( info => {
      return <InfoDisplay {...info} key={info.label} />
    })}
  </StyledSecondaryInfoCard>
}

export default SecondaryInfoCard;