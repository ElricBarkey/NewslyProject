AWS.config.update({
    region: "us-west-2",
    // The endpoint should point to the local or remote computer where DynamoDB (downloadable) is running.
    endpoint: 'https://dynamodb.us-west-2.amazonaws.com',
    /*
      accessKeyId and secretAccessKey defaults can be used while using the downloadable version of DynamoDB.
      For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
    */
    accessKeyId: 
    secretAccessKey:
});


var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();


function readItem() {

    // document.getElementById('textarea').innerHTML += "Getting the audio from Trends table.";
    let params = {
        TableName: "Trends"
    };

    let count = 0;
    docClient.scan(params).eachPage((err, data, done) => {
        if (data != null) {
            for (let index = 0; index < data.Items.length; index++) {
                const element = data.Items[index];
                count++;
                //console.log(" " + count + " " + index + " " + JSON.stringify(element));
                console.log("Audio url " + element.audio)
                console.log("Image url " + element.image)
                console.log("URL " + element.URL)
                console.log('\n')
                console.log('\n')
                console.log('\n')


                //create a img tag
                let newImage =  document.createElement("img");
                newImage.src = element.image;
                newImage.id = count;
                document.getElementById("trending").append(newImage);

                //create a paragraph tag to contain the url
                //create/add text to url
                let newUrl =  document.createElement("a");
                newUrl.href = element.URL;
                newUrl.innerHTML = element.title;
                document.getElementById("trending").append(newUrl);



                //src set as audio url
                //document.getElementById(count).onclick(document.getElementById("audioPlayer").src = element.audio)
                let getImage = document.getElementById(count);

                getImage.addEventListener("click", getPlayer)


                function getPlayer(){
                    document.getElementById("audioPlayer").src = element.audio;
                    document.getElementById("thumbnail").src = element.image;
                }



            }
        }
        done();
    });


}
