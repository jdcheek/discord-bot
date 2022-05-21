export async function fetchTeams() {
  const response = await fetch(
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster,team.stats,team.schedule.next"
  );
  const data = await response.json();
  return data;
}
