export async function fetchTeamSchedule(teamId: string) {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}/?expand=team.schedule.next`
  );
  const data = await response.json();
  return data;
}
