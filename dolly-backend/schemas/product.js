export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "array",
        of: [{ type: "image" }],
        options: {
          hotspot: true,
        },
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 90,
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "category",
        title: "Categories",
        type: "string",
        options: {
          list: [ 
            { title: 'Mosaîques', value: 'mosaîque'},
            { title: 'Peintures', value: 'peinture'}
          ]
        }
      },
      {
        name: "details",
        title: "Details",
        type: "string",
      },
      {
        name: "sold",
        title: "Sold",
        type: "boolean",
      },
    ],
  };
  