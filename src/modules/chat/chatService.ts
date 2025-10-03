import { Message } from "./chatTypes";

// 가짜 채팅 데이터 (연습용)
let messages: Message[] = [
  { id: 1, sender: "관리자", content: "안녕하세요 👋", timestamp: new Date() },
];

// 메시지 불러오기
export async function getMessages(): Promise<Message[]> {
  return messages;
}

// 메시지 보내기
export async function sendMessage(sender: string, content: string): Promise<Message> {
  const newMessage: Message = {
    id: messages.length + 1,
    sender,
    content,
    timestamp: new Date(),
  };
  messages.push(newMessage);
  return newMessage;
}
