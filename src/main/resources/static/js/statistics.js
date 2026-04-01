(() => {
    const ctx = document.getElementById("statusChart");
    if (!ctx || typeof Chart === "undefined") {
        return;
    }

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Wishlist", "Applied", "Screening", "Interview", "Offer", "Rejected"],
            datasets: [{
                data: [3, 5, 4, 3, 2, 1],
                backgroundColor: ["#6c757d", "#0d6efd", "#0dcaf0", "#ffc107", "#198754", "#dc3545"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
})();
