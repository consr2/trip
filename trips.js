/*
 * 여행 데이터 파일
 * ------------------------------------------------------------
 * 새 여행을 추가하려면 아래 TRIPS 배열에 객체 하나를 복사해 붙여넣고 내용을 바꾸세요.
 * - id: 영문/숫자/하이픈만 (주소에 쓰임: trip.html?id=여기)
 * - status: "planned"(계획 중) | "booked"(예약 완료) | "done"(다녀옴)
 * - 필요 없는 항목은 빈 배열 [] 로 두거나 지워도 됩니다.
 */
window.TRIPS = [
  {
    id: "example-osaka",
    title: "오사카 (예시)",
    country: "일본",
    emoji: "🏯",
    status: "planned",
    start: "2027-01-15",
    end: "2027-01-18",
    companions: "친구 2명",
    summary: "이 여행은 형식을 보여주기 위한 예시입니다. 실제 여행으로 바꾸거나 지워주세요.",

    info: [
      { label: "시차", value: "없음" },
      { label: "통화", value: "엔(JPY)" },
      { label: "전압", value: "100V, 11자 돼지코 필요" },
      { label: "비자", value: "90일 무비자" },
      { label: "날씨", value: "1월 평균 3~9℃, 건조함" }
    ],

    itinerary: [
      {
        day: "1일차",
        date: "2027-01-15",
        items: [
          { time: "09:00", text: "인천공항 출발" },
          { time: "11:00", text: "간사이공항 도착, 난카이선으로 난바 이동" },
          { time: "15:00", text: "숙소 체크인" },
          { time: "18:00", text: "도톤보리 저녁" }
        ]
      },
      {
        day: "2일차",
        date: "2027-01-16",
        items: [
          { time: "10:00", text: "오사카성" },
          { time: "14:00", text: "우메다 쇼핑" }
        ]
      }
    ],

    places: [
      { name: "오사카성", type: "관광", note: "천수각 입장료 별도", link: "" },
      { name: "도톤보리", type: "거리", note: "밤에 가야 예쁨", link: "" }
    ],

    food: [
      { name: "타코야키", where: "도톤보리", note: "" },
      { name: "오코노미야키", where: "난바", note: "웨이팅 있음" }
    ],

    stay: [
      { name: "난바 근처 호텔", dates: "1/15 ~ 1/18 (3박)", note: "예약번호는 따로 보관" }
    ],

    transport: [
      { name: "왕복 항공", note: "인천 ↔ 간사이" },
      { name: "난카이 라피트", note: "공항 ↔ 난바, 약 40분" }
    ],

    budget: [
      { item: "항공", amount: 300000 },
      { item: "숙소", amount: 360000 },
      { item: "식비", amount: 200000 },
      { item: "교통/입장료", amount: 100000 }
    ],
    currency: "원",

    checklist: ["여권", "엔화 환전", "돼지코", "유심/eSIM", "여행자 보험"],

    links: [
      { label: "오사카 관광국", url: "https://osaka-info.jp/ko/" }
    ],

    notes: "자유 메모 칸입니다. 줄바꿈도\n그대로 표시돼요."
  }
];
