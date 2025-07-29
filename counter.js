fetch("https://crc-func-dev.azurewebsites.net/api/GetVisitorCounter")
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").innerText = data.count;
  })
  .catch(err => {
    console.error("Error fetching visitor count:", err);
    document.getElementById("visitor-count").innerText = "N/A";
  });
