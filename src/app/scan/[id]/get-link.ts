"use server";

export async function getLink(id: string) {
  let link = null;
  try {
    if (id === "igreja-viva-banners-igreja") {
      link = `https://www.igrejavivaemcelulas.com.br/igreja`;
      //link = `https://linktr.ee/igreja.viva`;
    }

    if (id === "igreja-viva-banners-viva") {
      link = `https://www.igrejavivaemcelulas.com.br/quadra-viva`;
      //link = `https://linktr.ee/igreja.viva`;
    }

    if (id === "igreja-viva-banners-celula") {
      link = `https://www.igrejavivaemcelulas.com.br/celulas`;
      //link = `https://linktr.ee/igreja.viva`;
    }
    if (id === "igreja-viva-campanha-caixa-dogao") {
      link = `https://www.igrejavivaemcelulas.com.br/dogao-do-pastor`;
      //link = `https://linktr.ee/igreja.viva`;
    }
   
    return link;
  } catch (error) {
    return link;
  }
}
