// Seleciona os elementos da página
const input = document.querySelector("#url");
const qrcode = document.querySelector("#qrcode");
const tamanho = document.querySelector("#tamanho");
const cor = document.querySelector("#cor");

// Adiciona um evento para o pressionamento da tecla Enter para gerar o QR Code
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        geraQrcode();
    }
});

// Função que gera o QR Code
function geraQrcode() {
    const url = input.value.trim(); // Pega o valor do campo de URL
    const size = tamanho.value; // Pega o tamanho selecionado
    const color = cor.value.slice(1); // Pega o valor da cor, removendo o "#"

    // Valida se o URL inserido é válido
    if (!url || !isValidUrl(url)) {
        alert("Por favor, insira um URL válido.");
        return;
    }

    // Define a URL da API para gerar o QR Code com parâmetros personalizados
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(url)}&color=${color}`;

    // Exibe o QR Code gerado
    qrcode.alt = "QR Code gerado com sucesso!";
}

// Função para validar o URL
function isValidUrl(url) {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}
