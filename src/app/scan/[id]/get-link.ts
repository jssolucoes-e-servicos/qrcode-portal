"use server";

export async function getLink(id: string) {
  let link = null;
  try {
    if (id === "igreja-viva-banners-igreja") {
      //link = `https://recepcao.igrejavivaemcelulas.com.br/pages/a-igreja`;
      link = `https://linktr.ee/igreja.viva`;
    }

    if (id === "igreja-viva-banners-viva") {
      //link = `https://recepcao.igrejavivaemcelulas.com.br/pages/social`;
      link = `https://linktr.ee/igreja.viva`;
    }

    if (id === "igreja-viva-banners-celula") {
      //link = `https://recepcao.igrejavivaemcelulas.com.br/pages/celulas`;
      link = `https://linktr.ee/igreja.viva`;
    }
    if (id === "igreja-viva-campanha-caixa-dogao") {
      //link = `https://recepcao.igrejavivaemcelulas.com.br/pages/celulas`;
      link = `https://linktr.ee/igreja.viva`;
    }
    return link;
  } catch (error) {
    return link;
  }
}
