// AQUAMAP - Se conserva el mapa de imagen que ya utiliza mapa.html.
document.addEventListener('DOMContentLoaded', initReporteAverias);

function initReporteAverias() {
  const form = document.getElementById('form-averia');
  const btnGps = document.getElementById('btn-gps-averia');
  const inputDireccion = document.getElementById('direccion-averia');
  const contenedorMapa = document.getElementById('contenedor-mapa-reporte');
  const pin = document.getElementById('pin-reporte');
  const estadoUbicacion = document.getElementById('estado-ubicacion-reporte');
  const ticketContainer = document.getElementById('confirmacion-ticket');
  const txtNumTicket = document.getElementById('numero-ticket-generado');
  const btnNuevoReporte = document.getElementById('btn-nuevo-reporte');
  const listaTickets = document.getElementById('lista-tickets');

  if (!form) return;

  let ubicacionSeleccionada = false;
  let coordenadas = '';

  function colocarPin(x, y, texto = '') {
    pin.classList.remove('oculto');
    pin.style.left = x + '%';
    pin.style.top = y + '%';
    ubicacionSeleccionada = true;
    coordenadas = texto || `Mapa: ${x.toFixed(1)}%, ${y.toFixed(1)}%`;
    estadoUbicacion.textContent = '✓ Ubicación seleccionada. ' + coordenadas;
    estadoUbicacion.classList.add('ubicacion-seleccionada');
    if (!inputDireccion.value.trim()) inputDireccion.value = coordenadas;
  }

  // Seleccionar el punto de la fuga haciendo clic sobre el mapa.
  contenedorMapa.addEventListener('click', (evento) => {
    const rect = contenedorMapa.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((evento.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((evento.clientY - rect.top) / rect.height) * 100));
    colocarPin(x, y);
  });

  // GPS: se guardan las coordenadas. La imagen del mapa del proyecto es ilustrativa,
  // por lo que no representa una cartografía georreferenciada.
  btnGps.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('Geolocalización no soportada. Selecciona el punto en el mapa.');
      return;
    }
    btnGps.disabled = true;
    btnGps.textContent = 'Obteniendo ubicación...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lon = pos.coords.longitude.toFixed(6);
        const texto = `Lat: ${lat}, Lon: ${lon} (Ubicación GPS)`;
        inputDireccion.value = texto;
        colocarPin(50, 45, texto);
        btnGps.disabled = false;
        btnGps.textContent = '📍 Usar mi GPS';
      },
      () => {
        btnGps.disabled = false;
        btnGps.textContent = '📍 Usar mi GPS';
        alert('No se pudo obtener la ubicación. Selecciona el punto en el mapa o ingrésala manualmente.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tipo = document.getElementById('tipo-averia').value;
    const direccion = inputDireccion.value.trim();

    if (!tipo || !direccion) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }
    if (!ubicacionSeleccionada) {
      alert('Selecciona la ubicación haciendo clic en el mapa o usando tu GPS.');
      contenedorMapa.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const numeroTicket = `SED-${Math.floor(100000 + Math.random() * 900000)}`;
    try {
      const reportes = JSON.parse(localStorage.getItem('mis_reportes_sedapal') || '[]');
      reportes.push({
        ticket: numeroTicket,
        tipo,
        direccion,
        ubicacion: coordenadas,
        fecha: new Date().toLocaleDateString()
      });
      localStorage.setItem('mis_reportes_sedapal', JSON.stringify(reportes));
    } catch (error) {
      alert('No se pudo guardar el reporte en este navegador.');
      return;
    }

    txtNumTicket.textContent = numeroTicket;
    form.classList.add('hidden');
    ticketContainer.classList.remove('hidden');
    actualizarListaTicketsUI();
    ticketContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  btnNuevoReporte.addEventListener('click', () => {
    form.reset();
    ubicacionSeleccionada = false;
    coordenadas = '';
    pin.classList.add('oculto');
    estadoUbicacion.textContent = 'No has seleccionado una ubicación en el mapa.';
    estadoUbicacion.classList.remove('ubicacion-seleccionada');
    ticketContainer.classList.add('hidden');
    form.classList.remove('hidden');
  });

  function actualizarListaTicketsUI() {
    const reportes = JSON.parse(localStorage.getItem('mis_reportes_sedapal') || '[]');
    listaTickets.innerHTML = '';
    if (!reportes.length) {
      listaTickets.innerHTML = '<li>No tienes reportes registrados aún.</li>';
      return;
    }
    [...reportes].reverse().forEach((rep) => {
      const li = document.createElement('li');
      const texto = document.createElement('span');
      const fecha = document.createElement('em');
      texto.textContent = `${rep.ticket} - ${rep.direccion}`;
      fecha.textContent = rep.fecha;
      li.append(texto, fecha);
      listaTickets.appendChild(li);
    });
  }

  actualizarListaTicketsUI();
}
