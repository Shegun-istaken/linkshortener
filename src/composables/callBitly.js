export default async function getData(longURL) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: "Bearer 9fec140220ea22ac40ab8335864a67e997a90728",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: `${longURL}`,
    }),
  })

  const details = await response.json();
    return details
}
