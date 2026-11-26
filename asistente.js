document.addEventListener("DOMContentLoaded", () => {
  const btnAbrir = document.getElementById("btn-abrir-asistente");
  const btnCerrar = document.getElementById("btn-cerrar-asistente");
  const panel = document.getElementById("panel-asistente");
  const contenedorMensajes = document.getElementById("asistente-mensajes");
  const contenedorSugerencias = document.getElementById("asistente-sugerencias");
  const form = document.getElementById("asistente-form");
  const input = document.getElementById("asistente-input");
  const btnVoz = document.getElementById("btn-voz-asistente");
  const launcherTexto = document.getElementById("asistente-launcher-texto");
  const tituloAsistente = document.getElementById("titulo-asistente");
  const estadoAsistente = document.getElementById("asistente-estado");
  const badgeIdioma = document.getElementById("texto-idioma-actual");

  const contenidoPorIdioma = {
    ES: {
      launcher: "¿Te ayudo?",
      titulo: "Gotita · Asistente AQUAMAP",
      estado: "En línea · Guía de servicios",
      placeholder: "Escribe o usa el micrófono...",
      bienvenida: "¡Hola! Soy Gotita. Puedo orientarte para revisar cortes de agua, reportar una avería o consultar tu recibo. ¿Qué necesitas hoy?",
      sugerencias: [
        { etiqueta: "Cortes de agua", consulta: "Quiero ver los cortes de agua" },
        { etiqueta: "Reportar avería", consulta: "Cómo reporto una fuga o avería" },
        { etiqueta: "Ver mi recibo", consulta: "Consultar recibo y pagos" },
        { etiqueta: "Guía y ahorro", consulta: "Ver videos y guía de ahorro" }
      ],
      respuestas: {
        cortes: {
          texto: "Puedes verificar en tiempo real si hay cortes programados o de emergencia en tu distrito desde el mapa interactivo.",
          accionTexto: "Ir al mapa de cortes",
          accionUrl: "mapa.html"
        },
        averia: {
          texto: "Si detectaste una fuga, rotura de tubería o falta de tapa de buzón, regístralo en nuestro formulario rápido de incidencias.",
          accionTexto: "Reportar avería ahora",
          accionUrl: "Reporte.html"
        },
        recibo: {
          texto: "En la sección de Servicios en línea puedes consultar tu saldo, historial de consumo y acceder al pago digital.",
          accionTexto: "Ir a servicios en línea",
          accionUrl: "#servicios"
        },
        guia: {
          texto: "Contamos con material educativo y recomendaciones prácticas sobre el cuidado del agua potable.",
          accionTexto: "Abrir video y guía",
          accionUrl: "recursos.html"
        },
        contacto: {
          texto: "Si prefieres atención personalizada con un asesor, puedes escribirnos directamente por nuestro canal oficial de WhatsApp.",
          accionTexto: "Ir a contacto WhatsApp",
          accionUrl: "#contacto"
        },
        default: {
          texto: "Entiendo. Puedo ayudarte con cortes de agua cercanos, reporte de averías, consulta de recibos o guías de uso. Selecciona una opción o indícame qué trámite buscas.",
          accionTexto: "Explorar mapa de cortes",
          accionUrl: "mapa.html"
        }
      }
    },
    QUE: {
      launcher: "¿Yanapaykimanchu?",
      titulo: "Gotita · AQUAMAP Yanapaq",
      estado: "Kachkanmi · Yaku yanapay",
      placeholder: "Qillqay utaq rimay...",
      bienvenida: "¡Allillanchu! Gotita kani. Yaku kuchuykunata qhawanaykipaq utaq pakisqa tubokunata willanaykipaq yanapasqayki. ¿Imatataq maskhanki?",
      sugerencias: [
        { etiqueta: "Yaku kuchuy", consulta: "cortes de agua" },
        { etiqueta: "Willay avería", consulta: "reportar avería" },
        { etiqueta: "Recibo qhaway", consulta: "recibo" }
      ],
      respuestas: {
        cortes: {
          texto: "Llaqtaykipi yaku kuchuykunata chiqap pachapi mapapi qhawayta atinki.",
          accionTexto: "Mapaman riy",
          accionUrl: "mapa.html"
        },
        averia: {
          texto: "Yaku sut'uchkaptin utaq tubo pakikuptin, kaypi utqaylla willay.",
          accionTexto: "Avería willay",
          accionUrl: "Reporte.html"
        },
        recibo: {
          texto: "Servicios en línea nisqapi reciboykita qhawayta hinaspa pagayta atinki.",
          accionTexto: "Servicios qhaway",
          accionUrl: "#servicios"
        },
        guia: {
          texto: "Yaku waqaychanapaq videokunata yachachikuykunatawan qhaway.",
          accionTexto: "Guía qhaway",
          accionUrl: "recursos.html"
        },
        contacto: {
          texto: "WhatsApp nisqanta yanapaqwan rimayta atinki.",
          accionTexto: "WhatsAppman riy",
          accionUrl: "#contacto"
        },
        default: {
          texto: "Yaku kuchuykunamanta, avería willaymanta utaq reciboykimanta tapuway.",
          accionTexto: "Mapaman riy",
          accionUrl: "mapa.html"
        }
      }
    },
    AYM: {
      launcher: "¿Yanapt'irismati?",
      titulo: "Gotita · AQUAMAP Yanapiri",
      estado: "Utjkaskiw · Uma yanapt'awi",
      placeholder: "Qillqt'am jan ukax arst'am...",
      bienvenida: "¡Kamisaraki! Gotita satätwa. Uma jark'atanaka uñjañataki jan ukax p'akita tubonaka yatiyañataki yanapt'äma. ¿Kunsa thaqta?",
      sugerencias: [
        { etiqueta: "Uma jark'ata", consulta: "cortes de agua" },
        { etiqueta: "Avería yatiyaña", consulta: "reportar avería" },
        { etiqueta: "Recibo uñjaña", consulta: "recibo" }
      ],
      respuestas: {
        cortes: {
          texto: "Markaman uma jark'atanaka mapan uñjañamawa.",
          accionTexto: "Mapar saraña",
          accionUrl: "mapa.html"
        },
        averia: {
          texto: "Uma wartaskchi jan ukax tubo p'akitachi ukhaxa, akankir formulariompi yatiyam.",
          accionTexto: "Avería yatiyaña",
          accionUrl: "Reporte.html"
        },
        recibo: {
          texto: "Servicios en línea ukan recibom uñjañamawa ukat phuqhañamawa.",
          accionTexto: "Servicios uñjaña",
          accionUrl: "#servicios"
        },
        guia: {
          texto: "Uma suma apnaqañataki videonaka uñjam.",
          accionTexto: "Guía uñjaña",
          accionUrl: "recursos.html"
        },
        contacto: {
          texto: "WhatsApp tuqi yanapirimpi parlt'asma.",
          accionTexto: "WhatsAppar saraña",
          accionUrl: "#contacto"
        },
        default: {
          texto: "Uma jark'atanakata, avería yatiyañata jan ukax recibomata jiskt'ita.",
          accionTexto: "Mapar saraña",
          accionUrl: "mapa.html"
        }
      }
    }
  };

  function obtenerIdiomaActual() {
    const codigo = badgeIdioma ? badgeIdioma.textContent.trim().toUpperCase() : "ES";
    return contenidoPorIdioma[codigo] ? codigo : "ES";
  }

  function agregarMensaje(texto, remitente, accion = null) {
    const burbuja = document.createElement("div");
    burbuja.className = `mensaje-burbuja mensaje-burbuja--${remitente}`;
    burbuja.textContent = texto;

    if (accion && accion.accionUrl) {
      const salto = document.createElement("br");
      const enlace = document.createElement("a");
      enlace.className = "mensaje-accion-link";
      enlace.href = accion.accionUrl;
      enlace.textContent = accion.accionTexto;

      if (accion.accionUrl.startsWith("#")) {
        enlace.addEventListener("click", () => cerrarPanel());
      }

      burbuja.appendChild(salto);
      burbuja.appendChild(enlace);
    }

    contenedorMensajes.appendChild(burbuja);
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
  }

  function renderizarSugerencias(idioma) {
    contenedorSugerencias.innerHTML = "";
    contenidoPorIdioma[idioma].sugerencias.forEach((item) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip-sugerencia";
      chip.textContent = item.etiqueta;
      chip.addEventListener("click", () => procesarConsulta(item.consulta));
      contenedorSugerencias.appendChild(chip);
    });
  }

  function actualizarInterfazIdioma(reiniciarChat = false) {
    const idioma = obtenerIdiomaActual();
    const textos = contenidoPorIdioma[idioma];

    launcherTexto.textContent = textos.launcher;
    tituloAsistente.textContent = textos.titulo;
    estadoAsistente.textContent = textos.estado;
    input.placeholder = textos.placeholder;
    renderizarSugerencias(idioma);

    if (reiniciarChat || contenedorMensajes.children.length === 0) {
      contenedorMensajes.innerHTML = "";
      agregarMensaje(textos.bienvenida, "bot");
    }
  }

  function detectarIntencion(texto) {
    const normalizado = texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (/(corte|sin agua|mapa|zona|distrito|ubicacion|kuchuy|jark)/.test(normalizado)) {
      return "cortes";
    }
    if (/(averia|fuga|tubo|tuberia|rotura|buzon|reportar|falla|willay|yatiya)/.test(normalizado)) {
      return "averia";
    }
    if (/(recibo|pago|pagar|saldo|consumo|factura)/.test(normalizado)) {
      return "recibo";
    }
    if (/(guia|video|ahorro|recurso|consejo|cuidar)/.test(normalizado)) {
      return "guia";
    }
    if (/(whatsapp|asesor|telefono|contacto|ayuda humana|numero)/.test(normalizado)) {
      return "contacto";
    }
    return "default";
  }

  function procesarConsulta(textoUsuario) {
    const limpio = textoUsuario.trim();
    if (!limpio) return;

    agregarMensaje(limpio, "usuario");
    const idioma = obtenerIdiomaActual();
    const intencion = detectarIntencion(limpio);
    const respuesta = contenidoPorIdioma[idioma].respuestas[intencion];

    setTimeout(() => {
      agregarMensaje(respuesta.texto, "bot", respuesta);
    }, 280);
  }

  function abrirPanel() {
    panel.hidden = false;
    btnAbrir.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function cerrarPanel() {
    panel.hidden = true;
    btnAbrir.setAttribute("aria-expanded", "false");
    btnAbrir.focus();
  }

  btnAbrir.addEventListener("click", () => {
    if (panel.hidden) {
      abrirPanel();
    } else {
      cerrarPanel();
    }
  });

  btnCerrar.addEventListener("click", cerrarPanel);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      cerrarPanel();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    procesarConsulta(input.value);
    input.value = "";
  });

  // Reconocimiento de voz (Web Speech API) con degradación elegante
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition && btnVoz) {
    const reconocimiento = new SpeechRecognition();
    reconocimiento.interimResults = false;
    reconocimiento.maxAlternatives = 1;

    btnVoz.addEventListener("click", () => {
      reconocimiento.lang = "es-PE";
      btnVoz.classList.add("grabando");
      reconocimiento.start();
    });

    reconocimiento.addEventListener("result", (evento) => {
      const transcripcion = evento.results[0][0].transcript;
      input.value = transcripcion;
      procesarConsulta(transcripcion);
      input.value = "";
    });

    reconocimiento.addEventListener("end", () => {
      btnVoz.classList.remove("grabando");
    });

    reconocimiento.addEventListener("error", () => {
      btnVoz.classList.remove("grabando");
    });
  } else if (btnVoz) {
    btnVoz.hidden = true;
  }

  // Sincronización automática cuando cambia el idioma en #texto-idioma-actual
  if (badgeIdioma) {
    const observador = new MutationObserver(() => actualizarInterfazIdioma(true));
    observador.observe(badgeIdioma, { childList: true, characterData: true, subtree: true });
  }

  actualizarInterfazIdioma(true);
});