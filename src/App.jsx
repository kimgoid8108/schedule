import React, { useState, useMemo } from "react";
import { Download, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const TimelineSchedule = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const weeksPerPage = 5;

  // JSON 데이터
  const lecturesData = {
    lectures: [
      {
        name: "파이썬 일반수업",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 3,
        days: [
          "2024-04-09",
          "2024-04-11",
          "2024-04-16",
          "2024-04-18",
          "2024-04-19",
          "2024-04-23",
          "2024-04-25",
          "2024-04-30",
          "2024-05-02",
          "2024-05-07",
          "2024-05-09",
          "2024-05-14",
          "2024-05-16",
          "2024-05-21",
          "2024-05-23",
          "2024-05-24",
          "2024-05-28",
          "2024-05-30",
          "2024-06-04",
          "2024-06-07",
        ],
        period: { start: "2024-04-09", end: "2024-06-07" },
        offDays: [],
      },
      {
        name: "웹개발 주말반",
        type: "일반(주말)",
        hourlyWage: 26000,
        dailyHours: 6,
        days: ["토", "일"],
        period: { start: "2024-04-13", end: "2024-09-22" },
        offDays: ["2024-05-04", "2024-05-05", "2024-07-20", "2024-07-21", "2024-08-24", "2024-08-25", "2024-09-14", "2024-09-15"],
      },
      {
        name: "스프링 국비수업",
        type: "국비",
        hourlyWage: 26000,
        dailyHours: 4,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-04-24", end: "2024-08-07" },
        offDays: ["2024-05-01", "2024-05-06", "2024-05-15", "2024-06-06", "2024-07-22", "2024-07-24"],
      },
      {
        name: "자바 일반수업",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 3,
        days: ["2024-05-10", "2024-05-13", "2024-05-17", "2024-05-20", "2024-05-22", "2024-05-27", "2024-05-29", "2024-05-31", "2024-06-03", "2024-06-05"],
        period: { start: "2024-05-10", end: "2024-06-05" },
        offDays: [],
      },
      {
        name: "리액트 프론트엔드 일반수업",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 3,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-06-10", end: "2024-10-18" },
        offDays: ["2024-07-19", "2024-08-15", "2024-08-26", "2024-08-27", "2024-08-28", "2024-08-29", "2024-09-16", "2024-09-17", "2024-09-18", "2024-10-01", "2024-10-03", "2024-10-09"],
      },
      {
        name: "리액트 웹 미니프로젝트 일반수업",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 2,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-07-03", end: "2024-08-22" },
        offDays: ["2024-08-15"],
      },
      {
        name: "AI활용 핀테크서비스 국비수업",
        type: "국비",
        hourlyWage: 26000,
        dailyHours: 8,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-09-10", end: "2024-09-27" },
        offDays: ["2024-09-16", "2024-09-17", "2024-09-18"],
      },
      {
        name: "프론트엔드 사전교육",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 4,
        days: ["2024-10-16", "2024-10-17", "2024-10-18", "2024-10-21"],
        period: { start: "2024-10-16", end: "2024-10-21" },
        offDays: [],
      },
      {
        name: "웹퍼블리셔 프론트엔드 국비수업",
        type: "국비",
        hourlyWage: 26000,
        dailyHours: 8,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-10-22", end: "2024-12-20" },
        offDays: [],
      },
      {
        name: "React 풀스택 사전교육(일반)",
        type: "일반",
        hourlyWage: 22000,
        dailyHours: 4,
        days: ["2024-12-23", "2024-12-24"],
        period: { start: "2024-12-23", end: "2024-12-24" },
        offDays: [],
      },
      {
        name: "Node & React 풀스택 국비",
        type: "국비",
        hourlyWage: 26000,
        dailyHours: 8,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2024-12-30", end: "2025-06-02" },
        offDays: ["2025-01-01", "2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30", "2025-02-17", "2025-02-18", "2025-03-03", "2025-04-25", "2025-05-05", "2025-05-06"],
      },
      {
        name: "React 기반 프론트엔드 일반",
        type: "일반",
        hourlyWage: 29000,
        dailyHours: 3,
        days: ["월", "화", "목", "금"],
        period: { start: "2025-01-13", end: "2025-05-23" },
        offDays: ["2025-01-14", "2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30", "2025-01-31", "2025-03-03", "2025-04-04", "2025-04-25", "2025-05-01", "2025-05-05", "2025-05-06"],
      },
      {
        name: "프론트엔드 주말수업",
        type: "일반(주말)",
        hourlyWage: 32000,
        dailyHours: 4,
        days: ["토", "일"],
        period: { start: "2024-09-21", end: "2025-03-22" },
        offDays: ["2024-11-03", "2024-12-28", "2024-12-29", "2025-03-01", "2025-03-02"],
      },
      {
        name: "React & Node 웹 풀스택 저녁수업",
        type: "일반",
        hourlyWage: 29000,
        dailyHours: 3,
        days: ["월", "화", "수", "목"],
        period: { start: "2025-06-23", end: "2025-10-16" },
        offDays: ["2025-10-06", "2025-10-07", "2025-10-08", "2025-10-09"],
      },
      {
        name: "CI/CD 풀스택 국비수업",
        type: "국비",
        hourlyWage: 32000,
        dailyHours: 8,
        days: ["월", "화", "수", "목", "금"],
        period: { start: "2025-08-29", end: "2026-01-27" },
        offDays: ["2025-10-03", "2025-10-06", "2025-10-07", "2025-10-08", "2025-10-09"],
      },
    ],
  };

  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-red-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-cyan-200",
    "bg-lime-200",
    "bg-amber-200",
  ];

  // 강의 데이터를 courses 형태로 변환
  const courses = useMemo(() => {
    return lecturesData.lectures.map((lecture, idx) => {
      // 시작 시간 계산
      let startTime, endTime;

      if (lecture.type === "국비" && lecture.dailyHours === 8) {
        startTime = "09:00";
        endTime = "18:00";
      } else if (lecture.type === "일반(주말)" && lecture.dailyHours === 6) {
        startTime = "09:00";
        endTime = "16:00";
      } else if (lecture.type === "일반(주말)" && lecture.dailyHours === 4) {
        startTime = "10:00";
        endTime = "14:00";
      } else if (lecture.dailyHours === 4 && lecture.type === "국비") {
        startTime = "09:00";
        endTime = "13:00";
      } else if (lecture.dailyHours === 4 && lecture.type === "일반") {
        startTime = "09:00";
        endTime = "13:00";
      } else if (lecture.dailyHours === 3) {
        startTime = "19:00";
        endTime = "22:00";
      } else if (lecture.dailyHours === 2) {
        startTime = "13:00";
        endTime = "15:00";
      } else {
        startTime = "09:00";
        endTime = "18:00";
      }

      return {
        id: idx + 1,
        name: lecture.name,
        period: `${lecture.period.start} - ${lecture.period.end}`,
        time: `${lecture.days.includes("토") || lecture.days.includes("일") ? "주말" : "평일"} ${startTime}-${endTime}`,
        color: colors[idx % colors.length],
        room: lecture.type === "국비" ? "국비반" : "일반반",
        days: lecture.days,
        startTime,
        endTime,
        offDays: lecture.offDays,
      };
    });
  }, []);

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const parseDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getDayName = (date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[date.getDay()];
  };

  const weeklySchedule = useMemo(() => {
    const weeks = [];
    const startDate = new Date(2024, 3, 1);
    const endDate = new Date(2026, 1, 28);

    let currentDate = new Date(startDate);
    while (currentDate.getDay() !== 1) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    while (currentDate <= endDate) {
      const weekStart = new Date(currentDate);
      const weekEnd = new Date(currentDate);
      weekEnd.setDate(weekEnd.getDate() + 6);

      const schedule = {};

      ["월", "화", "수", "목", "금", "토", "일"].forEach((day, dayIdx) => {
        const currentDayDate = new Date(weekStart);
        currentDayDate.setDate(currentDayDate.getDate() + dayIdx);
        const dateStr = formatDateString(currentDayDate);

        schedule[day] = [];

        courses.forEach((course) => {
          const courseStart = parseDate(course.period.split(" - ")[0]);
          const courseEnd = parseDate(course.period.split(" - ")[1]);

          // 휴무일 체크
          if (course.offDays.includes(dateStr)) {
            return;
          }

          if (currentDayDate >= courseStart && currentDayDate <= courseEnd) {
            // 특정 날짜 배열인 경우
            if (course.days.length > 0 && !["월", "화", "수", "목", "금", "토", "일"].includes(course.days[0])) {
              if (course.days.includes(dateStr)) {
                const startIdx = timeSlots.indexOf(course.startTime);
                const endIdx = timeSlots.indexOf(course.endTime);
                const rowSpan = endIdx - startIdx;

                schedule[day].push({
                  startTime: course.startTime,
                  endTime: course.endTime,
                  course: course.name,
                  color: course.color,
                  room: course.room,
                  rowSpan: rowSpan,
                });
              }
            }
            // 요일 배열인 경우
            else if (course.days.includes(day)) {
              const startIdx = timeSlots.indexOf(course.startTime);
              const endIdx = timeSlots.indexOf(course.endTime);
              const rowSpan = endIdx - startIdx;

              schedule[day].push({
                startTime: course.startTime,
                endTime: course.endTime,
                course: course.name,
                color: course.color,
                room: course.room,
                rowSpan: rowSpan,
              });
            }
          }
        });

        schedule[day].sort((a, b) => timeSlots.indexOf(a.startTime) - timeSlots.indexOf(b.startTime));
      });

      const hasClasses = Object.values(schedule).some((daySchedule) => daySchedule.length > 0);

      if (hasClasses) {
        weeks.push({
          week: `${weekStart.getFullYear()}년 ${weekStart.getMonth() + 1}월 ${Math.ceil(weekStart.getDate() / 7)}주차`,
          dates: `${String(weekStart.getMonth() + 1).padStart(2, "0")}.${String(weekStart.getDate()).padStart(2, "0")} - ${String(weekEnd.getMonth() + 1).padStart(2, "0")}.${String(
            weekEnd.getDate()
          ).padStart(2, "0")}`,
          schedule: schedule,
        });
      }

      currentDate.setDate(currentDate.getDate() + 7);
    }

    return weeks;
  }, [courses]);

  const totalPages = Math.ceil(weeklySchedule.length / weeksPerPage);
  const currentWeeks = weeklySchedule.slice(currentPage * weeksPerPage, (currentPage + 1) * weeksPerPage);

  const downloadPDF = () => {
    const printWindow = window.open("", "_blank");

    const generateTableRowsHTML = (schedule) => {
      let html = "";
      const processedCells = {};

      timeSlots.forEach((time, timeIdx) => {
        html += "<tr>";
        html += `<td class="time-cell">${time}</td>`;

        ["월", "화", "수", "목", "금", "토", "일"].forEach((day) => {
          const cellKey = `${day}-${timeIdx}`;

          if (processedCells[cellKey]) {
            return;
          }

          const classes = schedule[day] || [];
          const currentClass = classes.find((c) => c.startTime === time);

          if (currentClass) {
            const rowSpan = currentClass.rowSpan || 1;
            for (let i = 0; i < rowSpan; i++) {
              processedCells[`${day}-${timeIdx + i}`] = true;
            }

            html += `
              <td rowspan="${rowSpan}" class="course-cell ${currentClass.color}">
                <div class="course-name">${currentClass.course}</div>
                <div class="course-time">${currentClass.startTime} - ${currentClass.endTime}</div>
                <div class="course-room">${currentClass.room}</div>
              </td>
            `;
          } else {
            html += '<td class="empty-cell">-</td>';
          }
        });

        html += "</tr>";
      });

      return html;
    };

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>전체 강의 타임라인</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Malgun Gothic', sans-serif; padding: 20px; }
    h1 { text-align: center; margin-bottom: 10px; color: #1e40af; font-size: 24px; }
    .subtitle { text-align: center; margin-bottom: 30px; color: #6b7280; font-size: 14px; }

    .legend { margin-bottom: 30px; page-break-inside: avoid; }
    .legend h2 { margin-bottom: 15px; color: #1f2937; font-size: 18px; }
    .legend-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .legend-item { padding: 10px; border: 2px solid #d1d5db; border-radius: 5px; }
    .legend-item h3 { font-size: 12px; margin-bottom: 5px; font-weight: bold; }
    .legend-item p { font-size: 10px; color: #4b5563; margin-top: 2px; }

    .week-section { margin-bottom: 30px; page-break-inside: avoid; }
    .week-header { background: #1e40af; color: white; padding: 12px; border-radius: 5px 5px 0 0; }
    .week-header h2 { font-size: 16px; }
    .week-header p { font-size: 12px; margin-top: 3px; opacity: 0.9; }

    table { width: 100%; border-collapse: collapse; border: 2px solid #000; }
    th, td { border: 1px solid #000; text-align: center; }
    th { background: #f3f4f6; padding: 8px; font-weight: bold; font-size: 11px; }
    td { padding: 6px; vertical-align: middle; font-size: 10px; }
    .time-cell { font-weight: bold; background: #f9fafb; width: 70px; }
    .empty-cell { color: #d1d5db; }
    .course-cell { font-weight: 600; padding: 8px; }
    .course-name { font-size: 10px; margin-bottom: 3px; }
    .course-time { font-size: 9px; color: #4b5563; margin-top: 2px; }
    .course-room { font-size: 8px; color: #6b7280; margin-top: 2px; }

    .bg-blue-200 { background: #bfdbfe !important; }
    .bg-green-200 { background: #bbf7d0 !important; }
    .bg-yellow-200 { background: #fef08a !important; }
    .bg-purple-200 { background: #e9d5ff !important; }
    .bg-pink-200 { background: #fbcfe8 !important; }
    .bg-indigo-200 { background: #c7d2fe !important; }
    .bg-red-200 { background: #fecaca !important; }
    .bg-teal-200 { background: #99f6e4 !important; }
    .bg-orange-200 { background: #fed7aa !important; }
    .bg-cyan-200 { background: #a5f3fc !important; }
    .bg-lime-200 { background: #d9f99d !important; }
    .bg-amber-200 { background: #fde68a !important; }

    @media print {
      .week-section { page-break-after: always; }
      .week-section:last-child { page-break-after: auto; }
    }
  </style>
</head>
<body>
  <h1>전체 강의 타임라인</h1>
  <div class="subtitle">2024년 4월 ~ 2026년 1월 주간별 스케줄</div>

  <div class="legend">
    <h2>📚 전체 과정 목록</h2>
    <div class="legend-grid">
      ${courses
        .map(
          (course) => `
        <div class="legend-item ${course.color}">
          <h3>${course.name}</h3>
          <p>📅 ${course.period}</p>
          <p>🕐 ${course.time}</p>
          <p>🏢 ${course.room}</p>
        </div>
      `
        )
        .join("")}
    </div>
  </div>

  ${weeklySchedule
    .map(
      (week) => `
    <div class="week-section">
      <div class="week-header">
        <h2>${week.week}</h2>
        <p>${week.dates}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>시간</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
            <th>일</th>
          </tr>
        </thead>
        <tbody>
          ${generateTableRowsHTML(week.schedule)}
        </tbody>
      </table>
    </div>
  `
    )
    .join("")}
</body>
</html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 flex-shrink-0" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">전체 강의 타임라인</h1>
                <p className="text-sm md:text-base text-gray-600 mt-1">2024년 4월 ~ 2026년 1월 (총 {weeklySchedule.length}주차)</p>
              </div>
            </div>
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-sm md:text-base w-full md:w-auto justify-center">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              PDF 다운로드
            </button>
          </div>
        </div>

        {/* 과정 범례 */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
            전체 과정 목록
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {courses.map((course) => (
              <div key={course.id} className={`${course.color} p-3 md:p-4 rounded-lg border-2 border-gray-200`}>
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">{course.name}</h3>
                <p className="text-xs md:text-sm text-gray-700 mb-1">📅 {course.period}</p>
                <p className="text-xs md:text-sm text-gray-700 mb-1">🕐 {course.time}</p>
                <p className="text-xs md:text-sm text-gray-700">🏢 {course.room}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 페이지네이션 컨트롤 */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-lg shadow p-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden md:inline">이전</span>
          </button>

          <div className="text-center">
            <p className="text-sm md:text-base font-semibold text-gray-800">
              {currentPage + 1} / {totalPages} 페이지
            </p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              {currentPage * weeksPerPage + 1} - {Math.min((currentPage + 1) * weeksPerPage, weeklySchedule.length)} 주차
            </p>
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
            <span className="hidden md:inline">다음</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 주간별 타임테이블 */}
        <div className="space-y-6 md:space-y-8">
          {currentWeeks.map((week, idx) => {
            const processedCells = {};

            return (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h2 className="text-lg md:text-xl font-bold">{week.week}</h2>
                  <p className="text-sm md:text-base text-indigo-100">{week.dates}</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 w-16 md:w-20 text-xs md:text-sm">시간</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">월</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">화</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">수</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">목</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">금</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">토</th>
                        <th className="px-2 md:px-3 py-2 md:py-3 text-center font-semibold text-gray-700 border-2 border-gray-300 text-xs md:text-sm">일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((time, timeIdx) => (
                        <tr key={time} className="hover:bg-gray-50">
                          <td className="px-2 py-2 md:py-3 text-xs md:text-sm font-semibold text-gray-700 border-2 border-gray-300 text-center bg-gray-50">{time}</td>
                          {["월", "화", "수", "목", "금", "토", "일"].map((day) => {
                            const cellKey = `${day}-${timeIdx}`;

                            if (processedCells[cellKey]) {
                              return null;
                            }

                            const classes = week.schedule[day] || [];
                            const currentClass = classes.find((c) => c.startTime === time);

                            if (currentClass) {
                              const rowSpan = currentClass.rowSpan || 1;
                              for (let i = 0; i < rowSpan; i++) {
                                processedCells[`${day}-${timeIdx + i}`] = true;
                              }

                              return (
                                <td key={day} rowSpan={rowSpan} className={`px-2 md:px-3 py-2 md:py-4 border-2 border-gray-300 ${currentClass.color}`}>
                                  <div className="font-semibold text-gray-800 text-xs md:text-sm">{currentClass.course}</div>
                                  <div className="text-[10px] md:text-xs text-gray-600 mt-1">
                                    {currentClass.startTime} - {currentClass.endTime}
                                  </div>
                                  <div className="text-[10px] md:text-xs text-gray-500 mt-1">{currentClass.room}</div>
                                </td>
                              );
                            }

                            return (
                              <td key={day} className="px-2 py-2 md:py-3 border-2 border-gray-300 text-center">
                                <span className="text-gray-300 text-xs">-</span>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        {/* 안내 메시지 */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 md:p-6 mt-6 md:mt-8">
          <h3 className="font-bold text-yellow-800 mb-2 text-sm md:text-base">📌 안내사항</h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1 text-xs md:text-sm">
            <li>문서에 명시된 모든 과정 정보를 반영하여 생성되었습니다.</li>
            <li>연속되는 시간의 같은 강의는 자동으로 병합되어 표시됩니다.</li>
            <li>PDF 다운로드 시 전체 {weeklySchedule.length}주차가 모두 포함됩니다.</li>
            <li>이전/다음 버튼으로 주차를 탐색할 수 있습니다.</li>
            <li>각 과정별로 다른 색상으로 구분되어 있습니다.</li>
            <li>휴무일(offDays)은 자동으로 제외되어 표시됩니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineSchedule;
