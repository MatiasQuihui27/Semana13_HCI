const traducciones = {
  es: {
    nav_follow: "Síguenos",
    nav_portal: "Portal de Transparencia",
    nav_servicios: "Servicios",
    nav_ver_mapa: "Ver Mapa",
    nav_ver_wa: "Ver WhatsApp",
    nav_video: "Video y guía",
    hero_tag: "Servicio digital",
    hero_title: "Tu mapa del agua,<br>siempre a la mano.",
    hero_desc: "Consulta zonas sin agua en tiempo real.",
    btn_mapa: "Consultar mapa",
    btn_servicios: "Ver guía",
    hero_fig: "Agua segura para todos.",
    cortes_tag: "Cortes cercanos",
    cortes_title: "Cortes de agua en tu zona",
    cortes_badge: "Mapa activo",
    ubicacion_title: "Comparte tu ubicación",
    ubicacion_desc: "Activa tu ubicación para ver los cortes más cercanos.",
    btn_ubicacion: "Compartir ubicación",
    btn_manual: "Buscar manualmente",
    serv_tag: "Servicios",
    serv_title: "Gestiona tu servicio",
    card_1_title: "Consulta tu recibo", card_1_desc: "Saldo y consumo.",
    card_2_title: "Pago en línea", card_2_desc: "Rápido y seguro.",
    card_3_title: "Reporta una avería", card_3_desc: "Informa una falla.",
    card_4_title: "Cortes de agua", card_4_desc: "Revisa tu zona.",
    contacto_title: "¿Necesitas ayuda?",
    contacto_desc: "Escríbenos por WhatsApp.",
    btn_contacto: "Escribir por WhatsApp",
    footer_title: "AQUAMAP",
    footer_desc: "Tu mapa del agua",
    footer_contact: "Contacto: hola@ejemplo.org",
    footer_copy: "© 2026 AQUAMAP · ",
    footer_credits: "Créditos"
  },
  qu: {
    nav_follow: "Qatiwayku",
    nav_portal: "Sut'i Portal",
    nav_servicios: "Llamkaykuna",
    nav_ver_mapa: "Mapata qhaway",
    nav_ver_wa: "WhatsApp qhaway",
    nav_video: "Video yachachiq",
    hero_tag: "Antañiqiq llamkay",
    hero_title: "Yaku mapayki,<br>sapa kuti makiykipi.",
    hero_desc: "Yaku mana kaq kitikunata kunanpacha qhaway.",
    btn_mapa: "Mapata qhaway",
    btn_servicios: "Yachachiy qhaway",
    hero_fig: "Allin yaku llapanchikpaq.",
    cortes_tag: "Sispa kuchusqakuna",
    cortes_title: "Llaqtaykipi yaku kuchusqa",
    cortes_badge: "Kawsachkaq mapa",
    ubicacion_title: "Maypi kasqaykita willay",
    ubicacion_desc: "Sispa kuchusqakunata qhawanaykipaq kachariy.",
    btn_ubicacion: "Maypi kasqayta willay",
    btn_manual: "Kikiyki maskay",
    serv_tag: "Llamkaykuna",
    serv_title: "Yakuykita allichay",
    card_1_title: "Qillqaykita qhaway", card_1_desc: "Qullqi hinallataq yaku.",
    card_2_title: "Internetpi pagay", card_2_desc: "Utqaylla pagay.",
    card_3_title: "Pakisqata willay", card_3_desc: "Sasachakuyta willay.",
    card_4_title: "Yaku kuchusqa", card_4_desc: "Llaqtaykita qhaway.",
    contacto_title: "¿Yanapayta munankichu?",
    contacto_desc: "WhatsApp nisqapi qillqamuy.",
    btn_contacto: "WhatsApp nisqapi qillqay",
    footer_title: "AQUAMAP",
    footer_desc: "Yaku mapayki",
    footer_contact: "Rimay: hola@ejemplo.org",
    footer_copy: "© 2026 AQUAMAP · ",
    footer_credits: "Yanapaqkuna"
  },
  ay: {
    nav_follow: "Arkatawayapxita",
    nav_portal: "Qhan Portal",
    nav_servicios: "Lurañanaka",
    nav_ver_mapa: "Mapa uñjaña",
    nav_ver_wa: "WhatsApp uñjaña",
    nav_video: "Video irpari",
    hero_tag: "Digital luraña",
    hero_title: "Uma mapama,<br>sapa kuti amparamana.",
    hero_desc: "Jan uma utjki uka chiqanaka jichhapach uñjam.",
    btn_mapa: "Mapa uñjaña",
    btn_servicios: "Irpari uñjaña",
    hero_fig: "Taqinipatak suma uma.",
    cortes_tag: "Jak'a khuchhutanaka",
    cortes_title: "Chiqaman uma khuchhuta",
    cortes_badge: "Irnaqir mapa",
    ubicacion_title: "Kawkinktati yatiyam",
    ubicacion_desc: "Jak'a khuchhutanaka uñjañatak yatiyam.",
    btn_ubicacion: "Kawkinktati yatiyam",
    btn_manual: "Jumak thaqham",
    serv_tag: "Lurañanaka",
    serv_title: "Uma lurañama wakicham",
    card_1_title: "Qillqama uñjam", card_1_desc: "Qullqima uñjam.",
    card_2_title: "Internet phuqhaña", card_2_desc: "Jank'aki phuqham.",
    card_3_title: "Phuqhata yatiyam", card_3_desc: "Jan walt'awi yatiyam.",
    card_4_title: "Uma khuchhuta", card_4_desc: "Chiqama uñjam.",
    contacto_title: "¿Yanapt'a munatati?",
    contacto_desc: "WhatsApp ukank qillqanipxita.",
    btn_contacto: "WhatsApp ukank qillqaña",
    footer_title: "AQUAMAP",
    footer_desc: "Uma mapama",
    footer_contact: "Yatiyawi: hola@ejemplo.org",
    footer_copy: "© 2026 AQUAMAP · ",
    footer_credits: "Yanapt'irinaka"
  }
};

function cambiarIdioma(codigoIdioma, nombreIdioma) {
  if (!traducciones[codigoIdioma]) return;
  
  // Cambiar texto del botón principal
  document.getElementById('texto-idioma-actual').textContent = nombreIdioma;
  
  // Cerrar el menú desplegable (remueve el atributo 'open' de la etiqueta <details>)
  document.getElementById('menu-idiomas').removeAttribute('open');

  // Reemplazar textos
  const elementos = document.querySelectorAll('[data-i18n]');
  elementos.forEach(el => {
    const clave = el.getAttribute('data-i18n');
    if (traducciones[codigoIdioma][clave]) {
      el.innerHTML = traducciones[codigoIdioma][clave];
    }
  });
}
