export async function fetchSchedule() {
  const response = await fetch("https://statsapi.web.nhl.com/api/v1/schedule");
  const data = await response.json();
  return data;
}
