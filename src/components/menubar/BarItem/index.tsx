import {TitleStyle} from "./styles"
interface Props {
  icon: React.ReactNode
  title: String
}
const MenuItem: React.FC<Props> = ({ icon, title }) => {
  
  return <>
      {icon}
      <TitleStyle>{title}</TitleStyle>
    </>
}

export default MenuItem
