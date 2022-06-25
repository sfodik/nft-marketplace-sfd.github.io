import { CardContainer } from "./styles";

export const Card = ({id, src}) => (
    <CardContainer key={id}>
        <img src={src} alt="" />
        <span>ID {id}</span>
    </CardContainer>
)