export async function fetchLinescore() {
  const response = await fetch(
    "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
  );
  const data = await response.json();
  return data.dates[0].games;
}
