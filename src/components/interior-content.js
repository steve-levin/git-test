export function interiorSplit({ headline, paragraphs, imageSrc, imageAlt }) {
  const body = paragraphs.map((p) => `<p>${p}</p>`).join('')

  return `
    <div class="page-content--split">
      <section class="page-content__body">
        <h2 class="page-content__headline">${headline}</h2>
        ${body}
      </section>
      <figure class="page-content__media">
        <img src="${imageSrc}" alt="${imageAlt}">
      </figure>
    </div>
  `
}
