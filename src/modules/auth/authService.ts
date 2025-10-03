import { AuthResponse } from "./authTypes";

// 간단한 인증 서비스 예시
export async function login(username: string, password: string): Promise<AuthResponse> {
  // 실제로는 API 요청을 보내야 함
  if (username === "admin" && password === "1234") {
    return { token: "fake-jwt-token", user: { name: "관리자" } };
  }
  throw new Error("아이디 또는 비밀번호가 올바르지 않습니다.");
}

export async function logout(): Promise<boolean> {
  // 토큰 삭제 로직 (예: localStorage.clear())
  return true;
}
