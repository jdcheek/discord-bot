export async function fetchGames() {
  const response = await fetch(
    "https://statsapi.web.nhl.com/api/v1/schedule?date=2022-05-14"
  );
  const data = await response.json();
  console.log(data.dates[0].games);

  return data.dates[0].games;
}

// end point for linescore, may use after testing

// "https://statsapi.web.nhl.com/api/v1/schedule?expand=schedule.linescore"
