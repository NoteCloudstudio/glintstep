// 채팅 관련 타입 정의

export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}
