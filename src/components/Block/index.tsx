import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";
import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
