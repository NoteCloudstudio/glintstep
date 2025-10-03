// 인증 관련 타입 정의

export interface User {
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
