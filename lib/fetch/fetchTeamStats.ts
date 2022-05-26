export async function fetchTeamStats(team: number) {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${team}/stats`
  );
  const data = await response.json();
  return data;
}
