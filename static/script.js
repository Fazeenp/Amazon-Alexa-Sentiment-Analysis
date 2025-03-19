function predictText() {
    const userInput = document.getElementById("text-input").value;
    
    if (!userInput) {
        alert("Please enter some text!");
        return;
    }

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("prediction-result").innerText = "Predicted Sentiment: " + data.prediction;
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error making prediction.");
    });
}



function predictFile() {
    const fileInput = document.getElementById("file-input");
    if (!fileInput.files.length) {
        alert("Please upload a CSV file.");
        return;
    }

    let formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) throw new Error("Network error.");
        
        let graphExists = response.headers.get("X-Graph-Exists");
        let graphData = response.headers.get("X-Graph-Data");

        return response.blob().then(blob => ({ blob, graphExists, graphData }));
    })
    .then(({ blob, graphExists, graphData }) => {
        // If graph exists, display it
        if (graphExists === "true" && graphData) {
            let img = document.getElementById("graph-img");
            img.src = "data:image/png;base64," + graphData;
            img.style.display = "block";
        }
    })
    .catch(error => {
        alert("Error processing the file.");
        console.error(error);
    });
}
