var expenses = document.getElementById("Expenses");


  var xValues_exp = ["Utility bills", "Rent", "Salaries", "Discount", "Travel and Petrol", "Food and Beverage", "Office Boy Charges"];
  var yValues_exp = [25172.32, 44000, 453507, 408, 21000, 38200, 6000];
  var colors_exp = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145", "#ff5733", "#6c757d"];

  // Set a minimum bar height for small values
  var minBarHeight = 100; // Set the minimum bar height

  // Adjust the dataset to set a minimum value for "Discount"
  var adjustedYValues_exp = yValues_exp.map(function (value) {
    return Math.max(value, minBarHeight);
  });

  new Chart("expenses", {
    type: "bar",
    data: {
      labels: xValues_exp,
      datasets: [{
        label: "Expenses",
        data: adjustedYValues_exp,
        backgroundColor: colors_exp,
        borderColor: colors_exp,
        borderWidth: 2
      }]
    },
    options: {
      title: {
        display: true,
        text: "Expenses",
        fontSize: 25,
        fontStyle: "bold",
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            min: 0, // Start y-axis at 0
            callback: function (value, index, values) {
              return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Amount',
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Element',
          }
        }]
      },
      legend: {
        display: false
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: 'end',
          align: 'top',
          formatter: function(value, context) {
            return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      barThickness: 20, // Adjust bar thickness
    }
  });

  var receipt = document.getElementById("Receipt");

    var xValues_receipt_month = ["April", "May", "June", "July"];
    var yValues_receipt_month = [0, 272150, 0, 0]; // Update with your data
    var colors_receipt_month = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"];

    new Chart("receipt", {
      type: "line",
      data: {
        labels: xValues_receipt_month,
        datasets: [{
          label: "Receipt per Month",
          data: yValues_receipt_month,
          borderColor: colors_receipt_month,
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        title: {
          display: true,
          text: "Receipt per Month",
          fontSize: 18,
          fontStyle: "bold",
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Amount',
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month',
            }
          }]
        },
        legend: {
          display: false
        },
        plugins: {
          datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'top',
            formatter: function(value, context) {
              return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          }
        },
      }
    });
var income = document.getElementById("Income");

  var labels_inventory = [
    "Inventory Inward",
    "Inventory Outward"
  ];
  var data_inventory = [1690946.75, 1213131.63];
  var colors_inventory = ["#b91d47", "#00aba9"];

  new Chart("income", {
    type: "pie",
    data: {
      labels: labels_inventory,
      datasets: [{
        data: data_inventory,
        backgroundColor: colors_inventory,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Inventory Inward vs. Inventory Outward",
        fontSize: 25,
        fontStyle: "bold",
      },
      legend: {
        position: 'bottom',
      },
      plugins: {
        datalabels: {
          color: 'black',
          formatter: function(value, context) {
            return 'â‚¹ ' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
  var sales = document.getElementById("Sales-Proforma");

  var xValues_sales_proforma = ["April", "May", "June", "July"];
  var yValues_sales_proforma = [94931, 231676, 153884, 104208]; // Update with your data
  var colors_sales_proforma = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"];

  new Chart("sales", {
    type: "line",
    data: {
      labels: xValues_sales_proforma,
      datasets: [{
        label: "Sales - Proforma per Month",
        data: yValues_sales_proforma,
        borderColor: colors_sales_proforma,
        borderWidth: 2,
        fill: true,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Sales - Proforma per Month",
        fontSize: 18,
        fontStyle: "bold",
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Amount',
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month',
          }
        }]
      },
      legend: {
        display: false
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: 'end',
          align: 'top',
          formatter: function(value, context) {
            return 'â‚¹ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.4,
        }
      },
    }
  });


  var purchase = document.getElementById("Purchase");

  const purchaseData = [
    {
      label: "Telangana",
      purchase: 1995316.8,
      color: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Maharashtra",
      purchase: 0,
      color: "rgba(255, 99, 132, 0.6)",
    },
    {
      label: "Karnataka",
      purchase: 0,
      color: "rgba(255,215,0, 0.6)",
    },
    {
      label: "Delhi",
      purchase: 0,
      color: "rgba(112,128,144, 0.6)",
    },
    {
      label: "Andhra Pradesh",
      purchase: 0,
      color: "rgba(124,252,0, 0.6)",
    },
    {
      label: "Gujarat",
      purchase: 0,
      color: "rgba(255,127,80, 0.6)",
    },
  ];

  const xValues_purchase_state = purchaseData.map(item => item.label);
  const yValues_purchase_state = purchaseData.map(item => item.purchase);
  const fillColors_purchase_state = purchaseData.map(item => item.color);

  new Chart("purchase", {
    type: "bar",
    data: {
      labels: xValues_purchase_state,
      datasets: [
        {
          label: "Statewise Purchase",
          data: yValues_purchase_state,
          backgroundColor: fillColors_purchase_state,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "State",
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Purchase",
          },
          ticks: {
            callback: function(value) {
              return 'â‚¹' + value.toLocaleString('en-US');
            },
          },
        },
      },
      responsive: true,
    },
  });


