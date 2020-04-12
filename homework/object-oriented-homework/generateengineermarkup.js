function generateEngineerMarkUp(engineerAnswer) {
    return `
    <div class="card">
        <div class="card-header">
            <h5>${engineerAnswer.engineerName}</h5>
            <h6><i class="fas fa-glasses">     Engineer</i></h6>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${engineerAnswer.engineerID}</p>
            <p class="card-text">Email: ${engineerAnswer.engineerEmail}</p>
            <p class="card-text">Github: ${engineerAnswer.engineerGithub}</p>
        </div>
    </div>
    </div end>
</html>
    `
}
module.exports = generateEngineerMarkUp;