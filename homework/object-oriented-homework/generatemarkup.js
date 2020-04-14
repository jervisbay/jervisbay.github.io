function generateMarkUp(managerAnswer) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/0d28a01aef.js" crossorigin="anonymous"></script>
    <title>Team Page</title>
</head>


    <div class="jumbotron text-center">
        <h1>Meet the Team!</h1>
    </div>
    <br>
    <div class="cards-container">
        <div class="card">
            <div class="card-header">
                <h5>${managerAnswer.managerName}</h5>
                <h6><i class="fas fa-user-tie"></i>   Manager</h6>
            </div>
            <div class="card-body">
            <p class="card-text">ID: ${managerAnswer.managerID}</p>
            <p class="card-text">Email: ${managerAnswer.managerEmail}</p>
            <p class="card-text">Office Number: ${managerAnswer.managerPhoneNumber}</p>
            </div>
        </div>
    </div end>
    `
}

module.exports = generateMarkUp;