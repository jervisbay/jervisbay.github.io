function generateInternMarkUp(internAnswer) {
    return `
    <div class="card">
        <div class="card-header">
            <h5>${internAnswer.internName}</h5>
            <h6><i class="fas fa-graduation-cap"></i>   Intern</h6>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${internAnswer.internID}</p>
            <p class="card-text">Email: ${internAnswer.internEmail}</p>
            <p class="card-text">School: ${internAnswer.internSchool}</p>
        </div>
    </div>
    </div end>
    `
}
module.exports = generateInternMarkUp;