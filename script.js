const broker = "wss://broker.emqx.io:8084/mqtt"; // Conexión con WebSockets
const topicTemp = "data/temp";  // Suscripción a datos de temperatura/humedad
const topicLed = "data/led";  // Tópico para controlar el LED

// Conectar al broker MQTT
const client = mqtt.connect(broker);

client.on("connect", () => {
    console.log("Conectado al broker MQTT");
    client.subscribe(topicTemp, (err) => {
        if (!err) console.log("Suscrito a", topicTemp);
    });
});

// Configuración del gráfico con Chart.js
const ctx = document.getElementById("tempChart").getContext("2d");

const data = {
    labels: [],
    datasets: [
        {
            label: "Temperatura (°C)",
            borderColor: "#FFA500",
            backgroundColor: "rgba(255,165,0,0.2)",
            data: [],
            fill: true,
        },
        {
            label: "Humedad (%)",
            borderColor: "#00BFFF",
            backgroundColor: "rgba(0,191,255,0.2)",
            data: [],
            fill: true,
        },
    ],
};

const tempChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { title: { display: true, text: "Tiempo" } },
            y: { title: { display: true, text: "Valores" }, beginAtZero: false },
        },
    },
});

// Función para actualizar el gráfico
function updateChart(temp, hum) {
    if (data.labels.length > 10) {
        data.labels.shift();
        data.datasets[0].data.shift();
        data.datasets[1].data.shift();
    }
    data.labels.push(new Date().toLocaleTimeString());
    data.datasets[0].data.push(temp);
    data.datasets[1].data.push(hum);
    tempChart.update();
}

// Recibir datos de temperatura y humedad
client.on("message", (topic, message) => {
    if (topic === topicTemp) {
        const data = JSON.parse(message.toString());
        document.getElementById("temp").innerText = data.temperatura;
        document.getElementById("hum").innerText = data.humedad;
        updateChart(data.temperatura, data.humedad);
    }
});

// Enviar comando para el LED
function sendCommand(command) {
    client.publish(topicLed, command);
    console.log("Comando enviado:", command);
}
