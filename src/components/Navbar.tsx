export default function Home() {
  const cards = [
    { title: "사용자 수", value: "1,024명", color: "bg-green-100" },
    { title: "오늘 방문자", value: "342명", color: "bg-blue-100" },
    { title: "에러 로그", value: "7건", color: "bg-red-100" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">📊 대시보드</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className={`p-6 rounded shadow ${card.color}`}>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}