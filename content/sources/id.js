const params = [
  {
    name: "_id",
    displayName: "ID de la nota",
    type: "text",
  },
  {
    name: "published",
    displayName: "Publicada (por defecto: true)",
    type: "text",
  },
];

const resolve = (key) => {
  console.log("key", key);
  const website = key?.["arc-site"] || "Arc Site no está definido";
  return `/content/v4/stories?_id=${id}&website=${website}&published=${
    published || "true"
  }`;
};
const transform = (data) => {
  console.log("data", data);
  return data;
};

export default {
  resolve,
  transform,
  params,
};
