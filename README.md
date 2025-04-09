#  Monitor IoT con ESP32, MQTT y Web Interface

## 🔥 Descripción del Proyecto
Este proyecto consiste en un sistema embebido basado en **ESP32**, que mide temperatura y humedad utilizando un sensor **DHT22** y muestra los datos en una pantalla **OLED**. Los datos se envían en tiempo real a un **broker MQTT** y se pueden visualizar en una interfaz web interactiva. Además, permite controlar un **LED** de forma remota a través de la web.

## 🚀 Tecnologías Utilizadas
- **ESP32** (Microcontrolador principal)
- **MicroPython** (Lenguaje de programación)
- **DHT22** (Sensor de temperatura y humedad)
- **SSD1306** (Pantalla OLED para visualización de datos)
- **Tiny RTC Module DS1307** (Reloj en tiempo real)
- **MQTT** (Protocolo de comunicación para IoT)
- **EMQX** (Broker MQTT en la nube)
- **HTML, CSS, JavaScript** (Interfaz web para visualización y control)

## 🛠 Instalación y Configuración
### 1️⃣ Clonar el Repositorio
```sh
git clone https://github.com/RobertoBrizuela/mqtt-micropython.git
cd mqtt-micropython
```

### 2️⃣ Cargar el código en la ESP32
1. Flashear la ESP32 con esptool.py para soportar lenguaje MicroPython
2. Instalar **Thonny** o **uPyCraft** para cargar el firmware de MicroPython en la ESP32.
3. Subir los archivos **main.py** y librerías necesarias (**ds1307.py, ssd1306.py, etc.**) a la ESP32.

### 3️⃣ Configurar la Conexión MQTT
El **ESP32** se conectará automáticamente al broker **EMQX**. Si deseas cambiarlo, modifica `MQTT_BROKER` en `main.py`.

### 4️⃣ Configurar y Ejecutar el Servidor Web
1. Instalar **Live Server** en VS Code.
2. Abrir el directorio donde está el **index.html** y ejecutar:
   - Oprimir **botón derecho** en `index.html` → **Abrir con Live Server**
   - O manualmente abrir en el navegador: `http://localhost:5500`
![image](https://github.com/user-attachments/assets/ddbc9376-76c7-459b-ba99-4607508c1efb)

## 🌎 Modelo Conceptual del Proyecto
![image](https://github.com/user-attachments/assets/20d40b35-5322-4744-b982-8dbd4304f951)
