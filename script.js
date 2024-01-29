window.onload = function() {
    var departmentDetails = [
        { name: 'Sales', completionPercentage: 50 },
        { name: 'Marketing', completionPercentage: 57 },
        { name: 'Design', completionPercentage: 83 },
        { name: 'HR', completionPercentage: 78 },
        { name: 'Legal', completionPercentage: 92 },
        { name: 'IT', completionPercentage: 23 },
        { name: 'OPS', completionPercentage: 43 }
    ];

    // Populate dropdown
    var select = document.getElementById('departments');
    departmentDetails.forEach(function(department, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = department.name;
        select.appendChild(option);
    });

    // Populate table
    var tbody = document.getElementById('departmentTable').getElementsByTagName('tbody')[0];
    departmentDetails.forEach(function(department) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = department.name;
        cell2.innerHTML = department.completionPercentage + '%';
    });

    // Create chart
    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: departmentDetails.map(function(department) { return department.name; }),
            datasets: [{
                label: 'Completion Percentage',
                data: departmentDetails.map(function(department) { return department.completionPercentage; }),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('chartContainer').style.width = '80%'; 
};
