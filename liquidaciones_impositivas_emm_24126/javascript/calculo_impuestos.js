document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcularBtn').addEventListener('click', function () {
        calcularImpuestos();
    });
});


// Agregar event listener para el botón de limpiar
document.getElementById('limpiarBtn').addEventListener('click', function () {
    limpiarFormulario();
});




function calcularImpuestos() {
    var ventas_netas = parseFloat(document.getElementById('ventas_netas').value);
    var alicuota_porcentaje = parseFloat(document.getElementById('alicuota_porcentaje').value) / 100;
    var retenciones = parseFloat(document.getElementById('retenciones').value);
    var percepciones = parseFloat(document.getElementById('percepciones').value);
    var recaudaciones_bancarias = parseFloat(document.getElementById('recaudaciones_bancarias').value);
    var saldo_favor_anterior = parseFloat(document.getElementById('saldo_favor_anterior').value);

    var impuesto_determinado = ventas_netas * alicuota_porcentaje;
    var resultado_final = impuesto_determinado - retenciones - percepciones - recaudaciones_bancarias - saldo_favor_anterior;

    var resultadoHTML = '<p>Impuesto Determinado: ' + impuesto_determinado.toFixed(2) + '</p>' +
                        '<p>Resultado Final: ' + resultado_final.toFixed(2) + '</p>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    alert("Bienvenido a la Calculadora de Liquidaciones Impositivas EMM 24126");
});

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('taxCalculatorForm').reset(); // Restablece los valores del formulario
    document.getElementById('resultado').innerHTML = ''; // Limpia los resultados
}