document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Chart.js configuration

  // 1. Reports Chart (Line Chart)
  const reportsCtx = document.getElementById("reportsChart").getContext("2d");
  const reportsChart = new Chart(reportsCtx, {
    type: "line",
    data: {
      labels: [
        "10am",
        "11am",
        "12am",
        "01am",
        "02am",
        "03am",
        "04am",
        "05am",
        "06am",
        "07am",
      ],
      datasets: [
        {
          label: "Sales",
          data: [50, 40, 60, 35, 20, 48, 12, 35, 65, 75],
          backgroundColor: "rgba(106, 106, 251, 0.1)",
          borderColor: "#6a6afb",
          pointBackgroundColor: "#6a6afb",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6a6afb",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              if (context.dataIndex === 5) {
                // Peak point
                return `Sales: ${context.parsed.y}`;
              }
              return null;
            },
            title: () => null,
          },
          displayColors: false,
          yAlign: "bottom",
          backgroundColor: "#333",
        },
      },
    },
  });

  // 2. Park Performance Chart (Bar Chart)
  const performanceCtx = document
    .getElementById("performanceChart")
    .getContext("2d");
  const performanceChart = new Chart(performanceCtx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Performance",
          data: [30, 45, 60, 50, 80, 75],
          backgroundColor: [
            "#f0f0f0",
            "#f0f0f0",
            "#ff7f7f", // Red bar for March
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
          ],
          borderRadius: 5,
          barThickness: 12,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false,
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false, // Example to disable tooltips
        },
      },
    },
  });
});
