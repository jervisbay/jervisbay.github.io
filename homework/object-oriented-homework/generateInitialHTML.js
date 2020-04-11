function generateInitialHTML(managerAnswer) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/0d28a01aef.js" crossorigin="anonymous"></script>
        <title>Team Page</title>
    </head>
    
    <body>
        <div class="jumbotron text-center">
            <h1>Meet the Team!</h1>
        </div>
        <br>
        <div class="card">
            <div class="card-header">
                <i class="fas fa-glasses">     ${managerAnswer.managerName}</i>
            </div>
            <div class="card-body">Stuff</div>
        </div>
    
    </body>
    
    </html>
    `
}

module.exports = generateInitialHTML;