function generateEngineerMarkUp(teamMemberAnswer) {
    return `
    <div class="cards-container">
    <div class="card">
        <div class="card-header">
            <h5>Placeholder</h5>
            <h6><i class="fas fa-glasses">     ${teamMemberAnswer.additionalEmployee}</i></h6>
        </div>
        <div class="card-body">
            <p>ID: </p>
            <p>Email: </p>
            <p>Office Number: </p>
        </div>
    </div>
    </div>
    </html>
    `
}
module.exports = generateEngineerMarkUp;