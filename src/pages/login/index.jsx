import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

// const login = async (userId, password) => {
//   const response = await fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ userId, password }),
//   });

//   return response.json();
// }

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 30rem;
  height: 4rem;
  margin-bottom: 1.2rem;

  font-size: 1.3rem;
  padding-left: 1rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  width: 30rem;
  height: 4rem;
  margin-bottom: 1rem;

  font-size: 1.3rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
`;

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mockLogin = (userId, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === "test" && password === "test") {
          resolve({ userId, password });
        } else {
          reject(new Error("로그인 실패"));
        }
      }, 1000);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    mockLogin(userId, password)
      .then(() => {
        // move to select page
        alert("로그인 성공");
        navigate("/select", { state: { userId } });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주≠세요"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
}
