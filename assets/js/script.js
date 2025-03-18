// Data contoh (sesuaikan dengan data Anda)
const data = {
  labels: ['Islam', 'Kristen'],
  datasets: [{
    label: 'Persentase Agama',
    data: [99,1],
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(255, 205, 86)',
      
    ],
    hoverOffset: 4
  }]
};

// Konfigurasi pie chart
const configPie = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.formattedValue + '%';
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInSine'
    }
  }
};

// Konfigurasi bar chart
const configBar = {
  type: 'bar',
  data: {
    labels: ['Pria', 'Wanita'],
    datasets: [{
      label: 'Jumlah Penduduk',
      data: [357, 348],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // Membalik sumbu
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jumlah Penduduk Berdasarkan Jenis Kelamin'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    }
  }
};

// Membuat pie chart
const myPieChart = new Chart(
  document.getElementById('myPieChart'),
  configPie
);

// Membuat bar chart
const myBarChart = new Chart(
  document.getElementById('myBarChart'),
  configBar
);

document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Dusun 1', 'Dusun 2'],
          datasets: [{
              label: 'Jumlah KK',
              data: [133, 80],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
