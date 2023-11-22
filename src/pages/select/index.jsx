import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 30rem;
  height: 4rem;
  margin-bottom: 1rem;

  font-size: 1.3rem;
  border: transparent;
  border-radius: 0.5rem;
  background-color: ${(props) => props.bgColor || "#000000"};
  color: #ffffff;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export default function SelectPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state.userId;

  const onClickButton = (e) => {
    e.preventDefault();
    const id = e.target.id;

    if (id === "1") {
      navigate("/nearby");
    } else if (id === "2") {
      navigate("/nearbyNation");
    } else if (id === "3") {
      navigate("/statistic");
    } else if (id === "4") {
      navigate("/myRecords");
    } else if (id === "5") {
      navigate("/");
    }
  };

  return (
    <Container>
      <Title>{userId}님, 환영합니다!</Title>
      <Button id="1" bgColor="rgb(108, 116,201)" onClick={onClickButton}>
        근처 의료기관 조회
      </Button>
      <Button id="2" bgColor="rgb(108, 116,201)" onClick={onClickButton}>
        근처 국가접종기관 조회
      </Button>
      <Button id="3" bgColor="rgb(217,164,206)" onClick={onClickButton}>
        국가접종 현황 조회
      </Button>
      <Button id="4" bgColor="rgb(178,207,159)" onClick={onClickButton}>
        내 접종 이력 조회
      </Button>
      <Button id="5" onClick={onClickButton}>
        로그아웃
      </Button>
    </Container>
  );
}
